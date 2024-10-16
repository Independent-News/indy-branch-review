/* globals permutive */

import {
  COOKIE_PUID,
  COOKIE_HASHED_EMAIL,
  COOKIE_CHARTBEAT_ID,
} from '#app/constants/cookies';

import { EVENT_BRAZE_LOADED } from '#app/constants/customEvents';

import retrieveGeneratedBrazeId from '../braze/retrieveGeneratedBrazeId';
import { getCookie } from '../cookie';

import fetchGeneratedBrazeIdToIdentifyUser from './fetchGeneratedBrazeIdToIdentifyUser';

export const identifyUserViaGeneratedBrazeIdOnceLoaded = (
  permutiveIds = [],
) => {
  document.addEventListener(EVENT_BRAZE_LOADED, async () => {
    const permutiveIdsCopy = [...permutiveIds];
    const generatedBrazeId = await retrieveGeneratedBrazeId();
    if (generatedBrazeId) {
      permutiveIdsCopy.push({
        id: generatedBrazeId,
        tag: 'braze_id',
        priority: 3,
      });
      permutive.identify(permutiveIdsCopy);
    }
  });
};

export async function identifyUser() {
  const permutiveIds = [];
  const pianoId = getCookie(COOKIE_PUID);
  const hashedEmail = getCookie(COOKIE_HASHED_EMAIL);
  const chartbeatId = getCookie(COOKIE_CHARTBEAT_ID);
  const isLoggedIn = !!pianoId;
  const generatedBrazeId = await fetchGeneratedBrazeIdToIdentifyUser(
    isLoggedIn,
    permutiveIds,
  );

  const permutiveGeneratedId = permutive.context?.user_id;

  if (pianoId) {
    permutiveIds.push(
      { id: pianoId, tag: 'piano_id', priority: 0 },
      { id: hashedEmail, tag: 'user_email', priority: 1 },
      { id: hashedEmail, tag: 'email_sha256', priority: 2 },
      { id: chartbeatId, tag: 'chartbeat_id', priority: 4 },
    );
  }

  if (generatedBrazeId) {
    permutiveIds.push({
      id: generatedBrazeId,
      tag: 'braze_id',
      priority: 3,
    });
  }

  if (permutiveGeneratedId) {
    permutiveIds.push({
      id: permutiveGeneratedId,
      tag: 'permutive_id',
      priority: 5,
    });
  }

  if (permutiveIds.length) {
    permutive.identify(permutiveIds);
  }
}
