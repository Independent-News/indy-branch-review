import { GOOGLE_SIGN_IN_BUTTON_ID, ID_DRAWER } from '#app/constants/ids';

import { accessedFromGoogle } from '#app/public/js/extendedAccess';

const initGoogleSignIn = async () => {
  const googleSignInButton = document.getElementById(GOOGLE_SIGN_IN_BUTTON_ID);
  const drawerCloseButton = document.querySelector(
    `#drawer button[on="tap:${ID_DRAWER}.close"]`,
  );
  if (googleSignInButton) {
    googleSignInButton.addEventListener('click', () => {
      if (accessedFromGoogle) {
        // we don't have ability to open popups in extended access, so it's inline
        let cb = new URL(window.location);
        cb.searchParams.set('referrer', document.referrer);
        sessionStorage.setItem('cb', encodeURIComponent(cb));
        let googleAuthUrl = new URL(window.location.origin);
        googleAuthUrl.pathname = '/google-auth';

        window.location = googleAuthUrl;
      } else {
        let windowParams =
          'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=520,height=500,left=500,top=100';

        window.open('/google-auth', '', windowParams);
        drawerCloseButton?.click();
      }
    });
  }
};

export default initGoogleSignIn;
