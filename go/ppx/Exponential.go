// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package ppx

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type Exponential struct {
	_tab flatbuffers.Table
}

func GetRootAsExponential(buf []byte, offset flatbuffers.UOffsetT) *Exponential {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &Exponential{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *Exponential) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *Exponential) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *Exponential) Rate(obj *Tensor) *Tensor {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(Tensor)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

func ExponentialStart(builder *flatbuffers.Builder) {
	builder.StartObject(1)
}
func ExponentialAddRate(builder *flatbuffers.Builder, rate flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(0, flatbuffers.UOffsetT(rate), 0)
}
func ExponentialEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}