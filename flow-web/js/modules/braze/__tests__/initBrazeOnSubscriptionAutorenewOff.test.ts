import { BRAZE_EVENT_AUTORENEWAL_OFF } from '../constants';
import { initBrazeAndLogEvent } from '../initBrazeAndLogEvent';
import { initBrazeOnSubscriptionAutorenewOff } from '../initBrazeOnSubscriptionAutorenewOff';

jest.mock('../initBrazeAndLogEvent');

describe('initBrazeOnSubscriptionAutorenewOff()', () => {
  it('will correctly init the Braze SDK and log the subscription autorenew off event with the provided payload', async () => {
    const mockPayload = { test: 'test' };
    await initBrazeOnSubscriptionAutorenewOff(mockPayload);
    expect(initBrazeAndLogEvent).toHaveBeenCalledTimes(1);
    expect(initBrazeAndLogEvent).toHaveBeenCalledWith(
      BRAZE_EVENT_AUTORENEWAL_OFF,
      mockPayload,
    );
  });
});
