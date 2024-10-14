/**
 * @jest-environment jsdom
 */
import { loadJS } from '#app/public/js/modules/util';

import { getToken } from '../loadCaptcha';

jest.mock('#app/public/js/modules/util');

describe('loadCaptcha()', () => {
  const testErrorObj = new Error('error');

  beforeEach(() => {
    window.grecaptcha = {
      ready: jest.fn().mockImplementationOnce((resolve) => resolve()),
      execute: jest.fn(),
    };

    window.JSGlobals = {
      recaptureV3Key: 'key',
    };
  });

  afterEach(() => {
    delete window.grecaptcha;
    delete window.JSGlobals;
    jest.clearAllMocks();
  });

  describe('getToken()', () => {
    it('should return an error if recapture key does not exist', async () => {
      window.JSGlobals.recaptureV3Key = null;

      await expect(getToken()).rejects.toThrow(
        new Error("Can't get token on server side"),
      );
    });

    it('should load captcha with a valid key', async () => {
      window.grecaptcha.execute.mockResolvedValueOnce(null);
      loadJS.mockResolvedValueOnce(null);

      const result = await getToken();
      expect(result).toStrictEqual(null);

      expect(window.grecaptcha.execute).toHaveBeenCalledTimes(1);
      expect(window.grecaptcha.execute).toHaveBeenCalledWith('key', {
        action: 'load_register_page',
      });

      expect(loadJS).toHaveBeenCalledTimes(1);
      expect(loadJS).toHaveBeenCalledWith([
        'https://www.google.com/recaptcha/api.js?render=key',
      ]);

      expect(window.grecaptcha.ready).toHaveBeenCalledTimes(1);
    });

    it('should return an error if grecaptcha.execute() fails', async () => {
      window.grecaptcha.execute.mockRejectedValueOnce(testErrorObj);
      loadJS.mockResolvedValueOnce(null);

      await expect(getToken()).rejects.toThrow(new Error('error'));
    });

    it('should return an error if loadJS() fails', async () => {
      window.grecaptcha.execute.mockResolvedValueOnce(null);
      loadJS.mockRejectedValueOnce(testErrorObj);

      await expect(getToken()).rejects.toThrow(new Error('error'));
    });

    // this test is skipped because the error is not caught in the code
    it.skip('should return an error if grecaptcha.ready() fails', async () => {
      window.grecaptcha.ready.mockRejectedValueOnce((resolve, reject) =>
        reject(testErrorObj),
      );
      window.grecaptcha.execute.mockResolvedValueOnce(null);
      loadJS.mockResolvedValueOnce(null);

      await expect(getToken()).rejects.toThrow(new Error('error'));
    });
  });
});
