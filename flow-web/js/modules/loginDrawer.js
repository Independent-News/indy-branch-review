import { REGISTER_LINK_ID, LOGIN_BUTTON_ID } from '#app/constants/ids';

function buildRegisterHref(regSourceMethod) {
  if (regSourceMethod) {
    const params = new URLSearchParams();
    params.append('regSourceMethod', regSourceMethod);

    return `/register?${params.toString()}`;
  } else {
    return '/register';
  }
}

export const openLoginDrawer = (regSourceMethod) => {
  const loginButton = document.getElementById(LOGIN_BUTTON_ID);
  const registerLink = document.getElementById(REGISTER_LINK_ID);

  if (registerLink) {
    registerLink.setAttribute('href', buildRegisterHref(regSourceMethod));
  }

  localStorage.setItem('returnUrl', window.location.href);
  localStorage.setItem('regSourceMethod', regSourceMethod);

  if (loginButton) {
    loginButton.click();
  }
};
