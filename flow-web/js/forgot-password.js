/* global JSGlobals */

import { hydrateRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { baseTheme } from '#app/config/theme/Styles';

import { ID_FORGOTTEN_PASSWORD_CONTAINER } from '#app/constants/ids';

import ForgottenPasswordForm from '#app/component/pages/ForgottenPassword/ForgottenPasswordForm';

import initCrossDomainLogin from './utils/initCrossDomainLogin';

const { domain, forgottenPasswordHydrateData } = JSGlobals;
const { loggedIn } = forgottenPasswordHydrateData;
const container = document.getElementById(ID_FORGOTTEN_PASSWORD_CONTAINER);

initCrossDomainLogin();

hydrateRoot(
  container,
  <ThemeProvider theme={{ ...baseTheme, domain }}>
    <ForgottenPasswordForm loggedIn={loggedIn} />
  </ThemeProvider>,
);
