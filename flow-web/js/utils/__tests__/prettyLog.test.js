import { prettyLog } from '#app/public/js/utils/prettyLog';

describe('prettyLog()', () => {
  let mockLog;
  const styles =
    'font-family:monospace; background: #333; color: #eee; border-bottom: 1px solid #666; padding: 5px 0; border-radius: 6px 6px 0 0';
  const stylesForMultipleLines = [
    'font-family:monospace; background: #333; color: #eee; padding-top: 5px;',
    'font-family:monospace; background: #333; color: #eee;',
    'font-family:monospace; background: #333; color: #eee; padding-bottom: 10px; border-radius: 0 0 6px 6px',
  ];
  const stylesForSingleLine =
    'font-family:monospace; background: #333; color: #eee; padding-top: 5px; padding-bottom: 10px; border-radius: 0 0 6px 6px';

  beforeEach(() => {
    mockLog = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return an error when called without title argument', () => {
    expect(() => prettyLog()).toThrowError(
      `Cannot read properties of undefined (reading 'length')`,
    );
  });

  it('should return a single line formatted log when called with title and empty object', () => {
    prettyLog('Test');

    expect(mockLog).toHaveBeenCalledTimes(1);
    mockLog.mock.calls.forEach((call) => {
      expect(call[0]).toContain('Test');
      expect(call[1]).toBe(styles);
      expect(call[2]).toBe(stylesForSingleLine);
      expect(call[3]).toBeUndefined();
    });
  });

  it('should return a multiple line formatted log when called with title and object with one property', () => {
    prettyLog('Test', { foo: 'bar' });

    expect(mockLog).toHaveBeenCalledTimes(1);
    mockLog.mock.calls.forEach((call) => {
      expect(call[0]).toContain('Test', 'foo', 'bar');
      expect(call[1]).toBe(styles);
      expect(call[2]).toBe(stylesForMultipleLines[0]);
      expect(call[3]).toBe(stylesForMultipleLines[1]);
      expect(call[4]).toBe(stylesForMultipleLines[2]);
      expect(call[5]).toBeUndefined();
    });
  });

  it('should return a multiple line formatted log when called with title and object with multiple properties', () => {
    prettyLog('Test', { foo: 'bar', baz: 'qux' });

    expect(mockLog).toHaveBeenCalledTimes(1);

    mockLog.mock.calls.forEach((call) => {
      expect(call[0]).toContain('Test', 'foo', 'bar', 'baz', 'qux');
      expect(call[1]).toBe(styles);
      expect(call[2]).toBe(stylesForMultipleLines[0]);
      expect(call[3]).toBe(stylesForMultipleLines[1]);
      expect(call[4]).toBe(stylesForMultipleLines[2]);
      expect(call[5]).toBeUndefined();
    });
  });
});
