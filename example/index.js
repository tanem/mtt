const fs = require('fs/promises');
const path = require('path');
const { mtt } = require('../dist');

(async () => {
  try {
    const result = await mtt(path.join(__dirname, 'test.m3u8'));
    await fs.writeFile(path.join(__dirname, 'tracklist.txt'), result, 'utf-8');
  } catch (error) {
    console.error(error);
  }
})();
