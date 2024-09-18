/**
 * @jest-environment jsdom
 */
import { loadJS } from '#app/public/js/modules/util';

import initRecaptcha, { RECAPTURE_URI } from '../initRecaptcha';

jest.mock('#app/public/js/modules/util');

describe('initRecaptcha()', () => {
  beforeEach(() => {
    window.JSGlobals = { recaptureV3Key: 'key' };
    window.grecaptcha = {
      ready: jest.fn().mockImplementation((resolve) => resolve()),
    };
  });

  afterEach(() => {
    delete window.JSGlobals;
    delete window.grecaptcha;
    jest.resetAllMocks();
  });

  it('should load recaptcha script with existing render key', async () => {
    loadJS.mockImplementation();

    await initRecaptcha();

    expect(loadJS).toHaveBeenCalledTimes(1);
    expect(loadJS).toHaveBeenCalledWith([
      `${RECAPTURE_URI}${window.JSGlobals.recaptureV3Key}`,
    ]);
    expect(window.grecaptcha.ready).toHaveBeenCalledTimes(1);
  });
});
