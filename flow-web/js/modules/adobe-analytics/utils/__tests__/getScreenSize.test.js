/**
 * @jest-environment jsdom
 */

import getScreenSize from '../getScreenSize';

describe('testing getScreenSize helper function', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 574,
      writable: true,
    });
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: 260,
      writable: true,
    });
  });
  it('will return dimensions when getScreenSize is called with no parameter', () => {
    const result = getScreenSize();
    expect(result).toBe('574x260');
  });

  it('will return dimensions when getScreenSize is called with true as parameter', () => {
    const result = getScreenSize(true);
    expect(result).toBe('574x260');
  });

  it('will return screen size as an object with width and height when getScreenSize is called with false as parameter', () => {
    const result = getScreenSize(false);
    expect(result).toMatchObject({ width: 574, height: 260 });
  });
});
