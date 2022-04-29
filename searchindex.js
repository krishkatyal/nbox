Search.setIndex({docnames:["index","nbox.auth","nbox.cli","nbox.framework","nbox.framework.ml","nbox.framework.on_ml","nbox.framework.on_operators","nbox.init","nbox.instance","nbox.jobs","nbox.load","nbox.messages","nbox.model","nbox.nbxlib.ops","nbox.network","nbox.operator","nbox.sub_utils.ssh","nbox.subway","nbox.utils","quick.0","quick.deploy"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","nbox.auth.rst","nbox.cli.rst","nbox.framework.rst","nbox.framework.ml.rst","nbox.framework.on_ml.rst","nbox.framework.on_operators.rst","nbox.init.rst","nbox.instance.rst","nbox.jobs.rst","nbox.load.rst","nbox.messages.rst","nbox.model.rst","nbox.nbxlib.ops.rst","nbox.network.rst","nbox.operator.rst","nbox.sub_utils.ssh.rst","nbox.subway.rst","nbox.utils.rst","quick.0.rst","quick.deploy.rst"],objects:{"nbox.auth":[[1,1,1,"","AWSClient"],[1,1,1,"","AzureClient"],[1,1,1,"","DOClient"],[1,1,1,"","GCPClient"],[1,1,1,"","NBXClient"],[1,1,1,"","OCIClient"],[1,3,1,"","init_secret"]],"nbox.auth.AWSClient":[[1,2,1,"","get_client"]],"nbox.auth.AzureClient":[[1,2,1,"","get_client"]],"nbox.auth.DOClient":[[1,2,1,"","get_client"]],"nbox.auth.GCPClient":[[1,2,1,"","get_client"]],"nbox.auth.NBXClient":[[1,2,1,"","create_secret_file"],[1,2,1,"","get"],[1,2,1,"","get_access_token"]],"nbox.auth.OCIClient":[[1,2,1,"","get_client"]],"nbox.cli":[[2,3,1,"","get"],[2,3,1,"","open_home"]],"nbox.framework":[[3,3,1,"","get_model_functions"],[4,0,0,"-","ml"],[5,0,0,"-","on_ml"],[6,0,0,"-","on_operators"]],"nbox.framework.ml":[[4,1,1,"","Framework_torch"],[4,1,1,"","TorchToOnnx"],[4,1,1,"","TorchToTorchscript"],[4,1,1,"","TorchscriptToTorch"]],"nbox.framework.ml.Framework_torch":[[4,2,1,"","torch_to_onnx"],[4,2,1,"","torch_to_torchscript"],[4,2,1,"","torchscript_to_torch"]],"nbox.framework.on_ml":[[5,4,1,"","InvalidProtocolError"],[5,1,1,"","NboxOptions"],[5,3,1,"","torch_condition"],[5,3,1,"","torch_export_onnx"],[5,3,1,"","torch_export_torchscript"],[5,3,1,"","torch_import_torchscript"]],"nbox.framework.on_operators":[[6,1,1,"","AirflowMixin"],[6,1,1,"","LuigiMixin"],[6,1,1,"","PrefectMixin"]],"nbox.framework.on_operators.AirflowMixin":[[6,2,1,"","from_airflow_dag"],[6,2,1,"","from_airflow_operator"],[6,2,1,"","to_airflow_dag"],[6,2,1,"","to_airflow_operator"]],"nbox.framework.on_operators.LuigiMixin":[[6,2,1,"","from_luigi_flow"],[6,2,1,"","from_luigi_task"],[6,2,1,"","to_luigi_flow"],[6,2,1,"","to_luigi_task"]],"nbox.framework.on_operators.PrefectMixin":[[6,2,1,"","from_prefect_flow"],[6,2,1,"","from_prefect_task"],[6,2,1,"","to_prefect_flow"],[6,2,1,"","to_prefect_task"]],"nbox.init":[[7,3,1,"","create_webserver_subway"],[7,3,1,"","get_stub"]],"nbox.instance":[[8,1,1,"","Instance"],[8,3,1,"","print_status"]],"nbox.instance.Instance":[[8,2,1,"","delete"],[8,5,1,"","mv"],[8,2,1,"","refresh"],[8,2,1,"","run_py"],[8,2,1,"","start"],[8,2,1,"","status"],[8,2,1,"","stop"],[8,5,1,"","useful_keys"]],"nbox.jobs":[[9,1,1,"","Job"],[9,3,1,"","get_job_list"],[9,3,1,"","new"]],"nbox.jobs.Job":[[9,2,1,"","change_schedule"],[9,2,1,"","delete"],[9,2,1,"","logs"],[9,2,1,"","new"],[9,2,1,"","pause"],[9,2,1,"","refresh"],[9,2,1,"","resume"],[9,2,1,"","status"],[9,2,1,"","trigger"]],"nbox.load":[[10,3,1,"","load"],[10,3,1,"","remove_kwargs"]],"nbox.messages":[[11,3,1,"","dict_to_message"],[11,3,1,"","message_to_dict"],[11,3,1,"","message_to_json"],[11,3,1,"","rpc"],[11,3,1,"","streaming_rpc"]],"nbox.model":[[12,1,1,"","Model"]],"nbox.model.Model":[[12,2,1,"","deploy"],[12,2,1,"","deserialise"],[12,2,1,"","train_on_instance"],[12,2,1,"","train_on_job"]],"nbox.nbxlib":[[13,0,0,"-","ops"]],"nbox.nbxlib.ops":[[13,1,1,"","GitClone"],[13,1,1,"","NboxInstanceStartOperator"],[13,1,1,"","NboxModelDeployOperator"],[13,1,1,"","NboxWaitTillJIDComplete"],[13,1,1,"","Notify"],[13,1,1,"","Python"],[13,1,1,"","Sequential"],[13,1,1,"","ShellCommand"]],"nbox.nbxlib.ops.GitClone":[[13,2,1,"","forward"]],"nbox.nbxlib.ops.NboxInstanceStartOperator":[[13,2,1,"","forward"]],"nbox.nbxlib.ops.NboxModelDeployOperator":[[13,2,1,"","forward"]],"nbox.nbxlib.ops.NboxWaitTillJIDComplete":[[13,2,1,"","forward"]],"nbox.nbxlib.ops.Notify":[[13,2,1,"","forward"]],"nbox.nbxlib.ops.Python":[[13,2,1,"","forward"]],"nbox.nbxlib.ops.Sequential":[[13,2,1,"","forward"]],"nbox.nbxlib.ops.ShellCommand":[[13,2,1,"","forward"]],"nbox.network":[[14,4,1,"","NBXAPIError"],[14,1,1,"","Schedule"],[14,3,1,"","deploy_job"],[14,3,1,"","deploy_serving"]],"nbox.network.Schedule":[[14,6,1,"","cron"],[14,2,1,"","get_dict"],[14,2,1,"","get_message"]],"nbox.operator":[[15,1,1,"","Operator"]],"nbox.operator.Operator":[[15,6,1,"","children"],[15,2,1,"","deploy"],[15,2,1,"","forward"],[15,2,1,"","from_airflow_dag"],[15,2,1,"","from_airflow_operator"],[15,2,1,"","from_luigi_flow"],[15,2,1,"","from_luigi_task"],[15,2,1,"","from_prefect_flow"],[15,2,1,"","from_prefect_task"],[15,6,1,"","inputs"],[15,2,1,"","named_operators"],[15,5,1,"","node"],[15,2,1,"","operators"],[15,2,1,"","propagate"],[15,5,1,"","source_edges"],[15,2,1,"","thaw"],[15,2,1,"","to_airflow_dag"],[15,2,1,"","to_airflow_operator"],[15,2,1,"","to_luigi_flow"],[15,2,1,"","to_luigi_task"],[15,2,1,"","to_prefect_flow"],[15,2,1,"","to_prefect_task"]],"nbox.sub_utils":[[16,0,0,"-","ssh"]],"nbox.sub_utils.ssh":[[16,1,1,"","FileLogger"],[16,1,1,"","RSockClient"],[16,3,1,"","create_connection"],[16,3,1,"","port_in_use"],[16,3,1,"","tunnel"]],"nbox.sub_utils.ssh.FileLogger":[[16,2,1,"","log"]],"nbox.sub_utils.ssh.RSockClient":[[16,2,1,"","authenticate"],[16,2,1,"","connect"],[16,2,1,"","connect_to_rsock_server"],[16,2,1,"","io_copy"],[16,2,1,"","set_config"]],"nbox.subway":[[17,1,1,"","NboxModelSubway"],[17,1,1,"","SpecSubway"],[17,1,1,"","Sub30"],[17,1,1,"","Subway"],[17,3,1,"","filter_templates"]],"nbox.subway.NboxModelSubway":[[17,2,1,"","pattern"]],"nbox.subway.SpecSubway":[[17,2,1,"","from_openapi"]],"nbox.subway.Sub30":[[17,2,1,"","u"]],"nbox.utils":[[18,1,1,"","DBase"],[18,1,1,"","Fn"],[18,1,1,"","PoolBranch"],[18,3,1,"","convert_to_list"],[18,3,1,"","fetch"],[18,3,1,"","folder"],[18,3,1,"","from_pickle"],[18,3,1,"","get_files_in_folder"],[18,3,1,"","get_image"],[18,3,1,"","get_logger"],[18,3,1,"","get_random_name"],[18,3,1,"","hash_"],[18,3,1,"","isthere"],[18,3,1,"","join"],[18,3,1,"","to_pickle"]],"nbox.utils.DBase":[[18,2,1,"","get"],[18,2,1,"","get_dict"]],nbox:[[1,0,0,"-","auth"],[2,0,0,"-","cli"],[3,0,0,"-","framework"],[7,0,0,"-","init"],[8,0,0,"-","instance"],[9,0,0,"-","jobs"],[10,0,0,"-","load"],[11,0,0,"-","messages"],[12,0,0,"-","model"],[14,0,0,"-","network"],[15,0,0,"-","operator"],[17,0,0,"-","subway"],[18,0,0,"-","utils"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","exception","Python exception"],"5":["py","attribute","Python attribute"],"6":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:exception","5":"py:attribute","6":"py:property"},terms:{"0":[0,4,8,14,17,18,20],"019635":4,"03":4,"05":4,"1":[0,4,8,12,14,15,16,18],"10":18,"12":4,"15":4,"1647858175":0,"1e":4,"2":[4,6,8,14,15,16,18],"20":14,"2000":16,"2001":16,"2022":4,"21t07":4,"244":20,"2892":0,"3":[4,14,18],"4":[4,8,14,18],"5":[4,13,20],"50":18,"5000":16,"52":4,"6":8,"69":14,"7":[4,14],"8":[4,8,9],"8000":[0,16],"8001":16,"8002":16,"886":16,"8888":16,"9":4,"99mhf3h":0,"\u0924":18,"\u0938\u0938":18,"abstract":[5,12,15],"break":[8,12,15],"case":[0,1,4],"catch":17,"char":14,"class":[1,4,5,6,8,9,12,13,14,15,16,17,18],"default":[1,4,8,9,12,16,18,20],"do":[3,4,17,20],"enum":4,"export":[3,4,12],"final":4,"float":4,"function":[0,3,4,5,7,8,10,11,12,13,14,15,16,17,18],"import":[3,4,7,12,15,18,20],"int":[4,8,14,15,16,18],"long":4,"new":[2,9,12,16],"null":0,"return":[4,7,10,12,14,15,18,20],"static":[1,3,8,9,12,15,17],"super":[4,5,15,18,20],"true":[4,9,10,11,12,14,15,17,18,20],"try":[3,4,5,16,17],"while":[4,12,13,17],A:[4,7,16,17],At:17,But:[4,14,15],By:4,For:[0,1,4,16,20],INTO:12,If:[0,3,4,7,8,9,12,14,15,16,18,20],In:[0,4],It:[5,7,12,15,16,18],NOT:4,No:8,OF:4,On:[6,16],One:14,Or:[0,4,18],That:3,The:[0,3,4,5,6,9,16,17,18],Then:3,There:[18,20],These:[3,8,15,17],To:[0,4],WITH:4,Will:4,__call__:[0,2,12],__file__:18,__init__:[4,15],__main__:18,__name__:18,_api:17,_description_:1,_extra_fil:4,_force_outplac:4,_io:[8,9],_module_class:4,_nbox_opt:4,_pb2:3,_post:12,_pre:12,_session:17,_spec:17,_specsubway__nam:17,_unit_test:12,_unittest:[12,15],_url:17,abl:[5,6],about:[17,18,20],acces:7,access:[0,4],access_token:1,accord:3,accur:18,across:[3,4,18],act:[14,15],activ:[9,20],actual:[4,5],ad:[0,4,15,17],adapt:3,add:[0,12],add_fifti:18,add_on:18,add_ten:18,add_zero:18,addit:4,after:7,again:0,against:4,agnost:0,ai:[0,4,14,15],airflow:[3,19],airflowmixin:6,alia:0,all:[0,3,4,5,7,9,12,13,15,18],all_fn:18,allow:[4,7,17],along:[0,5],alreadi:[0,8,12,20],also:[1,4],altern:4,alwai:[0,4,17],am:[5,12,17],an:[0,1,4,7,8,9,12,13,14,15,17,18,20],analysi:15,ani:[0,1,2,4,5,7,8,12,15,17,18,20],anoth:[5,18],answer:5,anyth:[9,10,18],aout:0,apart:6,api:[2,7,8,9,14,17,20],api_end:2,app:20,app_nam:16,appli:[4,10,12,18],applic:16,appropri:4,apps_to_port:16,ar:[0,1,3,4,6,7,8,12,13,14,15,17,18],arbitrari:[12,15],arg:[4,6,8,12,13,15,18],argument:[3,4,10,12,18],ari:4,around:[6,7],artifact:7,asia:8,asset:20,assign:4,assum:4,assumpt:5,async:14,aten:4,atleast:18,attempt:6,attr:17,attribut:12,auth:[1,16],auth_token:16,authent:[0,16],auto:[0,3],auto_backup:0,auto_shutdown:8,auto_shutdown_tim:0,autocomplet:4,autogen:[0,3],autogener:4,automat:4,autoshutdown:[0,8],avail:20,avoid:17,awai:[5,15],awsclient:1,ax:4,axi:4,azure_config_kwarg:1,azurecli:1,b:[9,15],back:[4,16],backend:[4,14],bad:6,bar:20,base:[1,4,5,6,8,9,12,13,14,15,16,17,18],baselin:12,bashrc:0,basic:5,becam:3,becaus:[4,15,17,18],becom:[4,17],been:4,befor:12,behav:4,behavior:4,behind:0,being:[4,6,20],below:20,best:[4,5,6],better:[4,6,15],between:[0,4,14,16],binari:[4,7],bite:18,blindli:17,blob:1,block:[2,12,13,14,15,18],bond:0,bool:[4,8,9,10,11,12,14,15,16,18],both:[8,12,15],boto_config_kwarg:1,bottleneck:20,brain:18,branch:[13,18],breakdown:0,bring:[1,20],broken:6,bruce:0,buffer:4,bug:0,build:[0,2,6,7,12,16],build_caffe2:4,built:[0,1,4,12,17],buld:15,busi:12,byoc:1,cach:18,cache_dir:15,caffe2:4,call:[0,1,3,4,11,12,14,15,16,17,18],callabl:[4,10,11,12],can:[0,3,4,5,7,8,9,10,12,15,16,17,18,20],capture_output:13,carefulli:4,cat:20,caus:4,certain:[4,13,18],certainli:15,chang:8,change_schedul:[2,9],cheap:18,check:[4,10,18,20],check_input:4,check_toler:4,check_trac:4,checker:4,checkererror:4,child:15,children:[15,18],choic:4,chose:12,chosen:4,classmethod:[6,12,15,17],cli:[8,12,19],click:14,client:[1,16],client_port:16,client_socket:16,clone:13,clone_access:0,close:16,closet:3,cloud:[1,8],code:[0,1,2,3,4,5,6,12,13,15,17,18],codebas:18,com:20,combin:[0,12,15,17],come:[15,20],command:[0,2,7,13,20],common:4,comparison:4,compil:[2,3,4,5],complement:4,complet:[0,8,13,20],complex:[3,17],complic:[7,18],comput:[4,8,17],concern:20,concurr:18,conda:20,condit:[4,18],config:16,configur:12,confus:7,connect:[1,8,16],connect_to_rsock_serv:16,connection_id:16,constant:4,construct:4,consum:[10,12],contain:[0,1,3,4,5,17],content:4,context:4,control:[0,4],conv2d:4,conv:4,convers:4,convert:[4,11,12,13,15,17],convert_to_list:18,convieni:[11,18],convini:0,cool:[3,18,20],core:18,correct:[4,20],correctli:[4,17],correspond:4,count:8,coupl:18,cpu:[4,8],creat:[0,1,3,5,7,9,12,15,16],create_connect:16,create_fold:5,create_secret_fil:1,create_webserver_subwai:7,created_tim:0,creator:0,cron:14,cs_endpoint:[2,8],csv2:0,cuda101:20,curiou:14,current:[2,4,9,12,16],custom:[4,8],custom_opset:4,dag:[6,15],dag_pb2:15,dai:[7,14,17],dashboard:20,data:[0,4,5,8,12,15,16],dataclass:[3,12],datetim:14,daunt:0,db:12,dbase:18,decis:4,decod:17,decor:[5,18],dedicated_hw:[0,8],deeper:0,def:[4,9,12,15,18],defin:[5,9,15,16,18],definit:3,delay_forecast:12,delet:[2,8,9],depend:[4,7],deploi:[0,12,13,14,15,20],deploy:[0,12,14,19],deploy_job:14,deploy_serv:14,deployment_id_or_nam:12,depth:6,describ:4,descript:4,descriptor:4,deserialis:12,design:7,despit:4,detail:[4,5,7,12,17],detect:4,determin:15,determinist:4,dev:[0,16],develop:17,devic:4,dict:[4,10,11,12,17],dict_to_messag:[11,12],dictionari:[4,12],didn:7,differ:[0,3,4,5,6,17,18,20],dim:4,dim_param:4,dim_valu:4,direct:16,directli:[0,3,20],directori:1,disabl:4,disallow:17,discord:13,disk:18,diverg:4,do_constant_fold:4,doabl:5,doc_str:4,doclient:1,document:[3,4,12,15,18,20],doe:[4,17],doesn:4,domain:4,don:[0,7,12,18],done:[4,12,16],dot:[7,14,17],down:5,download:18,download_binari:15,dpytorch_onnx_caffe2_bundl:4,dr:0,ds:20,duct:6,dure:4,dynam:[4,18],dynamic_ax:4,e:[4,20],each:[4,6,15,16,17],easi:[15,17,20],easier:17,editor:0,effect:[0,12],eg:[12,17],either:[4,15,20],element:4,els:[4,9,12,15],elsewher:1,email:1,emit:4,empti:4,emptibl:8,enabl:4,encod:[8,9],end:[4,6,14,17],endpoint:[8,17,20],engin:20,enjoi:0,enough:12,ensur:18,entir:[1,5,15],environ:20,equival:4,err_msg:11,error:18,etc:[3,8,12,18],eval:4,even:4,event:4,eventu:6,everi:14,everydai:14,everyth:[0,13],ex:1,exactli:[4,15],exampl:[0,4,16],example_forward_input:4,example_input:4,example_weight:4,except:[4,5,14],execut:[4,7,9,12,15],exist:[4,7],expand:15,expect:[4,5],experi:12,experiment:[8,12],explicitli:[15,17],export_model_path:14,export_modules_as_funct:4,export_param:4,ext:18,extend:17,extens:18,extent:8,extern:4,extra:4,extra_fn:12,extrem:7,f:[4,9,12],fail:4,failur:4,fall:4,fals:[0,4,5,8,9,10,12,13,14,15,16,18],familiar:15,fare:12,fashion:13,fastapi:17,faster:18,featur:[4,8,12],feature_vector:12,feb:14,feel:7,fetch:[0,17,18],field:[4,8],file:[0,1,3,4,6,7,8,12,14,15,16,18,20],filelogg:16,filenam:4,fileno:4,filepath:16,fill:[4,12],filter_templ:17,find:[0,7,12,14],fine:4,fire:0,first:[0,4,7,12,14,16,20],flag:4,flow:4,flush:9,fn:18,fold:4,folder:[1,3,5,9,12,15,18],follow:[4,16,20],forc:[8,18],forget:17,form:3,format:[3,4,12],forward:[4,13,15],found:[0,4],fp:8,framework:[0,3,12,14],framework_torch:4,fraud:12,fraud_scor:12,free:15,fri:14,fridai:14,friendli:0,from:[0,3,4,8,10,11,12,14,15,18,20],from_airflow_dag:[6,15],from_airflow_oper:[6,15],from_luigi_flow:[6,15],from_luigi_task:[6,15],from_openapi:17,from_pickl:18,from_prefect_flow:[6,15],from_prefect_task:[6,15],full:[0,15],full_matrix:12,func:[4,13],fundament:15,further:20,fusion:4,futur:[3,18],g:4,gatewai:14,gcp:[1,8],gcp_config_kwarg:1,gcpclient:1,gener:[0,1,3,4,5,12,18],get:[1,2,4,5,8,9,12,14,15,17,18,20],get_access_token:1,get_client:1,get_dict:[14,18],get_files_in_fold:18,get_imag:[18,20],get_job_list:9,get_logg:18,get_messag:14,get_model_funct:3,get_nbx_flow:15,get_random_nam:18,get_skl_model:12,get_stub:7,get_test_data:12,get_user_from_db:12,git:13,gitclon:13,github:[0,1,3,20],give:[18,20],given:[1,4,12],global:[4,7],go:[0,12],gone:[5,12],good:[0,19],gpu:8,gpu_count:8,grain:4,graph:4,group:12,grpc:[0,7,9,11,14],ha:[3,4,9,12,13,16,17,18],hack:6,had:4,haiku:3,handel:16,handl:[16,18,20],happen:[15,16],hard:[4,5,18],hash:[15,18],hash_:18,have:[0,1,3,4,5,12,17,18,20],head:20,headach:7,hello:15,help:[12,19],here:[0,3,12,15,20],hi:0,hidden:3,hide:3,high:15,hit:20,home:[1,2],hope:0,hopefulli:6,hour:14,how:[0,12,15,18,20],howev:4,http:[15,17,20],hurt:19,hyperloop:7,i:[0,2,4,5,8,12,16,17,20],id:[2,4,8,9,12,15],idea:17,ideal:4,ignor:4,imag:20,image_url:20,implement:[3,4,5],impli:4,implic:4,implicitli:4,importerror:18,incharg:12,includ:4,incom:12,incorrect:[4,17],increas:0,index:[4,10],indic:4,individu:8,ineffici:6,infer:[3,4],inform:[0,1,5,12,17],ing:17,init_fold:15,init_secret:1,initi:[4,5,6,16],initialis:[2,7,15,20],inject:13,inlin:4,input:[4,5,12,15,18,20],input_i:4,input_nam:4,input_object:[12,20],input_z:4,insert:12,instal:[0,18,20],instanc:[0,1,2,4,9,12,13,16,18],instance_id:16,instance_port:16,instead:4,instruct:[4,16],intent:[4,15,17],intention:3,interact:18,interest:[1,3],interfac:17,interfer:4,intern:[12,16,17,20],interpret:[4,18],invalid:4,invalidprotocolerror:5,invoc:4,io_copi:16,ip:16,ir:4,isinst:12,issu:[0,1],isther:18,item:[1,7,14,18],iter:15,its:4,itself:[4,15],jan:14,jid:13,jinja:18,jit:4,job:[0,2,12,14,15,17],job_id_or_nam:15,job_pb2:[14,15],job_proto:14,jobflow:3,jobproto:[3,14,15],join:18,jpg:20,jq:0,json:[0,1,7,11,12,17],jupyt:[16,20],just:[0,4,5,6,12,15,17,20],k80:8,k8:[12,18],k:[12,18],keep:[0,10,15],keep_initializers_as_input:4,kei:[4,12,14,20],kept:0,keyword:[4,10],kind:17,know:0,known:4,kwarg:[1,2,4,6,10,13,15,18],larg:4,last:4,latest:8,learn:[12,19],leav:12,led:6,left:20,length:4,lesson:6,let:[0,5,12,15],level:16,librari:[0,3,4,15],licens:13,like:[2,3,4,5,6,7,8,12,14,15,17],limit:[4,6],line:5,linux:1,list:[4,8,9,12,13,14,15,16],listen:16,liter:20,load:[0,4,7,8,11,12,15,17,18,20],loader:10,loader_kwarg:10,local:[4,16],local_port:16,localhost:16,localport:16,locat:[4,5],log:[0,2,9,16,18],logger:[16,18],logic:[3,12,15],look:17,loop:[4,16],loos:5,luigimixin:6,m:0,machin:8,made:[6,12],magic:7,mai:4,main:[3,16],major:20,make:[0,14,17,20],manag:[1,3,8,14,15,17],mani:[5,14],manner:0,manual:[0,4,5,9],map:4,map_loc:4,master:[18,20],match:[4,12],matter:4,max_work:18,mayb:12,md5:18,me:18,mean:[4,5,15,18],meant:[2,17],memo:15,mention:4,messag:[3,11,12,13,16],message_to_dict:11,message_to_json:11,messi:3,method:[1,4,9,12],might:[4,7,8,12,14,18],mind:14,minimum:0,minut:[14,20],miss:4,mit:13,ml:[0,3,20],mlflow:16,mlop:0,mode:[0,4,8,9,18],model:[0,3,4,5,10,13,19,20],model_fn:10,model_label:13,model_nam:[5,13],model_path:13,model_spec:[12,14],model_spec_pb2:[4,5,12,14],model_weight:13,modelspec:[3,4,5,12,14],modifi:18,modul:[0,4,5,15,18],month:14,more:[0,1,3,4,8,12,17,18,20],most:0,move:[0,4],ms_team:13,much:12,mul:4,multipl:[13,14,18],multiprocess:18,must:[0,4,18],mutabl:4,mv:[0,8],my:[6,17],my_binari:15,my_custom_axis_nam:4,myoper:15,myotheroper:15,n:[0,4],name:[1,4,8,9,10,12,13,15,18],named_oper:15,namespac:4,natur:14,nbox:[3,5,6,7,8,9,12,13,15,16,17,18,20],nbox_grpc_stub:7,nbox_opt:[4,5],nbox_sess:17,nbox_ws_pb2_grpc:7,nbox_ws_v1:[8,17],nboxinstancestartoper:13,nboxmodeldeployoper:13,nboxmodelsubwai:17,nboxopt:[4,5,12],nboxwaittilljidcomplet:13,nbx:[0,1,2,3,4,7,14,15,16,18],nbx_home_url:1,nbx_intern:15,nbx_url:1,nbxapierror:14,nbxclient:1,nbxlib:[13,15],ndarrai:12,need:[0,5,12,18,20],nest:[4,15,18],net:4,network:[4,7,15,17],never:19,new_schedul:9,nice:12,nimblebox:[0,14,17],nimbleboxai:20,nn:[4,15],node:[4,15],non:[4,7],none:[1,4,5,7,8,9,10,12,13,14,15,17,18],nor:4,notat:[7,17],note:[12,14],notebook:[16,20],noth:17,notif:13,notifi:13,now:[5,12,14,20],np:12,number:18,numer:4,numpi:12,obj:18,object:[0,1,4,5,6,7,8,9,10,12,13,14,15,16,17,18,20],object_storag:1,occur:4,oci_config_kwarg:1,ocicli:1,off:[0,4],often:4,on_:3,on_funct:3,on_ml:[3,4,5,6],on_oper:[3,6],onc:[4,12,15,20],one:[3,8,14,20],ones:4,onli:[3,4,5,8,10,14,15],onnx:[4,20],onnx_aten:4,onnx_aten_fallback:4,onnx_fallthrough:4,onto:4,op:[4,13,15],open:[0,2,13,20],open_hom:2,openapi:[7,17],oper:[0,3,4,5],operator_export_typ:4,operatorexporttyp:4,opset:4,opset_vers:4,optim:4,optimis:15,option:[4,5,7,8,9,10,12,13,14,15,17,18],order:[0,4,15],org:4,organis:[12,15],origin:4,os:[17,18],other:[7,12,15,18],other_arg:12,otherwis:4,our:[14,20],out:[5,10,12,14,18,20],output:4,output_nam:4,over:[4,15,20],own:[1,15,20],p100:8,pack:14,packag:[0,1,6,12,13,17,18],pair:[14,18],parallel:18,param:16,paramet:[1,2,4,8,9,10,12,14,15,16,17,18],paramount:0,pars:[3,12],part:[1,4,17,20],particular:4,pass:[4,5,10,12,13,14,15,17,18,20],password:[0,1,16],path:[0,12,13,14,17,18],pattern:17,paus:[2,9],pb:4,perform:[4,20],person:[8,9,12,15],pickl:12,pid:13,pil:20,pip:[0,20],pipelin:[0,13],pipi:0,platform:[2,15,20],pleas:1,plublish:7,plug:19,point:4,poll_interv:13,pool:18,poolbranch:18,popul:12,port:[8,16],port_in_us:16,posit:15,possibl:[2,4,12,15],post:[10,12,17],postprocess:[10,12],potenti:7,power:7,pre:[4,8,10,12],prebuilt:15,pred:12,predict:12,predict_proba:12,prefect:3,prefectmixin:6,prefer:12,prefix:[15,17],prematur:6,preprocess:[10,12],present:[4,9],preserv:4,pretrain:[10,20],pretrained_model:10,prevent:[12,13],previous:4,prim:4,primarili:12,print:[4,8,10,12,18,20],print_statu:8,probabl:4,problem:4,procedur:4,process:[5,12,15,18,20],processpoolexecutor:18,produc:[4,7],product:[12,20],profil:0,program:[8,12,17,18],progress:1,project:[0,7,12,20],project_id:8,project_nam:[8,9],prompt:0,propag:15,properti:[14,15],proto:[3,4,5,12,14],protobuf:[0,3,11,12,14,18],protocol:4,provid:[0,1,4,8,9,12,16,20],publicli:20,pure:12,push:0,put:[12,15],pwd:16,py:[3,4,6,14,16,18,20],py_model:3,pyi:3,python3:0,python:[0,3,4,7,8,9,13,15,17,18],pytorch:[3,4,12,15],quantiz:4,question:12,quick:[15,19],quickstart:0,quirky:14,r:17,rais:[0,1,4,18],raise_for_request:17,raise_on_error:11,rand:4,random:18,raw:20,re:[15,18],reach:14,read:[0,3,4,5,6,12,20],readi:12,readlin:4,realli:[6,12,15,17,20],reason:4,recap:15,reciev:16,reconsid:7,record:4,recurr:4,redid:5,refactor:[12,15],referenc:4,refresh:[2,8,9],region:8,regist:5,registeri:12,registri:5,regular:4,rel:18,relav:0,relax:4,relev:[15,17],reliabl:[5,12],remap:4,remov:9,remove_dupl:15,remove_kwarg:10,replac:4,repositori:[3,13],repres:4,request:[7,17],requir:[3,4,5,16,18],research:14,reset:0,resiz:20,resnet18:20,respons:[7,16],rest:[0,7,12],restart:20,result:4,resum:[2,9],right:0,roadblock:7,rpc:[0,14,17],rsockclient:16,rsockserv:16,run:[0,4,5,8,9,12,13,14,15],run_pi:[2,8],runnabl:4,runtim:[4,13,15,20],s3:1,s:[1,4,5,9,12,15,17],sai:[0,5,12],same:[4,12,15,18],save:[4,18],scale:6,scatter:18,schedul:[9,14,15,19],schema:4,scikit:[12,19],scope:5,scratch:0,screw:15,script:[0,4],scriptfunct:4,scriptmodul:4,sdk:[0,20],search:12,secret:[0,1],secur:16,see:[0,4,20],seedl:18,seek:4,self:[4,15],send:[12,16],separ:6,sequenc:4,sequenti:13,seri:7,serialis:[4,12,17],serialised_fn:12,serializ:12,serv:[12,14,17],server:[8,16,17],server_temp:18,servic:[1,4,14,15],service_nam:1,session:[7,17],set:[0,4,7,9,12,15,16],set_config:16,sete:16,setup:16,sever:15,shape:[4,20],sharabl:15,share:[3,12],shelex:13,shell:[13,15],shellcommand:13,shit:18,should:[0,4,8,10,12],shutdown:12,shutdown_once_don:12,silenc:0,silent:4,simlpi:9,simpl:[1,2,12,13,17],simpler:[12,15],simpli:[12,20],simplifi:4,singl:4,site:17,size:8,size_us:8,skip:20,sklearn:12,sklearn_model:12,sklearn_to_pickl:12,sklearnmodel:12,sklearntopickl:12,slack_connect:13,so:[4,5,12,15,18,20],socket:16,soft:18,softwar:7,sole:4,some:[3,4,6,12,15,18,20],someth:[0,2,4,18],sometim:[4,15],sourc:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],source_edg:15,south:8,space:4,spec:[0,5,7,12,17],special:4,specif:[4,12],specifi:[4,15],specsubwai:17,spiritu:15,spot:8,spun:15,sql:12,ssl:16,stack:12,stackoverflow:18,standalon:4,standard:4,start:[2,3,5,8,13,14,16],state:[4,8],state_dict:4,statement:4,staticmethod:2,statist:9,statu:[0,2,8,9],stdout:[4,8,9],step:[7,14,16,17,20],still:[1,4,5],sting:18,stock_predict:12,stop:[0,2,8,16],storag:[1,4],store:[1,4,5,12],stori:0,str:[1,2,4,5,7,8,9,10,11,12,13,14,15,16,17,18],strategi:[12,18],stream:[0,9,11],streaming_rpc:11,strict:4,string:[4,14,16,17,18],structur:[4,5],stub:[3,7,11,12,14],stub_all_depl:14,style:12,sub30:[7,14,17],sub:4,sub_util:16,submodul:0,subprocess:18,subsequ:4,subsystem:15,subwai:[0,7,14],success:16,sum:4,sum_dynamic_axes_1:4,summodul:4,support:[0,4,6,12,16,20],sure:4,sync:14,system:[4,7,12,15,17,20],t5:8,t:[0,4,7,12,18],tail:0,take:[4,5,10],takl:1,tape:6,tar:12,target:[4,5],target_fold:12,task:[0,7],technic:20,tell:4,tempdir:[15,18],tensoflow:12,tensor:4,tensorflow:3,term:12,termin:[0,20],tesor:12,test:[4,20],textiowrapp:[8,9],than:[15,18],thaw:15,thei:[1,4,7,12],them:[0,1,12,15,17],therebi:4,therefor:4,thi:[0,1,2,3,4,5,6,7,8,9,10,12,14,15,16,17,18,20],thing:[3,5,15,17,18],think:17,those:[4,12],though:[0,6,12,15],thread:[12,13,16,18],three:[14,17],through:[4,12,18],throughout:[0,18],thu:4,till:[12,20],time:[0,4,14],timedelta:14,tl:0,to_airflow_dag:[6,15],to_airflow_oper:[6,15],to_luigi_flow:[6,15],to_luigi_task:[6,15],to_pickl:18,to_prefect_flow:[6,15],to_prefect_task:[6,15],togeath:15,togeth:18,token:16,toler:4,tolist:12,tonn:20,tool:7,top:12,topk:20,torch:[4,15],torch_condit:5,torch_export_onnx:5,torch_export_torchscript:5,torch_import_torchscript:5,torch_resnet18:20,torch_to_onnx:[4,5,12],torch_to_torchscript:4,torchscript:[4,20],torchscript_to_torch:4,torchscripttotorch:4,torchtoonnx:4,torchtotorchscript:4,torchvis:20,touch:4,trace:[4,20],trace_modul:4,tracer:4,train:[4,12,19],train_fn:12,train_model:15,train_on_inst:[0,12],train_on_job:[0,12],traingpt:15,trainingmod:4,transfer:[8,16],transpar:7,treat:15,tree:15,triger:9,trigger:[0,2,9],triu:4,truli:18,tunn:16,tunnel:[0,2,16],tupl:[4,12,16],turn:[0,4],tutori:[19,20],two:[5,15],type:[4,7,10,14,15,17,20],typic:[4,7],typo:17,u:17,ugli:17,unabl:4,underli:[0,15,17],underneath:[5,12],understand:[0,5,6,15],unfortun:5,union:[4,12,15],unless:20,unpickl:12,unsupport:4,untrack:4,untrain:4,up:[0,7,15],updat:[8,12],upload:14,url:[12,13,14,17,18,20],us:[1,2,3,4,7,8,9,12,13,14,15,16,17,18,19,20],usabl:4,usag:[14,15,16,17,18],useful_kei:8,user:[0,1,3,4,5,12,15,16],user_id:12,user_opt:[4,5],usernam:[0,1],userproto:12,usual:4,utc:[4,14],utcnow:14,utf:[8,9],util:20,uuid4:18,uuid:18,v100:8,v1:[2,7],v3:17,v:[12,18],valid:4,valu:[4,12,14,16],vanilla:17,variabl:[4,10],verbos:[4,10,12],veri:12,version:[4,7],visibl:15,vs:14,w:[8,9],wa:[4,5,6,17],wai:[4,6,12,15,16,17,18,20],wait:20,wait_for_deploy:[12,14],wait_till_deploy:20,want:[0,4,7,10,12,14,15,16,20],warn:[4,9],watch:20,wayn:0,we:[0,1,4,5,6,12,15,20],web:17,webserv:[7,8,17],week:14,weight:[3,15],well:[1,4,15],were:4,wget:15,what:[4,16,17],when:[0,1,4,7,8,12,16,17,18,20],whenev:12,where:[12,15,16,17],whether:16,which:[3,4,5,7,12,15,16,17],why:3,wide:15,window:5,wip:[0,8,12,19],wire:18,wish:7,without:[4,20],work:[0,1,5,7,12,14,18],worker:18,workspac:[0,8,9,12,15],workspace_id:[0,2,8,9,12,15],would:4,wrap:[4,13,15],wrapper:[7,9,15],write:[0,3,4,5,9,12,15,18],write_fp:8,written:[4,5],wrong:4,ws:17,wsjobservicestub:7,x:[4,12,13,15,17,18],y:[4,15],y_pred:12,yash:0,year:14,yield:15,you:[0,1,3,4,7,10,12,14,15,16,17,18,20],your:[0,1,4,7,8,12,15,16,18,20],yourself:[7,14],z:4,zero:[0,8],zip:[14,15],zip_path:14,zone:8,zshrc:0},titles:["Welcome to nbox\u2019s documentation!","nbox Authentications","nbox.cli module","Pushing Understanding","nbox.framework.ml","ML Frameworks","Framework on Operators","init module","NBX-Build Instances","NBX-Jobs","nbox.load","nbox RPC support","NBX-Models","Operators Library","nbox Networking","Operators","Engineering behind SSH","Subways","Utils","Quickstart","QuickStart with Deployment"],titleterms:{api:0,authent:1,autogen:4,behind:16,build:8,cli:[0,2],commonli:0,d:0,deploy:20,document:0,dr:12,engin:[0,15,16],framework:[4,5,6],get:0,index:0,init:7,instanc:8,job:9,librari:13,load:10,ml:[4,5],mode:12,model:12,modul:[2,7],nbox:[0,1,2,4,10,11,14],nbx:[8,9,12],network:14,oper:[6,13,15],push:3,quickstart:[19,20],r:0,rpc:11,s:0,ssh:[0,16],stori:12,submodul:3,subwai:17,support:11,tl:12,tutori:0,understand:3,us:0,util:18,welcom:0}})