#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

const initCommand = program
  .command('init <AppName>')
  .description('init react native application')
  .option('-s, --stable', 'use stable version instead of the latest one')
  .action((appName, args) => {
    const {spawn} = require('child_process');

    const install = spawn(`${__dirname}/init.sh`, [appName, args.stable]);
    install.stdout.on('data', d => console.log(d.toString()));
    install.stderr.on('data', d => console.log(d.toString()));
    install.on('exit', c =>
      console.log('Child process exited with code ' + c.toString()),
    );
  });

program
  .version(pkg.version)
  .addCommand(initCommand)
  .parse(process.argv);
