/**
 * @jest-environment jsdom
 */

import * as theModule from '../AdTagURL';

describe('AdTagURL()', () => {
  const endpoint = 'https://example.com/ads';
  const searchWithoutCustParams = 'p0=v0&p1=v1';
  const searchWithEmptyCustParams = 'p0=v0&p1=v1&cust_params=';
  const searchCompleteCustParams = 'p0=v0&p1=v1&cust_params=c0%3Dv0%26c1%3Dv1';

  describe('given the ad tag without "cust_params"', () => {
    const input = `${endpoint}?${searchWithoutCustParams}`;
    let adTag;

    beforeAll(() => {
      adTag = new theModule.AdTagURL(input);
    });

    it('provides property "search" which returns value with empty "cust_params"', () => {
      expect(adTag.search).toMatchInlineSnapshot(`"p0=v0&p1=v1&cust_params="`);
    });

    it('provides property "searchParams" which returns value with empty "cust_params"', () => {
      expect(adTag.searchParams instanceof URLSearchParams).toBe(true);
      expect(adTag.searchParams.get('cust_params')).toBe('');
    });

    it('provides property "cust" which returns value with empty "cust_params"', () => {
      expect(adTag.cust).toBe('');
    });

    it('provides property "custParams" which returns value with empty "cust_params"', () => {
      expect(adTag.custParams).toEqual(new URLSearchParams());
    });

    it('outputs string without "cust_params"', () => {
      expect(adTag.toString()).toMatchInlineSnapshot(
        `"https://example.com/ads?p0=v0&p1=v1&cust_params="`,
      );
    });
  });

  describe('given the ad tag with empty "cust_params"', () => {
    const input = `${endpoint}?${searchWithEmptyCustParams}`;
    let adTag;

    beforeAll(() => {
      adTag = new theModule.AdTagURL(input);
    });

    it('provides property "search" which returns value with empty "cust_params"', () => {
      expect(adTag.search).toMatchInlineSnapshot(`"p0=v0&p1=v1&cust_params="`);
    });

    it('provides property "searchParams" which returns value with empty "cust_params"', () => {
      expect(adTag.searchParams instanceof URLSearchParams).toBe(true);
      expect(adTag.searchParams.get('cust_params')).toBe('');
    });

    it('provides property "cust" which returns value with empty "cust_params"', () => {
      expect(adTag.cust).toBe('');
    });

    it('provides property "custParams" which returns value with empty "cust_params"', () => {
      expect(adTag.custParams instanceof URLSearchParams).toBe(true);
      expect(adTag.custParams).toEqual(new URLSearchParams());
    });

    it('outputs string with empty "cust_params"', () => {
      expect(adTag.toString()).toMatchInlineSnapshot(
        `"https://example.com/ads?p0=v0&p1=v1&cust_params="`,
      );
    });
  });

  describe('given the ad tag with "cust_params"', () => {
    const input = `${endpoint}?${searchCompleteCustParams}`;
    let adTag;

    beforeAll(() => {
      adTag = new theModule.AdTagURL(input);
    });

    it('provides property "search" which returns value with "cust_params"', () => {
      expect(adTag.search).toMatchInlineSnapshot(
        `"p0=v0&p1=v1&cust_params=c0%3Dv0%26c1%3Dv1"`,
      );
    });

    it('provides property "searchParams" which returns value with "cust_params"', () => {
      expect(adTag.searchParams instanceof URLSearchParams).toBe(true);
      expect(adTag.searchParams.get('cust_params')).toBe('c0=v0&c1=v1');
    });

    it('provides property "cust" which returns value with "cust_params"', () => {
      expect(adTag.cust).toBe('c0=v0&c1=v1');
    });

    it('provides property "custParams" which returns value with "cust_params"', () => {
      expect(adTag.custParams instanceof URLSearchParams).toBe(true);
      expect(adTag.custParams).toEqual(new URLSearchParams('?c0=v0&c1=v1'));
    });

    it('outputs string with empty "cust_params"', () => {
      expect(adTag.toString()).toMatchInlineSnapshot(
        `"https://example.com/ads?p0=v0&p1=v1&cust_params=c0%3Dv0%26c1%3Dv1"`,
      );
    });
  });
});
