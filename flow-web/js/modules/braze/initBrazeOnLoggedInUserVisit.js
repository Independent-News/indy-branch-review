/* globals */

import { BRAZE_LOGGED_IN_USER_VISIT_TIMESTAMP } from '#app/constants/localStorage';

import * as thisModule from './initBrazeOnLoggedInUserVisit';
import initBrazeSDKAndOpenSession from './initBrazeSDKAndOpenSession';

export const DAY_IN_MS = 1000 * 60 * 60 * 24;

export const updatePreviousCheckTimestamp = (currentDateTimestamp) =>
  localStorage.setItem(
    BRAZE_LOGGED_IN_USER_VISIT_TIMESTAMP,
    currentDateTimestamp,
  );

export const isMoreThanOneDaySinceLastCheck = (
  currentDateTimestamp,
  previousCheckTimestamp,
) => currentDateTimestamp - previousCheckTimestamp > DAY_IN_MS;

export default async () => {
  const currentDateTimestamp = Date.now();
  const previousCheckTimestamp = localStorage.getItem(
    BRAZE_LOGGED_IN_USER_VISIT_TIMESTAMP,
  );
  if (!previousCheckTimestamp) {
    thisModule.updatePreviousCheckTimestamp(currentDateTimestamp);
    await initBrazeSDKAndOpenSession();
    return;
  }
  const isMoreThanOneDaySinceLastCheck =
    thisModule.isMoreThanOneDaySinceLastCheck(
      currentDateTimestamp,
      previousCheckTimestamp,
    );
  if (!isMoreThanOneDaySinceLastCheck) {
    return;
  }
  thisModule.updatePreviousCheckTimestamp(currentDateTimestamp);
  await initBrazeSDKAndOpenSession();
};
