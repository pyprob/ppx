// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Tensor } from '../ppx/tensor';


export class RunResult {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):RunResult {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRunResult(bb:flatbuffers.ByteBuffer, obj?:RunResult):RunResult {
  return (obj || new RunResult()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRunResult(bb:flatbuffers.ByteBuffer, obj?:RunResult):RunResult {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RunResult()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

result(obj?:Tensor):Tensor|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Tensor()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startRunResult(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addResult(builder:flatbuffers.Builder, resultOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, resultOffset, 0);
}

static endRunResult(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createRunResult(builder:flatbuffers.Builder, resultOffset:flatbuffers.Offset):flatbuffers.Offset {
  RunResult.startRunResult(builder);
  RunResult.addResult(builder, resultOffset);
  return RunResult.endRunResult(builder);
}
}