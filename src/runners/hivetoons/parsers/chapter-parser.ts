import { Chapter, ChapterPage } from '@suwatte/daisuke';
import { ChapterQueryResponse, ChaptersQueryResponse } from '../types';

export const parseChapters = (json: string): Chapter[] => {
  const chaptersApiResponse = JSON.parse(json) as
    | ChaptersQueryResponse
    | undefined;
  if (!chaptersApiResponse) {
    return [];
  }

  const chapters: Chapter[] = chaptersApiResponse.post.chapters.map(
    (chapter, index) => {
      return {
        chapterId: `${chapter.id}`,
        date: new Date(chapter.createdAt),
        index,
        language: 'en_US',
        number: chapter.number,
        webUrl: `https://hivetoons.org/series/${chapter.mangaPost.slug}/${chapter.slug}`,
      };
    }
  );

  return chapters;
};

export const parseChapterData = (json: string) => {
  const chapterApiResponse = JSON.parse(json) as
    | ChapterQueryResponse
    | undefined;
  if (!chapterApiResponse) {
    return [];
  }

  const pages: ChapterPage[] = chapterApiResponse.chapter.images.map(
    (image) => {
      return { url: image.url };
    }
  );
  return pages;
};
