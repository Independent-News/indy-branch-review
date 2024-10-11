import { error } from '../log';

import retrieveBrazeDeviceId from './retrieveBrazeDeviceId';

export default async () => {
  try {
    const brazeDeviceId = await retrieveBrazeDeviceId();
    if (!brazeDeviceId) {
      throw new Error('Error: failed to retrieve Braze device id');
    }
    const res = await fetch(
      `/api/user/braze-generated-id?device_id=${brazeDeviceId}`,
    );
    const resBody = await res.json();
    if (res.ok) {
      return resBody.generatedBrazeId;
    }
    throw new Error(resBody.message);
  } catch (e) {
    error(`Unable to retrieve generated Braze id: ${e.message}`);
    return null;
  }
};
