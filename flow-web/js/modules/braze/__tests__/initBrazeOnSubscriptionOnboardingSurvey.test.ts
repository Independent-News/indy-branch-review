/**
 * @jest-environment jsdom
 */

import { freezeBody } from '@indy/ui/Overlay';

import { BRAZE_EVENT_SUBSCRIPTION_ONBOARDING_SURVEY } from '../constants';
import {
  exposeCustomInAppMessageHandlerToBraze,
  initBrazeOnSubscriptionOnboardingSurvey,
  logSubscriptionOnboardingSurveyEvent,
} from '../initBrazeOnSubscriptionOnboardingSurvey';
import * as thatModule from '../initBrazeOnSubscriptionOnboardingSurvey';
import initBrazeSDK from '../initBrazeSDK';

jest.mock('../initBrazeSDK');
jest.mock('@indy/ui/Overlay');

describe('initBrazeOnSubscriptionOnboardingSurvey module', () => {
  const mockInAppMessage = {
    animateIn: jest.fn(),
    subscribeToDismissedEvent: jest.fn(),
  };

  describe('logSubscriptionOnboardingSurveyEvent()', () => {
    it('will log the subscription onboarding event via Braze if Braze has loaded successfully', () => {
      window.braze = {
        logCustomEvent: jest.fn(),
      } as unknown as typeof window.braze;
      logSubscriptionOnboardingSurveyEvent();
      expect(window.braze?.logCustomEvent).toHaveBeenCalledOnce();
      expect(window.braze?.logCustomEvent).toHaveBeenCalledWith(
        BRAZE_EVENT_SUBSCRIPTION_ONBOARDING_SURVEY,
      );
      delete window.braze;
    });
  });

  describe('exposeCustomInAppMessageHandlerToBraze()', () => {
    const mockOnSurveyClose = jest.fn();
    const mockSubscribeToInAppMessage = jest.fn();

    beforeAll(() => {
      window.braze = {
        subscribeToInAppMessage: mockSubscribeToInAppMessage,
        showInAppMessage: jest.fn(),
      } as unknown as typeof window.braze;
    });

    afterAll(() => {
      delete window.braze;
    });

    it('will correctly expose the custom in app message handler to Braze', () => {
      exposeCustomInAppMessageHandlerToBraze(mockOnSurveyClose);
      expect(mockSubscribeToInAppMessage).toHaveBeenCalledOnce();
      expect(mockSubscribeToInAppMessage).toHaveBeenCalledWith(
        expect.any(Function),
      );
    });

    it('will expose the custom in app message handler which will prevent scrolling, display the message survey and expose the required on close handler', () => {
      exposeCustomInAppMessageHandlerToBraze(mockOnSurveyClose);
      const [[exposedInAppMessageHandler]] =
        mockSubscribeToInAppMessage.mock.calls;
      exposedInAppMessageHandler(mockInAppMessage);
      expect(freezeBody).toHaveBeenCalledOnce();
      expect(window.braze?.showInAppMessage).toHaveBeenCalledOnce();
      expect(window.braze?.showInAppMessage).toHaveBeenCalledWith(
        mockInAppMessage,
      );
      expect(mockInAppMessage.subscribeToDismissedEvent).toHaveBeenCalledOnce();
      expect(mockInAppMessage.subscribeToDismissedEvent).toHaveBeenCalledWith(
        mockOnSurveyClose,
      );
    });
  });

  describe('initBrazeOnSubscriptionOnboardingSurvey()', () => {
    const mockInitBrazeSDK = initBrazeSDK as jest.MockedFunction<
      typeof initBrazeSDK
    >;
    const mockBrazeLoaded = () => {
      mockInitBrazeSDK.mockImplementationOnce(() => {
        window.braze = {
          logCustomEvent: jest.fn(),
          subscribeToInAppMessage: jest.fn(),
          showInAppMessage: jest.fn(),
        } as unknown as typeof window.braze;
        return Promise.resolve(true);
      });
    };

    describe('unit tests', () => {
      beforeEach(() => {
        jest.spyOn(thatModule, 'exposeCustomInAppMessageHandlerToBraze');
        jest.spyOn(thatModule, 'logSubscriptionOnboardingSurveyEvent');
      });

      afterEach(() => {
        jest.resetAllMocks();
        delete window.braze;
      });

      afterAll(() => {
        jest.restoreAllMocks();
      });

      it('will attempt to initialise the Braze SDK but do nothing if Braze has failed to load', async () => {
        mockInitBrazeSDK.mockResolvedValueOnce(false);
        await initBrazeOnSubscriptionOnboardingSurvey();
        expect(mockInitBrazeSDK).toHaveBeenCalledOnce();
        expect(
          thatModule.exposeCustomInAppMessageHandlerToBraze,
        ).not.toHaveBeenCalled();
        expect(
          thatModule.logSubscriptionOnboardingSurveyEvent,
        ).not.toHaveBeenCalled();
      });

      it('will both log the subscription onboarding event and expose the correct custom in app message handler if Braze has loaded successfully', async () => {
        mockBrazeLoaded();
        await initBrazeOnSubscriptionOnboardingSurvey();
        expect(
          thatModule.exposeCustomInAppMessageHandlerToBraze,
        ).toHaveBeenCalledOnce();
        expect(
          thatModule.logSubscriptionOnboardingSurveyEvent,
        ).toHaveBeenCalledOnce();
      });
    });

    describe('integration tests', () => {
      afterEach(() => {
        jest.resetAllMocks();
        delete window.braze;
      });

      it('will attempt to initialise the Braze SDK but do nothing if Braze has failed to load', async () => {
        mockInitBrazeSDK.mockResolvedValueOnce(false);
        await initBrazeOnSubscriptionOnboardingSurvey();
        expect(window.braze?.subscribeToInAppMessage).toBeUndefined();
        expect(window.braze?.logCustomEvent).toBeUndefined();
      });
    });

    it('will both log the subscription onboarding event and expose the correct custom in app message handler if Braze has loaded successfully', async () => {
      mockBrazeLoaded();
      await initBrazeOnSubscriptionOnboardingSurvey();
      expect(window.braze?.logCustomEvent).toHaveBeenCalledOnce();
      expect(window.braze?.logCustomEvent).toHaveBeenCalledWith(
        BRAZE_EVENT_SUBSCRIPTION_ONBOARDING_SURVEY,
      );
      expect(window.braze?.subscribeToInAppMessage).toHaveBeenCalledOnce();
      expect(window.braze?.subscribeToInAppMessage).toHaveBeenCalledWith(
        expect.any(Function),
      );
    });

    it('will correctly expose the provided onSurveyClose method to Braze', async () => {
      const mockOnSurveyClose = jest.fn();
      mockBrazeLoaded();
      await initBrazeOnSubscriptionOnboardingSurvey(mockOnSurveyClose);
      const [[exposedInAppMessageHandler]] = (
        window.braze?.subscribeToInAppMessage as jest.Mock
      ).mock.calls;
      exposedInAppMessageHandler(mockInAppMessage);
      expect(mockInAppMessage.subscribeToDismissedEvent).toHaveBeenCalledOnce();
      expect(mockInAppMessage.subscribeToDismissedEvent).toHaveBeenCalledWith(
        mockOnSurveyClose,
      );
    });
  });
});
