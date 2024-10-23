import {
  handleDenyButton,
  displayNativePrompt,
  shouldSuppressPrompt,
} from '../../helpers/nativePushNotificationsPrompt';

import initBrazeSDK from './initBrazeSDK';

/**
 * @see {@link https://www.braze.com/docs/developer_guide/platform_integration_guides/web/in-app_messaging/in-app_message_delivery/}
 */
export default async () => {
  const init = await initBrazeSDK();

  if (init && !shouldSuppressPrompt()) {
    displayNativePrompt();
    handleDenyButton();
  }
};
