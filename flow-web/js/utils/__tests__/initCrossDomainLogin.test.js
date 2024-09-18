/**
 * @jest-environment jsdom
 */

import {
  CONST_DO_XDOMAIN_LOGIN,
  CONST_XDOMAIN_LOGIN_FAIL,
  CONST_XDOMAIN_LOGIN_SUCCESS,
} from '../../cross-domain-login';
import initCrossDomainLogin, {
  getCurrentHostNameAndProtocol,
  getLoginWithDomain,
  getMessageReceivedFromLoginIframeHandler,
  initIframe,
  getDoLoginForEachDomain,
} from '../initCrossDomainLogin';
import * as initCrossDomainLoginModule from '../initCrossDomainLogin';

jest.useFakeTimers();

describe('public/js/utils/initCrossDomainLogin', () => {
  window.JSGlobals = {};

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getCurrentHostNameAndProtocol()', () => {
    it('will return the current hostname and protocol', () => {
      const { hostname, protocol } = getCurrentHostNameAndProtocol();
      expect(hostname).toBe(document.location.hostname);
      expect(protocol).toBe(document.location.protocol);
    });
  });

  describe('initIframe()', () => {
    it('will return a new iframe element with correct styling to be hidden from user', () => {
      expect(initIframe()).toMatchInlineSnapshot(`
        <iframe
          src="undefined/iframe/cross-domain-login"
          style="width: 1px; height: 1px; position: absolute; top: 0px; left: 0px; border: 0px; opacity: 0;"
        />
      `);
    });
  });

  describe('getMessageReceivedFromLoginIframeHandler(resolvers)', () => {
    const dummyResolvers = {};
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    beforeEach(() => {
      dummyResolvers.DUMMY_DOMAIN_1 = { resolve: jest.fn() };
      dummyResolvers.DUMMY_DOMAIN_2 = { resolve: jest.fn() };
    });

    it('will return a handler that will call a resolver if there was one with a matching domain passed to this method', () => {
      const messageHandler =
        getMessageReceivedFromLoginIframeHandler(dummyResolvers);

      expect(dummyResolvers.DUMMY_DOMAIN_1.resolve).not.toHaveBeenCalled();
      expect(dummyResolvers.DUMMY_DOMAIN_2.resolve).not.toHaveBeenCalled();

      messageHandler({
        origin: 'SOME_RANDOM_UNKNOWN_DOMAIN',
        data: { name: CONST_XDOMAIN_LOGIN_SUCCESS },
      });

      expect(dummyResolvers.DUMMY_DOMAIN_1.resolve).not.toHaveBeenCalled();
      expect(dummyResolvers.DUMMY_DOMAIN_2.resolve).not.toHaveBeenCalled();

      messageHandler({
        origin: 'DUMMY_DOMAIN_1',
        data: { name: CONST_XDOMAIN_LOGIN_SUCCESS },
      });

      expect(dummyResolvers.DUMMY_DOMAIN_1.resolve).toHaveBeenCalled();
      expect(dummyResolvers.DUMMY_DOMAIN_2.resolve).not.toHaveBeenCalled();

      messageHandler({
        origin: 'DUMMY_DOMAIN_2',
        data: { name: CONST_XDOMAIN_LOGIN_SUCCESS },
      });

      expect(dummyResolvers.DUMMY_DOMAIN_1.resolve).toHaveBeenCalled();
      expect(dummyResolvers.DUMMY_DOMAIN_2.resolve).toHaveBeenCalled();

      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });

    it('will also output a console error if the login fails', () => {
      const messageHandler =
        getMessageReceivedFromLoginIframeHandler(dummyResolvers);

      messageHandler({
        origin: 'SOME_RANDOM_UNKNOWN_DOMAIN',
        data: { name: CONST_XDOMAIN_LOGIN_FAIL },
      });

      expect(dummyResolvers.DUMMY_DOMAIN_1.resolve).not.toHaveBeenCalled();
      expect(dummyResolvers.DUMMY_DOMAIN_2.resolve).not.toHaveBeenCalled();

      messageHandler({
        origin: 'DUMMY_DOMAIN_1',
        data: { name: CONST_XDOMAIN_LOGIN_FAIL },
      });

      expect(dummyResolvers.DUMMY_DOMAIN_1.resolve).toHaveBeenCalled();
      expect(dummyResolvers.DUMMY_DOMAIN_2.resolve).not.toHaveBeenCalled();

      messageHandler({
        origin: 'DUMMY_DOMAIN_2',
        data: { name: CONST_XDOMAIN_LOGIN_FAIL },
      });

      expect(dummyResolvers.DUMMY_DOMAIN_1.resolve).toHaveBeenCalled();
      expect(dummyResolvers.DUMMY_DOMAIN_2.resolve).toHaveBeenCalled();

      expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });

    it('will not do anything if event name is unrecognised', () => {
      const messageHandler =
        getMessageReceivedFromLoginIframeHandler(dummyResolvers);

      messageHandler({
        origin: 'DUMMY_DOMAIN_1',
        data: { name: 'SOME_RANDOM_UNKNOWN_MESSAGE_NAME' },
      });

      expect(dummyResolvers.DUMMY_DOMAIN_1.resolve).not.toHaveBeenCalled();
      expect(dummyResolvers.DUMMY_DOMAIN_2.resolve).not.toHaveBeenCalled();

      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });
  });

  describe('getLoginWithDomain(resolvers)', () => {
    const mockIframeElem = {};

    beforeEach(() => {
      jest
        .spyOn(initCrossDomainLoginModule, 'initIframe')
        .mockReturnValue(mockIframeElem);

      jest.spyOn(document.body, 'appendChild').mockImplementation();

      jest.spyOn(console, 'error').mockImplementation();
    });

    afterEach(async () => {
      // execute any timeouts - advance time 10mins
      jest.advanceTimersByTime(600000);

      // flush promises
      await Promise.resolve();

      initIframe.mockRestore();
      document.body.appendChild.mockRestore();
      console.error.mockRestore();
    });

    it('will return a method for logging in for a particular domain with an email address and password', () => {
      const loginWithDomain = getLoginWithDomain({});

      expect(typeof loginWithDomain).toBe('function');
    });

    describe('the returned login method', () => {
      const callback = jest.fn();

      it('will timeout and resolve after 5 seconds if no iframe response message is detected', async () => {
        expect.assertions(4);

        const loginWithDomain = getLoginWithDomain({});

        loginWithDomain('DUMMY_DOMAIN', 'DUMMY_EMAIL', 'DUMMY_PASSWORD').then(
          callback,
        );

        expect(callback).not.toHaveBeenCalled();

        jest.advanceTimersByTime(14500);

        expect(callback).not.toHaveBeenCalled();

        jest.advanceTimersByTime(500);

        // flush promises
        await Promise.resolve();

        expect(callback).toHaveBeenCalled();

        expect(console.error).toHaveBeenCalledWith(
          'x-domain login timed out after 15000ms (DUMMY_DOMAIN)',
        );
      });

      it('will immediately initialise the iframe and append it to the body of the page', () => {
        const loginWithDomain = getLoginWithDomain({});

        expect(initIframe).not.toHaveBeenCalled();

        loginWithDomain('DUMMY_DOMAIN', 'DUMMY_EMAIL', 'DUMMY_PASSWORD');

        expect(initIframe).toHaveBeenCalledWith('DUMMY_DOMAIN');

        expect(document.body.appendChild).toHaveBeenCalledWith(mockIframeElem);
      });

      it('will add the resolver and timeoutId to the cache', () => {
        const dummyCache = {};
        const loginWithDomain = getLoginWithDomain(dummyCache);
        loginWithDomain('DUMMY_DOMAIN', 'DUMMY_EMAIL', 'DUMMY_PASSWORD');

        expect(typeof dummyCache.DUMMY_DOMAIN.resolve).toBe('function');
        expect(typeof dummyCache.DUMMY_DOMAIN.timeoutId).toBe('number');
      });

      it('will immediately resolve and log an error if the iframe errors', async () => {
        const mockError = {};
        const loginWithDomain = getLoginWithDomain({});
        loginWithDomain(
          'ANON_DUMMY_DOMAIN',
          'DUMMY_EMAIL',
          'DUMMY_PASSWORD',
        ).then(callback);

        mockIframeElem.onerror(mockError);

        expect(console.error).toHaveBeenCalledWith(
          'Unable to load iframe for x-domain (ANON_DUMMY_DOMAIN) login',
          mockError,
        );

        // flush promises
        await Promise.resolve();

        expect(callback).toHaveBeenCalledTimes(1);

        // ensure timeout has been cancelled and error is not logged again
        jest.advanceTimersByTime(10000);

        expect(console.error).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledTimes(1);
      });

      it('will timeout and error if iframe successfully loads the post "do login" message is posted to if but no response message is received from said iframe', async () => {
        const loginWithDomain = getLoginWithDomain({});
        loginWithDomain(
          'ANON_DUMMY_DOMAIN',
          'DUMMY_EMAIL',
          'DUMMY_PASSWORD',
        ).then(callback);

        const mockPostMessage = jest.fn();

        mockIframeElem.contentWindow = {
          postMessage: mockPostMessage,
        };

        mockIframeElem.onload();

        expect(mockPostMessage).toHaveBeenCalledWith(
          {
            name: CONST_DO_XDOMAIN_LOGIN,
            email: 'DUMMY_EMAIL',
            password: 'DUMMY_PASSWORD',
          },
          'ANON_DUMMY_DOMAIN',
        );

        // flush promises
        await Promise.resolve();

        expect(callback).not.toHaveBeenCalled();

        // ensure timeout has been cancelled and nothing odd happens
        jest.advanceTimersByTime(20000);

        // flush promises
        await Promise.resolve();

        expect(console.error).toHaveBeenCalledWith(
          'x-domain login timed out after 15000ms (ANON_DUMMY_DOMAIN)',
        );
        expect(callback).toHaveBeenCalledTimes(1);
      });

      it('will resolve & never call the timeout error log if a message is received back from the iframe', async () => {
        const dummyCache = {};
        const loginWithDomain = getLoginWithDomain(dummyCache);
        loginWithDomain(
          'ANON_DUMMY_DOMAIN',
          'DUMMY_EMAIL',
          'DUMMY_PASSWORD',
        ).then(callback);

        const mockPostMessage = jest.fn();

        mockIframeElem.contentWindow = {
          postMessage: mockPostMessage,
        };

        mockIframeElem.onload();

        expect(mockPostMessage).toHaveBeenCalledWith(
          {
            name: CONST_DO_XDOMAIN_LOGIN,
            email: 'DUMMY_EMAIL',
            password: 'DUMMY_PASSWORD',
          },
          'ANON_DUMMY_DOMAIN',
        );

        // flush promises
        await Promise.resolve();

        expect(callback).not.toHaveBeenCalled();

        getMessageReceivedFromLoginIframeHandler(dummyCache)({
          origin: 'ANON_DUMMY_DOMAIN',
          data: { name: CONST_XDOMAIN_LOGIN_SUCCESS },
        });

        // flush promises
        await Promise.resolve();

        expect(callback).toHaveBeenCalledTimes(1);

        // ensure timeout has been cancelled and nothing odd happens
        jest.advanceTimersByTime(10000);

        // flush promises
        await Promise.resolve();

        expect(console.error).not.toHaveBeenCalled();
        expect(callback).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('getDoLoginForEachDomain(domains)', () => {
    it('returns a method that when called adds the message event listener & calls do login for each domain passed', () => {
      const mockLoginWithDomain = jest.fn();
      const mockMessageReceivedFromLoginIframeHandler = jest.fn();
      const callback = jest.fn();

      jest.spyOn(window, 'addEventListener').mockImplementation();

      jest
        .spyOn(initCrossDomainLoginModule, 'getLoginWithDomain')
        .mockImplementation(() => mockLoginWithDomain);
      jest
        .spyOn(
          initCrossDomainLoginModule,
          'getMessageReceivedFromLoginIframeHandler',
        )
        .mockImplementation(() => mockMessageReceivedFromLoginIframeHandler);

      getDoLoginForEachDomain(['DOM_1', 'DOM_2'])('EMAIL_ADDR', 'PASS').then(
        callback,
      );

      expect(window.addEventListener).toHaveBeenCalledTimes(1);
      expect(window.addEventListener).toHaveBeenCalledWith(
        'message',
        mockMessageReceivedFromLoginIframeHandler,
      );

      expect(mockMessageReceivedFromLoginIframeHandler).not.toHaveBeenCalled();
      expect(callback).not.toHaveBeenCalled();

      expect(mockLoginWithDomain).toHaveBeenCalledTimes(2);
      expect(mockLoginWithDomain).toHaveBeenCalledWith(
        'DOM_1',
        'EMAIL_ADDR',
        'PASS',
      );
      expect(mockLoginWithDomain).toHaveBeenCalledWith(
        'DOM_2',
        'EMAIL_ADDR',
        'PASS',
      );
    });
  });

  describe('default export', () => {
    afterEach(() => {
      delete window.__XDOMAIN_LOGIN__;
    });

    it('should create placeholder `__XDOMAIN_LOGIN__` object if the browser supports the "storage access" API', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

      document.hasStorageAccess = () => {};

      expect(window.__XDOMAIN_LOGIN__).toBeUndefined();

      initCrossDomainLogin();

      expect(window.__XDOMAIN_LOGIN__.doCrossDomainLogin).toBeDefined();

      window.__XDOMAIN_LOGIN__.doCrossDomainLogin();

      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'Cross domain login unsupported in this browser.',
      );

      consoleWarnSpy.mockRestore();
    });

    it('should fully initialise `__XDOMAIN_LOGIN__` object if the browser does not the "storage access" API', () => {
      const mockDoLoginForEachDomain = () => {};
      const protocol = '{{PROTOCOL}}';
      jest
        .spyOn(initCrossDomainLoginModule, 'getCurrentHostNameAndProtocol')
        .mockReturnValue({
          protocol,
          hostname: 'www.independent.co.uk',
        });
      jest
        .spyOn(initCrossDomainLoginModule, 'getDoLoginForEachDomain')
        .mockReturnValue(mockDoLoginForEachDomain);

      document.hasStorageAccess = null;

      expect(window.__XDOMAIN_LOGIN__).toBeUndefined();

      initCrossDomainLogin();

      expect(getDoLoginForEachDomain).toHaveBeenCalledWith([
        `${protocol}//www.the-independent.com`,
      ]);

      expect(window.__XDOMAIN_LOGIN__.doCrossDomainLogin).toBe(
        mockDoLoginForEachDomain,
      );
    });
  });
});
