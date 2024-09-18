import * as thatModule from '..';

describe('Permutive public js modules', () => {
  describe('initPermutiveReadyWithTimeout()', () => {
    const mockPermutive = {
      ready: jest.fn(),
    };
    const mockCallback = jest.fn();

    beforeAll(() => {
      jest.spyOn(console, 'error').mockImplementation();
      jest.spyOn(global, 'setTimeout');
    });

    afterEach(() => {
      delete global.permutive;
      jest.clearAllMocks();
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });

    it('will assign readyWithTimeout Permutive method if Permutive has loaded', () => {
      global.permutive = mockPermutive;
      thatModule.initPermutiveReadyWithTimeout();
      const callback = global.permutive.readyWithTimeout;
      expect(callback).toBeDefined();
      expect(console.error).not.toHaveBeenCalled();
    });

    it('exposed readyWithTimeout Permutive method calls permutive.ready and set timeout in parallel', async () => {
      global.permutive = mockPermutive;
      thatModule.initPermutiveReadyWithTimeout();
      const callback = global.permutive.readyWithTimeout;
      await callback(mockCallback, 'pageview', 1000);
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
      expect(mockPermutive.ready).toHaveBeenCalledTimes(1);
      expect(mockPermutive.ready).toHaveBeenCalledWith(
        expect.any(Function),
        'pageview',
      );
      expect(mockCallback).toHaveBeenCalledTimes(1);
    });

    it('will not throw but console error if permutive has not loaded', () => {
      thatModule.initPermutiveReadyWithTimeout();
      expect(console.error).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalledWith(
        'Failed to init permutive.readyWithTimeout',
        'permutive is not defined',
      );
    });
  });
});
