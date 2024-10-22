/* globals JSGlobals */

import { COOKIE_LOGGED_IN } from '#app/constants/cookies';

import { ID_OPEN_DRAWER_BUTTON } from '#app/constants/ids';

import { setCookie, getCookie } from '../modules/cookie';
import { log } from '../modules/log';
import { loadJS } from '../modules/util';

import { fetchUserState } from './fetchUserState';
import { getPublisherEntitlement } from './getPublisherEntitlement';
import { isGoogleAccess } from './isGoogleAccess';
import { signinOrRegisterUser } from './signinOrRegisterUser';

const REGISTRATION_WIDGET_URL = `${window.location.origin}/iframe/registration_widget`;

const openDrawerButton = document.getElementById(ID_OPEN_DRAWER_BUTTON);

const referrer = document.referrer;
const searchString = location.search;
const nowDate = Date.now();

const queryReferrer = new URLSearchParams(window.location.search).get(
  'referrer',
);

export const accessedFromGoogle = isGoogleAccess(
  referrer,
  queryReferrer,
  searchString,
  nowDate,
);

export const meterExpired = {};

let meterExpiredP = new Promise((resolve) => {
  meterExpired.resolve = resolve;
});

const SHOW_PAYWALL_COOKIE = '_pc_showpaywall';

const extendedAccess = () => {
  if (getCookie(SHOW_PAYWALL_COOKIE) === 'true') {
    log(
      'entitlement: ',
      'EVENT_SHOWCASE_NO_ENTITLEMENTS_PAYWALL',
      ' , isUserRegistered: ',
      true,
    );
    return;
  }
  return new Promise((resolve) => {
    if (accessedFromGoogle) {
      loadJS(['https://news.google.com/swg/js/v1/swg-gaa.js']);
      loadJS(['https://news.google.com/swg/js/v1/swg.js'], {
        attributes: [['subscriptions-control', 'manual']],
      });
      loadJS(['https://apis.google.com/js/platform.js']);

      (self.SWG = self.SWG || []).push(async (subscriptions) => {
        const entitlementLog = ({ entitlement, isUserRegistered }) => {
          subscriptions.setShowcaseEntitlement({
            entitlement,
            isUserRegistered,
          });

          log(
            'entitlement: ',
            entitlement,
            ' , isUserRegistered: ',
            isUserRegistered,
          );
        };

        subscriptions.init(JSGlobals?.showcaseProductId);

        subscriptions.setOnNativeSubscribeRequest(() => {
          log(
            '%c%s',
            'background:dodgerblue;color:yellow;padding:10px;',
            'subscribe event',
          );
          localStorage.setItem('returnUrl', window.location.href);
          window.location = '/subscribe';
        });

        // we need to send data to Google if it's free and stop extended metering
        if (!JSGlobals?.article?.premium) {
          entitlementLog({
            entitlement: 'EVENT_SHOWCASE_UNLOCKED_FREE_PAGE',
            isUserRegistered: Boolean(getCookie(COOKIE_LOGGED_IN)),
          });

          return;
        }

        const userState = await fetchUserState();

        if (userState.metering) {
          log('user state received');
          subscriptions.getEntitlements(userState);
          subscriptions.setOnEntitlementsResponse(async (entitlements) => {
            let meterExpired = await meterExpiredP;
            const { hasAccess, subscribed } =
              getPublisherEntitlement(meterExpired);

            if (hasAccess) {
              /*
               *  user has access because:
               *  1. they are a subscriber
               *  2. they have some free articles left.
               *
               *  Report this fact to Google and just let Piano experience take care of showing appropriate prompts (e.g. 2 free articles remaining)
               */

              if (subscribed) {
                entitlementLog({
                  entitlement: 'EVENT_SHOWCASE_UNLOCKED_BY_SUBSCRIPTION',
                  isUserRegistered: true,
                });
              } else {
                entitlementLog({
                  entitlement: 'EVENT_SHOWCASE_UNLOCKED_BY_METER',
                  isUserRegistered: true,
                });
              }

              log('Publisher already grants access');

              resolve();
            } else {
              log('Not allowed access, try to use Google intervention');
              let e = await entitlements;
              log('entitlements: ', e);
              if (e.enablesThisWithGoogleMetering()) {
                log(
                  '%c%s',
                  'background:dodgerblue;color:yellow;padding:10px;',
                  'entitlementsEnabled, consume',
                );
                e.consume(() => {
                  // there we need to unlock article, but because we it's not locked
                  // in the first place and we add paywall as needed we don't need to do anything here
                });
              } else {
                setCookie(SHOW_PAYWALL_COOKIE, 'true', { hours: 1 });
                entitlementLog({
                  entitlement: 'EVENT_SHOWCASE_NO_ENTITLEMENTS_PAYWALL',
                  isUserRegistered: true,
                });
                log(
                  '%c%s',
                  'background:dodgerblue;color:yellow;padding:10px;',
                  'show Paywall',
                );
                window.location.reload();
              }

              resolve();
            }
          });
        } else {
          log('user state not found on server. Probably you are not signed in');

          subscriptions.setOnLoginRequest(() => {
            openDrawerButton?.click();

            log(
              '%c%s',
              'background:dodgerblue;color:yellow;padding:10px;',
              'openLoginPage',
            );
          });
          // eslint-disable-next-line no-undef
          GaaMeteringRegwall.show({
            iframeUrl: REGISTRATION_WIDGET_URL,
          })
            .then((meteringResult) => {
              signinOrRegisterUser(meteringResult.idToken).then((userState) => {
                subscriptions.getEntitlements(userState);
              });
            })
            .catch((e) => {
              log(e);
              log('an error occurred trying to show regwall');
              resolve();
            });
        }
      });
    } else {
      resolve();
    }
  });
};

extendedAccess();
