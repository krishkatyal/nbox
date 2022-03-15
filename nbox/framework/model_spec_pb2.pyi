"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import builtins
import google.protobuf.descriptor
import google.protobuf.internal.containers
import google.protobuf.internal.enum_type_wrapper
import google.protobuf.message
import google.protobuf.timestamp_pb2
import typing
import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

class Framework(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    class KwargsEntry(google.protobuf.message.Message):
        DESCRIPTOR: google.protobuf.descriptor.Descriptor
        KEY_FIELD_NUMBER: builtins.int
        VALUE_FIELD_NUMBER: builtins.int
        key: typing.Text
        value: typing.Text
        def __init__(self,
            *,
            key: typing.Text = ...,
            value: typing.Text = ...,
            ) -> None: ...
        def ClearField(self, field_name: typing_extensions.Literal["key",b"key","value",b"value"]) -> None: ...

    PACKAGE_FIELD_NUMBER: builtins.int
    PATH_FIELD_NUMBER: builtins.int
    METHOD_FIELD_NUMBER: builtins.int
    KWARGS_FIELD_NUMBER: builtins.int
    package: typing.Text
    """name of the package and it's version number"""

    path: typing.Text
    """path to read/write the file"""

    method: typing.Text
    """method used to serialise/deserialise the model"""

    @property
    def kwargs(self) -> google.protobuf.internal.containers.ScalarMap[typing.Text, typing.Text]:
        """optional parameters for the method, these will be used in case of
        deserialisation but can be provided during encoding as well
        """
        pass
    def __init__(self,
        *,
        package: typing.Text = ...,
        path: typing.Text = ...,
        method: typing.Text = ...,
        kwargs: typing.Optional[typing.Mapping[typing.Text, typing.Text]] = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["kwargs",b"kwargs","method",b"method","package",b"package","path",b"path"]) -> None: ...
global___Framework = Framework

class Tensor(google.protobuf.message.Message):
    """though the name is a Tensor, it represents any kind of input
    output to the model
    """
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    NAME_FIELD_NUMBER: builtins.int
    SHAPE_FIELD_NUMBER: builtins.int
    DIMENSION_NAMES_FIELD_NUMBER: builtins.int
    DTYPE_FIELD_NUMBER: builtins.int
    name: typing.Text
    """name/keyword for this message"""

    @property
    def shape(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[builtins.int]:
        """shape: if None assume it is not a tensor"""
        pass
    @property
    def dimension_names(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[typing.Text]:
        """what are meanings of shapes like batch, etc."""
        pass
    dtype: typing.Text
    """~numpy datatype of the tensor"""

    def __init__(self,
        *,
        name: typing.Text = ...,
        shape: typing.Optional[typing.Iterable[builtins.int]] = ...,
        dimension_names: typing.Optional[typing.Iterable[typing.Text]] = ...,
        dtype: typing.Text = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["dimension_names",b"dimension_names","dtype",b"dtype","name",b"name","shape",b"shape"]) -> None: ...
global___Tensor = Tensor

class Deployment(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    class _DeploymentTypes:
        ValueType = typing.NewType('ValueType', builtins.int)
        V: typing_extensions.TypeAlias = ValueType
    class _DeploymentTypesEnumTypeWrapper(google.protobuf.internal.enum_type_wrapper._EnumTypeWrapper[Deployment._DeploymentTypes.ValueType], builtins.type):
        DESCRIPTOR: google.protobuf.descriptor.EnumDescriptor
        NBOX_SERVING: Deployment._DeploymentTypes.ValueType  # 0
        """vanilla nbox serving with fastapi"""

    class DeploymentTypes(_DeploymentTypes, metaclass=_DeploymentTypesEnumTypeWrapper):
        """Deployment type"""
        pass

    NBOX_SERVING: Deployment.DeploymentTypes.ValueType  # 0
    """vanilla nbox serving with fastapi"""


    ID_FIELD_NUMBER: builtins.int
    WORKSPACE_ID_FIELD_NUMBER: builtins.int
    TYPE_FIELD_NUMBER: builtins.int
    id: typing.Text
    """ID for the deployment"""

    workspace_id: typing.Text
    """Workspace ID, if None assume in user workspace"""

    type: global___Deployment.DeploymentTypes.ValueType
    def __init__(self,
        *,
        id: typing.Text = ...,
        workspace_id: typing.Text = ...,
        type: global___Deployment.DeploymentTypes.ValueType = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["id",b"id","type",b"type","workspace_id",b"workspace_id"]) -> None: ...
global___Deployment = Deployment

class ModelSpec(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    SOURCE_FIELD_NUMBER: builtins.int
    TARGET_FIELD_NUMBER: builtins.int
    FOLDER_FIELD_NUMBER: builtins.int
    NAME_FIELD_NUMBER: builtins.int
    ID_FIELD_NUMBER: builtins.int
    REQUIREMENTS_FIELD_NUMBER: builtins.int
    EXPORTED_TIME_FIELD_NUMBER: builtins.int
    INPUTS_FIELD_NUMBER: builtins.int
    OUTPUTS_FIELD_NUMBER: builtins.int
    DEPLOY_FIELD_NUMBER: builtins.int
    @property
    def source(self) -> global___Framework:
        """source metadata"""
        pass
    @property
    def target(self) -> global___Framework:
        """target metadata"""
        pass
    folder: typing.Text
    """folder path to be zipped"""

    name: typing.Text
    """name of the model being op-ed"""

    id: typing.Text
    """nbox-id of this model, from this we can connect deploy and jobs"""

    @property
    def requirements(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[typing.Text]:
        """leaving a bunch of ids empty for future use for the services
        that we want to provide like train/test/ab/deploy/...

        things to be written in the requirements.txt file so
        something like -f https://... can be added here as well.
        """
        pass
    @property
    def exported_time(self) -> google.protobuf.timestamp_pb2.Timestamp:
        """time to creation the export"""
        pass
    @property
    def inputs(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Tensor]:
        """this is the input to the model"""
        pass
    @property
    def outputs(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Tensor]:
        """this is the output of the model"""
        pass
    @property
    def deploy(self) -> global___Deployment:
        """information related to the deploy"""
        pass
    def __init__(self,
        *,
        source: typing.Optional[global___Framework] = ...,
        target: typing.Optional[global___Framework] = ...,
        folder: typing.Text = ...,
        name: typing.Text = ...,
        id: typing.Text = ...,
        requirements: typing.Optional[typing.Iterable[typing.Text]] = ...,
        exported_time: typing.Optional[google.protobuf.timestamp_pb2.Timestamp] = ...,
        inputs: typing.Optional[typing.Iterable[global___Tensor]] = ...,
        outputs: typing.Optional[typing.Iterable[global___Tensor]] = ...,
        deploy: typing.Optional[global___Deployment] = ...,
        ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["deploy",b"deploy","exported_time",b"exported_time","source",b"source","target",b"target"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["deploy",b"deploy","exported_time",b"exported_time","folder",b"folder","id",b"id","inputs",b"inputs","name",b"name","outputs",b"outputs","requirements",b"requirements","source",b"source","target",b"target"]) -> None: ...
global___ModelSpec = ModelSpec