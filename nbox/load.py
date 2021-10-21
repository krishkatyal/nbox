# singluar loader file for all models in nbox

import os
import re
import json
import inspect
import warnings
from typing import Dict

import torch

from nbox.model import Model
from nbox.utils import isthere, fetch

model_key_regex = re.compile(r"^(\w+)(\/[\w\/-]+)?(:*[\w+:]+)?$")

# util functions
def remove_kwargs(model_fn, kwargs):
    """take in the ``model_fn`` and only keep variables from kwargs that can be consumed"""
    # compare variables between the model_fn and kwargs if they are different then remove it with warning
    arg_spec = inspect.getfullargspec(model_fn)
    if kwargs and arg_spec.varkw != None:
        diff = set(kwargs.keys()) - set(arg_spec.args)
        for d in list(diff):
            warnings.warn(f"Ignoring unknown argument: {d}")
            kwargs.pop(d)
    return kwargs


# --- model loader functions: add your things here
# guide: all models are indexed as follows
# {
#   "key": (builder_function, "category")
#
#   # to be moved to
#   "key": (builder_function, "task_type", "source", "pre", "task", "post")
# }
#
# Structure of each loader function looks as follows:
# def loader_fn() -> <dict as above>
#
# Each model builder function looks as follows:
# def model_builder() -> (model, model_kwargs)


def load_efficientnet_pytorch_models() -> Dict:
    def model_builder(pretrained=False, **kwargs):
        import efficientnet_pytorch

        if pretrained:
            model_fn = efficientnet_pytorch.EfficientNet.from_pretrained
        else:
            model_fn = efficientnet_pytorch.EfficientNet.from_name

        kwargs = remove_kwargs(model_fn, kwargs)
        return model_fn(**kwargs), {}

    return {"efficientnet_pytorch/efficientnet": (model_builder, "image")}


def load_torchvision_models() -> Dict:
    def model_builder(model, pretrained=False, **kwargs):
        # tv_mr = torchvision models registry
        # this is a json object that maps all the models to their respective methods from torchvision
        # the trick to loading is to eval the method string
        tv_mr = json.loads(fetch("https://raw.githubusercontent.com/NimbleBoxAI/nbox/master/assets/pt_models.json").decode("utf-8"))
        model_fn = tv_mr.get(model, None)
        if model_fn == None:
            raise IndexError(f"Model: {model} not found in torchvision")

        # torchvision is imported here, if it is imported in the outer method, eval fails
        # reason: unknown
        import torchvision

        model_fn = eval(model_fn)
        kwargs = remove_kwargs(model_fn, kwargs)
        model = model_fn(pretrained=pretrained, **kwargs)
        return model, {}

    return {"torchvision": (model_builder, "image")}


def load_transformers_models() -> Dict:
    def hf_model_builder(model, model_instr, **kwargs):
        import transformers

        _auto_loaders = {x: getattr(transformers, x) for x in dir(transformers) if x[:4] == "Auto" and x != "AutoConfig"}

        model_instr = model_instr.split("::")
        if len(model_instr) == 1:
            auto_model_type = model_instr[0]
        else:
            # if the task is given, validate that as well
            auto_model_type, task = model_instr
            assert task in [
                "generation",
                "masked_lm",
            ], "For now only the following are supported: `generation`, `masked_lm`"

        # initliase the model and tokenizer object
        tokenizer = transformers.AutoTokenizer.from_pretrained(model, **kwargs)

        # All the tokenizers must contain the pad_token, by default we set it to eos_token
        if not tokenizer.pad_token:
            tokenizer.add_special_tokens({"pad_token": tokenizer.eos_token})

        # tokenizer.pad_token = tokenizer.eos_token if not tokenizer.pad_token_id else tokenizer.pad_token
        model = _auto_loaders[auto_model_type].from_pretrained(model, **kwargs)

        # return the model and tokenizer
        return model, {"tokenizer": tokenizer}

    return {"transformers": (hf_model_builder, "text")}


### ----- pretrained models master index
# add code based on conditionals, best way is to only include those that
# have proper model building code like transformers, torchvision, etc.

PRETRAINED_MODELS = {}
all_repos = ["efficientnet_pytorch", "torchvision", "transformers"]

for repo in all_repos:
    if isthere(repo):
        print(f"Loading pretrained models from {repo}")
        PRETRAINED_MODELS.update(locals()[f"load_{repo}_models"]())

# if there are no pretrained models available, then raise an error
if not PRETRAINED_MODELS:
    raise ValueError("No pretrained models available. Please install PyTorch or torchvision or transformers to use pretrained models.")

# ---- plug your own models and in extension the methods here


def plug(src_name, builder_fn, cataegory):
    """Plug your nbox_builder methods here. Once plugged in your codebase, you can use the
    simplicity of nbox.loaders

    Args:
        src_name (str): name of the source
        builder_fn (func): function to be called to build the model
        cataegory (dict): input categories for the input

    Raises:
        ValueError: if src_name is already in the index
    """
    # check if the source is already present
    if src_name in PRETRAINED_MODELS:
        raise ValueError(f"Source: {src_name} already present in the pretrained models index")

    # add the source
    PRETRAINED_MODELS[src_name] = (builder_fn, cataegory)


# ---- load function has to manage everything and return Model object properly initialised


def load(model_key_or_url, nbx_api_key=None, verbose=False, **loader_kwargs):
    """This function loads the nbox.Model object from the pretrained models index or NimbleBox.ai's cloud infer
    service.

    Args:

        model_key_or_url (str, optional): This is the primary key for the loader. It can perform the following:

            #. ``path``: if this is a path to a model file, then it will be loaded. This model should also have a json \
                file with the same path but with a ``.json`` extension.
            #. ``url``: if this is a url to a NimbleBox.ai's deployment
            #. ``registry``: key for which to load the model, the structure looks as follows:

            .. code-block:: python
                
                "source/(source/key)::<pre::task::post>"


        nbx_api_key (str, optional): If model_key_or_url has type `url` then pass the key corresponding url
        verbose (bool, optional): If True, prints logs
        cloud_infer (bool, optional): If true uses Nimblebox deployed inference and logs in
            using `nbx_api_key`. Defaults to False.
        loader_kwargs (dict, optional): keyword arguments to be passed to the loader function.

    Raises:
        ValueError: If `source` is not found
        IndexError: If `source` is found but `source/key` is not found

    Returns:
        nbox.Model: when using local inference
        nbox.NBXApi: when using cloud inference
    """
    # check the model key if it is a file path, then check if
    if os.path.exists(model_key_or_url):
        model_path = os.path.abspath(model_key_or_url)
        model_meta_path = loader_kwargs.pop("model_meta_path", None)
        if not model_meta_path:
            model_meta_path = ".".join(model_path.split(".")[:-1] + ["json"])
        assert os.path.exists(model_meta_path), f"Model meta file not found: {model_meta_path}"

        with open(model_meta_path, "r") as f:
            model_meta = json.load(f)
            if isinstance(model_meta, str):
                model_meta = json.loads(model_meta)
            spec = model_meta["spec"]

        category = spec["category"]
        tokenizer = None
        if category == "text":
            from transformers import AutoTokenizer

            tokenizer = AutoTokenizer.from_pretrained(model_path)

        model = torch.jit.load(model_path, map_location="cpu")
        out = Model(model, category=category, tokenizer=tokenizer, model_key=spec["model_key"], model_meta=model_meta, verbose=verbose)

    # if this is a nbx-deployed model
    elif model_key_or_url.startswith("http"):
        out = Model(model_or_model_url=model_key_or_url, nbx_api_key=nbx_api_key, verbose=verbose)

    else:
        # the input key can also contain instructions on how to run a particular models and so
        model_key_parts = re.findall(model_key_regex, model_key_or_url)
        if not model_key_parts:
            raise ValueError(f"Key: {model_key_or_url} incorrect, please check!")

        # this key is valid, now get it's components
        src, src_key, model_instr = model_key_parts[0]
        src_key = src_key.strip("/")  # remove leading and trailing slashes
        model_instr = model_instr.replace(":", "")  # remove the :
        model_key = model_key_or_url

        # print("  model_key:", model_key)
        # print("        src:", src)
        # print("    src_key:", src_key)
        # print("model_instr:", model_instr)

        model_fn, model_meta = PRETRAINED_MODELS.get(src, (None, None))
        if model_meta is None:
            model_fn, model_meta = PRETRAINED_MODELS.get(src, (None, None))
            if model_meta is None:
                raise IndexError(f"Model: {src} not found")

        # now just load the underlying graph and the model and off you go
        model, model_kwargs = model_fn(model=src_key, model_instr=model_instr, **loader_kwargs)
        out = Model(model_or_model_url=model, category=model_meta, model_key=model_key, model_meta=None, verbose=verbose, **model_kwargs)

    return out