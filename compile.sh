#!/bin/bash
if ! [ -x "$(command -v flatc)" ]; then
  echo 'Error: flatc is not available.' >&2
  exit 1
else
  flatc --version
fi

echo Compiling PPX to C++...
flatc --cpp -o cpp ppx.fbs

echo Compiling PPX to C#...
flatc --csharp -o csharp ppx.fbs

echo Compiling PPX to Go...
flatc --go -o go ppx.fbs

echo Compiling PPX to Java...
flatc --java -o java ppx.fbs

echo Compiling PPX to JavaScript...
flatc --js -o js ppx.fbs

echo Compiling PPX to PHP...
flatc --php -o php ppx.fbs

echo Compiling PPX to Python...
flatc --python -o python ppx.fbs

echo Compiling PPX to TypeScript...
flatc --ts -o ts ppx.fbs

echo Done.
