// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class Reset {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):Reset {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsReset(bb:flatbuffers.ByteBuffer, obj?:Reset):Reset {
  return (obj || new Reset()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsReset(bb:flatbuffers.ByteBuffer, obj?:Reset):Reset {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Reset()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startReset(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endReset(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createReset(builder:flatbuffers.Builder):flatbuffers.Offset {
  Reset.startReset(builder);
  return Reset.endReset(builder);
}
}