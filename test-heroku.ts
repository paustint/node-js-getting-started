import { exec, execSync } from "child_process";
import * as fs from "fs";

console.log("BUILD_DIR", process.env.BUILD_DIR);
console.log("CACHE_DIR", process.env.CACHE_DIR);
console.log("SOURCE_VERSION", process.env.SOURCE_VERSION);
console.log("STACK", process.env.STACK);
console.log("GIT_BRANCH", process.env.GIT_BRANCH);
console.log("GIT_BRANCH_PROFILE", process.env.GIT_BRANCH_PROFILE);
console.log("LANG", process.env.LANG);
console.log("GIT_BRANCH_PROFILE_TEST", process.env.GIT_BRANCH_PROFILE_TEST);
console.log("LANG_TEST", process.env.LANG_TEST);

console.log(JSON.stringify(process.env, null, 2));
