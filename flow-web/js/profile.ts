import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { ID_PROFILE_PAGE_CONTENT } from '#app/constants/ids';

import { isHTMLElement } from '#app/__types__/typePredicators';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import isHydrationRootElementType from '#app/component/library/Hydration/isHydrationRootElementType';
import { ProfileContent } from '#app/component/library/StaticPage/Profile/ProfileContent';

const root = document.getElementById(ID_PROFILE_PAGE_CONTENT);

if (isHydrationRootElementType(root)) {
  hydrateComponent(root, { ProfileContent }, { Wrapper });
}

const paymentAndBillingPanel = document.getElementById('payment-billing-panel');
const paymentAndBillingTabs = paymentAndBillingPanel?.querySelectorAll('li');
const paymentAndBillingPanels = paymentAndBillingPanel?.children[1];

paymentAndBillingTabs?.forEach((tabElement) => {
  const paymentsAndBillingPanelsChildren = paymentAndBillingPanels?.children;
  if (!paymentsAndBillingPanelsChildren) {
    return;
  }

  tabElement.addEventListener('click', ({ target }) => {
    [...paymentAndBillingTabs, ...paymentsAndBillingPanelsChildren].forEach(
      (element) => {
        element.classList.remove('active');
      },
    );

    if (isHTMLElement(target)) {
      target.classList.add('active');
    }

    [...paymentsAndBillingPanelsChildren]
      .find(
        (element) =>
          (isHTMLElement(element) && element.dataset.panel) ===
          (isHTMLElement(target) && target.dataset.tab),
      )
      ?.classList.add('active');
  });
});
