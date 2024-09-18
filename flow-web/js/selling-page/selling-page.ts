import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { COOKIE_PLANIT_CLICK_ID } from '#app/constants/cookies';

import { ID_SELLING_PAGE_CONTENT_ROOT } from '#app/constants/ids';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import isHydrationRootElementType from '#app/component/library/Hydration/isHydrationRootElementType';
import SubscribePageContent from '#app/component/pages/subscribe/SubscribePage/Content';

import { setCookie } from '../modules/cookie';

const searchParams = new URLSearchParams(document.location.search);
const root = document.getElementById(ID_SELLING_PAGE_CONTENT_ROOT);
if (isHydrationRootElementType(root)) {
  hydrateComponent(root, { SubscribePageContent }, { Wrapper });
}

const cookieDetails = searchParams.get(COOKIE_PLANIT_CLICK_ID);
if (cookieDetails) {
  setCookie(COOKIE_PLANIT_CLICK_ID, cookieDetails, {
    days: 30,
  });
}
