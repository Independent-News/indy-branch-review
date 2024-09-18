import retrieveGeneratedBrazeId from '../braze/retrieveGeneratedBrazeId';

import { identifyUserViaGeneratedBrazeIdOnceLoaded } from './identifyUser';

export default async (isLoggedIn = false, permutiveIds) => {
  if (!isLoggedIn) {
    return null;
  }
  // if Braze has already loaded
  if (window.braze) {
    return await retrieveGeneratedBrazeId();
  }
  identifyUserViaGeneratedBrazeIdOnceLoaded(permutiveIds);
  return null;
};
