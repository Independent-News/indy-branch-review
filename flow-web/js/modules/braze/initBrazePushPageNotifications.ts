import { CLASS_WEBPUSH_SIGNUP_BUTTON } from '#app/constants/classNames';

import initBrazeSDK from './initBrazeSDK';

/**
 * @see {@link https://www.braze.com/docs/developer_guide/platform_integration_guides/web/push_notifications/safari_mobile_push/#push-prompt}
 */
export default async () => {
  const init = await initBrazeSDK();

  if (init) {
    window.braze?.requestPushPermission();

    document
      .querySelectorAll(`.${CLASS_WEBPUSH_SIGNUP_BUTTON}`)
      ?.forEach((trigger) => {
        trigger.addEventListener('click', () => {
          window.braze?.requestPushPermission();
        });
      });
  }
};
