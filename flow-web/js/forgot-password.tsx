import { hydrateRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { baseTheme } from '#app/config/theme/Styles';

import { ID_FORGOTTEN_PASSWORD_CONTAINER } from '#app/constants/ids';

import isHydrationRootElementType from '#app/component/library/Hydration/isHydrationRootElementType';
import ForgottenPasswordForm from '#app/component/pages/ForgottenPassword/ForgottenPasswordForm';

import initCrossDomainLogin from './utils/initCrossDomainLogin';

interface JSGlobals {
  forgottenPasswordHydrateData: {
    loggedIn: boolean;
  };
}

declare const window: {
  JSGlobals: JSGlobals;
} & Window;

const { forgottenPasswordHydrateData } = window.JSGlobals;
const { loggedIn } = forgottenPasswordHydrateData;
const container = document.getElementById(ID_FORGOTTEN_PASSWORD_CONTAINER);

initCrossDomainLogin();

if (isHydrationRootElementType(container)) {
  hydrateRoot(
    container,
    <ThemeProvider theme={baseTheme}>
      <ForgottenPasswordForm loggedIn={loggedIn} />
    </ThemeProvider>,
  );
}
