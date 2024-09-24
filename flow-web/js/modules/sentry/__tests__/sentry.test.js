import { beforeSend } from '#app/public/js/modules/sentry';
import { triage } from '#app/public/js/modules/sentry/sentry-helpers';

jest.mock('#app/public/js/modules/sentry/sentry-helpers');

describe('beforeSend()', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return null if a triage doesn't deem it necessary", () => {
    triage.mockReturnValue(false);

    const result = beforeSend('mockEvent', 'mockHint');

    expect(result).toBeNull();
  });

  it('should return the event if triage deems it necessary', () => {
    triage.mockReturnValue(false);

    const result = beforeSend('mockEvent', 'mockHint');

    expect(result).toBeNull();
  });
});
