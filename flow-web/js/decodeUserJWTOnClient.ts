import { COOKIE_AUTH } from '#app/constants/cookies';

import decodeJWT from '#app/util/decodeJWT';

import { getCookie } from './utils/cookie';

import type { EmptyObject } from '#types/basicObjects';
import type { UserJwtPayload } from '#types/user';

export default (): UserJwtPayload | EmptyObject => {
  const userToken = getCookie(COOKIE_AUTH) ?? '';
  return decodeJWT(userToken) ?? {};
};
