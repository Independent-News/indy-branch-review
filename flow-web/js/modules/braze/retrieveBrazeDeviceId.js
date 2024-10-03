/* globals braze  */

import { error } from '../log';

export default async () => {
  try {
    let brazeDeviceId;
    await braze.getDeviceId((deviceId) => (brazeDeviceId = deviceId));
    return brazeDeviceId;
  } catch (e) {
    error(`Unable to retrieve Braze device id: ${e.message}`);
    return null;
  }
};
