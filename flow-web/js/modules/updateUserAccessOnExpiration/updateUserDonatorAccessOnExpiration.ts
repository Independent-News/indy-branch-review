import { error } from '../log';

import isAccessExpiryDateInFuture from './helpers/isAccessExpiryDateInFuture';
import updateUserAccessViaApi from './helpers/updateUserAccessViaApi';

import type { UserAccessExpiryTimestamp } from '#types/user';

export default async (
  isUserAccessGranted = false,
  donatorExpiryTimestampInSeconds: UserAccessExpiryTimestamp,
) => {
  try {
    if (!isUserAccessGranted) {
      return;
    }
    const hasYetToExpire = isAccessExpiryDateInFuture(
      donatorExpiryTimestampInSeconds,
    );
    if (hasYetToExpire) {
      return;
    }
    await updateUserAccessViaApi();
  } catch (e) {
    error(
      `Error, failed to update user's donator access on expiration: ${e.message}`,
    );
  }
};
