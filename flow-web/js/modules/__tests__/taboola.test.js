/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://test.example.com/path/to/page"}
 */

import { getPageUrl } from '../taboola';

describe('taboola module', () => {
  describe('getPageUrl()', () => {
    it('returns the current page url', () => {
      const url = getPageUrl();
      expect(url).toEqual('//test.example.com/path/to/page');
    });
  });
});
