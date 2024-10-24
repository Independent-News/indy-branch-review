/* globals JSGlobals */
import { injectIframe, cookieSyncIframeAttributes } from '../util';

/*
  Extracting functionality from native-cookiesync-frames.html to control when we load the related pubmatic cookies on web
 */
export default async () => {
  const src = `https://${JSGlobals.staticHost}/iframe/native-cookiesync-frames.html`;

  injectIframe({ ...cookieSyncIframeAttributes, src });
};
