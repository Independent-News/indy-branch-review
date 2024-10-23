/* cspell:words euconsent */

import {
  COOKIE_GDPR_APPLIES,
  COOKIE_LOGGED_IN,
  COOKIE_PUID,
  COOKIE_SUBSCRIBER,
  COOKIE_SUBSCRIBER_ORIGIN,
} from '#app/constants/cookies';

import { ID_PRIVACY_SETTINGS } from '#app/constants/ids';
import { CONSENT_TO_PAY_ORIGINAL_PAGE_REDIRECT_URL } from '#app/constants/localStorage';
import { AD_FREE, MessageType } from '#app/constants/sourcepoint';
import { SUBSCRIBER_ORIGIN_UK } from '#app/constants/subscriberOrigin';

import decodeUserJWTOnClient from './decodeUserJWTOnClient';
import { setCookie } from './modules/cookie';
import { log } from './modules/log';
import { getCookie } from './utils/cookie';

import type {
  SourcePointEventError,
  SourcePointQueue,
  SourcePointScriptTagId,
  SourcePointServerConfig,
  SourcePointConfig,
} from '#types/sourcePoint';

declare global {
  interface Window {
    __SP_CONFIG__: SourcePointServerConfig;
    __SP_SCRIPT_TAG_ID__: SourcePointScriptTagId;
    __SP_EVENT_ERROR__: SourcePointEventError;
    _sp_queue: SourcePointQueue;
  }

  interface HTMLElement {
    error: number;
  }
}

const isSubscriber = getCookie(COOKIE_SUBSCRIBER) === 'true';
const isLoggedIn = getCookie(COOKIE_LOGGED_IN) === 'true';
const isAdFree = decodeUserJWTOnClient()?.[AD_FREE] ?? false;
const authId = getCookie(COOKIE_PUID);

window.__SP_CONFIG__ = window.__SP_CONFIG__ || {};
window.__SP_CONFIG__.propertyHref = `${document.location.protocol}//${document.location.host}`;
window._sp_queue = [];
window._sp_ = {
  config: {
    ...window.__SP_CONFIG__,
    ...(isLoggedIn && { authId }),
    // we boolean cast the values since they won't exist for anonymous users and SP expects booleans
    targetingParams: {
      ad_free: isAdFree,
      registered: isLoggedIn,
      premium: isSubscriber,
    },
  },
};

(window._sp_?.config as SourcePointConfig).events = {
  onError(message_type, errorCode) {
    console.warn('CMP error', `code: ${errorCode}`);
    console.warn('CMP error', `message: ${message_type}`);

    if (window.__SP_SCRIPT_TAG_ID__) {
      const elem = document.getElementById(
        window.__SP_SCRIPT_TAG_ID__,
      ) as HTMLElement;

      if (elem) {
        elem.error = 1;
      }
    }

    if (window.__SP_EVENT_ERROR__) {
      window.dispatchEvent(new CustomEvent(window.__SP_EVENT_ERROR__));
    }
  },

  onConsentReady(
    message_type,
    consentUUID,
    euconsent,
    info: { applies: boolean },
  ) {
    const privacySettingsElm = document.getElementById(ID_PRIVACY_SETTINGS);

    if (!privacySettingsElm) {
      return;
    }

    if (message_type === MessageType.GDPR && info.applies) {
      const ukPrivacyManagerId = isAdFree ? 1141355 : 1171350;

      log('Consent Or Pay: consentUUID and euconsent --->', {
        consentUUID,
        euconsent,
      });

      const geoLocation =
        getCookie(COOKIE_SUBSCRIBER_ORIGIN) ?? SUBSCRIBER_ORIGIN_UK;
      const isUK = geoLocation === SUBSCRIBER_ORIGIN_UK;

      privacySettingsElm.innerHTML = 'Privacy settings';
      privacySettingsElm.onclick = () => {
        window._sp_?.gdpr?.loadPrivacyManagerModal(
          isUK ? ukPrivacyManagerId : 559246,
        );
      };

      setCookie(COOKIE_GDPR_APPLIES, 'true', { hours: 1 });
    }

    if (message_type === MessageType.CCPA) {
      if (!info.applies) {
        privacySettingsElm.style.display = 'none';

        return;
      }

      privacySettingsElm.innerHTML = 'Do Not Sell or Share My Information';
      privacySettingsElm.onclick = () => {
        const ccpaId =
          window.location.host.indexOf('.co.uk') > 0 ? 882792 : 883186;

        window._sp_?.ccpa?.loadPrivacyManagerModal(ccpaId);
      };
    }
  },
  onMessageChoiceSelect(message_type, choice_id, choice_type_id) {
    const isPotentiallyUKOrigin = message_type === MessageType.GDPR;
    const shouldCacheCurrentUrlOnRedirect = choice_type_id === 9;
    const isConsentOrPayJourney =
      isPotentiallyUKOrigin && shouldCacheCurrentUrlOnRedirect;
    if (isConsentOrPayJourney) {
      window.localStorage.setItem(
        CONSENT_TO_PAY_ORIGINAL_PAGE_REDIRECT_URL,
        window.location.href,
      );
    }
  },
};
