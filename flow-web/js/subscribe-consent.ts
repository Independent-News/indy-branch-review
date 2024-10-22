import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { ID_SUBSCRIPTION_CONSENT_PAGE } from '#app/constants/ids';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import SubscribeConsentContent from '#app/component/pages/SubscribeConsent/SubscribeConsentContent';

const subscribeConsent = () => {
  const subscriptionConsentPageRoot = document.getElementById(
    ID_SUBSCRIPTION_CONSENT_PAGE,
  );
  if (subscriptionConsentPageRoot instanceof HTMLDivElement) {
    hydrateComponent(
      subscriptionConsentPageRoot,
      { SubscribeConsentContent },
      { Wrapper },
    );
  }
};
subscribeConsent();

export default subscribeConsent;
