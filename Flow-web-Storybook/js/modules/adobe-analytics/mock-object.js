/* eslint-disable no-console */
window.mockAdobeAnalyticsObject = {
  tl: (...args) => {
    console.log('MOCK ADOBE ANALYTICS "tl" CALL', args);
    window.__CYPRESS__SPY__?.('tl', window.s_object);
  },
  t: () => {
    console.log('MOCK ADOBE ANALYTICS "t" CALL');
    window.__CYPRESS__SPY__?.('t', window.s_object);
  },
};
