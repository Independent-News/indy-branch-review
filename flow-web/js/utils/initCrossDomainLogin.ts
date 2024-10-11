import { COOKIE_FEAT_DISABLE_XDOMAIN_LOGIN } from '#app/constants/cookies';

import {
  CONST_DO_XDOMAIN_LOGIN,
  CONST_XDOMAIN_LOGIN_FAIL,
  CONST_XDOMAIN_LOGIN_SUCCESS,
} from '../cross-domain-login';
import { log } from '../modules/log';

import { isFeatureFlagEnabled } from './featureFlag';
import * as thisModule from './initCrossDomainLogin';

type IframeCache = Record<string, { resolve: () => void; timeoutId: number }>;

const XDOMAIN_LOGIN_TIMEOUT_MS = 15000;

const domainGroups = [
  ['www.independent.co.uk', 'www.the-independent.com'],
  ['indy-uat-web.independent.co.uk', 'us-uat-web.the-independent.com'],
  ['indy-dev-web.independent.co.uk', 'us-dev-web.the-independent.com'],
];

export const getCurrentHostNameAndProtocol = () => {
  const { hostname, protocol } = window.location;
  return { hostname, protocol };
};

export const initIframe = (domain: string) => {
  const iframeElem = document.createElement('iframe');
  iframeElem.src = `${domain}/iframe/cross-domain-login`;
  iframeElem.style.width = '1px';
  iframeElem.style.height = '1px';
  iframeElem.style.position = 'absolute';
  iframeElem.style.top = '0';
  iframeElem.style.left = '0';
  iframeElem.style.border = '0';
  iframeElem.style.opacity = '0';

  return iframeElem;
};

export const getMessageReceivedFromLoginIframeHandler =
  (cache: IframeCache) =>
  ({ origin, data }: MessageEvent) => {
    const iframeInfo = cache[origin];

    if (!iframeInfo) {
      return;
    }

    const { resolve, timeoutId } = iframeInfo;

    if (data.name === CONST_XDOMAIN_LOGIN_SUCCESS) {
      clearTimeout(timeoutId);
      resolve();
      return;
    }

    if (data.name === CONST_XDOMAIN_LOGIN_FAIL) {
      console.error(`xdomain login failure (${origin})`);
      clearTimeout(timeoutId);
      resolve();
      return;
    }
  };

export const getLoginWithDomain =
  (iframeCache: IframeCache) =>
  (domain: string, email: string, password: string): Promise<void> =>
    new Promise((resolve) => {
      const iframeElem = thisModule.initIframe(domain);

      const timeoutId = window.setTimeout(() => {
        console.error(
          `x-domain login timed out after ${XDOMAIN_LOGIN_TIMEOUT_MS}ms (${domain})`,
        );
        resolve();
      }, XDOMAIN_LOGIN_TIMEOUT_MS);

      iframeElem.onerror = (err) => {
        window.clearTimeout(timeoutId);

        console.error(
          `Unable to load iframe for x-domain (${domain}) login`,
          err,
        );
        resolve();
      };

      iframeCache[domain] = { resolve, timeoutId };

      iframeElem.onload = () => {
        // DO NOT clear the timeout just in-case we never hear back from the iframe
        // we do not want to block standard single domain login

        const iframeElementContentWindow = iframeElem.contentWindow;
        if (iframeElementContentWindow) {
          iframeElem.contentWindow.postMessage(
            { name: CONST_DO_XDOMAIN_LOGIN, email, password },
            domain,
          );
        }
      };

      window.document.body.appendChild(iframeElem);
    });

export const getDoLoginForEachDomain =
  (domains: string[]) => async (email: string, password: string) => {
    // cache resolve & timeoutId for when message returned from xdomain iframe
    const cache: IframeCache = {};

    window.addEventListener(
      'message',
      thisModule.getMessageReceivedFromLoginIframeHandler(cache),
    );

    await Promise.all(
      domains.map((domain) =>
        thisModule.getLoginWithDomain(cache)(domain, email, password),
      ),
    );
  };

export default () => {
  if (isFeatureFlagEnabled(COOKIE_FEAT_DISABLE_XDOMAIN_LOGIN)) {
    window.__XDOMAIN_LOGIN__ = {
      doCrossDomainLogin: () => {
        log('Cross domain login disabled');
      },
    };

    return;
  }

  // setup an initial fallback implementation
  window.__XDOMAIN_LOGIN__ = {
    doCrossDomainLogin: () => {
      console.warn('Cross domain login unsupported in this browser.');
    },
  };

  // if browser has implemented the storage api cross domain cookies are not supported
  // therefore this approach to cross domain login is not supported - bail
  // @ts-expect-error - TS claims it will always exist but that is wrong
  if (document.hasStorageAccess) {
    return;
  }

  const { hostname, protocol } = thisModule.getCurrentHostNameAndProtocol();

  const domainGroup =
    domainGroups.find((domains) => domains.includes(hostname)) || [];

  const domainsToSynchroniseLogin = domainGroup
    .filter((domain) => hostname !== domain)
    .map((domain) => `${protocol}//${domain}`);

  window.__XDOMAIN_LOGIN__.doCrossDomainLogin =
    thisModule.getDoLoginForEachDomain(domainsToSynchroniseLogin);
};
