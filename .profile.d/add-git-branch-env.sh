#!/bin/bash

"GIT_BRANCH=$(git branch)"
cat test.json
$(sed -i'.bak' "s/_branch_/$GIT_BRANCH/g" test.json)
cat test.json

export GIT_BRANCH="$GIT_BRANCH"
export TEST_VAR1=TEST