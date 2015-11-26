#!/bin/bash
#echo $0: Creating virtual environment

if [ ! -d "./env" ]; then
  virtualenv --prompt="site" ./env
  mkdir ./logs
  mkdir ./pids
  mkdir ./db
  mkdir ./static_content
  chmod -R 777 ./logs
fi

directory=$(dirname -- $(readlink -fn -- "$0"))
project_name=$(echo "$directory" | sed 's!.*/!!')
if [ ! -d "/home/www/media_files/$project_name" ]; then
  mkdir -p "/home/www/media_files/$project_name"
fi
if [ ! -d "./$project_name/$project_name/media" ]; then
  ln -s "/home/www/media_files/$project_name" "./$project_name/$project_name/media"
fi

echo $0: Installing dependencies
source ./env/bin/activate
export PIP_REQUIRE_VIRTUALENV=true
./env/bin/pip install --requirement=./requirements.conf --log=./logs/build_pip_packages.log

echo $0: Making virtual environment relocatable
virtualenv --relocatable ./env

echo $0: Creating virtual environment finished.
