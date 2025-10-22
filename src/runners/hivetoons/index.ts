import {
  CatalogRating,
  Chapter,
  ChapterData,
  Content,
  ContentSource,
  DirectoryConfig,
  DirectoryRequest,
  Generate,
  ImageRequestHandler,
  NetworkRequest,
  PagedResult,
  PageLink,
  PageLinkResolver,
  PageSection,
  ResolvedPageSection,
  RunnerInfo,
} from '@suwatte/daisuke';
import { FILTERS, HOMEPAGE_SECTIONS, SORT_OPTONS } from './constants';
import { Controller } from './controller';

export class Target
  implements ContentSource, ImageRequestHandler, PageLinkResolver
{
  info: RunnerInfo = {
    id: 'org.hivetoons',
    name: 'Hive Toon',
    version: 0.1,
    website: 'https://hivetoons.org',
    thumbnail: 'void_scans.png',
    supportedLanguages: ['en_US'],
    rating: CatalogRating.SAFE,
  };

  private controller = new Controller();

  async getContent(contentId: string): Promise<Content> {
    return this.controller.getContent(contentId);
  }

  async getChapters(contentId: string): Promise<Chapter[]> {
    return this.controller.getChapters(contentId);
  }

  async getChapterData(
    contentId: string,
    chapterId: string,
    chapter?: Chapter
  ): Promise<ChapterData> {
    return this.controller.getChapterData(contentId, chapterId, chapter);
  }

  async willRequestImage(url: string): Promise<NetworkRequest> {
    return {
      url,
      headers: {
        referer: 'https://hivetoons.org',
      },
    };
  }

  async getDirectoryConfig(_configID?: string): Promise<DirectoryConfig> {
    return Generate<DirectoryConfig>({
      filters: FILTERS,
      sort: {
        options: SORT_OPTONS,
        default: {
          id: 'totalViews',
          ascending: false,
        },
        canChangeOrder: false,
      },
    });
  }

  async getDirectory(request: DirectoryRequest): Promise<PagedResult> {
    const results = await this.controller.getDirectoryResults(request);
    return {
      results,
      isLastPage: results.length > 24,
    };
  }

  async getSectionsForPage({ id }: PageLink): Promise<PageSection[]> {
    if (id !== 'home') {
      throw new Error(`Cannot handle page, ${id}`);
    }
    return HOMEPAGE_SECTIONS;
  }

  async willResolveSectionsForPage?(_link: PageLink): Promise<void> {
    await this.controller.getHomePage();
    return;
  }

  async resolvePageSection(
    _link: PageLink,
    sectionID: string
  ): Promise<ResolvedPageSection> {
    return {
      items: await this.controller.resolveHomePageSection(sectionID),
    };
  }
}
