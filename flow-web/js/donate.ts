import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { ID_DONATION_PAGE } from '#app/constants/ids';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import DonateContent from '#app/component/pages/Donate/DonateContent';

const donate = () => {
  const donationPageRoot = document.getElementById(
    ID_DONATION_PAGE,
  ) as HTMLDivElement | null;

  if (!donationPageRoot) {
    return;
  }

  hydrateComponent(donationPageRoot, { DonateContent }, { Wrapper });
};

donate();

export default donate;
