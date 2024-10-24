/**
 * @jest-environment jsdom
 */

import 'jest-location-mock';

import {
  COOKIE_AUTH,
  COOKIE_FEAT_FORCE_PIANO_PROD,
} from '#app/constants/cookies';

import { PIANO_SDK_SRC } from '#app/constants/piano';
import { QUERY_PARAM_CMP_PAGE_REFRESH } from '#app/constants/queryParameters';

import { getCookie } from '#app/public/js/utils/cookie';

import * as prodMethods from '../piano/prod';
import * as sandboxMethods from '../piano/sandbox';
import * as sharedPianoMethods from '../piano/shared';
import {
  generatePianoInitCallbacks,
  init,
  triggerExperiencesOnPianoInit,
} from '../pianoIntegration';
import { loadJS } from '../util';

import type {
  PianoWindow,
  PianoWindowLoaded,
  PianoWindowUnloaded,
} from '#types/piano';

jest.mock('#app/public/js/utils/cookie');
jest.mock('../util', () => ({
  __esModule: true,
  ...jest.requireActual('../util'),
  // we mock this globally or else the promise never resolves due to no 'onLoad' event fired in Jest
  loadJS: jest.fn(),
}));

describe('pianoIntegration', () => {
  describe('init()', () => {
    const mockIsSandbox = true;
    const mockGetCookie = getCookie as jest.MockedFunction<typeof getCookie>;
    const mockUserAuthToken = 'some-auth-token';

    beforeEach(() => {
      mockGetCookie.mockImplementation(
        (cookieName) =>
          ({
            [COOKIE_AUTH]: mockUserAuthToken,
            [COOKIE_FEAT_FORCE_PIANO_PROD]: 'false',
          })[cookieName] ?? '',
      );
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    describe('unit tests', () => {
      beforeEach(() => {
        jest.spyOn(sharedPianoMethods, 'setCredentials').mockImplementation();
        jest.spyOn(sharedPianoMethods, 'sendToPiano').mockImplementation();
        jest
          .spyOn(sharedPianoMethods, 'handlePianoPostMessage')
          .mockImplementation();
        jest
          .spyOn(sharedPianoMethods, 'initPianoSDKIfHomepageHasNotRefreshed')
          .mockImplementation();
      });

      afterAll(() => {
        jest.restoreAllMocks();
      });

      it('will set Piano credentials and expose required event handlers to Piano using sandbox methods under sandbox environment', async () => {
        await init(mockIsSandbox);
        expect(sharedPianoMethods.setCredentials).toHaveBeenCalledOnce();
        expect(sharedPianoMethods.sendToPiano).toHaveBeenCalledOnce();
        expect(sharedPianoMethods.sendToPiano).toHaveBeenCalledWith(
          ...generatePianoInitCallbacks(sandboxMethods.onTemplateShow),
        );
      });

      it('will expose required production methods under production environment', async () => {
        const mockIsSandbox = false;
        await init(mockIsSandbox);
        expect(sharedPianoMethods.setCredentials).toHaveBeenCalledOnce();
        expect(sharedPianoMethods.sendToPiano).toHaveBeenCalledOnce();
        expect(
          (sharedPianoMethods.sendToPiano as jest.Mock).mock.calls
            .at(0)
            .find(
              ([_addHandler, pianoEventName]: [string, string]) =>
                pianoEventName === 'showTemplate',
            ),
        ).toEqual(['addHandler', 'showTemplate', prodMethods.onTemplateShow]);
      });

      it("will handle Piano's post message event when dispatched", async () => {
        await init(mockIsSandbox);
        window.dispatchEvent(new MessageEvent('message', { data: {} }));
        expect(
          sharedPianoMethods.handlePianoPostMessage,
        ).toHaveBeenCalledOnce();
      });

      it('will attempt to load the Piano SDK if the page has not been refreshed', async () => {
        await init(mockIsSandbox);
        expect(
          sharedPianoMethods.initPianoSDKIfHomepageHasNotRefreshed,
        ).toHaveBeenCalledOnce();
      });
    });

    describe('integration tests', () => {
      const originalWindowTp = window.tp;
      const originalLocationSearch = location.search;
      const originalLocationPath = location.pathname;
      let sendToPianoSpy: jest.SpyInstance;

      beforeAll(() => {
        window.tp = [];
      });

      beforeEach(() => {
        window.JSGlobals = {
          pianoEnvironment: 'development',
          piano: {
            pianoAppId: 'some-app-id',
            pianoEndpoint: 'some-end-point',
          },
        } as typeof window.JSGlobals;
        sendToPianoSpy = jest.spyOn(sharedPianoMethods, 'sendToPiano');
        (loadJS as jest.Mock).mockResolvedValueOnce(null);
      });

      afterEach(() => {
        window.tp = [];
        window.JSGlobals = {} as typeof window.JSGlobals;
        jest.restoreAllMocks();
        location.search = '';
        location.pathname = '';
      });

      afterAll(() => {
        window.tp = originalWindowTp;
        location.search = originalLocationSearch;
        location.pathname = originalLocationPath;
      });

      it('will expose the correct application credentials to Piano', async () => {
        await init(mockIsSandbox);
        const exposedCredentials = sendToPianoSpy.mock.calls.at(0);
        expect(window.tp).toEqual(expect.arrayContaining(exposedCredentials));
      });

      it('will expose the required event handlers to Piano', async () => {
        await init(mockIsSandbox);
        const exposedEventHandlers = sendToPianoSpy.mock.calls.at(1);
        expect(window.tp).toEqual(expect.arrayContaining(exposedEventHandlers));
      });

      it('will not attempt to load the Piano SDK if the page has been refreshed on the homepage', async () => {
        location.search = `?${QUERY_PARAM_CMP_PAGE_REFRESH}`;
        location.pathname = '/';
        await init(mockIsSandbox);
        expect(loadJS).not.toHaveBeenCalled();
      });

      it('will attempt to load the Piano SDK if the page has not been refreshed', async () => {
        await init(mockIsSandbox);
        expect(loadJS).toHaveBeenCalledOnce();
        expect(loadJS).toHaveBeenCalledWith(Array.of(PIANO_SDK_SRC));
      });

      it('will attempt to load the Piano SDK if the page has been refreshed but not on the homepage', async () => {
        location.search = `?${QUERY_PARAM_CMP_PAGE_REFRESH}`;
        location.pathname = '/some-other-path';
        await init(mockIsSandbox);
        expect(loadJS).toHaveBeenCalledOnce();
        expect(loadJS).toHaveBeenCalledWith(Array.of(PIANO_SDK_SRC));
      });

      it('will attempt to load the Piano SDK if the page is not on the homepage and has not been refreshed', async () => {
        location.pathname = '/some-other-path';
        await init(mockIsSandbox);
        expect(loadJS).toHaveBeenCalledOnce();
        expect(loadJS).toHaveBeenCalledWith(Array.of(PIANO_SDK_SRC));
      });

      it.todo('will handle Piano post message event when dispatched');
    });
  });

  describe('triggerExperiencesOnPianoInit()', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    describe('unit tests', () => {
      let mockGetPianoGlobalSpy: jest.SpyInstance;
      const mockEnableGACrossDomainLinking = jest.fn();
      const mockExperienceInit = jest.fn();

      beforeEach(() => {
        jest.spyOn(sharedPianoMethods, 'sendToPiano').mockImplementation();
        mockGetPianoGlobalSpy = jest
          .spyOn(sharedPianoMethods, 'getPianoGlobal')
          .mockImplementation();
      });

      afterAll(() => {
        jest.restoreAllMocks();
      });

      it('will expose the required Piano init handler which will execute all experiences and enable GA cross domain linking', () => {
        mockGetPianoGlobalSpy.mockReturnValue({
          enableGACrossDomainLinking: mockEnableGACrossDomainLinking,
          experience: {
            init: mockExperienceInit,
          },
        } as unknown as PianoWindow);
        triggerExperiencesOnPianoInit();
        expect(sharedPianoMethods.sendToPiano).toHaveBeenCalledOnce();
        expect(sharedPianoMethods.sendToPiano).toHaveBeenCalledWith([
          'init',
          expect.any(Function),
        ]);

        const [[, pianoInitCallback]] = (
          sharedPianoMethods.sendToPiano as jest.Mock
        ).mock.calls.at(0);
        pianoInitCallback();
        expect(mockGetPianoGlobalSpy).toHaveBeenCalledOnce();
        expect(mockExperienceInit).toHaveBeenCalledOnce();
        expect(mockEnableGACrossDomainLinking).toHaveBeenCalledOnce();
      });

      it('will expose the required Piano init handler which will not execute any experiences or enable GA cross domain linking if Piano has not loaded', () => {
        const mockPianoWindowUnloaded: PianoWindowUnloaded = [];
        mockGetPianoGlobalSpy.mockReturnValue(mockPianoWindowUnloaded);
        triggerExperiencesOnPianoInit();
        const [[, pianoInitCallback]] = (
          sharedPianoMethods.sendToPiano as jest.Mock
        ).mock.calls.at(0);
        pianoInitCallback();
        expect(mockExperienceInit).not.toHaveBeenCalled();
        expect(mockEnableGACrossDomainLinking).not.toHaveBeenCalled();
      });
    });

    describe('integration tests', () => {
      const originalWindowTp = window.tp;
      const grabInitHandler = () => {
        const initArray = (window.tp as PianoWindowUnloaded).at(0);
        const [, initHandler] = Array.isArray(initArray) ? initArray : [];
        return initHandler;
      };

      afterEach(() => {
        window.tp = originalWindowTp;
      });

      it('will expose the required Piano init handler which will execute all experiences and enable GA cross domain linking', () => {
        triggerExperiencesOnPianoInit();
        expect(window.tp).toEqual(
          expect.arrayContaining([['init', expect.any(Function)]]),
        );

        const initHandler = grabInitHandler();
        window.tp = {
          enableGACrossDomainLinking: jest.fn(),
          experience: {
            init: jest.fn(),
          },
        } as unknown as PianoWindow;

        initHandler();

        const pianoLoaded = window.tp as PianoWindowLoaded;
        expect(pianoLoaded.experience.init).toHaveBeenCalledOnce();
        expect(pianoLoaded.enableGACrossDomainLinking).toHaveBeenCalledOnce();
      });

      it('will expose the required Piano init handler which will not execute any experiences or enable GA cross domain linking if Piano has not loaded', () => {
        triggerExperiencesOnPianoInit();
        const initHandler = grabInitHandler();
        initHandler();
        expect(window.tp).toBeInstanceOf(Array);
      });
    });
  });
});
