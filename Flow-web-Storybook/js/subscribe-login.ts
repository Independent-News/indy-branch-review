import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { ID_SUBSCRIPTION_LOGIN_PAGE } from '#app/constants/ids';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import SubscribeLoginContent from '#app/component/pages/SubscriptionLogin/SubscribeLoginContent';

const subscribeLogin = () => {
  const subscriptionLoginPageRoot = document.getElementById(
    ID_SUBSCRIPTION_LOGIN_PAGE,
  );
  if (subscriptionLoginPageRoot instanceof HTMLDivElement) {
    hydrateComponent(
      subscriptionLoginPageRoot,
      { SubscribeLoginContent },
      { Wrapper },
    );
  }
};

subscribeLogin();

export default subscribeLogin;
