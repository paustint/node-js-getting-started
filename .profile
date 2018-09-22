#!/bin/sh

# add vendor binaries to the path
# export PATH=$PATH:GIT_BRANCH=$(git branch)
echo "MY GIT BRANCH! $(git branch)"

export GIT_BRANCH=$(git branch)
export LANG=${LANG:-en_US.UTF-8}