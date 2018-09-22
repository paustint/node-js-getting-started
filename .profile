#!/bin/sh

# add vendor binaries to the path
# export PATH=$PATH:GIT_BRANCH=$(git branch)
echo "MY GIT BRANCH! $(git branch)"
echo $(git branch)
export GIT_BRANCH_PROFILE="$(git branch)"
echo "GIT_BRANCH_PROFILE: $GIT_BRANCH_PROFILE"

export LANG=${LANG:-en_US.UTF-8}
echo "LANG: $LANG"