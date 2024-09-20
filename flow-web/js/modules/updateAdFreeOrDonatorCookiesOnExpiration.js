import decodeUserJWTOnClient from '../decodeUserJWTOnClient';

import {
  updateUserAdFreeAccessOnExpiration,
  updateUserDonatorAccessOnExpiration,
} from './updateUserAccessOnExpiration';

export default async () => {
  const {
    isAdFreeUser,
    isActiveRecurringDonator,
    adFreeExpiryTimestamp,
    recurringDonatorExpiryTimestamp,
  } = decodeUserJWTOnClient();
  await Promise.allSettled([
    updateUserAdFreeAccessOnExpiration(isAdFreeUser, adFreeExpiryTimestamp),
    updateUserDonatorAccessOnExpiration(
      isActiveRecurringDonator,
      recurringDonatorExpiryTimestamp,
    ),
  ]);
};
