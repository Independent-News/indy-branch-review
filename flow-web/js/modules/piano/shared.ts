import { COOKIE_FEAT_FORCE_PIANO_PROD } from '#app/constants/cookies';

import { CLASS_PAYMENT_METHODS } from '#app/constants/classNames';
import { LOGIN_BUTTON_ID } from '#app/constants/ids';
import {
  PIANO_MESSAGE_COMPLETE_UPGRADE_PURCHASE,
  PIANO_SDK_SRC,
} from '#app/constants/piano';
import { CONTRIBUTIONS_RSM } from '#app/constants/regSourceMethods';

import { getCookie } from '#app/public/js/utils/cookie';
import { redirect } from '#app/public/js/utils/redirect';
import appendUpgradeSuccessMessageParam from '#app/util/appendUpgradeSuccessMessageParam';

import { hasHomepageRefreshed } from '../../utils/pageRefresh';
import { initBrazeOnPremiumMeterExpired } from '../braze/initBrazeOnPremiumMeterExpired';
import { setCookie } from '../cookie';
import { loadJS } from '../util';

import * as thisModule from './shared';

import type {
  CheckoutCloseEvent,
  MeterExpiredEvent,
  PianoConversion,
  PianoWindowUnloaded,
} from '#types/piano';

interface LoginRedirectParams {
  offerId: string;
  termId: string;
}

/* Callback executed when a user must login */
export const appendTinypassScript = async () => {
  await loadJS([PIANO_SDK_SRC]);
};

/* Piano charge us every time we load their SDK, so we prevent it on refreshed page view */
export const initPianoSDKIfHomepageHasNotRefreshed = async () => {
  const isHomepageRefresh = hasHomepageRefreshed();
  if (isHomepageRefresh) {
    return;
  }
  await thisModule.appendTinypassScript();
};

export const getPianoGlobal = () => {
  const tp = window.tp || [];
  window.tp = tp;

  return tp;
};

export const sendToPiano = (...args: Array<unknown>) => {
  const pianoGlobal = getPianoGlobal();
  // CAREFUL CHANGING BELOW - checking if window.tp is an array causes no experiences to load.
  (pianoGlobal as PianoWindowUnloaded).push(...args);
};

const doLoginRequiredRedirect = async (
  regQueries: URLSearchParams,
  params?: LoginRedirectParams,
) => {
  const redirectUrl = '/register';

  if (params) {
    setCookie('__pianoParams', JSON.stringify(params), { hours: 1 });

    const urlObj = new URL(location.origin);
    urlObj.pathname = '/internal-api/subscription/term';
    urlObj.searchParams.set('__amp_source_origin', location.origin);
    urlObj.searchParams.set('termId', params.termId);

    const response = await fetch(urlObj.toString(), {
      credentials: 'same-origin',
    });
    const data = await response.json();

    // adobe analytics
    setCookie('__pianoTerm', JSON.stringify(data), { hours: 1 });

    regQueries.set('offerId', params.offerId);
    regQueries.set('termId', params.termId);
  }

  location.href = `${redirectUrl}?${regQueries.toString()}`;
};

export const onLoginRequired = (params: LoginRedirectParams) => {
  const regQueries = new URLSearchParams();
  const currentUrl = new URL(document.location.href);

  if (currentUrl.pathname.startsWith('/donations')) {
    regQueries.set('donations', '');
    regQueries.set('regSourceMethod', CONTRIBUTIONS_RSM);
  }

  doLoginRequiredRedirect(regQueries, params);
};

type PianoEvent = {
  eventName: 'openLogin' | 'set-return-url' | 'reg-return-url';
};

export const onCustomEvent = (event: PianoEvent) => {
  switch (event.eventName) {
    case 'openLogin': {
      // open amp-sidebar
      const openAmpSidebar = () =>
        document.getElementById(LOGIN_BUTTON_ID)?.click();
      openAmpSidebar();
      break;
    }
    case 'set-return-url':
      document.cookie = `ref_url=${location.origin}${location.pathname}; path=/;`;
      break;
    case 'reg-return-url':
      localStorage.setItem('regReturnUrl', location.href);
      break;
  }
};

export function onCheckoutComplete(conversion: PianoConversion) {
  // scroll up for receipt
  const [parentElement] = document.getElementsByClassName('tp-modal');
  const expires = new Date().toUTCString();
  if (parentElement) {
    parentElement.scrollTop = 0;
  }
  document.cookie = `__pianoTerm=null; expires=${expires}; path=/;`;
  document.cookie = `__pianoParams=null; expires=${expires}; path=/;`;

  fetch(`/internal-api/update-user-subscription-auto-renew`, {
    method: 'POST',
    body: JSON.stringify(conversion),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function onCheckoutExternalEvent() {}

export function onCheckoutClose(event: CheckoutCloseEvent) {
  if (event.state !== 'checkoutCompleted') {
    const [paymentMethodsElem] = document.getElementsByClassName(
      CLASS_PAYMENT_METHODS,
    );
    paymentMethodsElem.classList.remove('hide');
  }
}

/* Meter callback */
export function onMeterExpired(event: MeterExpiredEvent) {
  if (event.viewsLeft === 0 && event.meterName === 'DefaultMeter') {
    initBrazeOnPremiumMeterExpired();
  }
}

/* Meter callback */
export function onMeterActive() {}

/* Callback executed after a tinypassAccounts login */
export function onLoginSuccess(/* params */) {}

/* Callback executed after an experience executed successfully */
export function onExperienceExecute(/* event */) {}

/* Callback executed if experience execution has been failed */
export function onExperienceExecutionFailed(/* event */) {}

export const setCredentials = () => {
  const shouldForcePianoProd =
    getCookie(COOKIE_FEAT_FORCE_PIANO_PROD) === 'true';
  const isDev =
    window.JSGlobals.pianoEnvironment === 'development' &&
    !shouldForcePianoProd;

  thisModule.sendToPiano(
    ['setAid', window.JSGlobals.piano.pianoAppId],
    ...(isDev ? [] : [['setCxenseSiteId', '1134082880659765068']]),
    ['setEndpoint', window.JSGlobals.piano.pianoEndpoint],
    ['setUseTinypassAccounts', false],
    ['setSandbox', isDev],
    ['setDebug', false],
  );
};

export function getEventDataFromPostMessage<
  PData extends Record<string, unknown>,
>(data: unknown): PData | undefined {
  const doesDataExist = data !== undefined && data !== null;
  if (!doesDataExist) {
    return;
  }

  const isDataObject = typeof data === 'object' && !Array.isArray(data);
  if (isDataObject) {
    return data as PData;
  }

  const isDataString = typeof data === 'string';
  if (isDataString) {
    try {
      return JSON.parse(data);
    } catch {
      return undefined;
    }
  }
}

export function onUpgradeSuccess() {
  redirect(appendUpgradeSuccessMessageParam(window.location.href));
}

export function handlePianoPostMessage(event: MessageEvent) {
  // On prod, messages seem to be coming from independent.co.uk
  if (
    (event.origin.indexOf('tinypass.com') === -1 &&
      event.origin.indexOf('independent.co.uk') === -1) ||
    !event.data
  ) {
    return;
  }

  const eventData = getEventDataFromPostMessage<{
    event: string;
  }>(event.data);
  if (!eventData) {
    return;
  }

  switch (eventData.event) {
    case PIANO_MESSAGE_COMPLETE_UPGRADE_PURCHASE:
      onUpgradeSuccess();
      break;
  }
}
