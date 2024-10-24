/**
 * @jest-environment jsdom
 */

import { error } from '../modules/log';
import { identifyAdFreeUserAsRejectAll } from '../sourcePointPublic';

jest.mock('../modules/log');

describe('sourcePoint public js', () => {
  describe('identifyAdFreeUserAsRejectAll()', () => {
    const mockCallback = jest.fn();
    beforeEach(() => {
      window.__tcfapi = jest.fn();
    });

    afterEach(() => {
      delete window.__tcfapi;
      jest.resetAllMocks();
    });

    it('will both console error and re-throw native error if SourcePoint is not loaded', () => {
      window.__tcfapi = undefined;
      expect(() => identifyAdFreeUserAsRejectAll()).toThrowError();
      expect(error).toHaveBeenCalledTimes(1);
      expect(error).toHaveBeenCalledWith(
        'Error identifying ad-free user as reject all:',
        'window.__tcfapi is not a function',
      );
    });

    it('will call global SourcePoint function with correct arguments if loaded', () => {
      identifyAdFreeUserAsRejectAll();
      expect(window.__tcfapi).toHaveBeenCalledTimes(1);
      expect(window.__tcfapi).toHaveBeenCalledWith(
        'postRejectAll',
        2,
        expect.any(Function),
      );
    });

    it('will only console error on unsuccessful SourcePoint request but still continue with payment journey', () => {
      const mockRejectAllResponse = { foo: 'bar' };
      window.__tcfapi.mockImplementation((_, __, callback) => {
        callback(mockRejectAllResponse, false);
      });
      identifyAdFreeUserAsRejectAll(mockCallback);
      expect(error).toHaveBeenCalledTimes(1);
      expect(error).toHaveBeenCalledWith(
        'Error identifying ad-free user as reject all due to following response:',
        mockRejectAllResponse,
      );
      expect(mockCallback).toHaveBeenCalledTimes(1);
    });

    it('will not console error but simply execute callback on successful SourcePoint request', () => {
      window.__tcfapi.mockImplementation((_, __, callback) => {
        callback(null, true);
      });
      identifyAdFreeUserAsRejectAll(mockCallback);
      expect(mockCallback).toHaveBeenCalledTimes(1);
      expect(error).not.toHaveBeenCalled();
    });
  });
});
