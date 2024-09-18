/**
 * @jest-environment jsdom
 */

import { COOKIE_SUBSCRIBER, COOKIE_PUID } from '#app/constants/cookies';

import { getCookie } from '../../modules/cookie';
import { getPublisherEntitlement } from '../getPublisherEntitlement';

jest.mock('../../modules/cookie');

describe('getPublisherEntitlement()', () => {
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('when user is NOT logged in', () => {
    beforeEach(() => {
      getCookie.mockImplementation((name) => {
        return {}[name];
      });
    });

    it('should NOT allow access', () => {
      expect(getPublisherEntitlement(true)).toEqual({
        hasAccess: false,
        subscribed: false,
      });
    });
  });

  describe('when user is logged in AND is a subscriber', () => {
    beforeEach(() => {
      getCookie.mockImplementation((name) => {
        return {
          [COOKIE_PUID]: 'abc',
          [COOKIE_SUBSCRIBER]: 'true',
        }[name];
      });
    });

    it('should allow access', () => {
      expect(getPublisherEntitlement(true)).toEqual({
        hasAccess: true,
        subscribed: true,
      });
    });
  });

  describe('when user is logged in AND is NOT a subscriber AND is metered', () => {
    beforeEach(() => {
      getCookie.mockImplementation((name) => {
        return {
          [COOKIE_PUID]: 'abc',
          [COOKIE_SUBSCRIBER]: 'false',
        }[name];
      });
    });

    it('should allow access', () => {
      expect(getPublisherEntitlement(false)).toEqual({
        hasAccess: true,
        subscribed: false,
      });
    });
  });

  describe('when user is logged in AND is NOT a subscriber AND is NOT metered', () => {
    beforeEach(() => {
      getCookie.mockImplementation((name) => {
        return {
          [COOKIE_PUID]: 'abc',
        }[name];
      });
    });

    it('should NOT allow access', () => {
      expect(getPublisherEntitlement(true)).toEqual({
        hasAccess: false,
        subscribed: false,
      });
    });
  });
});
