/**
 * @jest-environment jsdom
 */

import {
  SUBSCRIBER_ORIGIN_OTHERS,
  SUBSCRIBER_ORIGIN_UK,
} from '#app/constants/subscriberOrigin';

import waitForAllPromisesToResolve from '#app/jest-utils/waitForAllPromisesToResolve';

describe('student-verify module', () => {
  const localStorageKey = 'studentRedirectUrl';
  const subscribePagePath = '/subscribe';
  const studentMappingsPath = 'subscription/student-template-mappings';
  const testUrl = 'https://independent.co.uk/test-url';
  const jsonMock = { json: jest.fn() };
  const redirectMock = jest.fn();
  const getSubscriberOriginOnClientMock = jest.fn();
  const internalApiGetMock = jest.fn();
  const buildSubscriptionRedirectUrlMock = jest.fn();
  const mockRedirect = async () => {
    jest.doMock('../../utils/redirect', () => ({
      __esModule: true,
      redirect: redirectMock,
    }));
    return (await import('../../utils/redirect')).redirect;
  };
  const mockGetSubscriberOriginOnClient = async () => {
    jest.doMock('#app/public/js/utils/getSubscriberOriginOnClient', () => ({
      __esModule: true,
      getSubscriberOriginOnClient: getSubscriberOriginOnClientMock,
    }));
    return (await import('#app/public/js/utils/getSubscriberOriginOnClient'))
      .getSubscriberOriginOnClient;
  };
  const mockInternalApiGet = async () => {
    jest.doMock('#app/public/js/utils/internalApi', () => ({
      __esModule: true,
      InternalApi: {
        get: internalApiGetMock,
      },
    }));
    return (await import('#app/public/js/utils/internalApi')).InternalApi.get;
  };
  const mockBuildSubscriptionRedirectUrl = async () => {
    jest.doMock('#app/util/buildSubscriptionRedirectUrl', () => ({
      __esModule: true,
      buildSubscriptionRedirectUrl: buildSubscriptionRedirectUrlMock,
    }));
    return (await import('#app/util/buildSubscriptionRedirectUrl'))
      .buildSubscriptionRedirectUrl;
  };
  const importStudentVerifyScript = async () => {
    await import('#app/public/js/student-verify');
    await waitForAllPromisesToResolve();
  };

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(),
      },
    });
  });

  beforeEach(async () => {
    jest.spyOn(console, 'error').mockImplementation();
    (await mockGetSubscriberOriginOnClient()).mockReturnValue(
      SUBSCRIBER_ORIGIN_UK,
    );
    await mockRedirect();
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  it('will redirect to saved redirect url in local storage if present', async () => {
    window.localStorage.getItem.mockReturnValue(testUrl);
    await importStudentVerifyScript();
    expect(redirectMock).toHaveBeenCalledTimes(1);
    expect(redirectMock).toHaveBeenCalledWith(testUrl);
    expect(window.localStorage.getItem).toHaveBeenCalledWith(localStorageKey);
    expect(getSubscriberOriginOnClientMock).toHaveBeenCalled();
  });

  it('will redirect to subscribe page if no redirect url saved in local storage and fails to fetch student template mappings to build new url', async () => {
    const testErrorObject = { message: 'test-error-message' };
    window.localStorage.getItem.mockReturnValue(null);
    (await mockInternalApiGet()).mockResolvedValue({
      ...jsonMock,
      ok: false,
    });
    jsonMock.json.mockResolvedValue(testErrorObject);
    await importStudentVerifyScript();
    expect(redirectMock).toHaveBeenCalledTimes(1);
    expect(redirectMock).toHaveBeenCalledWith(subscribePagePath);
    expect(window.localStorage.getItem).toHaveBeenCalledWith(localStorageKey);
    expect(getSubscriberOriginOnClientMock).toHaveBeenCalled();
    expect(internalApiGetMock).toHaveBeenCalledWith(studentMappingsPath);
    expect(jsonMock.json).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(
      expect.objectContaining(testErrorObject),
    );
  });

  it('will redirect to built subscription url if no redirect url saved in local storage and succeeds in fetching student template mappings', async () => {
    const mockOfferId = 'test-offer-id';
    const mockTermId = 'test-tide-annual-term-id';
    window.localStorage.getItem.mockReturnValue(null);
    (await mockInternalApiGet()).mockResolvedValue({
      ...jsonMock,
      ok: true,
    });
    jsonMock.json.mockResolvedValue({
      offerid: mockOfferId,
      'tide-annual-term-id': mockTermId,
    });
    (await mockBuildSubscriptionRedirectUrl()).mockReturnValue(testUrl);
    await importStudentVerifyScript();
    expect(redirectMock).toHaveBeenCalledTimes(1);
    expect(redirectMock).toHaveBeenCalledWith(testUrl);
    expect(window.localStorage.getItem).toHaveBeenCalledWith(localStorageKey);
    expect(getSubscriberOriginOnClientMock).toHaveBeenCalled();
    expect(internalApiGetMock).toHaveBeenCalledWith(studentMappingsPath);
    expect(jsonMock.json).toHaveBeenCalledTimes(1);
    expect(buildSubscriptionRedirectUrlMock).toHaveBeenCalledWith({
      offerId: mockOfferId,
      termId: mockTermId,
    });
  });

  it('will redirect to subscribe page if no redirect url saved in local storage and visiting from unsupported region', async () => {
    window.localStorage.getItem.mockReturnValue(null);
    (await mockGetSubscriberOriginOnClient()).mockReturnValue(
      SUBSCRIBER_ORIGIN_OTHERS,
    );
    await importStudentVerifyScript();
    expect(redirectMock).toHaveBeenCalledTimes(1);
    expect(redirectMock).toHaveBeenCalledWith(subscribePagePath);
    expect(window.localStorage.getItem).toHaveBeenCalledWith(localStorageKey);
    expect(getSubscriberOriginOnClientMock).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'Unsupported region.' }),
    );
  });
});
