import { Chapter, Content, DirectoryRequest } from '@suwatte/daisuke';
import { CheerioAPI, load } from 'cheerio';
import {
  parseChapterData,
  parseChapters,
  parseContent,
  parseSearchRequest,
  parseSearchResponse,
} from './parsers';

export class Controller {
  private client = new NetworkClient();
  private homepage: CheerioAPI | undefined;

  async getHomePage() {
    const { data } = await this.client.get('https://api.hivetoons.org/api');
    this.homepage = load(data);
  }

  async resolveHomePageSection(id: string) {
    if (!this.homepage) {
      throw new Error('Homepage Not Initialized');
    }
    switch (id) {
      case 'popular': {
        const { data } = await this.client.get(
          'https://api.hivetoons.org/api/query',
          {
            params: parseSearchRequest({
              page: 1,
              sort: { id: 'totalViews' },
            }),
          }
        );
        return parseSearchResponse(data);
      }
      case 'latest': {
        const { data } = await this.client.get(
          'https://api.hivetoons.org/api/query',
          {
            params: parseSearchRequest({
              page: 1,
              sort: { id: 'lastChapterAddedAt' },
            }),
          }
        );
        return parseSearchResponse(data);
      }
    }
    throw 'Invalid Collection ID';
  }

  async getDirectoryResults(request: DirectoryRequest) {
    const params = parseSearchRequest(request);
    const { data } = await this.client.get(
      'https://api.hivetoons.org/api/query',
      { params }
    );

    return parseSearchResponse(data);
  }

  async getContent(contentId: string): Promise<Content> {
    const { data } = await this.client.get(
      'https://api.hivetoons.org/api/post',
      {
        params: {
          postId: contentId,
        },
      }
    );

    return parseContent(data);
  }

  async getChapters(contentId: string) {
    const params = {
      postId: contentId,
      skip: 0,
      take: 900,
      order: 'desc',
    };
    const { data } = await this.client.get(
      `https://api.hivetoons.org/api/chapters`,
      {
        params,
      }
    );

    const chapters = parseChapters(data);
    return chapters;
  }

  async getChapterData(
    contentId: string,
    chapterId: string,
    _chapter?: Chapter
  ) {
    const { data } = await this.client.get(
      `https://api.hivetoons.org/api/chapter`,
      {
        params: {
          chapterId,
        },
      }
    );

    const pages = parseChapterData(data);
    return {
      contentId,
      chapterId,
      pages,
    };
  }
}
