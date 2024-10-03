/**
 * @jest-environment jsdom
 */

import { getVideoCookieDeprecationLabel, getPpid } from '../videoTargeting';

const mockCookieDeprecationLabel = (value) => {
  Object.defineProperty(navigator, 'cookieDeprecationLabel', {
    value: { getValue: jest.fn().mockResolvedValue(value) },
    configurable: true,
  });
};

describe('videoTargeting', () => {
  describe('getVideoCookieDeprecationLabel()', () => {
    beforeEach(() => {
      global.navigator = {
        cookieDeprecationLabel: {
          getValue: jest.fn(),
        },
      };
    });

    it('should return an empty string when cookieDeprecationLabel is not in navigator', async () => {
      delete navigator.cookieDeprecationLabel;

      const result = await getVideoCookieDeprecationLabel();

      expect(result).toBe('');
    });

    it('should return an empty string when cookieDeprecationLabel is present but returns null', async () => {
      mockCookieDeprecationLabel(null);

      const result = await getVideoCookieDeprecationLabel();

      expect(result).toBe('');
    });

    it('should return the correct query string when cookieDeprecationLabel is present and returns a value', async () => {
      const testLabel = 'testLabel';

      mockCookieDeprecationLabel(testLabel);

      const result = await getVideoCookieDeprecationLabel();

      expect(result).toBe(testLabel);
    });
  });

  describe('getPpid', () => {
    beforeAll(() => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: jest.fn(),
        },
        writable: true,
      });
    });

    it('should return an empty string if permutive-id is not stored', () => {
      window.localStorage.getItem.mockReturnValueOnce(null);

      const ppid = getPpid();

      expect(ppid).toBeFalsy();
    });

    it('should return parsed alphanumeric permutive-id', () => {
      const storedId = 'test-123';

      window.localStorage.getItem.mockReturnValueOnce(storedId);

      const ppid = getPpid();

      expect(ppid).toBe('test123');
    });
  });
});
