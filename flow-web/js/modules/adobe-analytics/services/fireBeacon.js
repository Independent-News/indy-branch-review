/* globals JSGlobals */

export default (adobeLib = window[JSGlobals.ADOBE_ANALYTICS_OBJECT]) => {
  adobeLib.t();
};
