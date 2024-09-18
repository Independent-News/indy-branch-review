import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { ID_REG_ONBOARDING_WRAPPER } from '#app/constants/ids';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import ThankYouOnboardingContent from '#app/component/pages/ThankYouOnboarding/ThankYouOnboardingContent';

import { trackSubscriptionCause } from './modules/taboola';

export const thankYou = () => {
  const root = document.getElementById(ID_REG_ONBOARDING_WRAPPER);

  hydrateComponent(
    root,
    {
      ThankYouOnboardingContent,
    },
    { Wrapper },
  );

  trackSubscriptionCause();
  const returnBtn = document.querySelector('.return-btn');

  if (returnBtn) {
    returnBtn.addEventListener('click', () => {
      let returnUrl = window.localStorage.getItem('returnUrl');
      if (window.opener) {
        window.opener.location.reload();
        window.close();
      } else {
        window.location.href = returnUrl || '/';
      }
      window.localStorage.removeItem('returnUrl');
    });
  }

  const refreshParent = document.querySelectorAll('.refresh-parent');
  refreshParent.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (window.opener) {
        window.opener.location.reload();
      }
    });
  });
};

thankYou();
