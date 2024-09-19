import { TRX_NOT_APPLICABLE, TRX_BASE_URL } from '#app/constants/trackonomics';

import { updateTrxHref } from '#app/services/trackonomics';

export default () => {
  const trxLinks = document.querySelectorAll(`a[href^="${TRX_BASE_URL}"]`);
  trxLinks?.forEach((link) => {
    const href = link.getAttribute('href');
    const locationReferrer = document.referrer || TRX_NOT_APPLICABLE;
    const userAgent = navigator.userAgent;
    const locationUtmSource = new URLSearchParams(window.location.search).get(
      'utm_source',
    );
    const device = /mobile/i.test(userAgent) ? 'mobile' : 'desktop';
    const trxHref = updateTrxHref(href, {
      locationUserAgent: device,
      locationReferrer,
      locationUtmSource,
    });
    link.setAttribute('href', trxHref);
  });
};
