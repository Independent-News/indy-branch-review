import decodeUserJWTOnClient from '../decodeUserJWTOnClient';

import {
  updateUserAdFreeAccessOnExpiration,
  updateUserDonatorAccessOnExpiration,
} from './updateUserAccessOnExpiration';

export default async () => {
  const userJwt = decodeUserJWTOnClient();
  if (!userJwt) {
    return;
  }
  const {
    isAdFreeUser,
    adFreeExpiryTimestamp,
    isActiveRecurringDonator,
    recurringDonatorExpiryTimestamp,
  } = userJwt;
  await Promise.allSettled([
    updateUserAdFreeAccessOnExpiration(isAdFreeUser, adFreeExpiryTimestamp),
    updateUserDonatorAccessOnExpiration(
      isActiveRecurringDonator,
      recurringDonatorExpiryTimestamp,
    ),
  ]);
};
