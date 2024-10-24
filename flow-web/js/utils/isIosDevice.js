/* navigator.platform is kind of deprecated but not really:
 * https://github.com/mdn/content/issues/14429#issuecomment-1082572735
 */
export const isIphone = () =>
  /iPhone/.test(
    navigator?.userAgentData?.platform ||
      navigator?.platform ||
      navigator?.userAgent,
  );
// It was originally checking for ipods so keeping it around
export const isIpod = () =>
  /iPod/.test(
    navigator?.userAgentData?.platform ||
      navigator?.platform ||
      navigator?.userAgent,
  );
export const isIpad = () =>
  /iPad/.test(
    navigator?.userAgentData?.platform ||
      navigator?.platform ||
      navigator?.userAgent,
  )
    ? true
    : /MacIntel/.test(navigator.platform || navigator.userAgent) &&
      navigator.maxTouchPoints > 1 &&
      !window.MSStream;
export const isIosDevice = () => isIphone() || isIpad() || isIpod();
