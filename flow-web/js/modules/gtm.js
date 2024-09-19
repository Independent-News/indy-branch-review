/* globals JSGlobals */

/**
 * @file Google Tag Manager integration
 *
 * This file is migrated from the module @brightsites/flow-core/lib/utils/gtm
 */

import { getName, getSlug } from '@brightsites/flow-core/lib/utils/authors';
import { getPageCategory } from '@brightsites/flow-core/lib/utils/page';

import {
  EVENT_GTM_LOADED,
  EVENT_DATALAYER_PUSH,
} from '#app/constants/customEvents';

import { arrayHasItem } from '#app/util/array';

import { log } from './log';
import { loadJS } from './util';

const dataLayer = () => {
  window.dataLayer = window.dataLayer || [];

  let data = {
    event: 'pageDataLoaded',
    trackingId: JSGlobals.ga,
    pageType: JSGlobals.pageType,
    headline: undefined,
    articleId: undefined,
    headlineWordCount: undefined,
    publishedDate: undefined,
    sponsorName: undefined,
    siteKey: JSGlobals.siteKey,
  };

  if (JSGlobals.article) {
    const authorName = arrayHasItem(JSGlobals.article.authors)
      ? getName(JSGlobals.article.authors)
      : null;
    const authorSlug = arrayHasItem(JSGlobals.article.authors)
      ? getSlug(JSGlobals.article.authors)
      : null;
    const pageCategories = getPageCategory(JSGlobals.article);
    const siteSection = JSGlobals.article.sectionCategory
      .map(({ siteSection }) => siteSection)
      .join('|');
    data = {
      ...data,
      articleId: JSGlobals.pageId,
      headline: JSGlobals.article.title,
      authorName,
      authorSlug,
      headlineWordCount: JSGlobals.article.title.split(' ').length,
      publishedDate: JSGlobals.article.publish,
      sponsorName: JSGlobals.article.sponsorName,
      pageCategories,
      siteSection,
      additionalKeywords: null,
    };
  }

  window.dataLayer.push(data);
};

const queryParams = (containerId, auth = null, env = null) =>
  auth
    ? new URLSearchParams({
        id: containerId,
        gtm_auth: auth,
        gtm_preview: env,
        gtm_cookies_win: 'x',
      }).toString()
    : new URLSearchParams({
        id: containerId,
      }).toString();

const createArrayWithPushEvent = () =>
  new Proxy([], {
    set: (obj, prop, value) => {
      if (prop !== 'length') {
        const pushEvent = new CustomEvent(EVENT_DATALAYER_PUSH, {
          detail: value,
        });

        window.dispatchEvent(pushEvent);
      }

      return Reflect.set(obj, prop, value);
    },
  });

const prepareDataLayerWithPushEvent = () => {
  const pushedDataLayer = window.dataLayer || [];
  window.dataLayer = createArrayWithPushEvent();
  pushedDataLayer.forEach((data) => {
    window.dataLayer.push(data);
  });
};

const initGTMScript = async () => {
  dataLayer();

  const { containerId, auth, env } = JSGlobals.gtm;

  prepareDataLayerWithPushEvent();

  // below code is destructed from the installation code provided by tag manager
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const src = `https://www.googletagmanager.com/gtm.js?${queryParams(
    containerId,
    auth,
    env,
  )}`;
  await loadJS([src]);
};

const fireGTMLoadedCustomEvent = () =>
  new Promise((resolve, reject) => {
    window.addEventListener(EVENT_DATALAYER_PUSH, (event) => {
      if (event.detail.event === 'gtm.load') {
        document.body.dispatchEvent(new CustomEvent(EVENT_GTM_LOADED));
        resolve();
      }

      log('Value pushed to dataLayer: ', event.detail);

      if (!window.google_tag_manager) {
        reject(
          "Error firing `fireGTMLoadedCustomEvent` 'google_tag_manager.dataLayer.gtmDom' not found!",
        );
      }
    });
  });

export default async () => {
  if (JSGlobals.gtm) {
    await initGTMScript();
    await fireGTMLoadedCustomEvent();
  }
};
