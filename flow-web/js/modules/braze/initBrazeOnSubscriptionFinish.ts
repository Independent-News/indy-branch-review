import { COOKIE_PUID } from '#app/constants/cookies';

import { getCookie } from '#app/public/js/utils/cookie';
import { isSentryEnabledClientSide } from '#app/public/js/utils/sentry';

import { getSubscriberOriginOnClient } from '../../utils/getSubscriberOriginOnClient';

import { BRAZE_EVENT_SUBSCRIPTION_FINISH } from './constants';
import ensureBrazeDataIsImmediatelyLogged from './ensureBrazeDataIsImmediatelyLogged';
import * as thisModule from './initBrazeOnSubscriptionFinish';
import initBrazeSDK from './initBrazeSDK';

export const trackSubscriptionFinishViaSentry = () =>
  window.Sentry?.captureMessage(BRAZE_EVENT_SUBSCRIPTION_FINISH, {
    tags: {
      braze: BRAZE_EVENT_SUBSCRIPTION_FINISH,
    },
    user: {
      id: getCookie(COOKIE_PUID) ?? '',
      geo: {
        region: getSubscriberOriginOnClient(),
      },
    },
  });

export const trackSubscriptionFinishViaSentryIfLoaded = () => {
  const isSentryInitialised = isSentryEnabledClientSide();
  if (isSentryInitialised) {
    thisModule.trackSubscriptionFinishViaSentry();
  }
};

export const trackSubscriptionFinishViaBraze = () => {
  window.braze?.logCustomEvent(BRAZE_EVENT_SUBSCRIPTION_FINISH);
  ensureBrazeDataIsImmediatelyLogged();
};

export const trackSubscriptionFinishViaBrazeAndSentry = async () => {
  const isBrazeInitialised = await initBrazeSDK();
  if (isBrazeInitialised) {
    thisModule.trackSubscriptionFinishViaBraze();
    thisModule.trackSubscriptionFinishViaSentryIfLoaded();
  }
};

export const initBrazeOnSubscriptionFinish = async () => {
  try {
    await thisModule.trackSubscriptionFinishViaBrazeAndSentry();
  } catch (error) {
    console.error(
      `Error logging ${BRAZE_EVENT_SUBSCRIPTION_FINISH} Braze event:`,
      error.message,
    );
  }
};
