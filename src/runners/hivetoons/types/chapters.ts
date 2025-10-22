export type ChaptersQueryResponse = {
  post: Post;
  totalChapterCount: number;
};

type Post = {
  chapters: Chapter[];
};

export type Chapter = {
  id: number;
  slug: string;
  number: number;
  title: string;
  totalViews: number;
  createdBy: CreatedBy;
  unlockAt: string | null;
  isPermanentlyLocked: boolean;
  price: number;
  mangaPostId: number;
  createdAt: string;
  featuredImage: string;
  chapterStatus: string;
  mangaPost: MangaPost;
  _count: LikeCount;
  chapterPurchased: boolean;
  isLocked: boolean;
  isAccessible: boolean;
};

type CreatedBy = {
  name: string;
};

type MangaPost = {
  postTitle: string;
  slug: string;
  featuredImage: string;
};

type LikeCount = {
  likes: number;
};
