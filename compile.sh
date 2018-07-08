#!/bin/bash
flatc --version

echo Compiling ppx to C++...
flatc --cpp -o cpp ppx.fbs

echo Compiling ppx to C#...
flatc --csharp -o csharp ppx.fbs

echo Compiling ppx to Go...
flatc --go -o go ppx.fbs

echo Compiling ppx to Java...
flatc --java -o java ppx.fbs

echo Compiling ppx to JavaScript...
flatc --js -o js ppx.fbs

echo Compiling ppx to PHP...
flatc --php -o php ppx.fbs

echo Compiling ppx to Python...
flatc --python -o python ppx.fbs

echo Compiling ppx to TypeScript...
flatc --ts -o ts ppx.fbs

echo Done.
