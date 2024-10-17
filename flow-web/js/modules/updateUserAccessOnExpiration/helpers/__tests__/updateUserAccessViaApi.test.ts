import updateUserAccessViaApi from '../updateUserAccessViaApi';

import type { MockedFetch } from '#types/jest';

describe('updateUserAccessViaApi()', () => {
  const originalFetch = global.fetch;
  let mockFetch: MockedFetch;

  beforeAll(() => {
    global.fetch = jest.fn();
    mockFetch = global.fetch as MockedFetch;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  it("will make a request to update the user's access via API and not throw on successful request", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
    } as Response);
    await updateUserAccessViaApi();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      '/api/user/logged-in-cookies/update',
      {
        method: 'POST',
      },
    );
  });

  it("will throw on unsuccessful request to update user's access via API", async () => {
    const mockServerError = 'some-server-error';
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: jest.fn().mockResolvedValueOnce(mockServerError),
    } as unknown as Response);
    await expect(updateUserAccessViaApi()).rejects.toThrow(mockServerError);
  });
});
