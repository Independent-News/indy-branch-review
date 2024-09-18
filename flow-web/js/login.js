/* global JSGlobals */
import { hydrateRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { baseTheme } from '#app/config/theme/Styles';

import { ID_STANDALONE_LOGIN_FORM_WRAPPER } from '#app/constants/ids';

import LoginForm from '#app/component/library/LoginForm';

import initCrossDomainLogin from './utils/initCrossDomainLogin';

const loginBtn = document.getElementById('LoginDropdownButton');
const insideForm = document.getElementById('LoginDropdownButtonInside');

let hidden = false;

loginBtn.addEventListener('click', () => {
  hidden = !hidden;
  insideForm.style.display = hidden ? 'none' : 'block';
});

initCrossDomainLogin();

const { domain, returnUrl } = JSGlobals;
const container = document.getElementById(ID_STANDALONE_LOGIN_FORM_WRAPPER);

hydrateRoot(
  container,
  <ThemeProvider theme={{ ...baseTheme, domain }}>
    <LoginForm redirectUrl={returnUrl} />
  </ThemeProvider>,
);
