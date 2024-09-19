import { COOKIE_AUTH, COOKIE_PERMUTIVE_ID_SAVED } from '#app/constants/cookies';

import { InternalApi } from '../utils/internalApi';

import { hasCookie, getCookie } from './cookie';
import { permutiveReady } from './permutive';

const isPermutiveIdSet = () => {
  const value = getCookie(COOKIE_PERMUTIVE_ID_SAVED);
  return (
    value !== undefined &&
    value !== null &&
    value !== '' &&
    value !== 'undefined'
  );
};

export const populatePermutiveId = async () => {
  if (!hasCookie(COOKIE_AUTH) || isPermutiveIdSet()) {
    return;
  }

  try {
    const id = await permutiveReady();
    InternalApi.post('profile/set-permutive-id', { permutiveID: id });
  } catch (e) {
    return;
  }
};
