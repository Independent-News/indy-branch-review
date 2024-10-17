import { COOKIE_AUTH } from '#app/constants/cookies';

import decodeJWT from '#app/util/decodeJWT';

import { getCookie } from './utils/cookie';

export default () => {
  const userToken = getCookie(COOKIE_AUTH) ?? '';
  return decodeJWT(userToken);
};
