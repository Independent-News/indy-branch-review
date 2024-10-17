/**
 * @jest-environment jest-environment-jsdom-global
 */
import init from '../init';

describe('Visitor API', () => {
  let Visitor;
  let s;

  beforeEach(() => {
    s = {
      visitor: undefined,
    };

    Visitor = {
      getInstance: jest.fn(),
    };
    global.jsdom.reconfigure({
      url: 'http://www.testDummy.com',
    });
    global.Visitor = Visitor;
    global.JSGlobals = {
      domain: 'www.testDummy.com',
      adobe: {
        reportSuiteId: 'dummyTest',
        trackingServer: 'trackingServerDummy',
        trackingServerSecure: 'trackingServerSecureDummy',
      },
    };
    global.s_gi = jest.fn().mockReturnValue(s);
  });

  afterEach(() => {
    delete global.Visitor;
    delete global.JSGlobals;
    delete global.s_gi;
    jest.resetAllMocks();
  });

  it('should initialize Visitor with correct optIn options', () => {
    const data = {
      aa: true,
      aam: false,
      adcloud: false,
      campaign: false,
      ecid: true,
      livefyre: false,
      target: false,
      videoaa: false,
    };

    Visitor.getInstance.mockReturnValue(data);

    init();
    expect(Visitor.getInstance).toHaveBeenCalledWith(
      '28280C0F53DB09900A490D45@AdobeOrg',
      {
        trackingServer: 'trackingServerDummy',
        trackingServerSecure: 'trackingServerSecureDummy',
        doesOptInApply: true,
        previousPermissions: {
          ecid: true,
          aa: true,
        },
        isOptInStorageEnabled: true,
      },
    );
    expect(s.visitor).toEqual(data);
  });
});
