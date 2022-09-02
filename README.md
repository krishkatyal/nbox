<a href="https://nimblebox.ai/" target="_blank"><img src="./assets/built_at_nbx.svg" align="right"></a>
[![PyPI - Python
Version](https://img.shields.io/badge/python-3.6%20%7C%203.7%20%7C%203.8%20%7C%203.9-blue)](https://pypi.org/project/nbox/)
[![Downloads](https://pepy.tech/badge/nbox)](https://pepy.tech/project/nbox)
![GitHub](https://img.shields.io/badge/license-Apache--2.0-blueviolet)

## 🧐 What is Nbox?

`nbox` provides first class support API for all NimbleBox.ai infrastructure (NBX-Build, Jobs, Deploy) and services (NBX-Workspaces) components. Write jobs using `nbox.Operators`

# 🤷Why nimblebox

- Write and execute code in Python
- Document your code that supports mathematical equations
- Create/Upload/Share notebooks
- Import notebooks from your local machine
- Import/Publish notebooks from/to GitHub
- Import external datasets (e.g. from Kaggle)
- Integrate PyTorch, TensorFlow, Keras, OpenCV
- Share your projects
- Collaborate with your team


# 🚀 Startup Program

<a href="https://nimblebox.ai/startup-program"><img width="550" alt="Screenshot 2022-09-02 at 10 26 49 AM" src="https://user-images.githubusercontent.com/89596037/188062760-0a1691ff-10fd-456f-80d3-70e8ba5fb05e.png">
   
#### If you're a new startup with(<$1M raised,<3 years since founded) then you're in luck to be the part of our startup program!
#### Get *$420k* worth of deals on your favorite tools 


# 🎚 Features

### 🏗️ Freedom To Build
![Build Landing Page (2)](https://user-images.githubusercontent.com/89596037/181773716-ba63f167-af0d-48aa-921a-02e13238c0f2.gif)


### 🦾 Automate with Ease
![Jobs Landing Page](https://user-images.githubusercontent.com/89596037/181774553-99120354-72f5-4064-9216-4f8a5aa050be.gif)



### 🚀 Intuitive Dashboard
![Deploy Landing Page](https://user-images.githubusercontent.com/89596037/181775468-cc342a30-d87e-4576-8bdd-8ffdd75ff759.gif)


# 🏁 Get Started


**Install the package from pipy:**

```pip install nbox```


For convinience you should add nbox to your path by setting up an alias. Throughout the rest of the documentation we will be using nbx as the CLI:

```# go to your .bashrc or .zshrc and add
alias nbx="python3 -m nbox"
```



When loading nbox for the first time, it will prompt you the username and password and create a secrets file at ```~/.nbx/secrets.json. ``` This file then contains all the information that you don’t have to fetch manually again.


## APIs

Our APIs are deep, user functions are kept to minimum and most relavant. This documentation contains the full spec of everything, but here’s all the APIs you need to know:

```
nbox
├── Model          # Framework agnostic Model
│   ├── __call__
│   ├── deploy
│   ├── train_on_instance (WIP)
│   └── train_on_jobs (WIP)
├── Operators      # How jobs are combinations of operators
│   ├── __call__
│   └── deploy
├── Jobs           # For controlling all your jobs
│   ├── logs       # stream logs right on your terminal
│   └── trigger    # manually trigger a job
└── Instance
   ├── __call__    # Run any command on the instance
   └── mv (WIP)    # Move files to and from NBX-Build
```
### Deploy your machine learning or statistical models:

```python
from nbox import Model
from transformers import AutoModelForSequenceClassification, AutoTokenizer

# define your pre and post processing functions
def pre(x: Dict):
  return AutoTokenizer(**x)

# load your classifier with functions
model = AutoModelForSequenceClassification.from_pretrained("distill-bert")
classifier = Model(model, pre = pre)

# call your model
classifier(f"Is this a good picture?")

# get full control on exporting it
spec = classifier.torch_to_onnx(
  TorchToOnnx(...)
)

# confident? deploy it your cloud
url, key = classifier.deploy(
  spec, deployment_id_or_name = "classification"
)

# use it anywhere
pred = requests.post(
  url,
  json = {
    "text": f"Is this a good picture?"
  },
  header = {"Authorization": f"Bearer {key}"}
).json()
```
# 🛟 How to get help?

Join our [discord](https://discord.gg/qYZHxMaCsE) and someone from our community or engineering team will respond!

## 🔖Read our [Blog](https://nimblebox.ai/blog).


# 🧩 License

The code in thist repo is licensed as [Apache License 2.0](./LICENSE). Please check for individual repositories for licenses.
