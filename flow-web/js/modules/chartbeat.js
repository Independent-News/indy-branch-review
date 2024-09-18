/* globals JSGlobals */

import { EVENT_CHARTBEAT_LOADED } from '#app/constants/customEvents';

import { loadJS } from './util';

export default async () => {
  if (!JSGlobals.chartbeat) {
    return;
  } // do nothing if no chartbeat data found on page.

  const digitalData = (window.digitalData = window.digitalData || {});

  /** CONFIGURATION START **/
  const _sf_async_config = (window._sf_async_config =
    window._sf_async_config || {});
  _sf_async_config.idSync = _sf_async_config.idSync || {};

  _sf_async_config.flickerControl = false;
  _sf_async_config.useCanonical = true;
  _sf_async_config.useCanonicalDomain = true;
  _sf_async_config.autoDetect = false; // Disable auto-tracking of all video players

  _sf_async_config.uid = JSGlobals.chartbeat.uid;
  _sf_async_config.title = JSGlobals.chartbeat.title;
  _sf_async_config.authors = JSGlobals.chartbeat.authors;
  _sf_async_config.sections = JSGlobals.chartbeat.sections;
  _sf_async_config.idSync.l = JSGlobals.userUid;
  _sf_async_config.idSync.hashed_email = JSGlobals.hashedEmail;

  const _cbq = (window._cbq = window._cbq || []);
  if (digitalData.user_status === 'premium') {
    _cbq.push(['_acct', 'paid']);
  } else if (digitalData.user_status === 'registered') {
    _cbq.push(['_acct', 'lgdin']);
  } else {
    _cbq.push(['_acct', 'anon']);
  }

  /** CONFIGURATION END **/
  await loadJS([
    '//static.chartbeat.com/js/chartbeat_video.js',
    '//static.chartbeat.com/js/chartbeat_mab.js',
  ]);

  document.dispatchEvent(new CustomEvent(EVENT_CHARTBEAT_LOADED));
};

export const trackVideo = (player) => {
  const _cbv = window._cbv || (window._cbv = []);
  _cbv.push(player);
};
