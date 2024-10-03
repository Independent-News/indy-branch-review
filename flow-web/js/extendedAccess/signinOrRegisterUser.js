export const signinOrRegisterUser = async (idToken) => {
  // call to server with idtoken.
  // server should return userState object

  try {
    let response = await fetch(`/id-token-cb?idToken=${idToken}`);
    if (response.status === 200) {
      // account exists
      let url = new URL(window.location);
      url.searchParams.set('referrer', document.referrer);

      window.location = url;
    } else if (response.status === 206) {
      // account created
      let url = new URL(window.location.origin);
      url.pathname = '/finish-register';

      let cb = new URL(window.location);
      cb.searchParams.set('referrer', document.referrer);

      url.searchParams.set('cb', cb.href);
      url.searchParams.set('idToken', idToken);

      window.location = url;
    } else {
      console.error(response);
    }
  } catch (e) {
    return {};
  }
};
