import { exec, execSync } from "child_process";
import * as fs from "fs";

console.log("BUILD_DIR", process.env.BUILD_DIR);
console.log("CACHE_DIR", process.env.CACHE_DIR);
console.log("SOURCE_VERSION", process.env.SOURCE_VERSION);
console.log("STACK", process.env.STACK);
console.log("GIT_BRANCH", process.env.GIT_BRANCH);
console.log("GIT_BRANCH1", process.env.GIT_BRANCH1);
console.log("GIT_BRANCH_PROFILE", process.env.GIT_BRANCH_PROFILE);
console.log("GIT_BRANCH_FOO", process.env.GIT_BRANCH_FOO);
console.log("LANG", process.env.LANG);
console.log("LANG1", process.env.LANG1);
console.log("GIT_BRANCH_PROFILE_TEST", process.env.GIT_BRANCH_PROFILE_TEST);
console.log("LANG_TEST", process.env.LANG_TEST);
console.log("TEST_VAR1", process.env.TEST_VAR1);
console.log("TEST_VAR", process.env.TEST_VAR);
console.log("TEST_VAR2", process.env.TEST_VAR2);

// console.log(JSON.stringify(process.env, null, 2));

console.log(fs.readFileSync("./test.json", "utf-8"));
