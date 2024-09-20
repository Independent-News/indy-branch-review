import { hydrateComponent } from '@indy/archipelago/bootstrap';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import isHydrationRootElementType from '#app/component/library/Hydration/isHydrationRootElementType';
import { PKCELoginWrapper } from '#app/component/library/PKCELogin';

import { ID_STANDALONE_LOGIN_FORM_WRAPPER } from '../../constants/ids';

const root = document.querySelector(`#${ID_STANDALONE_LOGIN_FORM_WRAPPER}`);

if (isHydrationRootElementType(root)) {
  hydrateComponent(root, { PKCELoginWrapper }, { Wrapper });
}
