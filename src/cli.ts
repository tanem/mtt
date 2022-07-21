#!/usr/bin/env node

import { Command } from 'commander';

import { description, name, version } from '../package.json';
import { mtt } from './mtt';

const program = new Command();

program.name(name).description(description).version(version);

program
  .argument('<file>', '.m3u8 file to convert to tracklist')
  .action(async (file) => {
    try {
      const result = await mtt(file);
      process.stdout.write(result);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  });

program.parse();
