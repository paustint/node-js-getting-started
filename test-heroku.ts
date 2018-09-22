import { exec, execSync } from "child_process";
import * as fs from "fs";

console.log("BUILD_DIR", process.env.BUILD_DIR);
console.log("CACHE_DIR", process.env.CACHE_DIR);
console.log("SOURCE_VERSION", process.env.SOURCE_VERSION);
console.log("STACK", process.env.STACK);
console.log("GIT_BRANCH", process.env.GIT_BRANCH);
console.log("GIT_BRANCH_PROFILE", process.env.GIT_BRANCH_PROFILE);
console.log("LANG", process.env.LANG);
console.log("1", process.env["1"]);
console.log("2", process.env["2"]);
console.log("3", process.env["3"]);
console.log("TEST1", process.env["TEST1"]);
console.log("TEST2", process.env["TEST2"]);
console.log("TEST3", process.env["TEST3"]);
