/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';

import RequestProvider from '@brightsites/flow-core/lib/providers/RequestProvider';

import { ID_DONATE_CONFIRMATION_PAGE } from '#app/constants/ids';

import MockThemeProvider from '#app/__mocks__/ThemeProvider';

import IndyClientIslandWrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import { getMockReq, getMockRes } from '#app/component/library/__mocks__';
import DonationConfirmation from '#app/component/pages/DonationConfirmation';
import DonationConfirmationContent from '#app/component/pages/DonationConfirmation/DonationConfirmationContent';

import { donationConfirmation } from '../donation-confirmation';

const mockReq = getMockReq();
const mockRes = getMockRes();

const setup = () =>
  render(
    <MockThemeProvider>
      <RequestProvider req={mockReq} res={mockRes}>
        <DonationConfirmation newsletters={[]} />
      </RequestProvider>
    </MockThemeProvider>,
  );

describe('donation confirmation script', () => {
  it('should hydrate donation confirmation content', () => {
    const renderedComponent = setup();

    expect(renderedComponent).toBeHydratedWith({
      id: ID_DONATE_CONFIRMATION_PAGE,
      components: { DonationConfirmationContent },
      wrapper: { Wrapper: IndyClientIslandWrapper },
      hydrator: donationConfirmation,
    });
  });
});
