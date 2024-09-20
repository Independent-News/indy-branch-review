import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { GOOGLE_SIGN_IN_FORGOTTEN_PASSWORD_ID } from '#app/constants/ids';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import Form from '#app/component/pages/GoogleSignInPage/Callback/Form';

import initCrossDomainLogin from './utils/initCrossDomainLogin';

const forgottenPasswordLink = document.getElementById(
  GOOGLE_SIGN_IN_FORGOTTEN_PASSWORD_ID,
);

forgottenPasswordLink?.addEventListener('click', () => {
  window.close();
  window.opener.location.href = '/forgotten-password';
});

initCrossDomainLogin();

const root: HTMLDivElement | null = document.querySelector(
  '[data-component=Form]',
);

if (root) {
  hydrateComponent(root, { Form }, { Wrapper });
}
