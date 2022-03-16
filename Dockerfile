FROM ubuntu:18.04

RUN apt-get update && apt-get install -y git cmake gcc-5 g++-5 libzmq3-dev
ENV CC=gcc-5
ENV CXX=g++-5

WORKDIR /home
RUN git clone --branch v2.0.0 https://github.com/google/flatbuffers.git
RUN cd flatbuffers && cmake -G "Unix Makefiles" && make install && cp flatc /usr/local/bin/
