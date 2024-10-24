import { COOKIE_AUTH } from '#app/constants/cookies';

import decodeJWT from '#app/util/decodeJWT';

import decodeUserJWTOnClient from '../decodeUserJWTOnClient';
import { getCookie } from '../utils/cookie';

import type { UserJwtPayload } from '#types/user';

jest.mock('#app/util/decodeJWT');
jest.mock('../utils/cookie');

describe('decodeUserJWTOnClient()', () => {
  const mockDecodeJWT = decodeJWT as jest.MockedFunction<typeof decodeJWT>;
  const mockGetCookie = getCookie as jest.MockedFunction<typeof getCookie>;

  it("will correctly decode the user's JWT token and return the parsed data", () => {
    const mockReturnData = {
      someData: 'some-parsed-data',
    };
    const mockUserJwt = 'some-user-jwt-token';
    mockDecodeJWT.mockReturnValueOnce(
      mockReturnData as unknown as UserJwtPayload,
    );
    mockGetCookie.mockReturnValueOnce(mockUserJwt);
    const result = decodeUserJWTOnClient();
    expect(result).toEqual(mockReturnData);
    expect(mockDecodeJWT).toHaveBeenCalledTimes(1);
    expect(mockDecodeJWT).toHaveBeenCalledWith(mockUserJwt);
    expect(mockGetCookie).toHaveBeenCalledTimes(1);
    expect(mockGetCookie).toHaveBeenCalledWith(COOKIE_AUTH);
  });

  it("will return null if user's JWT token fails to be decoded", () => {
    mockDecodeJWT.mockReturnValueOnce(null);
    mockGetCookie.mockReturnValueOnce(null);
    const result = decodeUserJWTOnClient();
    expect(result).toBeNull();
  });
});
