import { COOKIE_AUTH, COOKIE_PERMUTIVE_ID_SAVED } from '#app/constants/cookies';

import { InternalApi } from '../../utils/internalApi';
import { hasCookie, getCookie } from '../cookie';
import { permutiveReady } from '../permutive';
import { populatePermutiveId } from '../populatePermutiveId';

jest.mock('../permutive');
jest.mock('../../utils/internalApi');
jest.mock('../cookie');

const loginUser = () =>
  hasCookie.mockImplementationOnce((name) => name === COOKIE_AUTH);

function setEsiPermutiveIdCookie(value) {
  getCookie.mockImplementationOnce((name) => {
    if (name === COOKIE_PERMUTIVE_ID_SAVED) {
      return value;
    }
  });
}

describe('populatePermutiveId', () => {
  beforeEach(() => {
    permutiveReady.mockReset();
    InternalApi.post.mockReset();
  });

  it('should not subscribe to permutiveId if user is not login', () => {
    hasCookie.mockImplementationOnce((name) => {
      if (name === COOKIE_AUTH) {
        return false;
      }
    });
    populatePermutiveId();
    expect(permutiveReady).not.toHaveBeenCalled();
  });

  it('should not subscribe to permutiveId if user is login and has permutiveId', () => {
    loginUser();
    setEsiPermutiveIdCookie('some-guid');
    populatePermutiveId();
    expect(permutiveReady).not.toHaveBeenCalled();
  });

  it.each(['', undefined, null, 'undefined'])(
    'should subscribe to permutiveId if user is login and permutiveId is (%s)',
    (esiPermutiveIdValue) => {
      loginUser();
      setEsiPermutiveIdCookie(esiPermutiveIdValue);
      populatePermutiveId();
      expect(permutiveReady).toHaveBeenCalled();
    },
  );

  it('should call profile/set-permutive-id with permutive id value if user does not have permutive id', async () => {
    loginUser();
    setEsiPermutiveIdCookie('');
    permutiveReady.mockResolvedValue('some-guid');
    await populatePermutiveId();
    expect(InternalApi.post).toHaveBeenCalledWith('profile/set-permutive-id', {
      permutiveID: 'some-guid',
    });
  });
});
