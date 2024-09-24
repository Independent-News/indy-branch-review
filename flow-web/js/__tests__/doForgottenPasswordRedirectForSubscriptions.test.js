/**
 * @jest-environment jsdom
 */

import { FORGOTTEN_PASSWORD_REDIRECT_URL } from '#app/constants/localStorage';
import {
  STRIPE_ELEMENTS_FRIENDLY_OFFER_ID,
  STRIPE_ELEMENTS_FRIENDLY_TERM_ID,
} from '#app/constants/piano';

import doForgottenPasswordRedirectForSubscriptions from '#app/public/js/doForgottenPasswordRedirectForSubscriptions';

import { getParametersByNames } from '../modules/util';
import { redirect } from '../utils/redirect';

jest.mock(
  '#app/component/library/LoginRegFormWithBreadcrumbsAndPayment/LoginRegFormWithBreadcrumbsAndPayment',
);
jest.mock('../utils/redirect');
jest.mock('../modules/util');

describe('doForgottenPasswordRedirectForSubscriptions()', () => {
  const mockOfferIdValue = 'some-offer-id-value';
  const mockTermIdValue = 'some-term-id-value';
  const expectedJsDomDefaultPathname = '/';

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: jest.fn(),
      },
    });
  });

  beforeEach(() => {
    getParametersByNames.mockReturnValueOnce([
      { value: mockOfferIdValue },
      { value: mockTermIdValue },
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("will parse offer and term id query params whilst saving redirect url based on user's current location correctly in local storage and then redirect to the forgotten password page", () => {
    const mockOfferIdKey = 'some-offer-id-key';
    const mockTermIdKey = 'some-term-id-key';
    doForgottenPasswordRedirectForSubscriptions({
      offerIdParamName: mockOfferIdKey,
      termIdParamName: mockTermIdKey,
    });
    expect(getParametersByNames).toHaveBeenCalledTimes(1);
    expect(getParametersByNames).toHaveBeenCalledWith([
      mockOfferIdKey,
      mockTermIdKey,
    ]);
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      FORGOTTEN_PASSWORD_REDIRECT_URL,
      `http://localhost${expectedJsDomDefaultPathname}?${mockOfferIdKey}=${mockOfferIdValue}&${mockTermIdKey}=${mockTermIdValue}`,
    );
    expect(redirect).toHaveBeenCalledTimes(1);
    expect(redirect).toHaveBeenCalledWith('/forgotten-password');
  });

  it('will attempt to extract Stripe safe offer and term ids from query if no custom param names are provided', () => {
    doForgottenPasswordRedirectForSubscriptions();
    expect(getParametersByNames).toHaveBeenCalledTimes(1);
    expect(getParametersByNames).toHaveBeenCalledWith([
      STRIPE_ELEMENTS_FRIENDLY_OFFER_ID,
      STRIPE_ELEMENTS_FRIENDLY_TERM_ID,
    ]);
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      FORGOTTEN_PASSWORD_REDIRECT_URL,
      `http://localhost${expectedJsDomDefaultPathname}?${STRIPE_ELEMENTS_FRIENDLY_OFFER_ID}=${mockOfferIdValue}&${STRIPE_ELEMENTS_FRIENDLY_TERM_ID}=${mockTermIdValue}`,
    );
    expect(redirect).toHaveBeenCalledTimes(1);
    expect(redirect).toHaveBeenCalledWith('/forgotten-password');
  });
});
