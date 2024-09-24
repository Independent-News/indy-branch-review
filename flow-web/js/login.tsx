import { hydrateRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { baseTheme } from '#app/config/theme/Styles';

import { ID_STANDALONE_LOGIN_FORM_WRAPPER } from '#app/constants/ids';

import isHydrationRootElementType from '#app/component/library/Hydration/isHydrationRootElementType';
import LoginForm from '#app/component/library/LoginForm';

import initCrossDomainLogin from './utils/initCrossDomainLogin';

interface JSGlobals {
  returnUrl: string;
}

declare const window: {
  JSGlobals: JSGlobals;
} & Window;

const loginBtn = document.getElementById('LoginDropdownButton');
const insideForm = document.getElementById('LoginDropdownButtonInside');

let hidden = false;

loginBtn?.addEventListener('click', () => {
  hidden = !hidden;
  if (insideForm) {
    insideForm.style.display = hidden ? 'none' : 'block';
  }
});

initCrossDomainLogin();

const { domain, returnUrl } = window.JSGlobals;
const container = document.getElementById(ID_STANDALONE_LOGIN_FORM_WRAPPER);

if (isHydrationRootElementType(container)) {
  hydrateRoot(
    container,
    <ThemeProvider theme={{ ...baseTheme, domain }}>
      <LoginForm redirectUrl={returnUrl} />
    </ThemeProvider>,
  );
}
