// automatically generated by the FlatBuffers compiler, do not modify

package ppx;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class Run extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_2_0_0(); }
  public static Run getRootAsRun(ByteBuffer _bb) { return getRootAsRun(_bb, new Run()); }
  public static Run getRootAsRun(ByteBuffer _bb, Run obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public Run __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }


  public static void startRun(FlatBufferBuilder builder) { builder.startTable(0); }
  public static int endRun(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public Run get(int j) { return get(new Run(), j); }
    public Run get(Run obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}

