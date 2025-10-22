import { Chapter, Genre } from '.';

export type PostQueryResponse = {
  firstChapter: IndividualChapter;
  lastChapter: IndividualChapter;
  totalChapterCount: number;
  post: Post;
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
  postStatus: string;
  postType: string;
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
  seriesType: string;
  seriesStatus: string;
  publishingTeamId: number | null;
  totalViews: number;
  userId: string;
  commentsEnabled: boolean;
  genres: Genre[];
  team: any[]; // unknown shape – keep as any[]
  chapters: PostChapter[];
  createdby: CreatedBy;
  ratings: any[]; // unknown shape – keep as any[]
  publishingTeam: any | null; // unknown shape
  _count: BookmarkCount;
  averageRating: number;
};

type IndividualChapter = {
  number: number;
  slug: string;
};

type BookmarkCount = {
  bookmarks: number;
};

type CreatedBy = {
  id: string;
  name: string;
  image: string;
  banner: string;
  country: string;
  bio: string;
};

type PostChapter = Omit<Chapter, '_count' | 'chapterPurchased'> & {
  likesCount: number;
};
