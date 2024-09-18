/**
 * @jest-environment jsdom
 */

import { getCookie } from '../../cookie';
import { addAutoRefreshTargeting, addGDPRTargeting } from '../targeting';

jest.mock('../../cookie');

describe('indy-gpt/targeting.js', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('ad targetting', () => {
    let setTargetingMock;

    beforeEach(() => {
      setTargetingMock = jest.fn();

      global.googletag = {
        pubads: () => ({ setTargeting: setTargetingMock }),
      };
    });

    describe('addAutoRefreshTargeting(refresh)', () => {
      it("sets the refresh targetting to 'yes' if passed 'refresh' = true", () => {
        addAutoRefreshTargeting(true);

        expect(setTargetingMock).toHaveBeenCalledTimes(1);
        expect(setTargetingMock).toHaveBeenCalledWith('autorefresh', 'yes');
      });

      it("sets the refresh targetting to 'no' if passed 'refresh' = false", () => {
        addAutoRefreshTargeting(false);

        expect(setTargetingMock).toHaveBeenCalledTimes(1);
        expect(setTargetingMock).toHaveBeenCalledWith('autorefresh', 'no');
      });
    });

    describe('addAutoRefreshTargeting(refresh)', () => {
      it('sets the gdpr targetting to the value of the gdpr cookie', () => {
        getCookie.mockReturnValue('__mock_cookie__val__');

        addGDPRTargeting();

        expect(setTargetingMock).toHaveBeenCalledTimes(1);
        expect(setTargetingMock).toHaveBeenCalledWith(
          'gdpr',
          '__mock_cookie__val__',
        );

        expect(getCookie).toHaveBeenCalledTimes(1);
        expect(getCookie).toHaveBeenCalledWith('gdpr', 'none');
      });
    });
  });
});
