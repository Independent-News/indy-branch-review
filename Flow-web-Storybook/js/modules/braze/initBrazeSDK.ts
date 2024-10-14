import { COOKIE_PUID } from '#app/constants/cookies';

import { EVENT_BRAZE_LOADED } from '#app/constants/customEvents';

import { checkVendorConsent } from '#app/public/js/modules/cmp';
import { loadJS } from '#app/public/js/modules/util';
import { getCookie } from '#app/public/js/utils/cookie';

import { setupNotificationsPrompt } from '../../helpers/nativePushNotificationsPrompt';
import { error } from '../log';

import * as thisModule from './initBrazeSDK';

export const SP_VENDOR_ID = '5ed8c49c4b8ce4571c7ad801';

export const changeBrazeUserIdIfDefined = () => {
  const userUid = getCookie(COOKIE_PUID);
  if (userUid) {
    window.braze?.changeUser(userUid);
  }
};

/**
 * Initialize braze sdk
 * @returns {Promise<boolean>} - true if braze sdk is initialized
 */
const initBrazeSDK = async () => {
  const isBrazeAlreadyInitialised = !!window.braze;
  if (isBrazeAlreadyInitialised) {
    thisModule.changeBrazeUserIdIfDefined();
    return true;
  }

  try {
    if (!(await checkVendorConsent(SP_VENDOR_ID, 'braze'))) {
      return false;
    }

    const { braze: { sdkAPIKey = '', sdkEndpoint = '' } = {} } =
      window.JSGlobals;

    await loadJS(['https://js.appboycdn.com/web-sdk/4.8/braze.min.js']);

    window.braze?.initialize(sdkAPIKey, {
      baseUrl: sdkEndpoint,
      manageServiceWorkerExternally: true,
      requireExplicitInAppMessageDismissal: true,
      ...(process.env.NODE_ENV === 'development' && { enableLogging: true }),
    });

    changeBrazeUserIdIfDefined();

    setupNotificationsPrompt();

    document.dispatchEvent(new CustomEvent(EVENT_BRAZE_LOADED));

    return true;
  } catch (e) {
    error('Error initializing braze sdk', e);
    return false;
  }
};

export default initBrazeSDK;
