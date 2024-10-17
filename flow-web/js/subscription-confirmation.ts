import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { COOKIE_PLANIT_CLICK_ID } from '#app/constants/cookies';

import { ID_SUBSCRIBE_CONFIRMATION_NEWSLETTERS } from '#app/constants/ids';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import { HeaderWithMultiStepForm } from '#app/component/library/StaticPage/PaymentFlow/Confirmation/OnboardingJourney';

import { initBrazeOnSubscriptionFinish } from './modules/braze/initBrazeOnSubscriptionFinish';
import { getCookie } from './modules/cookie';
import { trackSubscriptionCause } from './modules/taboola';
import { InternalApi } from './utils/internalApi';

export const subscriptionConfirmation = async () => {
  const hydratableComponent = {
    HeaderWithMultiStepForm,
  };
  const planitClickIdCookie = getCookie(COOKIE_PLANIT_CLICK_ID);
  const root = document.getElementById(
    ID_SUBSCRIBE_CONFIRMATION_NEWSLETTERS,
  ) as HTMLDivElement | null;

  if (root) {
    hydrateComponent(root, hydratableComponent, { Wrapper });
  }

  if (planitClickIdCookie) {
    InternalApi.post('subscription/planit')
      .then((response) => console.warn('success', response))
      .catch((error) => console.error('error', error));
  }

  trackSubscriptionCause();
  await initBrazeOnSubscriptionFinish();
};

(async () => {
  await subscriptionConfirmation();
})();
