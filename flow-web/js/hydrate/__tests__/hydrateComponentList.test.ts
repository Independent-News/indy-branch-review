import { FC } from 'react';

import { hydrateComponentList as archipelagoHydrateComponentList } from '@indy/archipelago/bootstrap';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';

import hydrateComponentList, { ROOT_MARGINS } from '../hydrateComponentList';

jest.mock('@indy/archipelago/bootstrap');

describe('hydrateComponentList(hydratableComponents, options)', () => {
  it('calls @indy/archipelago/hydrateComponentList with the correct wrapper and options', () => {
    const MockStateProvider: FC = () => null;
    const mockHydratableComponents: Record<string, FC> = {};
    hydrateComponentList(mockHydratableComponents, MockStateProvider);
    expect(archipelagoHydrateComponentList).toHaveBeenCalled();
    expect(archipelagoHydrateComponentList).toHaveBeenCalledWith(
      mockHydratableComponents,
      {
        StateProvider: MockStateProvider,
        Wrapper,
        rootMargins: ROOT_MARGINS,
      },
    );
  });
});
