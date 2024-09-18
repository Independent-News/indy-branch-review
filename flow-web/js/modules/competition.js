/* globals NGX */
import { InternalApi } from '../utils/internalApi';

const initCompetition = () => {
  const competition = document.querySelector(
    'iframe[src*="https://xd.wayin.com"]',
  );
  if (!competition) {
    return;
  }

  const loadingMessage = document.createElement('div');

  competition.parentElement.appendChild(loadingMessage);
  competition.setAttribute('frameborder', 0);
  competition.loading = 'lazy';

  competition.onload = function () {
    competition.style.display = 'none';
    loadingMessage.innerHTML = '<h4>Loading...</h4>';

    setTimeout(() => {
      // delay this to avoid flickering on the logged in version
      competition.style.display = 'block';
      loadingMessage.style.display = 'none';
    }, 2000);

    InternalApi.get('competition-data')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Unable to fetch comments');
      })
      // NGX doesn't accept arrow => functions
      .then(function ({ providerUID, firstName, lastName, email, provider }) {
        NGX.Embed.getUser(function (user) {
          user.id = providerUID;
          user.firstName = firstName;
          user.lastName = lastName;
          user.email = email;
          user.network = provider;
          NGX.Embed.loginUser(
            user,
            function () {
              competition.style.display = 'block';
              loadingMessage.style.display = 'none';
            },
            function () {
              throw new Error('Failed to logged in the user.');
            },
          );
        });
      })
      .catch((ex) => {
        competition.style.display = 'none';
        console.error(ex);
      });
  };
  // }
};

export default initCompetition;
