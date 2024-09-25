import { COOKIE_AUTH } from '#app/constants/cookies';

import decodeJWT from '#app/util/decodeJWT';

import decodeUserJWTOnClient from '../decodeUserJWTOnClient';
import { getCookie } from '../utils/cookie';

jest.mock('#app/util/decodeJWT');
jest.mock('../utils/cookie');

describe('decodeUserJWTOnClient()', () => {
  it("will correctly decode the user's JWT token and return the parsed data", () => {
    const mockReturnData = {
      someData: 'some-parsed-data',
    };
    const mockUserJwt = 'some-user-jwt-token';
    decodeJWT.mockReturnValueOnce(mockReturnData);
    getCookie.mockReturnValueOnce(mockUserJwt);
    const result = decodeUserJWTOnClient();
    expect(result).toEqual(mockReturnData);
    expect(decodeJWT).toHaveBeenCalledTimes(1);
    expect(decodeJWT).toHaveBeenCalledWith(mockUserJwt);
    expect(getCookie).toHaveBeenCalledTimes(1);
    expect(getCookie).toHaveBeenCalledWith(COOKIE_AUTH);
  });

  it("will return an empty object if user's JWT token fails to be decoded", () => {
    decodeJWT.mockReturnValueOnce(null);
    getCookie.mockReturnValueOnce(null);
    const result = decodeUserJWTOnClient();
    expect(result).toEqual({});
  });
});
