import { hydrateRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { baseTheme } from '#app/config/theme/Styles';

import { ID_RESET_PASSWORD_FORM_CONTAINER } from '#app/constants/ids';

import isHydrationRootElementType from '#app/component/library/Hydration/isHydrationRootElementType';
import ResetPasswordForm from '#app/component/pages/ResetPassword/ResetPasswordForm';

interface JSGlobals {
  resetPasswordHydrateData: {
    loggedIn: boolean;
  };
}

declare const window: {
  JSGlobals: JSGlobals;
} & Window;

const { resetPasswordHydrateData } = window.JSGlobals;
const { loggedIn } = resetPasswordHydrateData;
const container = document.getElementById(ID_RESET_PASSWORD_FORM_CONTAINER);

if (isHydrationRootElementType(container)) {
  hydrateRoot(
    container,
    <ThemeProvider theme={baseTheme}>
      <ResetPasswordForm loggedIn={loggedIn} />
    </ThemeProvider>,
  );
}
