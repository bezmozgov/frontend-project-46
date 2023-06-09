#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .name('gendiff')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .description('Compares two configuration files and shows a difference.')
program.parse();
