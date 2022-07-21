import fs from 'fs/promises';

export const mtt = async (filePath: string) => {
  const fileContents = await fs.readFile(filePath, {
    encoding: 'utf-8',
  });

  return fileContents
    .split('\n')
    .filter((line) => line.startsWith('#EXTINF'))
    .map((line, index) => line.trim().replace(/#EXTINF:\d+,/, `${index + 1}. `))
    .join('\n');
};
