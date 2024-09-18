import {
  COOKIE_LOGGED_IN,
  COOKIE_PUID,
  COOKIE_SUBSCRIBER,
  COOKIE_SUBSCRIBER_ORIGIN,
} from '#app/constants/cookies';

import { CONSENT_TO_PAY_ORIGINAL_PAGE_REDIRECT_URL } from '#app/constants/localStorage';
import { AD_FREE } from '#app/constants/sourcepoint';
import { SUBSCRIBER_ORIGIN_UK } from '#app/constants/subscriberOrigin';

import decodeUserJWTOnClient from './decodeUserJWTOnClient';
import { log } from './modules/log';
import { getCookie } from './utils/cookie';

import {
  SourcePointEventError,
  SourcePointQueue,
  SourcePointScriptTagId,
  SourcePointServerConfig,
} from '#types/sourcePoint';

const isLoggedIn = getCookie(COOKIE_LOGGED_IN) === 'true';
const isAdFree = decodeUserJWTOnClient()?.[AD_FREE] ?? false;
const authId = getCookie(COOKIE_PUID);

declare global {
  interface Window {
    __SP_CONFIG__: SourcePointServerConfig;
    _sp_queue: SourcePointQueue;
    __SP_SCRIPT_TAG_ID__: SourcePointScriptTagId;
    __SP_EVENT_ERROR__: SourcePointEventError;
  }

  interface HTMLElement {
    error: number;
  }
}

window.__SP_CONFIG__ = window.__SP_CONFIG__ || {};
window.__SP_CONFIG__.propertyHref = `${document.location.protocol}//${document.location.host}`;
window._sp_queue = [];
window._sp_ = {
  ...window._sp_,
  config: {
    ...window.__SP_CONFIG__,
    ...(isLoggedIn && { authId }),
    targetingParams: {
      ad_free: isAdFree,
      registered: isLoggedIn,
      premium: getCookie(COOKIE_SUBSCRIBER) === 'true',
    },
    events: {
      onError(message_type, errorCode) {
        console.warn('CMP error', `code: ${errorCode}`);
        console.warn('CMP error', `message: ${message_type}`);
        const sourcePointScriptTag = document.getElementById(
          window.__SP_SCRIPT_TAG_ID__,
        );
        if (sourcePointScriptTag) {
          sourcePointScriptTag.error = 1;
        }
        window.dispatchEvent(new CustomEvent(window.__SP_EVENT_ERROR__));
      },
      onConsentReady(message_type, consentUUID, euconsent, info) {
        const privacySettingsElm = document.getElementById('privacy-settings');

        if (message_type === 'gdpr' && info.applies) {
          const ukPrivacyManagerId = isAdFree ? 1141355 : 1171350;

          log('Consent Or Pay: consentUUID and euconsent --->', {
            consentUUID,
            euconsent,
          });

          const geoLocation =
            getCookie(COOKIE_SUBSCRIBER_ORIGIN) ?? SUBSCRIBER_ORIGIN_UK;
          const isUK = geoLocation === SUBSCRIBER_ORIGIN_UK;

          if (privacySettingsElm) {
            privacySettingsElm.innerHTML = 'Privacy settings';
            privacySettingsElm.onclick = () => {
              window._sp_.gdpr.loadPrivacyManagerModal(
                isUK ? ukPrivacyManagerId : 559246,
              );
            };
          }
        }

        if (message_type === 'ccpa') {
          if (!privacySettingsElm) {
            return;
          }

          if (!info.applies) {
            privacySettingsElm.style.display = 'none';
            return;
          }

          privacySettingsElm.innerHTML = 'Do Not Sell or Share My Information';
          privacySettingsElm.onclick = () => {
            const ccpaId =
              window.location.host.indexOf('.co.uk') > 0 ? 882792 : 883186;

            window._sp_.ccpa.loadPrivacyManagerModal(ccpaId);
          };
        }
      },
      onMessageChoiceSelect(message_type, choice_id, choice_type_id) {
        const isPotentiallyUKOrigin = message_type === 'gdpr';
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
    },
  },
};
