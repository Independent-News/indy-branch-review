import { loadJS } from '../modules/util';

export const RECAPTURE_URI = 'https://www.google.com/recaptcha/api.js?render=';

const getJSGlobals = () => window.JSGlobals || {};
const getRecaptureURI = () =>
  `${RECAPTURE_URI}${getJSGlobals().recaptureV3Key}`;

let scriptLoadStarted = false;
let scriptLoadFinished = false;

const resolvers = [];

export default async () => {
  if (scriptLoadFinished) {
    // script has already loaded, just return
    return;
  }

  if (scriptLoadStarted) {
    // script load has started, resolve when script load is finished
    await new Promise((resolve) => {
      resolvers.push(resolve);
    });

    return;
  }

  scriptLoadStarted = true;

  await loadJS([getRecaptureURI()]);

  await new Promise((resolve) => {
    window.grecaptcha.ready(resolve);
  });

  scriptLoadFinished = true;

  resolvers.forEach((resolve) => resolve());
};
