# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: yql/assets/rest.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x15yql/assets/rest.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"\xb5\x01\n\x04\x45\x63ho\x12/\n\x0bserver_time\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x11\n\x07message\x18\x02 \x01(\tH\x00\x12\x0f\n\x05\x65rror\x18\x03 \x01(\tH\x00\x12\x13\n\ttraceback\x18\x04 \x01(\tH\x00\x12\x10\n\x08rpc_name\x18\x05 \x01(\t\x12\x12\n\nproto_data\x18\x06 \x01(\t\x12\x15\n\rbase64_string\x18\x07 \x01(\tB\x06\n\x04\x64\x61ta2\\\n\x07yqlCore\x12\x16\n\x06Status\x12\x05.Echo\x1a\x05.Echo\x12 \n\x10ProtoDefinitions\x12\x05.Echo\x1a\x05.Echo\x12\x17\n\x07Predict\x12\x05.Echo\x1a\x05.Echob\x06proto3')



_ECHO = DESCRIPTOR.message_types_by_name['Echo']
Echo = _reflection.GeneratedProtocolMessageType('Echo', (_message.Message,), {
  'DESCRIPTOR' : _ECHO,
  '__module__' : 'yql.assets.rest_pb2'
  # @@protoc_insertion_point(class_scope:Echo)
  })
_sym_db.RegisterMessage(Echo)

_YQLCORE = DESCRIPTOR.services_by_name['yqlCore']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _ECHO._serialized_start=59
  _ECHO._serialized_end=240
  _YQLCORE._serialized_start=242
  _YQLCORE._serialized_end=334
# @@protoc_insertion_point(module_scope)
