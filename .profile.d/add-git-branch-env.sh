#!/bin/bash

export "GIT_BRANCH_PROFILE1=$(git branch)"
export LANG1=${LANG:-en_US.UTF-8}

export TEST1=$1
export TEST2=$2
export TEST3=$3

echo "GIT_BRANCH_PROFILE1: $GIT_BRANCH_PROFILE1"
echo "LANG1 = $LANG1"

