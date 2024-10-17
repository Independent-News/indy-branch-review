import isUserLoggedInClientSide from '#app/util/isUserLoggedInClientSide';

import { error } from '../log';

import deleteExpiredSubscriberConsent from './helpers/deleteExpiredSubscriberConsent';
import isAccessExpiryDateInFuture from './helpers/isAccessExpiryDateInFuture';
import updateUserAccessViaApi from './helpers/updateUserAccessViaApi';
import * as thisModule from './updateUserAdFreeAccessOnExpiration';

import type { UserAccessExpiryTimestamp } from '#types/user';

export const updateUserAccessIfCancelledViaDashboard = async () =>
  await updateUserAccessViaApi();

/**
 * Ensure all ad-free subscribers are treated as active in Piano custom fields.
 */
export const identifyUserAsActiveInPianoCustomFields = async () => {
  const res = await fetch('/api/user/ad-free-access/enable', {
    method: 'POST',
  });
  if (!res.ok) {
    const serverErrorMessage = await res.json();
    error(
      `Error, failed to identify user as active in Piano custom fields: ${serverErrorMessage}`,
    );
  }
};

export const identifyUserAsExpiredInPianoCustomFields = async () => {
  const res = await fetch('/api/user/ad-free-access/disable', {
    method: 'POST',
  });
  if (!res.ok) {
    const serverErrorMessage = await res.json();
    throw new Error(serverErrorMessage);
  }
};

type UserCustomFieldsAccessResponse =
  | {
      isAdFreeUser: boolean;
    }
  | {
      message: string;
    };

/**
 * Expired account logs in and is already treated as inactive.
 * We also need to tell SourcePoint to treat the user as expired.
 */
export const deleteUserConsentIfExpiredUser = async () => {
  const userCustomFieldsAccessRes = await fetch(
    '/api/user/ad-free-access/status',
  );
  const resJson: UserCustomFieldsAccessResponse =
    await userCustomFieldsAccessRes.json();
  const hasRequestFailed = 'message' in resJson;
  if (hasRequestFailed) {
    throw new Error(resJson.message);
  }
  const { isAdFreeUser: isUserAccessGrantedInPianoCustomFields = false } =
    resJson;
  if (isUserAccessGrantedInPianoCustomFields) {
    await Promise.all([
      deleteExpiredSubscriberConsent(),
      thisModule.identifyUserAsExpiredInPianoCustomFields(),
    ]);
  }
};

export const wipeAdFreeStatusFromSiteAndThirdParties = async () =>
  await Promise.all([
    updateUserAccessViaApi(),
    deleteExpiredSubscriberConsent(),
    thisModule.identifyUserAsExpiredInPianoCustomFields(),
  ]);

export const ensureAdFreeUsersAreCorrectlyIdentified = async () =>
  await Promise.all([
    thisModule.identifyUserAsActiveInPianoCustomFields(),
    thisModule.updateUserAccessIfCancelledViaDashboard(),
  ]);

export default async (
  isUserAccessGranted = false,
  adFreeExpiryTimestampInSeconds: UserAccessExpiryTimestamp,
) => {
  try {
    const isUserLoggedIn = isUserLoggedInClientSide();
    if (!isUserLoggedIn) {
      return;
    }
    if (!isUserAccessGranted) {
      await thisModule.deleteUserConsentIfExpiredUser();
      return;
    }
    await thisModule.ensureAdFreeUsersAreCorrectlyIdentified();
    const hasYetToExpire = isAccessExpiryDateInFuture(
      adFreeExpiryTimestampInSeconds,
    );
    if (hasYetToExpire) {
      return;
    }
    await thisModule.wipeAdFreeStatusFromSiteAndThirdParties();
  } catch (e) {
    error(
      `Error, failed to update user's ad-free access on expiration: ${e.message}`,
    );
  }
};
