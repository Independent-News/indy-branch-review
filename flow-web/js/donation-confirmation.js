import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { ID_DONATE_CONFIRMATION_PAGE } from '#app/constants/ids';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import DonationConfirmationContent from '#app/component/pages/DonationConfirmation/DonationConfirmationContent';

export const donationConfirmation = async () => {
  const root = document.getElementById(ID_DONATE_CONFIRMATION_PAGE);

  hydrateComponent(root, { DonationConfirmationContent }, { Wrapper });
};

(async () => {
  await donationConfirmation();
})();
