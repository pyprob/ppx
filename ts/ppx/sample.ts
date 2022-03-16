// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Distribution, unionToDistribution, unionListToDistribution } from '../ppx/distribution';


export class Sample {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):Sample {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSample(bb:flatbuffers.ByteBuffer, obj?:Sample):Sample {
  return (obj || new Sample()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSample(bb:flatbuffers.ByteBuffer, obj?:Sample):Sample {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Sample()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

address():string|null
address(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
address(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

distributionType():Distribution {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : Distribution.NONE;
}

distribution<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

control():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : true;
}

static startSample(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addAddress(builder:flatbuffers.Builder, addressOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, addressOffset, 0);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, nameOffset, 0);
}

static addDistributionType(builder:flatbuffers.Builder, distributionType:Distribution) {
  builder.addFieldInt8(2, distributionType, Distribution.NONE);
}

static addDistribution(builder:flatbuffers.Builder, distributionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, distributionOffset, 0);
}

static addControl(builder:flatbuffers.Builder, control:boolean) {
  builder.addFieldInt8(4, +control, +true);
}

static endSample(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSample(builder:flatbuffers.Builder, addressOffset:flatbuffers.Offset, nameOffset:flatbuffers.Offset, distributionType:Distribution, distributionOffset:flatbuffers.Offset, control:boolean):flatbuffers.Offset {
  Sample.startSample(builder);
  Sample.addAddress(builder, addressOffset);
  Sample.addName(builder, nameOffset);
  Sample.addDistributionType(builder, distributionType);
  Sample.addDistribution(builder, distributionOffset);
  Sample.addControl(builder, control);
  return Sample.endSample(builder);
}
}