// HomePage

// export const parseHomePageTrendingSection = ($: CheerioAPI): any => {
//   const trendingSection = $('h1')
//     .filter((_, el) => $(el).text().trim() === 'Trending')
//     .parents()
//     .eq(1);
//   const elements = $('.grid', trendingSection).children();
//   const highlights: Highlight[] = [];

//   for (const element of elements) {
//     const cover = $('img', element).attr('src');
//     const anchor = element.tagName === 'a' ? element : $('a', element);
//     const contentId = $(anchor).attr('href')?.split('/').pop();
//     const title = $('img', element).attr('alt');

//     if (!contentId || !cover || !title) continue;

//     highlights.push({ id: contentId, title, cover });
//   }

//   return highlights;
// };
