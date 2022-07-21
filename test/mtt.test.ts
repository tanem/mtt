import path from 'path';

import { mtt } from '../src';

it('converts .m3u8 to tracklist', async () => {
  await expect(mtt(path.join(__dirname, 'test.m3u8'))).resolves
    .toMatchInlineSnapshot(`
          "1. Loopity Goofs - Hustlers And Pushers (Original Mix)
          2. Joss Moog - Big Dudes (Original Mix)
          3. Tommy Largo - Set Da Funk"
        `);
});
