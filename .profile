#!/bin/sh

# add vendor binaries to the path
# export PATH=$PATH:GIT_BRANCH=$(git branch)
export "GIT_BRANCH_PROFILE=$(git branch)"
export LANG1=${LANG:-en_US.UTF-8}
