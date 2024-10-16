import { hydrateRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { baseTheme } from '#app/config/theme/Styles';

import { TRACKING_PAYMENT_KEYS } from '#app/constants/adobeConstants';
import {
  CUSTOM_EVENT_REGISTRATION_ERROR,
  CUSTOM_EVENT_REGISTRATION_SUCCESS,
} from '#app/constants/customEvents';
import {
  ID_FORM_RECEIVE_OFFER,
  ID_REGISTER_FORM_WRAPPER,
} from '#app/constants/ids';

import {
  RegisterForm,
  USER_FLOW_REGISTER,
} from '#app/component/library/Register';

import { initBrazeOnRegistrationComplete } from './modules/braze/initBrazeOnRegistrationComplete';
import {
  dispatchRegistrationSuccess,
  dispatchRegistrationFailed,
} from './modules/custom-event-dispatchers';
import {
  getDigitalDataByKeys,
  removeDigitalDataByKeys,
  storeDigitalData,
} from './modules/digital-data/digital-data-session';
import { hasParameter } from './modules/util';
import initCrossDomainLogin from './utils/initCrossDomainLogin';
import { redirect } from './utils/redirect';

const offerCheckBox = document.getElementById(ID_FORM_RECEIVE_OFFER);

const trackingData = getDigitalDataByKeys(TRACKING_PAYMENT_KEYS);

initCrossDomainLogin();

interface JSGlobals {
  registerHydrateData: {
    regSourceSection: string;
    regSourceMethod: string;
    offerId: string;
    termId: string;
  };
}

declare const window: {
  JSGlobals: JSGlobals;
} & Window;

const { domain, registerHydrateData } = window.JSGlobals;
const { regSourceSection, regSourceMethod, offerId, termId } =
  registerHydrateData;
const container = document.getElementById(ID_REGISTER_FORM_WRAPPER);

if (container) {
  hydrateRoot(
    container,
    <ThemeProvider theme={{ ...baseTheme, domain }}>
      <RegisterForm
        alreadyHasAccountMessage="This account already exists.<br /> Please enter your password to log in."
        submitButtonCopy="Create my account"
        regSourceMethod={regSourceMethod}
        regSourceSection={regSourceSection}
        userFlowType={USER_FLOW_REGISTER}
        offerId={offerId}
        termId={termId}
      />
    </ThemeProvider>,
  );
}

document.body.addEventListener(CUSTOM_EVENT_REGISTRATION_ERROR, () => {
  window.hj && window.hj('formSubmitFailed');
  removeDigitalDataByKeys(TRACKING_PAYMENT_KEYS);

  dispatchRegistrationFailed();
});

document.body.addEventListener(CUSTOM_EVENT_REGISTRATION_SUCCESS, async () => {
  const hasOptedIn =
    offerCheckBox instanceof HTMLInputElement && offerCheckBox.checked;
  await initBrazeOnRegistrationComplete();
  window.hj && window.hj('formSubmitSuccessful');

  dispatchRegistrationSuccess({
    ...trackingData,
    marketing_opt_in: hasOptedIn,
  });

  const isPremium = hasParameter('premium');
  const query = new URLSearchParams();
  isPremium && query.set('premium', '');

  const queryToString = query.toString() ? `?${query.toString()}` : '';
  storeDigitalData({ marketing_opt_in: hasOptedIn });

  redirect(`/thank-you${queryToString}`);
});
