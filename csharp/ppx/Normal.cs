// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

namespace ppx
{

using global::System;
using global::System.Collections.Generic;
using global::FlatBuffers;

public struct Normal : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_2_0_0(); }
  public static Normal GetRootAsNormal(ByteBuffer _bb) { return GetRootAsNormal(_bb, new Normal()); }
  public static Normal GetRootAsNormal(ByteBuffer _bb, Normal obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public Normal __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public ppx.Tensor? Mean { get { int o = __p.__offset(4); return o != 0 ? (ppx.Tensor?)(new ppx.Tensor()).__assign(__p.__indirect(o + __p.bb_pos), __p.bb) : null; } }
  public ppx.Tensor? Stddev { get { int o = __p.__offset(6); return o != 0 ? (ppx.Tensor?)(new ppx.Tensor()).__assign(__p.__indirect(o + __p.bb_pos), __p.bb) : null; } }

  public static Offset<ppx.Normal> CreateNormal(FlatBufferBuilder builder,
      Offset<ppx.Tensor> meanOffset = default(Offset<ppx.Tensor>),
      Offset<ppx.Tensor> stddevOffset = default(Offset<ppx.Tensor>)) {
    builder.StartTable(2);
    Normal.AddStddev(builder, stddevOffset);
    Normal.AddMean(builder, meanOffset);
    return Normal.EndNormal(builder);
  }

  public static void StartNormal(FlatBufferBuilder builder) { builder.StartTable(2); }
  public static void AddMean(FlatBufferBuilder builder, Offset<ppx.Tensor> meanOffset) { builder.AddOffset(0, meanOffset.Value, 0); }
  public static void AddStddev(FlatBufferBuilder builder, Offset<ppx.Tensor> stddevOffset) { builder.AddOffset(1, stddevOffset.Value, 0); }
  public static Offset<ppx.Normal> EndNormal(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<ppx.Normal>(o);
  }
};


}
