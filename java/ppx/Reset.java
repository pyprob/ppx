// automatically generated by the FlatBuffers compiler, do not modify

package ppx;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class Reset extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_2_0_0(); }
  public static Reset getRootAsReset(ByteBuffer _bb) { return getRootAsReset(_bb, new Reset()); }
  public static Reset getRootAsReset(ByteBuffer _bb, Reset obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public Reset __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }


  public static void startReset(FlatBufferBuilder builder) { builder.startTable(0); }
  public static int endReset(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public Reset get(int j) { return get(new Reset(), j); }
    public Reset get(Reset obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}

