import {
  DirectoryFilter,
  ExcludableMultiSelectProp,
  FilterType,
  Option,
  PageSection,
  Property,
  SectionStyle,
} from '@suwatte/daisuke';

export const GENRE_OPTIONS: Option[] = [
  { id: '1', title: 'Acting' },
  { id: '2', title: 'Drama' },
  { id: '3', title: 'Fantasy' },
  { id: '4', title: 'Shounen' },
  { id: '5', title: 'Action' },
  { id: '6', title: 'Comedy' },
  { id: '7', title: 'School Life' },
  { id: '8', title: 'Supernatural' },
  { id: '9', title: 'Mystery' },
  { id: '10', title: 'Thriller' },
  { id: '11', title: 'Mature' },
  { id: '12', title: 'Gang' },
  { id: '13', title: 'Adventure' },
  { id: '14', title: 'Martial Arts' },
  { id: '15', title: 'Seinen' },
  { id: '16', title: 'Fight' },
  { id: '17', title: 'Law' },
  { id: '18', title: 'Revenge' },
  { id: '19', title: 'Adult' },
  { id: '20', title: 'School' },
  { id: '21', title: 'Violence' },
  { id: '22', title: 'Sci-fi' },
  { id: '23', title: 'Isekai' },
  { id: '24', title: 'Josei' },
  { id: '25', title: 'romance' },
  { id: '26', title: 'Agent' },
  { id: '27', title: 'Slice of Life' },
  { id: '28', title: 'System' },
  { id: '29', title: 'Money' },
  { id: '30', title: 'Rebirth' },
  { id: '31', title: 'Reincarnation' },
  { id: '32', title: 'illusion' },
  { id: '33', title: 'Murim' },
  { id: '34', title: 'Horror' },
  { id: '35', title: 'Psychological' },
  { id: '36', title: 'Juvenile' },
  { id: '37', title: 'Historical' },
  { id: '38', title: 'Tragedy' },
  { id: '39', title: 'Overpowered' },
  { id: '40', title: 'Dark Lord' },
  { id: '41', title: 'Magic' },
  { id: '42', title: 'Dropped' },
  { id: '43', title: 'Bullying' },
  { id: '44', title: 'ArcheR' },
  { id: '45', title: 'Game' },
  { id: '46', title: 'Harem' },
  { id: '47', title: 'Survival' },
  { id: '48', title: 'Ecchi' },
  { id: '49', title: 'Demon King shit' },
  { id: '50', title: 'Hero' },
  { id: '51', title: 'Shoujo' },
  { id: '52', title: 'Brutal' },
  { id: '53', title: 'Gender Bender' },
  { id: '54', title: 'Shotacon' },
  { id: '55', title: 'Swordfight' },
  { id: '56', title: 'Vampire' },
  { id: '57', title: 'Sports' },
  { id: '58', title: 'Webtoon' },
  { id: '59', title: 'Medical' },
  { id: '60', title: 'Regression' },
];

export const SORT_OPTONS: Option[] = [
  { id: 'totalViews', title: 'Top Read' },
  { id: 'lastChapterAddedAt', title: 'Latest' },
];

export const STATUS_OPTIONS: Option[] = [
  { id: 'all', title: 'All' },
  { id: 'ONGOING', title: 'Ongoing' },
  { id: 'COMPLETED', title: 'Completed' },
  { id: 'CANCELLED', title: 'Cancelled' },
  { id: 'DROPPED', title: 'Dropped' },
  { id: 'MASS_RELEASED', title: 'Mass Released' },
  { id: 'COMING_SOON', title: 'Coming Soon' },
  { id: 'HIATUS', title: 'Hiatus' },
];

export const HOMEPAGE_SECTIONS: PageSection[] = [
  {
    id: 'popular',
    title: 'Popular',
    style: SectionStyle.DEFAULT,
  },
  {
    id: 'latest',
    title: 'Latest Update',
    style: SectionStyle.DEFAULT,
  },
  // {
  //   id: 'trending',
  //   title: 'Trending',
  //   style: SectionStyle.DEFAULT,
  // },
];

export const FILTERS: DirectoryFilter[] = [
  {
    id: 'genre',
    title: 'Genres',
    type: FilterType.MULTISELECT,
    options: GENRE_OPTIONS,
  },
  {
    id: 'status',
    title: 'Status',
    type: FilterType.SELECT,
    options: STATUS_OPTIONS,
  },
];

export type FilterResult = {
  genre?: ExcludableMultiSelectProp;
  status?: string;
};

export const PROPERTIES: Property[] = [
  {
    id: 'genre',
    title: 'Genres',
    tags: GENRE_OPTIONS.map((v) => ({
      ...v,
      id: v.id,
    })),
  },
];
