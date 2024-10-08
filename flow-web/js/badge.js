import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { ID_DEBUG_BADGE } from '#app/constants/ids';

import Badge from '#app/component/library/Debug/Badge';
import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';

const debugBadge = () => {
  const debugBadgeRoot = document.getElementById(ID_DEBUG_BADGE);

  hydrateComponent(debugBadgeRoot, { Badge }, { Wrapper });
};

debugBadge();
export default debugBadge;
