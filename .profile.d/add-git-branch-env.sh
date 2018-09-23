#!/bin/bash

cat test.json
$(sed -i'.bak' "s/_branch_/$GIT_BRANCH/g" test.json)
cat test.json

export TEST_VAR1=TEST