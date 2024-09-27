/**
 * @jest-environment jsdom
 */

import { redirect } from '../redirect';

describe('redirect', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { assign: jest.fn() },
    });
  });

  afterEach(() => {
    window.location = {};
    jest.clearAllMocks();
  });

  it('should redirect to the given path', () => {
    redirect('/test');
    expect(window.location.href).toEqual('/test');
  });
});
