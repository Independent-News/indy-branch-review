/**
 * @jest-environment jsdom
 */

import { isIosDevice, isIpad, isIphone, isIpod } from '../isIosDevice';

describe('isIosDevice()', () => {
  beforeEach(() => {
    window.MSStream = false;
    // maxTouchPoints is a read-only property,
    // so we need to use Object.defineProperty to override it
    Object.defineProperty(window, 'navigator', {
      configurable: true,
      writable: true,
    });
  });

  afterEach(() => {
    delete window.MSStream;
    delete window.navigator;
  });

  it.each([
    {
      name: 'should return true for "iPad"',
      platform: 'iPad',
      result: true,
    },
    {
      name: 'should return true for "iPhone"',
      platform: 'iPhone',
      result: true,
    },
    {
      name: 'should return true for "iPod"',
      platform: 'iPod',
      result: true,
    },
    {
      name: 'should return true for "MacIntel" with more than 1 touch point and MSStream object is not detected',
      platform: 'MacIntel',
      maxTouchPoints: 2,
      stream: false,
      result: true,
    },
    {
      name: 'should return true for "MacIntel" with more than 1 touch point and MSStream object is detected',
      platform: 'MacIntel',
      maxTouchPoints: 2,
      stream: false,
      result: true,
    },
    {
      name: 'should return false for "MacIntel" with 1 touch point',
      platform: 'MacIntel',
      maxTouchPoints: 1,
      result: false,
    },
    {
      name: 'should return false for "Android"',
      platform: 'Android',
      result: false,
    },
  ])('$name', ({ platform, maxTouchPoints, stream, result }) => {
    window.navigator = {
      platform,
      maxTouchPoints,
    };

    if (stream) {
      window.MSStream = true;
    }

    expect(isIosDevice()).toBe(result);
  });
});

describe('isIphone()', () => {
  beforeEach(() => {
    window.MSStream = false;
    // maxTouchPoints is a read-only property,
    // so we need to use Object.defineProperty to override it
    Object.defineProperty(window, 'navigator', {
      configurable: true,
      writable: true,
    });
  });

  afterEach(() => {
    delete window.MSStream;
    delete window.navigator;
  });

  it.each([
    {
      name: 'should return true for "iPhone"',
      platform: 'iPhone',
      result: true,
    },
    {
      name: 'should return false for "iPad"',
      platform: 'iPad',
      result: false,
    },
    {
      name: 'should return false for "iPod"',
      platform: 'iPod',
      result: false,
    },
    {
      name: 'should return false for "Android"',
      platform: 'Android',
      result: false,
    },
  ])('$name', ({ platform, maxTouchPoints, stream, result }) => {
    window.navigator = {
      platform,
      maxTouchPoints,
    };

    if (stream) {
      window.MSStream = true;
    }

    expect(isIphone()).toBe(result);
  });
});

describe('isIpad()', () => {
  beforeEach(() => {
    window.MSStream = false;
    // maxTouchPoints is a read-only property,
    // so we need to use Object.defineProperty to override it
    Object.defineProperty(window, 'navigator', {
      configurable: true,
      writable: true,
    });
  });

  afterEach(() => {
    delete window.MSStream;
    delete window.navigator;
  });

  it.each([
    {
      name: 'should return true for "iPad"',
      platform: 'iPad',
      result: true,
    },
    {
      name: 'should return false for "iPhone"',
      platform: 'iPhone',
      result: false,
    },
    {
      name: 'should return false for "iPod"',
      platform: 'iPod',
      result: false,
    },
    {
      name: 'should return false for "Android"',
      platform: 'Android',
      result: false,
    },
  ])('$name', ({ platform, maxTouchPoints, stream, result }) => {
    window.navigator = {
      platform,
      maxTouchPoints,
    };

    if (stream) {
      window.MSStream = true;
    }

    expect(isIpad()).toBe(result);
  });
});

describe('isIpod()', () => {
  beforeEach(() => {
    window.MSStream = false;
    // maxTouchPoints is a read-only property,
    // so we need to use Object.defineProperty to override it
    Object.defineProperty(window, 'navigator', {
      configurable: true,
      writable: true,
    });
  });

  afterEach(() => {
    delete window.MSStream;
    delete window.navigator;
  });

  it.each([
    {
      name: 'should return true for "iPod"',
      platform: 'iPod',
      result: true,
    },
    {
      name: 'should return false for "iPad"',
      platform: 'iPad',
      result: false,
    },
    {
      name: 'should return false for "iPhone"',
      platform: 'iPhone',
      result: false,
    },
    {
      name: 'should return false for "Android"',
      platform: 'Android',
      result: false,
    },
  ])('$name', ({ platform, maxTouchPoints, stream, result }) => {
    window.navigator = {
      platform,
      maxTouchPoints,
    };

    if (stream) {
      window.MSStream = true;
    }

    expect(isIpod()).toBe(result);
  });
});
