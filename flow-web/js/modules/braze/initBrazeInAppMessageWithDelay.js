/* globals JSGlobals */

import initBrazeInAppMessage from './initBrazeInAppMessage';

const initBrazeInAppMessageWithDelay = () => {
  const { brazeSdkDelayAmount = 5000 } = JSGlobals.braze || {};
  setTimeout(initBrazeInAppMessage, brazeSdkDelayAmount);
};

export default initBrazeInAppMessageWithDelay;
