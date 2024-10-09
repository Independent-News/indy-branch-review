/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import RequestProvider from '@brightsites/flow-core/lib/providers/RequestProvider';

import { ID_DONATE_REGISTER_PAGE } from '#app/constants/ids';

import MockThemeProvider from '#app/__mocks__/ThemeProvider';

import IndyClientIslandWrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import { getMockRes, getMockReq } from '#app/component/library/__mocks__';
import DonateRegister from '#app/component/pages/DonateRegister';
import DonateRegisterContent from '#app/component/pages/DonateRegister/DonateRegisterContent';

import { donateRegister } from '../donate-register';

const mockReq = getMockReq({ path: '/register' });
const mockRes = getMockRes();

const setup = () =>
  render(
    <MockThemeProvider>
      <RequestProvider req={mockReq} res={mockRes}>
        <DonateRegister termInfo={{ name: '' }} />
      </RequestProvider>
    </MockThemeProvider>,
  );

describe('donation register script', () => {
  it('should hydrate donation register content', () => {
    const renderedComponent = setup();

    expect(renderedComponent).toBeHydratedWith({
      id: ID_DONATE_REGISTER_PAGE,
      components: { DonateRegisterContent },
      wrapper: { Wrapper: IndyClientIslandWrapper },
      hydrator: donateRegister,
    });
  });
});
