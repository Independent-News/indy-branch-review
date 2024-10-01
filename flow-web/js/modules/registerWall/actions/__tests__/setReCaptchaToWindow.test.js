/**
 * @jest-environment jsdom
 */

import initRecaptcha from '#app/public/js/utils/initRecaptcha';

import { setReCaptchaToWindow } from '../setReCaptchaToWindow';

jest.mock('#app/public/js/utils/initRecaptcha');

describe('setReCaptchaToWindow()', () => {
  const testError = new Error('testing');
  const grecaptchaActionArg = {
    action: 'submit_register_form',
  };

  jest.useFakeTimers();

  beforeEach(() => {
    window.JSGlobals = {
      recaptureV3Key: 'xxxxxx',
    };

    window.grecaptcha = {
      execute: jest.fn(),
    };
  });

  afterEach(() => {
    delete window.recentCaptcha;
    delete window.JSGlobals;
    jest.resetAllMocks();
  });

  it('will throw error correctly if initRecaptcha rejects', async () => {
    initRecaptcha.mockRejectedValue(testError);

    await expect(async () => {
      await setReCaptchaToWindow();
    }).rejects.toThrow(testError);

    expect(initRecaptcha).toHaveBeenCalledTimes(1);
  });

  it('will throw error correctly if grecaptcha execute method rejects', async () => {
    initRecaptcha.mockResolvedValue(null);
    window.grecaptcha.execute.mockRejectedValue(testError);

    await expect(async () => {
      await setReCaptchaToWindow();
    }).rejects.toThrow(testError);

    expect(initRecaptcha).toHaveBeenCalledTimes(1);
    expect(window.grecaptcha.execute).toHaveBeenCalledWith(
      window.JSGlobals.recaptureV3Key,
      grecaptchaActionArg,
    );
  });

  it('will return grecaptcha token and set recentCaptcha to true on window object if execute method resolves with token', async () => {
    const testToken = 'test-token';
    initRecaptcha.mockResolvedValue(null);
    window.grecaptcha.execute.mockResolvedValue(testToken);

    const returnedToken = await setReCaptchaToWindow();

    expect(returnedToken).toBe(testToken);
    expect(window.recentCaptcha).toBeTruthy();
    expect(initRecaptcha).toHaveBeenCalledTimes(1);
    expect(window.grecaptcha.execute).toHaveBeenCalledWith(
      window.JSGlobals.recaptureV3Key,
      grecaptchaActionArg,
    );
  });
});
