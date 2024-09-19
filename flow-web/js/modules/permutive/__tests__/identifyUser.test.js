/**
 * @jest-environment jsdom
 */

import {
  COOKIE_CHARTBEAT_ID,
  COOKIE_HASHED_EMAIL,
  COOKIE_PUID,
} from '#app/constants/cookies';

import { EVENT_BRAZE_LOADED } from '#app/constants/customEvents';

import retrieveGeneratedBrazeId from '../../braze/retrieveGeneratedBrazeId';
import { getCookie } from '../../cookie';
import fetchGeneratedBrazeIdToIdentifyUser from '../fetchGeneratedBrazeIdToIdentifyUser';
import {
  identifyUser,
  identifyUserViaGeneratedBrazeIdOnceLoaded,
} from '../identifyUser';

jest.mock('../../cookie');
jest.mock('../../braze/retrieveGeneratedBrazeId');
jest.mock('../fetchGeneratedBrazeIdToIdentifyUser');

describe('identify user - Permutive', () => {
  beforeEach(() => {
    window.permutive = {
      identify: jest.fn(),
    };
  });

  describe('identifyingUsers', () => {
    afterEach(() => {
      delete window.permutive;
      delete window.braze;
      getCookie.mockReset();
      jest.resetAllMocks();
      jest.restoreAllMocks();
    });

    it('should identify user via Piano id, Braze id, Chartbeat id and hashed email', async () => {
      const expectedLoggedIn = true;
      const expectedPermutiveIds = [
        {
          id: 'the-piano-id',
          priority: 0,
          tag: 'piano_id',
        },
        {
          id: 'boris@example.test',
          priority: 1,
          tag: 'user_email',
        },
        {
          id: 'boris@example.test',
          priority: 2,
          tag: 'email_sha256',
        },
        {
          id: 'the-chartbeat-id',
          priority: 4,
          tag: 'chartbeat_id',
        },
        {
          id: 'some-braze-id',
          priority: 3,
          tag: 'braze_id',
        },
      ];
      window.braze = {};
      getCookie.mockImplementation((name) => {
        return {
          [COOKIE_PUID]: 'the-piano-id',
          [COOKIE_HASHED_EMAIL]: 'boris@example.test',
          [COOKIE_CHARTBEAT_ID]: 'the-chartbeat-id',
        }[name];
      });
      fetchGeneratedBrazeIdToIdentifyUser.mockResolvedValueOnce(
        'some-braze-id',
      );
      await identifyUser();
      expect(window.permutive.identify.mock.calls).toMatchSnapshot();
      expect(fetchGeneratedBrazeIdToIdentifyUser).toHaveBeenCalledTimes(1);
      expect(fetchGeneratedBrazeIdToIdentifyUser).toHaveBeenCalledWith(
        expectedLoggedIn,
        expectedPermutiveIds,
      );
    });

    it('should set permutive generated id for guest', async () => {
      const expectedPermutiveIds = [
        {
          id: 'test-user-id',
          priority: 5,
          tag: 'permutive_id',
        },
      ];
      window.permutive.context = {
        user_id: 'test-user-id',
      };
      getCookie.mockReturnValue(null);
      await identifyUser();
      expect(window.permutive.identify).toHaveBeenCalledWith(
        expectedPermutiveIds,
      );
    });
  });

  describe('identifyUserViaGeneratedBrazeIdOnceLoaded()', () => {
    const mockPermutiveId = ['some-permutive-id'];

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('will setup a listener for braze loaded event for logged in user', () => {
      const addEventListener = jest.spyOn(document, 'addEventListener');
      identifyUserViaGeneratedBrazeIdOnceLoaded(mockPermutiveId);
      expect(addEventListener).toHaveBeenCalledTimes(1);
      expect(addEventListener).toHaveBeenCalledWith(
        EVENT_BRAZE_LOADED,
        expect.any(Function),
      );
      expect(retrieveGeneratedBrazeId).not.toHaveBeenCalled();
    });

    it('will not track user via Permutive if generated Braze id is not found', async () => {
      retrieveGeneratedBrazeId.mockResolvedValueOnce(null);
      await identifyUserViaGeneratedBrazeIdOnceLoaded(mockPermutiveId);
      document.dispatchEvent(new CustomEvent(EVENT_BRAZE_LOADED));
      // puts the new promise at the end on microtask queue and holds the test execution until it is resolved. This allows for the async callback, which was put on the microtask queue before our promise, to be executed and make changes that we expect.
      await new Promise(process.nextTick);
      expect(retrieveGeneratedBrazeId).toHaveBeenCalled();
      expect(window.permutive.identify).not.toHaveBeenCalled();
    });

    it('track user via Permutive using generated Braze id on Braze load event', async () => {
      retrieveGeneratedBrazeId.mockResolvedValueOnce('some-braze-id');
      await identifyUserViaGeneratedBrazeIdOnceLoaded(mockPermutiveId);
      document.dispatchEvent(new CustomEvent(EVENT_BRAZE_LOADED));
      await new Promise(process.nextTick);
      expect(retrieveGeneratedBrazeId).toHaveBeenCalled();
      expect(window.permutive.identify).toHaveBeenCalledTimes(1);
      expect(window.permutive.identify).toHaveBeenCalledWith(
        expect.arrayContaining([
          {
            id: 'some-braze-id',
            priority: 3,
            tag: 'braze_id',
          },
        ]),
      );
    });
  });
});
