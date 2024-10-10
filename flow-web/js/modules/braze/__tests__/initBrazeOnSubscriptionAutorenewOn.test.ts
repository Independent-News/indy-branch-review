import { BRAZE_EVENT_AUTORENEWAL_ON } from '../constants';
import { initBrazeAndLogEvent } from '../initBrazeAndLogEvent';
import { initBrazeOnSubscriptionAutorenewOn } from '../initBrazeOnSubscriptionAutorenewOn';

jest.mock('../initBrazeAndLogEvent');

describe('initBrazeOnSubscriptionAutorenewOn()', () => {
  it('will correctly init the Braze SDK and log the subscription autorenew on event with the provided payload', async () => {
    const mockPayload = { test: 'test' };
    await initBrazeOnSubscriptionAutorenewOn(mockPayload);
    expect(initBrazeAndLogEvent).toHaveBeenCalledTimes(1);
    expect(initBrazeAndLogEvent).toHaveBeenCalledWith(
      BRAZE_EVENT_AUTORENEWAL_ON,
      mockPayload,
    );
  });
});
