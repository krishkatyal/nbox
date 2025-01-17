"""
This file loads first and is responsible for setting up all the global networking items.

..

  Build systems are an extremely important detail of any software project. When they work,
  they can feel like magic: you execute a command, and after a series of potentially
  complicated steps, a working binary (or other artifact) is produced! When they don't work,
  they can feel like confusing, non-transparent roadblocks that you wish didn't exist. This
  is typical for any powerful tool: magic or a headache depending on the day and the task.
"""

import grpc
import json
import requests
try:
  from packaging.version import parse
except ImportError:
  from pip._vendor.packaging.version import parse


from nbox.auth import secret, ConfigString
from nbox.utils import logger, env
from nbox.subway import Sub30
from nbox.hyperloop.nbox_ws_pb2_grpc import WSJobServiceStub
from nbox.version import __version__


def get_stub() -> WSJobServiceStub:
  """Create a gRPC stub with the NBX Webserver, this will initialise ``nbox_grpc_stub``
  object which is globally accesible as ``nbox.nbox_grpc_stub``. If you find yourself
  using this function, you might want to reconsider your design."""
  token_cred = grpc.access_token_call_credentials(secret.get("access_token"))
  ssl_creds = grpc.ssl_channel_credentials()
  creds = grpc.composite_channel_credentials(ssl_creds, token_cred)
  channel = grpc.secure_channel(secret.get("nbx_url").replace("https://", "dns:/")+":443", creds)
  stub = WSJobServiceStub(channel)
  future = grpc.channel_ready_future(channel)
  future.add_done_callback(lambda _: logger.debug(f"NBX gRPC server is ready"))
  logger.debug(f"Connected using stub: {stub.__class__.__name__}")
  return stub

def create_webserver_subway(version: str = "v1", session: requests.Session = None) -> Sub30:
  """Create a Subway object for the NBX Webserver. This is a wrapper around the
  OpenAPI spec plublished by NBX Webserver. It loads the JSON object in ``Sub30``
  which allows accesing REST APIs with python "." (dot) notation. If you find yourself
  using this function, you might want to reconsider your design.

  Returns:
    Sub30: A Subway object for the NBX Webserver.
  """
  _version_specific_url = secret.get("nbx_url") + f"/api/{version}"
  session = session if session != None else nbox_session # select correct session
  r = session.get(_version_specific_url + "/openapi.json")
  try:
    r.raise_for_status()
  except Exception as e:
    logger.error(f"Could not connect to webserver at {secret.get('nbx_url')}")
    logger.error(e)
    return None
  out = Sub30(_version_specific_url, r.json(), session)
  logger.debug(f"Connected to webserver at {out}")
  return out


# common networking items that will be used everywhere
if env.NBOX_NO_LOAD_GRPC():
  nbox_grpc_stub = None
else:
  nbox_grpc_stub: WSJobServiceStub  = get_stub()

if env.NBOX_NO_LOAD_WS():
  nbox_session = None
  nbox_ws_v1 = None
else:
  nbox_session = requests.Session()
  nbox_session.headers.update({"Authorization": f"Bearer {secret.get('access_token')}"})
  nbox_ws_v1: Sub30 = create_webserver_subway(version = "v1", session = nbox_session)


def nbox_version_update():
  # https://stackoverflow.com/questions/28774852/pypi-api-how-to-get-stable-package-version
  def get_version(package):
    """Return version of package on pypi.python.org using json."""
    URL_PATTERN = 'https://pypi.python.org/pypi/{package}/json'
    req = requests.get(URL_PATTERN.format(package=package))
    version = parse('0')
    if req.status_code == requests.codes.ok:
        j = json.loads(req.text.encode(req.encoding))
        releases = j.get('releases', [])
        for release in releases:
            ver = parse(release)
            if not ver.is_prerelease:
                version = max(version, ver)
    return version

  latest_version = get_version("nbox")
  if latest_version > parse(__version__):
    logger.warning(
      f"Your version of nbox ({__version__}) is outdated. Some functionalities might not work.\n"
      f"Fix: Please update to {latest_version} using pip3 install nbox --upgrade\n"
      f"Fix: Update all the relevant requirements.txt files with nbox[serving]=={latest_version}"
    )

if not env.NBOX_NO_CHECK_VERSION():
  nbox_version_update()

logger.info(f"Current workspace id: {secret.get(ConfigString.workspace_id)} ({secret.get(ConfigString.workspace_name)})")
