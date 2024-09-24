/**
 * @jest-environment jsdom
 */

import { CLASS_NOTIFICATION_PROMPT_ACCEPT } from '#app/constants/classNames';
import { EVENT_BRAZE_LOADED } from '#app/constants/customEvents';

import { checkVendorConsent } from '#app/public/js/modules/cmp';
import { loadJS } from '#app/public/js/modules/util';
import { getCookie } from '#app/public/js/utils/cookie';

import { error } from '../../log';
import initBrazeSDK, { SP_VENDOR_ID } from '../initBrazeSDK';

jest.mock('#app/public/js/modules/util', () => ({
  ...jest.requireActual('#app/public/js/modules/util'),
  loadJS: jest.fn(),
}));
jest.mock('#app/public/js/utils/cookie');
jest.mock('#app/public/js/modules/cmp');
jest.mock('../../log');

describe('initBrazeSDK()', () => {
  const mockCheckVendorConsent = checkVendorConsent as jest.MockedFunction<
    typeof checkVendorConsent
  >;
  const brazeInitialiseMock = () => window.braze?.initialize as jest.Mock;
  const OLD_ENV = process.env;
  const mockBraze = {
    initialize: jest.fn(),
    openSession: jest.fn(),
    changeUser: jest.fn(),
    logCustomEvent: jest.fn(),
  } as unknown as typeof window.braze;

  let acceptButtonCallback: () => void;

  beforeEach(() => {
    window.braze = undefined;
    (loadJS as jest.Mock).mockImplementationOnce(
      () => (window.braze = mockBraze),
    );
    jest.resetModules();
    process.env = { ...OLD_ENV };
    window.JSGlobals = {
      ...window.JSGlobals,
      braze: {
        sdkAPIKey: '123',
        sdkEndpoint: 'https://sdk-endpoint.com',
      },
    };

    // @ts-expect-error - mocking Notification on purpose, ffs!
    global.Notification = {
      requestPermission: jest.fn(),
    } as unknown as Notification;

    document.querySelector = jest.fn().mockImplementation((selector) => {
      const element = {
        addEventListener: jest.fn((_event, callback) => {
          if (selector === `.${CLASS_NOTIFICATION_PROMPT_ACCEPT}`) {
            acceptButtonCallback = callback;
          }
        }),
        classList: {
          add: jest.fn(),
          remove: jest.fn(),
        },
      };

      return element;
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  afterAll(() => {
    process.env = OLD_ENV;
    delete window.braze;
  });

  it('should first check if Braze is already initialised and not attempt to initialise it again if so', async () => {
    window.braze = mockBraze;
    const result = await initBrazeSDK();
    expect(result).toBe(true);
    expect(loadJS).not.toHaveBeenCalled();
    expect(checkVendorConsent).not.toHaveBeenCalled();
    expect(window.braze?.initialize).not.toHaveBeenCalled();
  });

  it('will not load Braze if user consent has not been provided', async () => {
    mockCheckVendorConsent.mockResolvedValueOnce(false);
    const result = await initBrazeSDK();
    expect(result).toBe(false);
    expect(loadJS).not.toHaveBeenCalled();
    expect(checkVendorConsent).toHaveBeenCalledTimes(1);
    expect(checkVendorConsent).toHaveBeenCalledWith(SP_VENDOR_ID, 'braze');
  });

  it('will initialise Braze with correct arguments and open session', async () => {
    mockCheckVendorConsent.mockResolvedValueOnce(true);
    jest.spyOn(document, 'dispatchEvent');

    await initBrazeSDK();

    acceptButtonCallback();

    expect(loadJS).toHaveBeenCalledTimes(1);
    expect(loadJS).toHaveBeenCalledWith(
      expect.arrayContaining([
        'https://js.appboycdn.com/web-sdk/4.8/braze.min.js',
      ]),
    );
    expect(brazeInitialiseMock()).toHaveBeenCalledTimes(1);
    expect(brazeInitialiseMock().mock.calls[0]).toMatchInlineSnapshot(`
      [
        "123",
        {
          "baseUrl": "https://sdk-endpoint.com",
          "manageServiceWorkerExternally": true,
          "requireExplicitInAppMessageDismissal": true,
        },
      ]
    `);
    expect(window.braze?.openSession as jest.Mock).toHaveBeenCalledTimes(1);
    expect(window.braze?.changeUser).not.toHaveBeenCalled();
    expect(document.dispatchEvent).toHaveBeenCalledTimes(1);
    expect(document.dispatchEvent).toHaveBeenCalledWith(
      new CustomEvent(EVENT_BRAZE_LOADED),
    );
  });

  it('will only change user if the user is logged in', async () => {
    const mockUserUid = 'some-user-uid';
    (getCookie as jest.Mock).mockReturnValueOnce(mockUserUid);
    mockCheckVendorConsent.mockResolvedValueOnce(true);
    await initBrazeSDK();
    expect(window.braze?.changeUser).toHaveBeenCalledTimes(1);
    expect(window.braze?.changeUser).toHaveBeenCalledWith(mockUserUid);
  });

  it('will add logging functionality if executed within development env', async () => {
    process.env.NODE_ENV = 'development';
    mockCheckVendorConsent.mockResolvedValueOnce(true);
    await initBrazeSDK();
    expect(brazeInitialiseMock().mock.calls[0][1]).toEqual(
      expect.objectContaining({
        enableLogging: true,
      }),
    );
  });

  it('will catch any errors relating to Braze initialisation and console error whilst returning false to correctly identify init failure', async () => {
    const mockError = new Error('mock error');
    (mockBraze?.initialize as jest.Mock).mockImplementationOnce(() => {
      throw mockError;
    });
    mockCheckVendorConsent.mockResolvedValueOnce(true);
    const result = await initBrazeSDK();
    expect(result).toBe(false);
    expect(error).toHaveBeenCalledTimes(1);
    expect(error).toHaveBeenCalledWith(
      'Error initializing braze sdk',
      mockError,
    );
  });
});
