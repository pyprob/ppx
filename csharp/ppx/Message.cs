// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

namespace ppx
{

using global::System;
using global::System.Collections.Generic;
using global::FlatBuffers;

public struct Message : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_2_0_0(); }
  public static Message GetRootAsMessage(ByteBuffer _bb) { return GetRootAsMessage(_bb, new Message()); }
  public static Message GetRootAsMessage(ByteBuffer _bb, Message obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public static bool MessageBufferHasIdentifier(ByteBuffer _bb) { return Table.__has_identifier(_bb, "PPXF"); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public Message __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public ppx.MessageBody BodyType { get { int o = __p.__offset(4); return o != 0 ? (ppx.MessageBody)__p.bb.Get(o + __p.bb_pos) : ppx.MessageBody.NONE; } }
  public TTable? Body<TTable>() where TTable : struct, IFlatbufferObject { int o = __p.__offset(6); return o != 0 ? (TTable?)__p.__union<TTable>(o + __p.bb_pos) : null; }
  public ppx.Handshake BodyAsHandshake() { return Body<ppx.Handshake>().Value; }
  public ppx.HandshakeResult BodyAsHandshakeResult() { return Body<ppx.HandshakeResult>().Value; }
  public ppx.Run BodyAsRun() { return Body<ppx.Run>().Value; }
  public ppx.RunResult BodyAsRunResult() { return Body<ppx.RunResult>().Value; }
  public ppx.Sample BodyAsSample() { return Body<ppx.Sample>().Value; }
  public ppx.SampleResult BodyAsSampleResult() { return Body<ppx.SampleResult>().Value; }
  public ppx.Observe BodyAsObserve() { return Body<ppx.Observe>().Value; }
  public ppx.ObserveResult BodyAsObserveResult() { return Body<ppx.ObserveResult>().Value; }
  public ppx.Tag BodyAsTag() { return Body<ppx.Tag>().Value; }
  public ppx.TagResult BodyAsTagResult() { return Body<ppx.TagResult>().Value; }
  public ppx.Reset BodyAsReset() { return Body<ppx.Reset>().Value; }

  public static Offset<ppx.Message> CreateMessage(FlatBufferBuilder builder,
      ppx.MessageBody body_type = ppx.MessageBody.NONE,
      int bodyOffset = 0) {
    builder.StartTable(2);
    Message.AddBody(builder, bodyOffset);
    Message.AddBodyType(builder, body_type);
    return Message.EndMessage(builder);
  }

  public static void StartMessage(FlatBufferBuilder builder) { builder.StartTable(2); }
  public static void AddBodyType(FlatBufferBuilder builder, ppx.MessageBody bodyType) { builder.AddByte(0, (byte)bodyType, 0); }
  public static void AddBody(FlatBufferBuilder builder, int bodyOffset) { builder.AddOffset(1, bodyOffset, 0); }
  public static Offset<ppx.Message> EndMessage(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<ppx.Message>(o);
  }
  public static void FinishMessageBuffer(FlatBufferBuilder builder, Offset<ppx.Message> offset) { builder.Finish(offset.Value, "PPXF"); }
  public static void FinishSizePrefixedMessageBuffer(FlatBufferBuilder builder, Offset<ppx.Message> offset) { builder.FinishSizePrefixed(offset.Value, "PPXF"); }
};


}
