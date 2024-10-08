/**
 * @jest-environment jsdom
 */

import {
  CLASS_JS_PRODUCT,
  CLASS_JS_PRODUCT_BUY,
  CLASS_JS_PRICE_COMPARISON,
} from '#app/constants/classNames';

import { createPermutiveStub } from '../createPermutiveStub';
import { getPermutiveRejectedConditions } from '../getPermutiveRejectedConditions';
import * as initPermutive from '../initPermutive';

jest.mock('../createPermutiveStub');
jest.mock('../getPermutiveRejectedConditions');

describe('initPermutive.js unit tests', () => {
  const mockedAffiliateLink = {
    comparison: false,
    affiliate: 'eBay',
  };

  const mockedAffiliateLinkPayload = {
    comparison: false,
    affiliate: 'eBay',
  };

  beforeEach(() => {
    window.JSGlobals = {};
    window.permutive = {};
  });

  afterEach(() => {
    delete window.JSGlobals;
    delete window.permutive;
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  describe('initPermutive()', () => {
    it('should throw error if no permutive config object in JSGlobals', async () => {
      await expect(initPermutive.initPermutive()).rejects.toThrow(
        'No JSGlobals.permutive config',
      );
    });
  });

  describe('permutiveReady()', () => {
    beforeEach(() => {
      window.permutive = {
        ready: jest.fn((fn) => fn()),
        context: {
          user_id: 'test-user-id',
        },
      };
    });

    it('will call permutive.ready() and subscriber function with user id', async () => {
      const mockedSubscriberFunction = jest.fn();
      getPermutiveRejectedConditions.mockReturnValue([false, false]);
      await initPermutive.permutiveReady(mockedSubscriberFunction);
      expect(createPermutiveStub).toHaveBeenCalled();
      expect(window.permutive.ready).toHaveBeenCalled();
      expect(mockedSubscriberFunction).toHaveBeenCalledWith('test-user-id');
    });

    it('will call permutive.ready() and resolve with user id if subscriber function not passed', async () => {
      getPermutiveRejectedConditions.mockReturnValue([false, false]);
      const userId = await initPermutive.permutiveReady();
      expect(createPermutiveStub).toHaveBeenCalled();
      expect(window.permutive.ready).toHaveBeenCalled();
      expect(userId).toBe('test-user-id');
    });
  });

  describe('trackAffiliateLink', () => {
    beforeEach(() => {
      window.permutive.track = jest.fn();
    });

    it('should set `AffiliateLinkClick` data for product click events when permutive is defined', () => {
      initPermutive.trackAffiliateLink(mockedAffiliateLink);

      expect(window.permutive.track).toHaveBeenCalledWith(
        'AffiliateLinkClick',
        mockedAffiliateLinkPayload,
      );
    });

    it('should NOT set `AffiliateLinkClick` data for product click events when permutive is undefined', () => {
      window.permutive = null;
      const result = initPermutive.trackAffiliateLink(mockedAffiliateLink);

      expect(result).toStrictEqual(undefined);
    });
  });

  describe('eventBestProductClick', () => {
    // @todo Update mocked DOM with component
    document.body.innerHTML = `
    <article class=${CLASS_JS_PRODUCT} data-title="Soak&Sleep 100% Canadian goose down standard chamber pillow" data-price="29.99" data-currency="GBP" data-affiliate="eBay">
      <a class=${CLASS_JS_PRODUCT_BUY} href="/">Buy for £29.99</a>
      <a class=${CLASS_JS_PRODUCT_BUY} href="/">Buy now</a>
    </article>
    <article class=${CLASS_JS_PRODUCT} data-title="Soak&Sleep 100% Canadian goose down standard chamber pillow" data-price="78" data-currency="GBP" data-affiliate="eBay"
      <a class=${CLASS_JS_PRODUCT_BUY} href="/">Buy now</a>
      <div class=${CLASS_JS_PRICE_COMPARISON}></div>
    </article>`;

    beforeEach(() => {
      window.permutive.track = jest.fn();
    });

    describe('eventBestProductClick for product link', () => {
      const link = document.querySelector(`.${CLASS_JS_PRODUCT_BUY}`);

      beforeEach(() => {
        jest
          .spyOn(link, 'addEventListener')
          .mockImplementationOnce((event, handler) => {
            handler();
          });
        jest.spyOn(initPermutive, 'trackAffiliateLink');
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should listen to click event call `trackAffiliateLink` for product link', () => {
        initPermutive.eventBestProductClick();

        expect(link.addEventListener).toBeCalledWith(
          'click',
          expect.any(Function),
        );
        expect(initPermutive.trackAffiliateLink).toHaveBeenCalledTimes(1);
        expect(initPermutive.trackAffiliateLink).toHaveBeenCalledWith(
          mockedAffiliateLink,
        );
      });
    });

    describe('eventBestProductClick for price comparison link', () => {
      const list = document.querySelector(`.${CLASS_JS_PRICE_COMPARISON}`);

      beforeEach(() => {
        const mockedEvent = {
          target: {
            classList: { contains: jest.fn(() => true) },
            closest: jest.fn(() => ({
              dataset: {
                price: '78',
                affiliate: 'eBay',
                link: '/',
                currency: 'gbp',
              },
            })),
          },
        };

        jest
          .spyOn(list, 'addEventListener')
          .mockImplementationOnce((event, handler) => {
            handler(mockedEvent);
          });
        jest.spyOn(initPermutive, 'trackAffiliateLink');
      });

      it('should listen to click event and call `trackAffiliateLink` for price comparison link', () => {
        const mockedComparisonLink = {
          ...mockedAffiliateLink,
          comparison: true,
        };

        initPermutive.eventBestProductClick();

        expect(list.addEventListener).toBeCalledWith(
          'click',
          expect.any(Function),
        );
        expect(initPermutive.trackAffiliateLink).toHaveBeenCalledTimes(1);
        expect(initPermutive.trackAffiliateLink).toHaveBeenCalledWith(
          mockedComparisonLink,
        );
      });
    });

    describe('passConsentToPermutive()', () => {
      const mockConsent = true;
      const mockConsentString = 'test-consent-string';
      const mockPermutiveConsentMethod = () =>
        (window.permutive.consent = jest.fn());

      beforeEach(() => {
        jest.spyOn(console, 'error').mockImplementation();
      });

      it('will not call Permutive consent method if jsglobals config is undefined', async () => {
        mockPermutiveConsentMethod();
        await initPermutive.passConsentToPermutive(
          mockConsent,
          mockConsentString,
        );
        expect(window.permutive.consent).not.toHaveBeenCalled();
        expect(console.error).not.toHaveBeenCalled();
      });

      it('will not call Permutive consent method if consent is false', async () => {
        const mockConsent = false;
        mockPermutiveConsentMethod();
        window.JSGlobals.permutive = {};
        await initPermutive.passConsentToPermutive(
          mockConsent,
          mockConsentString,
        );
        expect(window.permutive.consent).not.toHaveBeenCalled();
        expect(console.error).not.toHaveBeenCalled();
      });

      it('will call Permutive consent method and other modules if consent and jsglobals config are both truthy', async () => {
        jest.spyOn(initPermutive, 'identifyPianoUser').mockImplementation();
        jest.spyOn(initPermutive, 'pageView').mockImplementation();
        jest.spyOn(initPermutive, 'galleryClick').mockImplementation();
        jest
          .spyOn(initPermutive, 'eventLegacyBestProductClick')
          .mockImplementation();
        jest.spyOn(initPermutive, 'eventBestProductClick').mockImplementation();
        mockPermutiveConsentMethod();
        window.JSGlobals.permutive = {};
        await initPermutive.passConsentToPermutive(
          mockConsent,
          mockConsentString,
        );
        expect(window.permutive.consent).toHaveBeenCalledTimes(1);
        expect(window.permutive.consent).toHaveBeenCalledWith({
          opt_in: true,
          token: mockConsentString,
        });
        expect(initPermutive.identifyPianoUser).toHaveBeenCalledTimes(1);
        expect(initPermutive.pageView).toHaveBeenCalledTimes(1);
        expect(initPermutive.galleryClick).toHaveBeenCalledTimes(1);
        expect(initPermutive.eventLegacyBestProductClick).toHaveBeenCalledTimes(
          1,
        );
        expect(initPermutive.eventBestProductClick).toHaveBeenCalledTimes(1);
        expect(console.error).not.toHaveBeenCalled();
      });

      it('will not throw but console error if Permutive has not loaded', async () => {
        delete window.permutive;
        window.JSGlobals.permutive = {};
        await initPermutive.passConsentToPermutive(
          mockConsent,
          mockConsentString,
        );
        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error.mock.calls[0]).toEqual([
          'Failed to pass content to permutive',
          'permutive is not defined',
        ]);
      });
    });
  });
});
