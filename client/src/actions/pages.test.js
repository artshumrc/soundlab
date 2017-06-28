import * as pages from './pages';

describe('pages', () => {
  describe('.nextPage()', () => {
    it('increments `currentPage`', () => {
      expect(pages.nextPage(1)).toEqual({
        type: pages.NEXT_PAGE,
        currentPage: 2,
      });
    });
  });

  describe('.previousPage()', () => {
    it('decrements `currentPage`', () => {
      expect(pages.previousPage(2)).toEqual({
        type: pages.PREVIOUS_PAGE,
        currentPage: 1,
      });
    });
  });
});
