import { DirectoryRequest, Highlight } from '@suwatte/daisuke';
import { FilterResult } from '../constants';
import { QueryResponse } from '../types';

// Search
export const parseSearchRequest = (request: DirectoryRequest<FilterResult>) => {
  const params: Record<string, any> = {
    page: request.page ?? 1,
    orderBy: request.sort?.id ?? 'topview',
  };

  if (request.query) {
    params.searchTerm = request.query;
  }
  if (!request.filters) {
    return params;
  }

  if (request.filters.genre) {
    const filter = request.filters.genre;
    if (filter.included)
      params['g_i'] = filter.included.map((v) => `_${v}`).join('');
    if (filter.excluded)
      params['g_e'] = filter.excluded.map((v) => `_${v}`).join('');
  }

  if (request.filters.status) {
    const key = request.filters.status;
    if (key !== 'all') params.sts = key;
  }

  return params;
};

export const parseSearchResponse = (json: string) => {
  const apiResponse = JSON.parse(json) as QueryResponse | undefined;
  if (!apiResponse) {
    return [];
  }
  const highlights = apiResponse.posts
    .map((post) => {
      return {
        cover: post.featuredImage,
        id: `${post.id}`,
        title: post.postTitle,
      };
    })
    .filter((v) => v.cover && v.id && v.title) as unknown as Highlight[];
  return highlights;
};
