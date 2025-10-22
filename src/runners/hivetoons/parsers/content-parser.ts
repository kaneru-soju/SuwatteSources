import {
  Chapter,
  Content,
  PublicationStatus,
  ReadingMode,
} from '@suwatte/daisuke';
import { PostQueryResponse } from '../types';

export const parseContent = (json: string): Content => {
  const apiResponse = JSON.parse(json) as PostQueryResponse | undefined;
  if (!apiResponse) {
    throw new Error('Parsing Error\nFailed to parse API response');
  }

  return {
    chapters: apiResponse.post.chapters.map((chapter, index) => {
      return {
        chapterId: `${chapter.id}`,
        date: new Date(chapter.createdAt),
        index,
        language: 'en_US',
        number: chapter.number,
        webUrl: `https://hivetoons.org/series/${chapter.mangaPost.slug}/${chapter.slug}`,
      } as Chapter;
    }),
    cover: apiResponse.post.featuredImage,
    creators: [apiResponse.post.artist, apiResponse.post.author].filter(
      Boolean
    ),
    properties: [
      {
        id: 'genre',
        title: 'Genres',
        tags: apiResponse.post.genres
          .filter((genre) => genre.id)
          .map((genre) => {
            return { id: `${genre.id}`, title: genre.name };
          }),
      },
    ],
    recommendedPanelMode:
      apiResponse.post.seriesType === 'MANGA'
        ? ReadingMode.PAGED_MANGA
        : ReadingMode.WEBTOON,
    status: parseStatus(apiResponse.post.seriesStatus),
    summary: apiResponse.post.postContent,
    title: apiResponse.post.postTitle,
    webUrl: `https://hivetoons.org/series/${apiResponse.post.slug}`,
  };
};

const parseStatus = (text?: string) => {
  if (!text) {
    return;
  }
  switch (text.toLocaleLowerCase()) {
    case 'ongoing':
      return PublicationStatus.ONGOING;
    case 'completed':
      return PublicationStatus.COMPLETED;
  }
};
