import updateUserAccessViaApi from '../updateUserAccessViaApi';

describe('updateUserAccessViaApi()', () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    delete global.fetch;
  });

  it("will make a request to update the user's access via API and not throw on successful request", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
    });
    await updateUserAccessViaApi();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      '/api/user/logged-in-cookies/update',
      {
        method: 'POST',
      },
    );
  });

  it("will throw on unsuccessful request to update user's access via API", async () => {
    const mockServerError = 'some-server-error';
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: jest.fn().mockResolvedValueOnce(mockServerError),
    });
    await expect(updateUserAccessViaApi()).rejects.toThrow(mockServerError);
  });
});
