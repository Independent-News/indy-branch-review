/**
 * @jest-environment jsdom
 */

describe('Comscore init script', () => {
  const grabBeaconScript = () =>
    document.querySelector('[data-testid="beacon-script"]');

  beforeEach(() => {
    let scriptNode;
    scriptNode = document.createElement('script');
    scriptNode.setAttribute('data-comscore-client-id', '1234567');
    document.body.appendChild(scriptNode);
    jest.spyOn(document, 'currentScript', 'get').mockReturnValue(scriptNode);
    window.__tcfapi = jest.fn();
  });

  afterEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    delete window.__tcfapi;
  });

  it('should setup event listener via SourcePoint if loaded and not append Comscore script to DOM immediately', async () => {
    await import('../comscore.raw');
    expect(window.__tcfapi).toHaveBeenCalledTimes(1);
    expect(window.__tcfapi).toHaveBeenCalledWith(
      'addEventListener',
      2,
      expect.any(Function),
    );
    const beaconScript = grabBeaconScript();
    expect(beaconScript).not.toBeInTheDocument();
  });

  it('should immediately append Comscore beacon script to the DOM if SourcePoint has not loaded', async () => {
    window.__tcfapi = undefined;
    await import('../comscore.raw');
    const beaconScript = grabBeaconScript();
    expect(beaconScript).toHaveAttribute(
      'src',
      'https://sb.scorecardresearch.com/cs/1234567/beacon.js',
    );
  });

  it('should not remove SourcePoint event listener but still append Comscore script to DOM on unsuccessful SP callback', async () => {
    window.__tcfapi.mockImplementation((_eventType, _eventCode, callback) => {
      const mockSuccess = false;
      callback({}, mockSuccess);
    });
    await import('../comscore.raw');
    const beaconScript = grabBeaconScript();
    expect(window.__tcfapi).toHaveBeenCalledTimes(1);
    expect(beaconScript).toBeInTheDocument();
  });

  it('should not remove SourcePoint event listener but still append Comscore script to DOM on non-tc-loaded successful SP callback', async () => {
    window.__tcfapi.mockImplementation((_eventType, _eventCode, callback) => {
      const mockSuccess = true;
      callback(
        {
          eventStatus: 'not-tcloaded',
        },
        mockSuccess,
      );
    });
    await import('../comscore.raw');
    const beaconScript = grabBeaconScript();
    expect(window.__tcfapi).toHaveBeenCalledTimes(1);
    expect(beaconScript).toBeInTheDocument();
  });

  it('should remove SourcePoint event listener and still append Comscore script to DOM on successful SP tc-loaded callback', async () => {
    window.__tcfapi
      .mockImplementationOnce((_eventType, _eventCode, callback) => {
        const mockSuccess = true;
        callback(
          {
            eventStatus: 'tcloaded',
            listenerId: 2,
            purpose: {
              consents: {
                1: true,
                2: false,
                3: false,
              },
            },
          },
          mockSuccess,
        );
      })
      .mockImplementationOnce((_eventType, _eventCode, callback) => {
        const mockSuccess = true;
        callback(mockSuccess);
      });
    await import('../comscore.raw');
    const beaconScript = grabBeaconScript();
    expect(window.__tcfapi).toHaveBeenCalledTimes(2);
    expect(beaconScript).toBeInTheDocument();
    expect(window.__tcfapi).toHaveBeenNthCalledWith(
      2,
      'removeEventListener',
      2,
      expect.any(Function),
      2,
    );
  });

  it('should have the correct props populated in window._comscore', async () => {
    window.__tcfapi = undefined;
    await import('../comscore.raw');
    expect(window._comscore[0]).toEqual({
      c1: '2',
      c2: '1234567',
      cs_ucfr: '',
      options: { enableFirstPartyCookie: true },
    });
  });
});
