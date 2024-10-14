import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { CUSTOM_EVENT_REGISTRATION_ERROR } from '#app/constants/customEvents';
import { ID_DONATE_REGISTER_PAGE } from '#app/constants/ids';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import DonateRegisterContent from '#app/component/pages/DonateRegister/DonateRegisterContent';

import { dispatchRegistrationFailed } from './modules/custom-event-dispatchers';

export const donateRegister = async () => {
  const root = document.getElementById(
    ID_DONATE_REGISTER_PAGE,
  ) as HTMLDivElement | null;

  if (!root) {
    return;
  }

  hydrateComponent(root, { DonateRegisterContent }, { Wrapper });
};

document.body.addEventListener(CUSTOM_EVENT_REGISTRATION_ERROR, () => {
  window.hj && window.hj('formSubmitFailed');

  dispatchRegistrationFailed();
});

(async () => {
  await donateRegister();
})();
