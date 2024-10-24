import { freezeBody } from '@indy/ui/Overlay';

import { InAppMessage } from '#app/__types__/braze';

import { BRAZE_EVENT_SUBSCRIPTION_ONBOARDING_SURVEY } from './constants';
import * as thisModule from './initBrazeOnSubscriptionOnboardingSurvey';
import initBrazeSDK from './initBrazeSDK';

type OnSurveyClose = Parameters<InAppMessage['subscribeToDismissedEvent']>[0];

export const logSubscriptionOnboardingSurveyEvent = () =>
  window.braze?.logCustomEvent(BRAZE_EVENT_SUBSCRIPTION_ONBOARDING_SURVEY);

export const exposeCustomInAppMessageHandlerToBraze = (
  onSurveyClose?: OnSurveyClose,
) => {
  window.braze?.subscribeToInAppMessage((inAppMessage) => {
    const isNotControlMessage = 'animateIn' in inAppMessage;
    if (isNotControlMessage && onSurveyClose) {
      freezeBody();
      window.braze?.showInAppMessage(inAppMessage);
      inAppMessage.subscribeToDismissedEvent(onSurveyClose);
    }
  });
};

export const initBrazeOnSubscriptionOnboardingSurvey = async (
  onSurveyClose?: OnSurveyClose,
) => {
  const isBrazeInitialized = await initBrazeSDK();
  if (isBrazeInitialized) {
    thisModule.exposeCustomInAppMessageHandlerToBraze(onSurveyClose);
    thisModule.logSubscriptionOnboardingSurveyEvent();
  }
};
