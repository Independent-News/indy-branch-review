import { InternalApi } from '#app/public/js/utils/internalApi';

import { initBrazeOnSubscriptionAutorenewOff } from '../modules/braze/initBrazeOnSubscriptionAutorenewOff';
import { initBrazeOnSubscriptionAutorenewOn } from '../modules/braze/initBrazeOnSubscriptionAutorenewOn';

export const updateUserAutoRenew = async ({
  subscriptionId,
  autoRenew,
  onSuccessfulRequest = () => {},
} = {}) => {
  if (autoRenew) {
    initBrazeOnSubscriptionAutorenewOn();
  } else {
    initBrazeOnSubscriptionAutorenewOff();
  }

  try {
    const request = await InternalApi.post('subscription/cancel', {
      autoRenew,
      subscriptionId,
    });

    if (request.ok) {
      onSuccessfulRequest();
      return;
    }

    throw new Error('Network response was not ok.');
  } catch (error) {
    console.error('Fetch failed: ', error.message);
  }
};
