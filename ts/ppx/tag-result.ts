// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class TagResult {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):TagResult {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTagResult(bb:flatbuffers.ByteBuffer, obj?:TagResult):TagResult {
  return (obj || new TagResult()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTagResult(bb:flatbuffers.ByteBuffer, obj?:TagResult):TagResult {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TagResult()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startTagResult(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endTagResult(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createTagResult(builder:flatbuffers.Builder):flatbuffers.Offset {
  TagResult.startTagResult(builder);
  return TagResult.endTagResult(builder);
}
}