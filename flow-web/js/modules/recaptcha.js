/* globals JSGlobals */

import { FORM_FIELD_RECAPTURE } from '#app/constants/formFieldNames';

import initRecaptcha from '#app/public/js/utils/initRecaptcha.js';

const inputSelector = `input[name="${FORM_FIELD_RECAPTURE}"]`;
const fieldsSel =
  'select,input[type="text"],input[type="password"],input[type="checkbox"],input[type="radio"]';

const initForm = (recaptchaInput) => async () => {
  if (recaptchaInput.value !== '') {
    return;
  }

  const { action } = recaptchaInput.dataset;

  const token = await window.grecaptcha.execute(JSGlobals.recaptureV3Key, {
    action,
  });

  recaptchaInput.value = token;
};

const initForms = (forms) => {
  forms.forEach((form) => {
    const recaptchaInput = form.querySelector(inputSelector);

    [...form.querySelectorAll(fieldsSel)].forEach((fieldElem) =>
      fieldElem.addEventListener('change', initForm(recaptchaInput)),
    );
  });
};

const init = () => {
  const forms = [...document.forms].filter((form) =>
    form.querySelector(inputSelector),
  );

  const init = async () => {
    await initRecaptcha();
    initForms(forms);
  };

  const observer = new IntersectionObserver((entries) => {
    const isIntersecting = entries.some((entry) => entry.isIntersecting);
    if (!isIntersecting) {
      return;
    }
    observer.disconnect();
    init();
  });

  forms.forEach((form) => observer.observe(form));
};

export default () => init();
