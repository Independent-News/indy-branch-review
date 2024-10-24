/**
 * @jest-environment jsdom
 */

import 'jest-location-mock';

import { QUERY_PARAM_CMP_PAGE_REFRESH } from '#app/constants/queryParameters';

import hasPageRefreshed from '../hasPageRefreshed';

describe('hasPageRefreshed()', () => {
  const originalLocationSearch = location.search;

  afterEach(() => {
    location.search = '';
  });

  afterAll(() => {
    originalLocationSearch;
  });

  it("will return 'true' if the cmp page refresh query string is present", () => {
    location.search = `?${QUERY_PARAM_CMP_PAGE_REFRESH}`;
    const result = hasPageRefreshed();
    expect(result).toBeTrue();
  });

  it("will return 'false' if the cmp page refresh query string is not present", () => {
    location.search = `?someOtherQueryString=true`;
    const result = hasPageRefreshed();
    expect(result).toBeFalse();
  });
});
