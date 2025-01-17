# If you have come till here, and you want to work on more things like this, reach out:
# research@nimblebox.ai

import os
import threading
from time import sleep
from json import dumps

import nbox.utils as U
from nbox.utils import logger, SimplerTimes
from nbox.init import nbox_grpc_stub
from nbox.auth import secret
from nbox.hyperloop.job_pb2 import Job as JobProto
from nbox.hyperloop.dag_pb2 import Node
from nbox.hyperloop.nbox_ws_pb2 import UpdateRunRequest
from nbox.messages import rpc, read_file_to_binary, read_file_to_string, message_to_dict

class Tracer:
  def __init__(self, local: bool = False, start_heartbeat: bool = True, heartbeat_every: int = 60):
    self.heartbeat_every = heartbeat_every
    
    # create the kwargs that are used throughout
    self.job_proto = None
    self.run_id = None
    self.job_id = None
    self.workspace_id = None
    self.network_tracer = False
    self.trace_file = None

    # from the data available in the init folder, get the job proto
    if local:
      pass
    else:
      run_data = secret.get("run") # user should never have "run" on their local
      if run_data is not None:
        self.init(run_data, start_heartbeat)

  @classmethod
  def local(cls, job_proto: JobProto, run_id):
    tracer = Tracer(local = True)
    tracer.job_proto = job_proto
    tracer.run_id = run_id
    tracer.job_id = job_proto.id
    tracer.workspace_id = job_proto.auth_info.workspace_id
    tracer.local_init()
    return tracer

  def local_init(self):
    folder = U.join(f"{U.env.NBOX_HOME_DIR()}", "traces")
    os.makedirs(folder, exist_ok = True)
    file = U.join(folder, f"{self.run_id}.jsonl")

    logger.debug(f"Username: {self.job_proto.auth_info.username}")
    logger.debug(f"Job Id: {self.job_proto.id}")
    logger.debug(f"Run Id: {self.run_id}")
    logger.debug(f"Workspace Id: {self.job_proto.auth_info.workspace_id}")
    self.trace_file = open(file, "a")

  def init(self, run_data, start_heartbeat):
    init_folder = U.env.NBOX_JOB_FOLDER(None)
    if init_folder == None:
      raise RuntimeError("NBOX_JOB_FOLDER not set")
    if not os.path.exists(init_folder):
      raise RuntimeError(f"NBOX_JOB_FOLDER {init_folder} does not exist")

    # grandfather old messages (<v0.9.14rc13)
    fp_bin = U.join(init_folder, "job_proto.msg")
    fp_str = U.join(init_folder, "job_proto.pbtxt")
    if os.path.exists(fp_bin):
      self.job_proto: JobProto = read_file_to_binary(fp_bin, JobProto())
    elif os.path.exists(fp_str):
      self.job_proto: JobProto = read_file_to_string(fp_str, JobProto())
    else:
      raise RuntimeError("Could not find job_proto.msg or job_proto.pbtxt")

    # get this data from the local secrets file
    self.job_id = run_data.get("job_id", None)
    self.run_id = run_data.get("token", None)
    self.job_proto.id = self.job_id # because when creating a new job, client does not know the ID
    self.workspace_id = self.job_proto.auth_info.workspace_id
    self.network_tracer = True
    
    logger.debug(f"Username: {self.job_proto.auth_info.username}")
    logger.debug(f"Job Id: {self.job_proto.id}")
    logger.debug(f"Run Id: {self.run_id}")
    logger.debug(f"Workspace Id: {self.job_proto.auth_info.workspace_id}")
    self.job_proto.status = JobProto.Status.ACTIVE # automatically first run will

    # start heartbeat in a different thread
    if start_heartbeat:
      self.thread = threading.Thread(target=self.hearbeat_thread_worker)
      self.thread.start()

  @property
  def active(self):
    return hasattr(self, "job_proto")

  def __repr__(self) -> str:
    return f"Tracer() for job {self.job_id}"

  def __call__(self, node: Node, verbose: bool = False):
    if self.network_tracer:
      self.job_proto.dag.flowchart.nodes[node.id].CopyFrom(node) # even if fails we can keep caching this
      updated_at = node.run_status.start if node.run_status.end != None else node.run_status.end
      if verbose:
        logger.info(f"[NodeID: {node.id}] UpdateTime: {updated_at.ToDatetime()}")
      rpc(
        nbox_grpc_stub.UpdateRun,
        UpdateRunRequest(token = self.run_id, job = self.job_proto, updated_at = updated_at),
        f"Could not update job {self.job_proto.id}",
        raise_on_error = False
      )
    else:
      self.trace_file.write(dumps(message_to_dict(node)) + "\n")    

  def hearbeat_thread_worker(self):
    while True:
      rpc(
        nbox_grpc_stub.UpdateRun,
        UpdateRunRequest(token = self.run_id, job = self.job_proto, updated_at = SimplerTimes.get_now_pb()),
        "Heartbeat failed",
        raise_on_error = False
      )
      sleep(self.heartbeat_every)

  def stop(self):
    if not self.network_tracer:
      return
    self.thread.join()
