import { COOKIE_SUBSCRIBER_ORIGIN } from '#app/constants/cookies';

import { SUBSCRIBER_ORIGIN_UK } from '#app/constants/subscriberOrigin';

import { getCookie } from '#app/public/js/modules/cookie';

import { getSubscriberOriginOnClient } from '../getSubscriberOriginOnClient';

jest.mock('#app/public/js/modules/cookie');

describe('getSubscriberOriginOnClient()', () => {
  afterEach(() => jest.resetAllMocks());

  it('will return saved subscriber origin cookie value if defined', () => {
    getCookie.mockReturnValue(SUBSCRIBER_ORIGIN_UK);
    const result = getSubscriberOriginOnClient();
    expect(result).toStrictEqual(SUBSCRIBER_ORIGIN_UK);
    expect(getCookie).toHaveBeenCalledTimes(1);
    expect(getCookie).toHaveBeenCalledWith(COOKIE_SUBSCRIBER_ORIGIN);
  });

  it('will return subscriber cached origin value if defined', () => {
    const result = getSubscriberOriginOnClient();
    expect(result).toStrictEqual(SUBSCRIBER_ORIGIN_UK);
    expect(getCookie).not.toHaveBeenCalled();
  });
});
