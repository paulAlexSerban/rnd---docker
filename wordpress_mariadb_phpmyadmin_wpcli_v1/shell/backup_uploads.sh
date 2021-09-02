#!/bin/bash

export $(grep -v '^#.*' .env | xargs)

echo 'Copy uploads to ./src'
cp -r ./wordpress/wp-content/uploads ./src