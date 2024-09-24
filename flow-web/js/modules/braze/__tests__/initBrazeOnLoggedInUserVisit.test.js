/**
 * @jest-environment jsdom
 */
/* globals */

import { BRAZE_LOGGED_IN_USER_VISIT_TIMESTAMP } from '#app/constants/localStorage';

import * as thatModule from '../initBrazeOnLoggedInUserVisit';
import initBrazeSDKAndOpenSession from '../initBrazeSDKAndOpenSession';

jest.mock('../initBrazeSDKAndOpenSession');

describe('initBrazeOnLoggedInUserVisit module', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('updatePreviousCheckTimestamp()', () => {
    beforeAll(() => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          setItem: jest.fn(),
        },
        writable: true,
      });
    });

    it('will correctly update the previous check timestamp in local storage', () => {
      const mockTimestampToSave = 123456789;
      thatModule.updatePreviousCheckTimestamp(mockTimestampToSave);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        BRAZE_LOGGED_IN_USER_VISIT_TIMESTAMP,
        mockTimestampToSave,
      );
    });
  });

  describe('isMoreThanOneDaySinceLastCheck()', () => {
    const mockCurrentDateTimestamp = 123456789;

    it('will return false if current date timestamp is less than one day old', () => {
      const mockPreviousCheckTimestamp =
        mockCurrentDateTimestamp - thatModule.DAY_IN_MS / 2;
      const result = thatModule.isMoreThanOneDaySinceLastCheck(
        mockCurrentDateTimestamp,
        mockPreviousCheckTimestamp,
      );
      expect(result).toBe(false);
    });

    it('will return true if current date timestamp is more than one day old', () => {
      const mockPreviousCheckTimestamp =
        mockCurrentDateTimestamp - thatModule.DAY_IN_MS * 2;
      const result = thatModule.isMoreThanOneDaySinceLastCheck(
        mockCurrentDateTimestamp,
        mockPreviousCheckTimestamp,
      );
      expect(result).toBe(true);
    });
  });

  describe('initBrazeOnLoggedInUserVisit()', () => {
    const mockCurrentDateTimestamp = 1577836800000;
    const mockOneDayOldTimestamp = 123456789;

    beforeAll(() => {
      jest.useFakeTimers().setSystemTime(new Date('2020-01-01'));
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: jest.fn(),
        },
        writable: true,
      });
    });

    beforeEach(() => {
      jest
        .spyOn(thatModule, 'updatePreviousCheckTimestamp')
        .mockImplementation();
      jest.spyOn(thatModule, 'isMoreThanOneDaySinceLastCheck');
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    it('will cache the current date timestamp if no previous check timestamp exists and track the user via Braze', async () => {
      localStorage.getItem.mockReturnValueOnce(null);
      await thatModule.default();
      expect(thatModule.updatePreviousCheckTimestamp).toHaveBeenCalledTimes(1);
      expect(thatModule.updatePreviousCheckTimestamp).toHaveBeenCalledWith(
        mockCurrentDateTimestamp,
      );
      expect(initBrazeSDKAndOpenSession).toHaveBeenCalledTimes(1);
      expect(thatModule.isMoreThanOneDaySinceLastCheck).not.toHaveBeenCalled();
      expect(localStorage.getItem).toHaveBeenCalledTimes(1);
      expect(localStorage.getItem).toHaveBeenCalledWith(
        BRAZE_LOGGED_IN_USER_VISIT_TIMESTAMP,
      );
    });

    it('will not update the pre-existing cached timestamp nor track the user via Braze if not more than one day since last check', async () => {
      localStorage.getItem.mockReturnValueOnce(mockOneDayOldTimestamp);
      thatModule.isMoreThanOneDaySinceLastCheck.mockReturnValueOnce(false);
      await thatModule.default();
      expect(thatModule.updatePreviousCheckTimestamp).not.toHaveBeenCalled();
      expect(initBrazeSDKAndOpenSession).not.toHaveBeenCalled();
      expect(thatModule.isMoreThanOneDaySinceLastCheck).toHaveBeenCalledTimes(
        1,
      );
      expect(thatModule.isMoreThanOneDaySinceLastCheck).toHaveBeenCalledWith(
        mockCurrentDateTimestamp,
        mockOneDayOldTimestamp,
      );
    });

    it('will update the pre-existing cached timestamp with the current date and track the user via Braze if more than one day since last check', async () => {
      localStorage.getItem.mockReturnValueOnce(mockOneDayOldTimestamp);
      thatModule.isMoreThanOneDaySinceLastCheck.mockReturnValueOnce(true);
      await thatModule.default();
      expect(thatModule.updatePreviousCheckTimestamp).toHaveBeenCalledTimes(1);
      expect(initBrazeSDKAndOpenSession).toHaveBeenCalledTimes(1);
    });
  });
});
