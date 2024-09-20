import initRecaptcha from '#app/public/js/utils/initRecaptcha';

export const setReCaptchaToWindow = async () => {
  const JSGlobals = window.JSGlobals || {};
  await initRecaptcha();

  const token = await window.grecaptcha.execute(JSGlobals.recaptureV3Key, {
    action: 'submit_register_form',
  });

  window.recentCaptcha = true;
  // captcha expires after 2 mins
  setTimeout(() => {
    window.recentCaptcha = false;
  }, 110000);

  return token;
};
