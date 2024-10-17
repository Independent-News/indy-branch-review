/* globals dm, DotMetricsObj, JSGlobals*/
import { COOKIE_SUBSCRIBER_ORIGIN } from '#app/constants/cookies';

import { SUBSCRIBER_ORIGIN_US } from '#app/constants/subscriberOrigin';

import { getCookie } from './cookie';
import { loadJS } from './util';

export default async () => {
  if (getCookie(COOKIE_SUBSCRIBER_ORIGIN) === SUBSCRIBER_ORIGIN_US) {
    return;
  }
  window.dm = window.dm || { AjaxData: [] };
  window.dm.AjaxEvent = function (et, d, ssid, ad) {
    dm.AjaxData.push({ et, d, ssid, ad });
    window.DotMetricsObj && DotMetricsObj.onAjaxDataUpdate();
  };
  if (JSGlobals?.dotmetrics?.sectionId) {
    await loadJS([
      `https://uk-script.dotmetrics.net/door.js?id=${JSGlobals.dotmetrics.sectionId}`,
    ]);
  }
};
