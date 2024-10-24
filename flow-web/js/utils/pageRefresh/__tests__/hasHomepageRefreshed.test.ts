/**
 * @jest-environment jsdom
 */

import 'jest-location-mock';

import hasHomepageRefreshed from '../hasHomepageRefreshed';
import hasPageRefreshed from '../hasPageRefreshed';

jest.mock('../hasPageRefreshed');

describe('hasPageRefreshed()', () => {
  const mockHasPageRefreshed = hasPageRefreshed as jest.MockedFunction<
    typeof hasPageRefreshed
  >;
  const originalLocationPath = location.pathname;

  afterEach(() => {
    location.pathname = '';
  });

  afterAll(() => {
    location.pathname = originalLocationPath;
  });

  it("will return 'false' if the page has not refreshed", () => {
    mockHasPageRefreshed.mockReturnValueOnce(false);
    const result = hasHomepageRefreshed();
    expect(result).toBeFalse();
    expect(mockHasPageRefreshed).toHaveBeenCalledOnce();
  });

  it("will return 'false' if the page has refreshed but not on the homepage", () => {
    mockHasPageRefreshed.mockReturnValueOnce(true);
    location.pathname = '/some-other-path';
    const result = hasHomepageRefreshed();
    expect(result).toBeFalse();
  });

  it("will return 'true' if the page has refreshed on the homepage", () => {
    mockHasPageRefreshed.mockReturnValueOnce(true);
    location.pathname = '/';
    const result = hasHomepageRefreshed();
    expect(result).toBeTrue();
  });
});
