import emulate from '@suwatte/emulator';
import { Target } from '../runners/hivetoons';

describe('Hive Toons', () => {
  const source = emulate(Target);

  describe('HomePage', () => {
    test('Fetch Home Page', async () => {
      await source.getSectionsForPage({ id: 'home' });
      await source.willResolveSectionsForPage!({ id: 'home' })!;

      const result1 = await source.resolvePageSection(
        { id: 'home' },
        'popular'
      );
      const result2 = await source.resolvePageSection({ id: 'home' }, 'latest');
      const results = [result1, result2].filter(Boolean);

      for (const result of results) {
        expect(result.items).toBeDefined();
        expect(result.items!.length).toBeGreaterThan(0);
        // console.log(JSON.stringify(result, null, 2));
      }
    });
  });

  describe('Get Content', () => {
    const CONTENT_ID = '12';
    test('Eleceed', async () => {
      const result = await source.getContent(CONTENT_ID);
      expect(result.title).toEqual('Eleceed');
      // console.log(JSON.stringify(result, null, 2));
    });

    test('Get Chapters', async () => {
      const result = await source.getChapters(CONTENT_ID);
      expect(result.length).toBeGreaterThan(1);
      // console.log(JSON.stringify(result, null, 2));
    });

    test('Get Chapter Data', async () => {
      const result = await source.getChapters(CONTENT_ID);
      let targets = result.slice(0, 3);

      for (const target of targets) {
        const result = await source.getChapterData(
          CONTENT_ID,
          target.chapterId,
          target
        );
        expect(result.pages).toBeDefined();
        // console.log(JSON.stringify(result, null, 2));
      }
    });
  });

  describe('Get Directory', () => {
    test('Search', async () => {
      const result = await source.getDirectory({
        query: 'eleceed',
        page: 1,
      });
      // console.log(JSON.stringify(result, null, 2));
    });
  });
});
