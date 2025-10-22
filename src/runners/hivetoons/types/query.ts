import { Genre } from '.';

export type QueryResponse = {
  posts: Post[];
  totalCount: number;
};

type Post = {
  id: number;
  slug: string;
  postTitle: string;
  postContent: string;
  isNovel: boolean;
  isNew: boolean;
  chaptersPricing: number;
  featuredImage: string;
  featuredImageCL: string;
  featuredLogo: string;
  seriesColor: string;
  banner: string;
  bannerHero: string;
  bannerenabled: boolean;
  postStatus: 'PUBLIC' | 'string';
  postType: 'SERIES' | 'NOVEL' | 'ARTICLE';
  postPassword: string | null;
  indexPost: boolean;
  indexChapters: boolean;
  adsense: boolean;
  enableAds: boolean;
  sendMessageToDiscord: boolean;
  discordRoleID: string;
  createdAt: string;
  updatedAt: string;
  lastChapterAddedAt: string;
  alternativeTitles: string;
  releaseDate: string;
  author: string;
  artist: string;
  hot: boolean;
  seriesType: 'MANHWA' | 'MANGA' | 'WEBTOON' | string;
  seriesStatus: 'ONGOING' | 'COMPLETED' | 'HIATUS' | string;
  publishingTeamId: string | null;
  totalViews: number;
  userId: string;
  commentsEnabled: boolean;
  genres: Genre[];
  chapters: Chapter[];
  averageRating: number;
};

type Chapter = {
  id: number;
  number: number;
  title: string;
  featuredImage: string;
  slug: string;
  mangaPostId: number;
  createdAt: string;
  unlockAt: string;
  isPurchased: boolean;
  isLocked: boolean;
  isAccessible: boolean;
};
