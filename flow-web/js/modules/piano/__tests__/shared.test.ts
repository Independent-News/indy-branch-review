/**
 * @jest-environment jsdom
 */

import { PIANO_MESSAGE_COMPLETE_UPGRADE_PURCHASE } from '#app/constants/piano';
import { QUERY_PARAM_SHOW_UPGRADE_SUCCESS_MESSAGE } from '#app/constants/queryParameters';

import { redirect } from '#app/public/js/utils/redirect';
import appendUpgradeSuccessMessageParam from '#app/util/appendUpgradeSuccessMessageParam';

import {
  onCheckoutComplete,
  onUpgradeSuccess,
  getEventDataFromPostMessage,
  handlePianoPostMessage,
} from '../shared';

import { PianoConversion } from '#types/piano';

jest.mock('#app/util/appendUpgradeSuccessMessageParam');
jest.mock('#app/public/js/utils/redirect');

describe('Piano shared public js', () => {
  const originalFetch = global.fetch;
  const mockExpires = 'expiration-date';

  beforeAll(() => {
    const mockElement = {
      scrollTop: 100,
    };
    const cookieStore: Record<string, unknown> = {};

    jest.spyOn(document, 'getElementsByClassName').mockImplementation(() => {
      return [mockElement] as unknown as HTMLCollectionOf<Element>;
    });

    jest.spyOn(Date.prototype, 'toUTCString').mockReturnValue(mockExpires);

    jest.spyOn(document, 'cookie', 'set').mockImplementation((value) => {
      const cookieStrings = value.split(';');
      cookieStrings.forEach((cookie) => {
        if (!cookie) {
          return;
        }
        const [key, val] = cookie.split('=');
        cookieStore[key.trim()] = val.trim();
      });
    });

    jest.spyOn(document, 'cookie', 'get').mockImplementation(() => {
      return Object.entries(cookieStore)
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('onCheckoutComplete()', () => {
    const mockPianoConversion = {} as PianoConversion;

    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({}),
        }),
      ) as unknown as jest.MockedFunction<typeof global.fetch>;
    });

    afterAll(() => {
      global.fetch = originalFetch;
    });

    it('should set scroll top to 0', () => {
      onCheckoutComplete(mockPianoConversion);
      const [parentElement] = document.getElementsByClassName('tp-modal');
      expect(parentElement.scrollTop).toBe(0);
    });

    it('should set the correct expiry date for cookies', () => {
      onCheckoutComplete(mockPianoConversion);
      expect(document.cookie).toBe(
        `__pianoTerm=null; expires=${mockExpires}; path=/; __pianoParams=null`,
      );
    });

    it.each([
      undefined,
      {
        conversion: 'test-conversion',
      },
    ])('should call fetch with the correct parameters', (conversion) => {
      onCheckoutComplete(conversion as unknown as PianoConversion);
      expect(global.fetch).toHaveBeenCalledWith(
        '/internal-api/update-user-subscription-auto-renew',
        {
          method: 'POST',
          body: JSON.stringify(conversion),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    });
  });

  describe('onUpgradeSuccess()', () => {
    it('should redirect to the current page with the correct parameter', () => {
      const mockUrl = 'https://test.com';
      const mockRedirectUrl = `${mockUrl}?${QUERY_PARAM_SHOW_UPGRADE_SUCCESS_MESSAGE}=true`;
      (appendUpgradeSuccessMessageParam as jest.Mock).mockReturnValueOnce(
        mockRedirectUrl,
      );
      global.window = Object.create(window);
      Object.defineProperty(window, 'location', {
        value: {
          href: mockUrl,
        },
      });

      onUpgradeSuccess();
      expect(appendUpgradeSuccessMessageParam).toHaveBeenCalledWith(mockUrl);
      expect(redirect).toHaveBeenCalledWith(mockRedirectUrl);
    });
  });

  describe('getEventDataFromPostMessage()', () => {
    it('should return undefined if the provided data does not exist', () => {
      let mockData = null;
      let result = getEventDataFromPostMessage(mockData);
      expect(result).toBeUndefined();
      mockData = undefined;
      result = getEventDataFromPostMessage(mockData);
      expect(result).toBeUndefined();
    });
    it('should return the provided data if a native object is provided', () => {
      const mockData = { data: 'data' };
      const result = getEventDataFromPostMessage(mockData);
      expect(result).toEqual(mockData);
    });
    it('should return undefined if parsing the data fails', () => {
      const mockData = 'invalid-json';
      const result = getEventDataFromPostMessage(mockData);
      expect(result).toBeUndefined();
    });
    it('should return the parsed data if a valid stringified object is provided', () => {
      const mockData = { data: 'data' };
      const mockDataStringified = JSON.stringify(mockData);
      const result = getEventDataFromPostMessage(mockDataStringified);
      expect(result).toEqual(mockData);
    });
  });

  describe('handlePianoPostMessage()', () => {
    it('should return if the event origin is not piano', () => {
      const mockEvent = {
        origin: 'not-piano',
      };
      handlePianoPostMessage(mockEvent as MessageEvent);
      expect(appendUpgradeSuccessMessageParam).not.toHaveBeenCalled();
    });

    it('should return if the event has no data', () => {
      const mockEvent = {
        origin: 'piano',
        data: null,
      };
      handlePianoPostMessage(mockEvent as MessageEvent);
      expect(appendUpgradeSuccessMessageParam).not.toHaveBeenCalled();
    });

    it('should call the correct function based on the event data', () => {
      const mockEvent = {
        origin: 'tinypass.com',
        data: JSON.stringify({
          event: PIANO_MESSAGE_COMPLETE_UPGRADE_PURCHASE,
        }),
      };
      handlePianoPostMessage(mockEvent as MessageEvent);
      expect(appendUpgradeSuccessMessageParam).toHaveBeenCalled();
    });

    it('should continue if the event origin is independent.co.uk', () => {
      const mockEvent = {
        origin: 'independent.co.uk',
        data: JSON.stringify({
          event: PIANO_MESSAGE_COMPLETE_UPGRADE_PURCHASE,
        }),
      };
      handlePianoPostMessage(mockEvent as MessageEvent);
      expect(appendUpgradeSuccessMessageParam).toHaveBeenCalled();
    });

    it('should continue if the event origin is tinypass.com', () => {
      const mockEvent = {
        origin: 'tinypass.com',
        data: JSON.stringify({
          event: PIANO_MESSAGE_COMPLETE_UPGRADE_PURCHASE,
        }),
      };
      handlePianoPostMessage(mockEvent as MessageEvent);
      expect(appendUpgradeSuccessMessageParam).toHaveBeenCalled();
    });
  });
});
