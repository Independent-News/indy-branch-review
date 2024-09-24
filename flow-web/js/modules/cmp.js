/* globals JSGlobals */
import { EVENT_SOURCEPOINT_ERROR } from '#app/constants/customEvents';
import { ID_SOURCEPOINT_SCRIPT_TAG } from '#app/constants/ids';

import { log } from './log';

export const checkConsent = () =>
  new Promise((resolve) => {
    if (!JSGlobals.cmp.enabled) {
      resolve(true);
      return;
    }

    const cmpScriptTag = document.getElementById(ID_SOURCEPOINT_SCRIPT_TAG);
    if (cmpScriptTag.error) {
      resolve(false);
    }
    window.addEventListener(EVENT_SOURCEPOINT_ERROR, () => {
      resolve(false);
    });

    const apiCallback = (tcData, success) => {
      if (!success) {
        return;
      }

      if (!['useractioncomplete', 'tcloaded'].includes(tcData.eventStatus)) {
        log(
          "Consent Or Pay: !['useractioncomplete', 'tcloaded'].includes(tcData.eventStatus) --->",
          { tcData, eventStatus: tcData.eventStatus },
        );

        return;
      }

      window.__tcfapi('removeEventListener', 2, () => {}, tcData.listenerId);

      if (!tcData.gdprApplies) {
        resolve(true);
        return;
      }

      log('Consent Or Pay: valid GDPR tcData --->', tcData);

      if (tcData.publisher?.consents?.['1']) {
        log('Consent Or Pay: tcData.publisher?.consents?.["1"] --->', tcData);

        resolve(true);
        return;
      }

      resolve(false);
    };

    window.__tcfapi('addEventListener', 2, apiCallback);
  });

export const checkVendorConsent = async (vendorId, vendorName) => {
  return new Promise((resolve) => {
    if (!JSGlobals?.cmp?.enabled) {
      resolve(true);
    } else if (window.__tcfapi) {
      checkConsent().then((consent) => {
        if (!consent) {
          resolve(false);
          return;
        }

        // @see {@link https://docs.sourcepoint.com/hc/en-us/articles/4405397717395-Vendor-grants-Web}
        window.__tcfapi('getCustomVendorConsents', 2, (data) => {
          const consent = !!data.grants?.[vendorId]?.vendorGrant;
          log('CMP:getCustomVendorConsents', vendorName, consent);
          resolve(consent);
        });
      });
    }
  });
};
