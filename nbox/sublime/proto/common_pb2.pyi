"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import builtins
import google.protobuf.descriptor
import google.protobuf.message
import typing
import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

class Acknowledge(google.protobuf.message.Message):
    """generic response to any message"""
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    SUCCESS_FIELD_NUMBER: builtins.int
    MESSAGE_FIELD_NUMBER: builtins.int
    success: builtins.bool
    message: typing.Text
    """message can contain message or traceback if not success"""

    def __init__(self,
        *,
        success: builtins.bool = ...,
        message: typing.Text = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["message",b"message","success",b"success"]) -> None: ...
global___Acknowledge = Acknowledge