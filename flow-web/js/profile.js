import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { ID_PROFILE_PAGE_CONTENT } from '#app/constants/ids';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import { ProfileContent } from '#app/component/library/StaticPage/Profile/ProfileContent';

const root = document.getElementById(ID_PROFILE_PAGE_CONTENT);

hydrateComponent(root, { ProfileContent }, { Wrapper });

const paymentAndBillingPanel = document.getElementById('payment-billing-panel');
const paymentAndBillingTabs = paymentAndBillingPanel?.querySelectorAll('li');
const paymentAndBillingPanels = paymentAndBillingPanel?.children[1];

paymentAndBillingTabs?.forEach((tabElement) => {
  tabElement.addEventListener('click', ({ target }) => {
    [...paymentAndBillingTabs, ...paymentAndBillingPanels.children].forEach(
      (element) => {
        element.classList.remove('active');
      },
    );

    target.classList.add('active');

    [...paymentAndBillingPanels.children]
      .find((element) => element.dataset.panel === target.dataset.tab)
      .classList.add('active');
  });
});
