#!/usr/bin/env node
import path from 'path';
import installCommands from './index';

// eslint-disable-next-line
const cmd = installCommands()
  .version()
  .option('config', {
    alias: 'c',
    type: 'string',
    describe: 'Provide prisma config file path',
    default: path.resolve(process.cwd(), './prisma.yml'),
  })
  .option('dotenv', {
    alias: 'e',
    type: 'string',
    describe: 'Provide env file path',
  })
  .help().argv;
