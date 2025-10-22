export type ChapterQueryResponse = {
  chapter: Chapter;
  nextChapter: boolean | null;
  previousChapter: boolean | null;
};

type Chapter = {
  id: number;
  slug: string;
  number: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  chapterStatus: 'PUBLIC' | string;
  featuredImage: string;
  totalViews: number;
  price: number;
  unlockAt: string | null;
  isPermanentlyUnlocked: boolean;
  mangaPostId: number;
  team: string | null;
  mangaPost: MangaPost;
  createdBy: CreatedBy;
  _count: LikeCount;
  images: Image[];
  isLocked: boolean;
  isAccessible: boolean;
};

type MangaPost = {
  indexChapters: boolean;
  indexPost: boolean;
  id: number;
  postTitle: string;
  slug: string;
  featuredImage: string;
  isNovel: boolean;
  commentsEnabled: boolean;
};

type CreatedBy = {
  name: string;
  image: string;
  banner: string;
  bio: string;
};

type LikeCount = {
  likes: number;
};

type Image = {
  id: number;
  height: number;
  width: number;
  url: string;
  order: number;
};
