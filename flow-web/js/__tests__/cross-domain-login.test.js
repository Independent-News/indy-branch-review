/**
 * @jest-environment jsdom
 */

import * as crossDomainModule from '../cross-domain-login';
import {
  doLogin,
  postToParent,
  isAllowedTopLevelDomain,
  isCorrectMessageName,
  messageHandler,
} from '../cross-domain-login';

describe('public/js/cross-domain-login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('doLogin(email, password)', () => {
    const mockResponse = {};
    const mockFetchFn = jest.fn().mockResolvedValue(mockResponse);
    const originalFetchFn = global.fetch;

    global.fetch = mockFetchFn;

    afterAll(() => {
      global.fetch = originalFetchFn;
    });

    it('will http post email & password to the login endpoint and return the result', async () => {
      expect(await doLogin('DUMMY_EMAIL', 'DUMMY_PASSWORD')).toBe(mockResponse);

      expect(mockFetchFn).toHaveBeenCalledWith('/api/google-login/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'DUMMY_EMAIL',
          password: 'DUMMY_PASSWORD',
        }),
      });
    });
  });

  describe('postToParent(name, origin)', () => {
    it('it will post the event name to the parent window with the given origin', () => {
      jest.spyOn(window.parent, 'postMessage').mockImplementation();

      postToParent('DUMMY_NAME', 'DUMMY_ORIGIN');

      expect(window.parent.postMessage).toHaveBeenCalledWith(
        { name: 'DUMMY_NAME' },
        'DUMMY_ORIGIN',
      );
    });
  });

  describe('isAllowedTopLevelDomain(fullDomain)', () => {
    it('will check the full domain passed belongs to an allowed top level domain', () => {
      expect(isAllowedTopLevelDomain('www.example.com')).toBe(false);
      expect(isAllowedTopLevelDomain('www.independent.co.uk')).toBe(true);
      expect(isAllowedTopLevelDomain('uat.independent.co.uk')).toBe(true);
      expect(isAllowedTopLevelDomain('www.independent.com')).toBe(false);
      expect(isAllowedTopLevelDomain('uat.the-independent.co.uk')).toBe(false);
      expect(isAllowedTopLevelDomain('uat.the-independent.com')).toBe(true);
    });
  });

  describe('isCorrectMessageName', () => {
    it('will return true if message name is correct', () => {
      expect(
        isCorrectMessageName(crossDomainModule.CONST_DO_XDOMAIN_LOGIN),
      ).toBe(true);
    });

    it('will return true if message name is incorrect', () => {
      expect(isCorrectMessageName('BLA_BLA_BLA')).toBe(false);
    });
  });

  describe('messageHandler({ origin, data })', () => {
    const getDummyMessage = () => ({
      origin: 'DUMMY_ORIGIN_DOMAIN',
      data: {
        name: 'DUMMY_EVENT_NAME',
        email: 'DUMMY_EMAIL',
        password: 'DUMMY_PASSWORD',
      },
    });

    jest.spyOn(crossDomainModule, 'doLogin');
    jest.spyOn(crossDomainModule, 'postToParent');
    jest.spyOn(crossDomainModule, 'isAllowedTopLevelDomain');
    jest.spyOn(crossDomainModule, 'isCorrectMessageName');

    it('does nothing if message does not come from allowed domain', () => {
      isAllowedTopLevelDomain.mockReturnValue(false);
      isCorrectMessageName.mockReturnValue(true);

      messageHandler(getDummyMessage());

      expect(isAllowedTopLevelDomain).toHaveBeenCalledTimes(1);
      expect(doLogin).not.toHaveBeenCalled();
      expect(postToParent).not.toHaveBeenCalled();
    });

    it.only('does nothing if message does not match the correct name', () => {
      isAllowedTopLevelDomain.mockReturnValue(true);
      isCorrectMessageName.mockReturnValue(false);

      messageHandler(getDummyMessage());

      expect(isCorrectMessageName).toHaveBeenCalledTimes(1);
      expect(doLogin).not.toHaveBeenCalled();
      expect(postToParent).not.toHaveBeenCalled();
    });

    it('does nothing if message does contain email or password', () => {
      isAllowedTopLevelDomain.mockReturnValue(true);
      isCorrectMessageName.mockReturnValue(true);

      const dummyMessageNoEmail = getDummyMessage();

      dummyMessageNoEmail.data.email = '';

      messageHandler(dummyMessageNoEmail);

      expect(isAllowedTopLevelDomain).toHaveBeenCalledTimes(1);
      expect(isCorrectMessageName).toHaveBeenCalledTimes(1);
      expect(doLogin).not.toHaveBeenCalled();
      expect(postToParent).not.toHaveBeenCalled();

      jest.clearAllMocks();

      const dummyMessageNoPassword = getDummyMessage();

      dummyMessageNoPassword.data.password = '';

      messageHandler(dummyMessageNoPassword);

      expect(isAllowedTopLevelDomain).toHaveBeenCalledTimes(1);
      expect(isCorrectMessageName).toHaveBeenCalledTimes(1);
      expect(doLogin).not.toHaveBeenCalled();
      expect(postToParent).not.toHaveBeenCalled();

      jest.clearAllMocks();

      const dummyMessageNoEmailOrPassword = getDummyMessage();

      dummyMessageNoEmailOrPassword.data.email = '';
      dummyMessageNoEmailOrPassword.data.password = '';

      messageHandler(dummyMessageNoEmailOrPassword);

      expect(isAllowedTopLevelDomain).toHaveBeenCalledTimes(1);
      expect(isCorrectMessageName).toHaveBeenCalledTimes(1);
      expect(doLogin).not.toHaveBeenCalled();
      expect(postToParent).not.toHaveBeenCalled();
    });

    it('will call login and post a success message if the login request was a success', () => {
      isAllowedTopLevelDomain.mockReturnValue(true);
      isCorrectMessageName.mockReturnValue(true);

      const dummyMessage = getDummyMessage();

      postToParent.mockResolvedValue({ status: 200 });

      messageHandler(dummyMessage);

      expect(isAllowedTopLevelDomain).toHaveBeenCalledTimes(1);
      expect(isCorrectMessageName).toHaveBeenCalledTimes(1);
      expect(doLogin).toHaveBeenCalledTimes(1);
      expect(doLogin).toHaveBeenCalledWith('DUMMY_EMAIL', 'DUMMY_PASSWORD');
      expect(postToParent).toHaveBeenCalledTimes(1);
      expect(postToParent).toHaveBeenCalledWith(
        crossDomainModule.CONST_XDOMAIN_LOGIN_SUCCESS,
        'DUMMY_ORIGIN_DOMAIN',
      );
    });

    it('will call login and post a fail message if the login request failed', () => {
      isAllowedTopLevelDomain.mockReturnValue(true);
      isCorrectMessageName.mockReturnValue(true);

      const dummyMessage = getDummyMessage();

      postToParent.mockResolvedValue({ status: 500 });

      messageHandler(dummyMessage);

      expect(isAllowedTopLevelDomain).toHaveBeenCalledTimes(1);
      expect(isCorrectMessageName).toHaveBeenCalledTimes(1);
      expect(doLogin).toHaveBeenCalledTimes(1);
      expect(doLogin).toHaveBeenCalledWith('DUMMY_EMAIL', 'DUMMY_PASSWORD');
      expect(postToParent).toHaveBeenCalledTimes(1);
      expect(postToParent).toHaveBeenCalledWith(
        crossDomainModule.CONST_XDOMAIN_LOGIN_FAIL,
        'DUMMY_ORIGIN_DOMAIN',
      );
    });
  });
});
