import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { ID_SUBSCRIPTION_SAVE_OFFER_PAGE } from '#app/constants/ids';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import isHydrationRootElementType from '#app/component/library/Hydration/isHydrationRootElementType';
import OfferCardWithDetails from '#app/component/pages/subscribe/SaveOfferPage/Content/OfferCardWithDetails';

const subscriptionSaveOffer = () => {
  const root = document.getElementById(ID_SUBSCRIPTION_SAVE_OFFER_PAGE);
  if (isHydrationRootElementType(root)) {
    hydrateComponent(root, { OfferCardWithDetails }, { Wrapper });
  }
};

subscriptionSaveOffer();

export default subscriptionSaveOffer;
