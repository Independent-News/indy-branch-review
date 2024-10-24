import { COOKIE_AUTH } from '#app/constants/cookies';

import { getCookie } from '#app/public/js/utils/cookie';

import * as prodMethods from './piano/prod';
import * as sandboxMethods from './piano/sandbox';
import {
  getPianoGlobal,
  handlePianoPostMessage,
  initPianoSDKIfHomepageHasNotRefreshed,
  onCheckoutClose,
  onCheckoutComplete,
  onCheckoutExternalEvent,
  onCustomEvent,
  onExperienceExecute,
  onExperienceExecutionFailed,
  onLoginRequired,
  onLoginSuccess,
  onMeterActive,
  onMeterExpired,
  sendToPiano,
  setCredentials,
} from './piano/shared';

import type { PianoTemplate } from '#types/piano';

export const generatePianoInitCallbacks = (
  onTemplateShow: (template: PianoTemplate) => void,
) => [
  /* checkout related events */
  ['addHandler', 'checkoutComplete', onCheckoutComplete],
  ['addHandler', 'checkoutClose', onCheckoutClose],
  ['addHandler', 'checkoutCustomEvent', onCheckoutExternalEvent],

  /* user login events */
  ['addHandler', 'loginRequired', onLoginRequired],
  ['addHandler', 'loginSuccess', onLoginSuccess],

  /* meter related */
  ['addHandler', 'meterExpired', onMeterExpired],
  ['addHandler', 'meterActive', onMeterActive],

  /* experience related */
  ['addHandler', 'experienceExecute', onExperienceExecute],
  ['addHandler', 'experienceExecutionFailed', onExperienceExecutionFailed],

  /* template related */
  ['addHandler', 'showTemplate', onTemplateShow],

  // custom event
  ['addHandler', 'customEvent', onCustomEvent],

  // Piano ID
  ['setUseTinypassAccounts', false],
  ['setUsePianoIdUserProvider', false],
  ['setUsePianoIdLiteUserProvider', true],
  ['setExternalJWT', getCookie(COOKIE_AUTH)],
];

export const init = async (isSandbox = false) => {
  const envSpecificMethods = isSandbox ? sandboxMethods : prodMethods;
  const { onTemplateShow } = envSpecificMethods;
  setCredentials();

  const pianoCallbacks = generatePianoInitCallbacks(onTemplateShow);
  sendToPiano(...pianoCallbacks);

  window.addEventListener('message', handlePianoPostMessage);

  await initPianoSDKIfHomepageHasNotRefreshed();
};

export const triggerExperiencesOnPianoInit = () => {
  sendToPiano([
    'init',
    () => {
      const pianoGlobal = getPianoGlobal();
      if (Array.isArray(pianoGlobal)) {
        return;
      }
      pianoGlobal.enableGACrossDomainLinking();
      pianoGlobal.experience.init();
    },
  ]);
};
