import { exec, execSync } from "child_process";
import * as fs from "fs";

console.log("BUILD_DIR", process.env.BUILD_DIR);
console.log("CACHE_DIR", process.env.CACHE_DIR);
console.log("SOURCE_VERSION", process.env.SOURCE_VERSION);
console.log("STACK", process.env.STACK);
console.log("GIT_BRANCH", process.env.GIT_BRANCH);
