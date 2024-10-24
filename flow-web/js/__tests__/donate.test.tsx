/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import RequestProvider from '@brightsites/flow-core/lib/providers/RequestProvider';

import { ID_DONATION_PAGE } from '#app/constants/ids';

import MockThemeProvider from '#app/__mocks__/ThemeProvider';

import IndyClientIslandWrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import { getMockRes, getMockReq } from '#app/component/library/__mocks__';
import Donate from '#app/component/pages/Donate';
import DonateContent from '#app/component/pages/Donate/DonateContent';
import mockOffers from '#app/component/pages/Donate/__mocks__/offers';

import donate from '../donate';

const mockReq = getMockReq();
const mockRes = getMockRes();

const setup = () =>
  render(
    <MockThemeProvider>
      <RequestProvider req={mockReq} res={mockRes}>
        <Donate images={{ hero: '' }} offers={mockOffers} />
      </RequestProvider>
    </MockThemeProvider>,
  );

describe('donation page script', () => {
  it('should hydrate donate page content', () => {
    const renderedComponent = setup();

    expect(renderedComponent).toBeHydratedWith({
      id: ID_DONATION_PAGE,
      components: {
        DonateContent,
      },
      wrapper: { Wrapper: IndyClientIslandWrapper },
      hydrator: donate,
    });
  });
});
