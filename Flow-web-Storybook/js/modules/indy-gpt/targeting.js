/* globals googletag, JSGlobals, digitalData */

import {
  formatMantisRatings,
  formatMantisContext,
} from '#app/util/mantisDataFormatters';

import { getCookie } from './../cookie';

export const addPermutiveTargeting = (permutiveId) => {
  if (googletag.pubads().getTargeting('permutive').length) {
    return;
  }

  const kvs = localStorage.getItem('_pdfps');

  googletag.pubads().setTargeting('permutive', kvs ? JSON.parse(kvs) : []);

  if (permutiveId) {
    window.googletag.pubads().setTargeting('puid', permutiveId);
    window.googletag.pubads().setTargeting('ptime', Date.now().toString());
  }
};

export const addAutoRefreshTargeting = (refresh) => {
  googletag.pubads().setTargeting('autorefresh', refresh ? 'yes' : 'no');
};

export const addGDPRTargeting = () => {
  googletag.pubads().setTargeting('gdpr', getCookie('gdpr', 'none'));
};

export const addTopicsTargeting = () => {
  const topics = JSGlobals.topictags || [];

  if (!topics.length) {
    return;
  }

  googletag.pubads().setTargeting('topictags', topics);
};

export const addCampaignOverrideTargeting = () => {
  if (!window.location.search) {
    return;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const campaignId = searchParams.get('campaign-override')?.trim();

  if (campaignId) {
    googletag.pubads().setTargeting('display_test', campaignId);
  }
};

export const addRegGateStatusTargeting = (hasRegGate) => {
  googletag.pubads().setTargeting('reg_gate', hasRegGate ? '1' : '0');
};

export const addLiveBlogTargeting = (isLiveBlog) => {
  googletag.pubads().setTargeting('liveblog', isLiveBlog ? 'y' : 'n');
};

export const addMantisTargeting = (mantis_channels, mantis_context) => {
  const errorMsg = JSON.stringify({ error: 'Request has timed out' });
  const ratings = mantis_channels
    ? formatMantisRatings(mantis_channels.ratings)
    : errorMsg;
  const context = mantis_context
    ? formatMantisContext(mantis_context)
    : errorMsg;

  googletag.pubads().setTargeting('mantis', ratings);
  googletag.pubads().setTargeting('mantis_context', context);
};

export const addCommercialTargeting = (isCommercial) => {
  googletag.pubads().setTargeting('commercial', isCommercial ? 'y' : 'n');
};

export const addReferrerTargeting = () => {
  const { page_previous_url: url } = digitalData;

  if (url) {
    googletag.pubads().setTargeting('referrer', url);
  }
};

export const addPageTypeTargeting = () => {
  googletag.pubads().setTargeting('pageType', JSGlobals.pageType);
};

const getArticlePageId = () => JSGlobals.pageId.replace(/\D/g, '');

export const addArticleTargeting = () => {
  if (JSGlobals.article) {
    // KIWI-1674 - strip anything non numeric from article id
    googletag.pubads().setTargeting('article', getArticlePageId());
  }
};

export const addCookieDeprecationLabel = () => {
  if ('cookieDeprecationLabel' in navigator) {
    navigator.cookieDeprecationLabel.getValue().then((label) => {
      if (label) {
        googletag.pubads().setTargeting('chrome_facilitated_testing', label);
      }
    });
  }
};
