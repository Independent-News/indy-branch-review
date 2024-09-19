import { hydrateComponentList as archipelagoHydrateComponentList } from '@indy/archipelago/bootstrap';

import IndyClientIsland from '#app/component/library/Hydration/IndyClientIslandWrapper';

import hydrateComponentList, { ROOT_MARGINS } from '../hydrateComponentList';

jest.mock('@indy/archipelago/bootstrap');

describe('hydrateComponentList(hydratableComponents, StateProvider)', () => {
  it('will call @indy/archipelago/hydrateComponentList with the flow-web wrapper', () => {
    const MockStateProvider = () => {};
    const mockHydratableComponents = {};

    hydrateComponentList(mockHydratableComponents, MockStateProvider);

    expect(archipelagoHydrateComponentList).toHaveBeenCalled();
    expect(archipelagoHydrateComponentList).toHaveBeenCalledWith(
      mockHydratableComponents,
      {
        StateProvider: MockStateProvider,
        Wrapper: IndyClientIsland,
        rootMargins: ROOT_MARGINS,
      },
    );
  });
});
