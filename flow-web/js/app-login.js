import { hydrateComponent } from '@indy/archipelago/bootstrap';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import { PKCELoginWrapper } from '#app/component/library/PKCELogin';

import { ID_STANDALONE_LOGIN_FORM_WRAPPER } from '../../constants/ids';

const root = document.querySelector(`#${ID_STANDALONE_LOGIN_FORM_WRAPPER}`);

hydrateComponent(root, { PKCELoginWrapper }, { Wrapper });
