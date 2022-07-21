# mtt

[![npm version](https://img.shields.io/npm/v/@tanem/mtt.svg?style=flat-square)](https://www.npmjs.com/package/@tanem/mtt)
[![build status](https://img.shields.io/github/workflow/status/tanem/mtt/CI?style=flat-square)](https://github.com/tanem/mtt/actions?query=workflow%3ACI)
[![coverage status](https://img.shields.io/codecov/c/github/tanem/mtt.svg?style=flat-square)](https://codecov.io/gh/tanem/mtt)
[![npm downloads](https://img.shields.io/npm/dm/@tanem/mtt.svg?style=flat-square)](https://www.npmjs.com/package/@tanem/mtt)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/@tanem/mtt?style=flat-square)](https://bundlephobia.com/result?p=@tanem/mtt)

> .(m)3u8 (t)o (t)racklist.

## Background

As a [rekordbox](https://rekordbox.com) user that DJs with USBs, I often want to upload tracklists to sites such as [Mixcloud](https://mixcloud.com) or [Soundcloud](https://soundcloud.com). One way to do this is to export a USB playlist from rekordbox as a \*.m3u8 file, then use this library to generate a tracklist.

## Usage

### CLI

```
Usage: mtt [options] <file>

.(m)3u8 (t)o (t)racklist

Arguments:
  file           .m3u8 file to convert to tracklist

Options:
  -V, --version  output the version number
  -h, --help     display help for command
```

### API

```js
const fs = require('fs/promises');
const path = require('path');
const { mtt } = require('@tanem/mtt');

(async () => {
  try {
    const result = await mtt(path.join(__dirname, 'test.m3u8'));
    await fs.writeFile(path.join(__dirname, 'tracklist.txt'), result, 'utf-8');
  } catch (error) {
    console.error(error);
  }
})();
```

The above example can be run using `npm run example`.

## Installation

### CLI

```
$ npm i -g @tanem/mtt
```

### API

```
$ npm i @tanem/mtt
```

## License

MIT
