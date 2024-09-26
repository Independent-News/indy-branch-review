import { CLASS_SUBSCRIBE_LINK_CLASS } from '#app/constants/classNames';
import { NAVIGATION_SUB_RSM } from '#app/constants/regSourceMethods';

import { dispatchLoginSuccess } from './custom-event-dispatchers';
import { openLoginDrawer } from './loginDrawer';

export default () => {
  const loginSubmits = document.querySelectorAll(
    '#login-form .form-submit, #login-page-form .form-submit, #reg-login-form .form-submit',
  );

  loginSubmits.forEach((submit) =>
    submit.addEventListener('click', () => {
      dispatchLoginSuccess();
    }),
  );

  /*
   *  bind event listener to login buttons to open login drawer
   */

  document.querySelectorAll('[data-js-open-login-drawer]').forEach((el) => {
    el.addEventListener('click', () => {
      const regSourceMethod = el.getAttribute('data-reg-source-method') || '';

      openLoginDrawer(regSourceMethod);
    });
    el.setAttribute('data-js-open-login-drawer-ready', '');
  });

  const subscribeLinks = [
    ...document.getElementsByClassName(CLASS_SUBSCRIBE_LINK_CLASS),
  ];

  subscribeLinks.forEach((link) => {
    link.addEventListener(
      'click',
      () => {
        localStorage.setItem('regSourceMethod', NAVIGATION_SUB_RSM);
        return false;
      },
      true,
    );
  });
};
