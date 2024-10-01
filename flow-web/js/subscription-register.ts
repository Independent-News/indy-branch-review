import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { TRACKING_PAYMENT_KEYS } from '#app/constants/adobeConstants';
import {
  CUSTOM_EVENT_REGISTRATION_ERROR,
  CUSTOM_EVENT_REGISTRATION_SUCCESS,
} from '#app/constants/customEvents';
import {
  ID_FORM_RECEIVE_OFFER,
  SUBSCRIBE_REGISTER_FORM_ID,
} from '#app/constants/ids';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import isHydrationRootElementType from '#app/component/library/Hydration/isHydrationRootElementType';
import SubscribeRegister from '#app/component/library/Register/SubscribeRegister';

import { dispatchRegistrationFailed } from './modules/custom-event-dispatchers';
import {
  getDigitalDataByKeys,
  storeDigitalData,
} from './modules/digital-data/digital-data-session';
import { getParametersByNames } from './modules/util';
import initCrossDomainLogin from './utils/initCrossDomainLogin';
import { redirect } from './utils/redirect';

const subscriptionRegister = () => {
  const subscribeRegisterFormRoot = document.getElementById(
    SUBSCRIBE_REGISTER_FORM_ID,
  );
  const trackingData = getDigitalDataByKeys(TRACKING_PAYMENT_KEYS);

  if (!isHydrationRootElementType(subscribeRegisterFormRoot)) {
    return;
  }

  initCrossDomainLogin();

  hydrateComponent(
    subscribeRegisterFormRoot,
    {
      SubscribeRegister,
    },
    { Wrapper },
  );

  document.body.addEventListener(CUSTOM_EVENT_REGISTRATION_ERROR, () => {
    window.hj && window.hj('formSubmitFailed');

    dispatchRegistrationFailed();
  });

  document.body.addEventListener(CUSTOM_EVENT_REGISTRATION_SUCCESS, () => {
    const offerCheckBox = document.getElementById(ID_FORM_RECEIVE_OFFER);
    const hasOptedIn =
      offerCheckBox instanceof HTMLInputElement && offerCheckBox.checked;
    window.hj && window.hj('formSubmitSuccessful');

    const params = getParametersByNames(['offerId', 'termId']);
    const query = new URLSearchParams();

    params.forEach(({ key, value }) => query.set(key, value));

    storeDigitalData({
      ...trackingData,
      marketing_opt_in: hasOptedIn,
    });

    redirect(`/subscribe/payment?${query.toString()}`);
  });
};

subscriptionRegister();

export default subscriptionRegister;
