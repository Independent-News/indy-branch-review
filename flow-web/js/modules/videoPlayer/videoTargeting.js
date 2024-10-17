import { COOKIE_PERMUTIVE_ID } from '#app/constants/cookies';

export const getVideoCookieDeprecationLabel = async () => {
  if ('cookieDeprecationLabel' in navigator) {
    const label = await navigator.cookieDeprecationLabel.getValue();

    return label || '';
  }

  return '';
};

/**
 * @returns parsed permutive-id that will be assigned to the ppid prop
 */
export const getPpid = () => {
  const permutiveId = window.localStorage.getItem(COOKIE_PERMUTIVE_ID);

  // parsing value as ppid only accepts alphanumeric characters
  return permutiveId ? permutiveId.replace(/-/g, '') : '';
};
