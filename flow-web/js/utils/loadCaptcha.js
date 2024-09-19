/* globals JSGlobals, grecaptcha */

import { loadJS } from '../modules/util';

const getRecaptchaKey = () => {
  try {
    return JSGlobals.recaptureV3Key;
  } catch {
    return null;
  }
};

const recaptchaReady = () =>
  new Promise((resolve) => {
    grecaptcha.ready(resolve);
  });

export const getToken = async () => {
  const RECAPTCHA_KEY = getRecaptchaKey();
  if (!RECAPTCHA_KEY) {
    throw new Error("Can't get token on server side");
  }

  const createCaptchaToken = async () => {
    await recaptchaReady();
    return await grecaptcha.execute(RECAPTCHA_KEY, {
      action: 'load_register_page',
    });
  };

  await loadJS([
    `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_KEY}`,
  ]);
  return await createCaptchaToken();
};
