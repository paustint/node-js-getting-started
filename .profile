#!/bin/sh

# add vendor binaries to the path
# export PATH=$PATH:GIT_BRANCH=$(git branch)
export "GIT_BRANCH_PROFILE=$(git branch)"
export "GIT_BRANCH_PROFILE=$GIT_BRANCH"
export LANG=${LANG:-en_US.UTF-8}

export 1=$1
export 2=$2
export 3=$3