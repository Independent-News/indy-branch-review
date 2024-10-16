/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import { COOKIE_FEAT_DEBUG_BADGE } from '#app/constants/cookies';

import { ID_DEBUG_BADGE } from '#app/constants/ids';
import { SUBSCRIBER_ORIGIN_UK } from '#app/constants/subscriberOrigin';

import MockThemeProvider from '#app/__mocks__/ThemeProvider';

import Badge from '#app/component/library/Debug/Badge';
import { BadgeProps } from '#app/component/library/Debug/Badge.types';
import IndyClientIslandWrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import IndyHydrateIsland from '#app/component/library/Hydration/IndyHydrateIsland';

import debugBadge from '../badge';

const defaultProps: BadgeProps = {
  subscriberOrigin: SUBSCRIBER_ORIGIN_UK,
  locale: 'UK',
  featureFlags: [COOKIE_FEAT_DEBUG_BADGE],
  feed: 'https://indy-api-dev.brightsites.co.uk',
};
const setup = () =>
  render(
    <MockThemeProvider>
      <IndyHydrateIsland id={ID_DEBUG_BADGE}>
        <Badge {...defaultProps} />
      </IndyHydrateIsland>
    </MockThemeProvider>,
  );

describe('badge component', () => {
  it('should hydrate badge', () => {
    const renderedComponent = setup();

    expect(renderedComponent).toBeHydratedWith({
      id: ID_DEBUG_BADGE,
      components: {
        Badge,
      },
      wrapper: { Wrapper: IndyClientIslandWrapper },
      hydrator: debugBadge,
    });
  });
});
