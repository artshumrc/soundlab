// @flow

export const NEXT_PAGE = 'NEXT_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';

export const nextPage = (page: number) => ({
  type: NEXT_PAGE,
  currentPage: page + 1,
});

export const previousPage = (page: number) => ({
  type: PREVIOUS_PAGE,
  currentPage: page - 1,
});
