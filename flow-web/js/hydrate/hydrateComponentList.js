import { hydrateComponentList } from '@indy/archipelago/bootstrap';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';

const EAGER = 'eager';
const LAZY = 'lazy';

/**
 * These are the margins that will be used to determine when the islands should
 * be hydrated. The keys are used on the `loading` prop and the values are in
 * pixels.
 */
export const ROOT_MARGINS = {
  [EAGER]: 700,
  [LAZY]: 100,
};

/**
 * We don't want page specific instances of React components to be included in
 * the hydratableComponents bundle.
 *
 * Therefore we can now call below function with whatever list we want
 * elsewhere, keeping react-bootstrap.js purely focused on islands.
 *
 * Eg: import { ProfileContent } from
 * '#app/component/library/StaticPage/Profile/ProfileContent';
 * hydrateComponentList({ ProfileContent });
 */
export default (hydratableComponents, StateProvider) => {
  hydrateComponentList(hydratableComponents, {
    StateProvider,
    Wrapper,
    rootMargins: ROOT_MARGINS,
  });
};
