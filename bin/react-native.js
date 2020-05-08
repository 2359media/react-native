#!/usr/bin/env node
let currentNodeVersion = process.versions.node;
console.log(currentNodeVersion);

const program = require("commander");
const pkg = require("../package.json");

let args;
program
  .version(pkg.version)
  .usage("[YourProjectName]")
  .action((n) => (args = n.args))
  .parse(process.argv);

if (!args || args[0] !== "init" || !args[1]) {
  console.log("Usage: init [YourProjectName]\n");
  return;
}
args.shift();

const { spawn } = require("child_process");
const install = spawn(`${__dirname}/init.sh`, args);

install.stdout.on("data", d => console.log(d.toString()));
install.stderr.on("data", d => console.log(d.toString()));
install.on("exit", c => console.log("Child process exited with code " + c.toString()));
