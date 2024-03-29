// automatically generated by the FlatBuffers compiler, do not modify

package ppx;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class Observe extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_2_0_0(); }
  public static Observe getRootAsObserve(ByteBuffer _bb) { return getRootAsObserve(_bb, new Observe()); }
  public static Observe getRootAsObserve(ByteBuffer _bb, Observe obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public Observe __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public String address() { int o = __offset(4); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer addressAsByteBuffer() { return __vector_as_bytebuffer(4, 1); }
  public ByteBuffer addressInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 4, 1); }
  public String name() { int o = __offset(6); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer nameAsByteBuffer() { return __vector_as_bytebuffer(6, 1); }
  public ByteBuffer nameInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 6, 1); }
  public byte distributionType() { int o = __offset(8); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public Table distribution(Table obj) { int o = __offset(10); return o != 0 ? __union(obj, o + bb_pos) : null; }
  public ppx.Tensor value() { return value(new ppx.Tensor()); }
  public ppx.Tensor value(ppx.Tensor obj) { int o = __offset(12); return o != 0 ? obj.__assign(__indirect(o + bb_pos), bb) : null; }

  public static int createObserve(FlatBufferBuilder builder,
      int addressOffset,
      int nameOffset,
      byte distribution_type,
      int distributionOffset,
      int valueOffset) {
    builder.startTable(5);
    Observe.addValue(builder, valueOffset);
    Observe.addDistribution(builder, distributionOffset);
    Observe.addName(builder, nameOffset);
    Observe.addAddress(builder, addressOffset);
    Observe.addDistributionType(builder, distribution_type);
    return Observe.endObserve(builder);
  }

  public static void startObserve(FlatBufferBuilder builder) { builder.startTable(5); }
  public static void addAddress(FlatBufferBuilder builder, int addressOffset) { builder.addOffset(0, addressOffset, 0); }
  public static void addName(FlatBufferBuilder builder, int nameOffset) { builder.addOffset(1, nameOffset, 0); }
  public static void addDistributionType(FlatBufferBuilder builder, byte distributionType) { builder.addByte(2, distributionType, 0); }
  public static void addDistribution(FlatBufferBuilder builder, int distributionOffset) { builder.addOffset(3, distributionOffset, 0); }
  public static void addValue(FlatBufferBuilder builder, int valueOffset) { builder.addOffset(4, valueOffset, 0); }
  public static int endObserve(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public Observe get(int j) { return get(new Observe(), j); }
    public Observe get(Observe obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}

