/**
 * @jest-environment jsdom
 */

import retrieveGeneratedBrazeId from '../../braze/retrieveGeneratedBrazeId';
import fetchGeneratedBrazeIdToIdentifyUser from '../fetchGeneratedBrazeIdToIdentifyUser';
import { identifyUserViaGeneratedBrazeIdOnceLoaded } from '../identifyUser';

jest.mock('../../braze/retrieveGeneratedBrazeId');
jest.mock('../identifyUser');

describe('fetchGeneratedBrazeIdToIdentifyUser()', () => {
  const mockPermutiveIds = 'mock-permutive-ids';

  afterEach(() => {
    jest.resetAllMocks();
    delete window.braze;
  });

  it('will not attempt to fetch generated Braze id for anonymous user', async () => {
    const mockedLoggedIn = false;
    const result = await fetchGeneratedBrazeIdToIdentifyUser(
      mockedLoggedIn,
      mockPermutiveIds,
    );
    expect(result).toBeNull();
  });

  it('will immediately attempt to fetch generated Braze id for logged in user and Braze has already loaded', async () => {
    window.braze = {};
    const mockedLoggedIn = true;
    retrieveGeneratedBrazeId.mockResolvedValue('mock-braze-id');
    const result = await fetchGeneratedBrazeIdToIdentifyUser(
      mockedLoggedIn,
      mockPermutiveIds,
    );
    expect(result).toBe('mock-braze-id');
    expect(retrieveGeneratedBrazeId).toHaveBeenCalledTimes(1);
  });

  it('will return null but setup listener to identify user via generated Braze id once Braze has loaded', async () => {
    const mockedLoggedIn = true;
    const result = await fetchGeneratedBrazeIdToIdentifyUser(
      mockedLoggedIn,
      mockPermutiveIds,
    );
    expect(result).toBeNull();
    expect(retrieveGeneratedBrazeId).not.toHaveBeenCalled();
    expect(identifyUserViaGeneratedBrazeIdOnceLoaded).toHaveBeenCalledTimes(1);
    expect(identifyUserViaGeneratedBrazeIdOnceLoaded).toHaveBeenCalledWith(
      mockPermutiveIds,
    );
  });
});
