import { EVENT_ADOBE_READY } from '#app/constants/customEvents';

declare global {
  interface Window {
    s_object?: Record<string, unknown>;
  }
}

export default (trackingCallback: () => void) => {
  const hasAdobeAlreadyLoaded = !!window.s_object;
  if (hasAdobeAlreadyLoaded) {
    trackingCallback();
    return;
  }
  document.body.addEventListener(EVENT_ADOBE_READY, trackingCallback);
};
