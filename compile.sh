#!/bin/bash
if ! [ -x "$(command -v flatc)" ]; then
  echo 'Error: flatc is not available.' >&2
  exit 1
else
  flatc --version
fi

echo Compiling PPX to C++...
rm -rf cpp
flatc --cpp -o cpp ppx.fbs

echo Compiling PPX to C#...
rm -rf csharp
flatc --csharp -o csharp ppx.fbs

echo Compiling PPX to Dart...
rm -rf dart
flatc --dart -o dart ppx.fbs

echo Compiling PPX to Go...
rm -rf go
flatc --go -o go ppx.fbs

echo Compiling PPX to Java...
rm -rf java
flatc --java -o java ppx.fbs

# echo Compiling PPX to JavaScript...
# rm -rf js
# flatc --js -o js ppx.fbs

echo Compiling PPX to Json schema...
rm -rf jsonschema
flatc --jsonschema -o jsonschema ppx.fbs

echo Compiling PPX to Kotlin...
rm -rf kotlin
flatc --kotlin -o kotlin ppx.fbs

echo Compiling PPX to Lobster...
rm -rf lobster
flatc --lobster -o lobster ppx.fbs

echo Compiling PPX to Lua...
rm -rf lua
flatc --lua -o lua ppx.fbs

echo Compiling PPX to PHP...
rm -rf php
flatc --php -o php ppx.fbs

echo Compiling PPX to Python...
rm -rf python
flatc --python -o python ppx.fbs

echo Compiling PPX to Rust...
rm -rf rust
flatc --rust -o rust ppx.fbs

echo Compiling PPX to Swift...
rm -rf swift
flatc --swift -o swift ppx.fbs

echo Compiling PPX to TypeScript...
rm -rf ts
flatc --ts -o ts ppx.fbs

echo Done.
