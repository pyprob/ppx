// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Tensor } from '../ppx/tensor';


export class Categorical {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):Categorical {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCategorical(bb:flatbuffers.ByteBuffer, obj?:Categorical):Categorical {
  return (obj || new Categorical()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCategorical(bb:flatbuffers.ByteBuffer, obj?:Categorical):Categorical {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Categorical()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

probs(obj?:Tensor):Tensor|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Tensor()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startCategorical(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addProbs(builder:flatbuffers.Builder, probsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, probsOffset, 0);
}

static endCategorical(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createCategorical(builder:flatbuffers.Builder, probsOffset:flatbuffers.Offset):flatbuffers.Offset {
  Categorical.startCategorical(builder);
  Categorical.addProbs(builder, probsOffset);
  return Categorical.endCategorical(builder);
}
}