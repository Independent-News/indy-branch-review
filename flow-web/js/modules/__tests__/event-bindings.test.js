/**
 * @jest-environment jsdom
 */

import {
  CLASS_NOTIFICATION_PROMPT,
  CLASS_NOTIFICATION_PROMPT_SHOW,
} from '#app/constants/classNames';
import {
  CL_NOTIFICATION_PROMPT,
  CL_NOTIFICATION_PROMPT_IMAGE_LED,
} from '#app/constants/componentsList';
import { EVENT_PIANO_READY } from '#app/constants/customEvents';
import {
  ID_HEADER_LAPTOP_SUPPORT_BUTTON,
  ID_MAIN_CONTENT_WRAPPER,
} from '#app/constants/ids';

import { onClassChange } from '#app/util/onClassChange';
import { storedDonateFlowRedirect } from '#app/util/storedRedirects';

import {
  HEADER_MOBILE_SUPPORT_BUTTON_ID,
  REG_LOGIN_AMP_BUTTON_ID,
} from '#app/component/library/Header/constants';
import { SUPPORT_DRAWER_AMP_BUTTON_ID } from '#app/component/library/Menu/DrawerMenu/SupportDrawerContent/SupportDrawerContent.constants';
import { SUPPORT_NSC_AMP_BUTTON_ID } from '#app/component/library/SupportNSC/SupportNSCAmp.constants';

import shouldRenderPushPrimerOnNewsArticles from '../../utils/shouldRenderPushPrimerOnNewsArticles';
import * as customEventDispatchers from '../custom-event-dispatchers';
import * as eventBindings from '../event-bindings';

jest.mock('#app/util/onClassChange');
jest.mock('../../utils/shouldRenderPushPrimerOnNewsArticles');

const createButton = (id) => `<div><button id=${id}>Test</button></div>`;

describe('eventBindings.js', () => {
  beforeEach(() => {
    jest.spyOn(eventBindings, 'addPassiveEventListener').mockImplementation();
    jest.spyOn(storedDonateFlowRedirect, 'storeCurrentURL');
    jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  describe('eventContextualInlineTopicClick()', () => {
    it('should bind click listener if it is a topic link', () => {
      document.body.innerHTML = `<div id="${ID_MAIN_CONTENT_WRAPPER}"><p>This is a sample <a href="/topic/bbc">link</a>.</p></div>`;

      eventBindings.eventContextualInlineTopicClick();
      expect(eventBindings.addPassiveEventListener).toHaveBeenCalledTimes(1);
      expect(eventBindings.addPassiveEventListener).toHaveBeenCalledWith(
        expect.anything(),
        'click',
        expect.any(Function),
      );
    });
    it('should not bind click listener if it is not a topic link', () => {
      document.body.innerHTML = `<div id="${ID_MAIN_CONTENT_WRAPPER}"><p>This is a sample <a href="/news/important-news-a123456.html">link</a>.</p></div>`;

      eventBindings.eventContextualInlineTopicClick();
      expect(eventBindings.addPassiveEventListener).toBeCalledTimes(0);
    });
  });

  describe('eventContextualInlineNonTopicClick()', () => {
    it('should not bind click listener if it is a topic link', () => {
      document.body.innerHTML = `<div id="${ID_MAIN_CONTENT_WRAPPER}"><p>This is a sample <a href="/topic/bbc">link</a>.</p></div>`;

      eventBindings.eventContextualInlineNonTopicClick();
      expect(eventBindings.addPassiveEventListener).toBeCalledTimes(0);
    });
    it('should bind click listener if it is not a topic link', () => {
      document.body.innerHTML = `<div id="${ID_MAIN_CONTENT_WRAPPER}"><p>This is a sample <a href="/news/important-news-a123456.html">link</a>.</p></div>`;

      eventBindings.eventContextualInlineNonTopicClick();
      expect(eventBindings.addPassiveEventListener).toHaveBeenCalledTimes(1);
      expect(eventBindings.addPassiveEventListener).toHaveBeenCalledWith(
        expect.anything(),
        'click',
        expect.any(Function),
      );
    });
  });

  describe('eventSupportHeaderClick', () => {
    it.each([
      HEADER_MOBILE_SUPPORT_BUTTON_ID,
      ID_HEADER_LAPTOP_SUPPORT_BUTTON,
      SUPPORT_DRAWER_AMP_BUTTON_ID,
      REG_LOGIN_AMP_BUTTON_ID,
    ])('should bind click listener to %s', (id) => {
      document.body.innerHTML = createButton(id);

      eventBindings.eventSupportHeaderClick();
      document.getElementById(id).click();

      expect(storedDonateFlowRedirect.storeCurrentURL).toHaveBeenCalledTimes(1);
    });
  });

  describe('eventSupportNSCClick', () => {
    it('should bind click listener to the NSC support button', async () => {
      document.body.innerHTML = createButton(SUPPORT_NSC_AMP_BUTTON_ID);

      eventBindings.eventSupportNSCLinkClick();
      document.getElementById(SUPPORT_NSC_AMP_BUTTON_ID).click();

      expect(storedDonateFlowRedirect.storeCurrentURL).toHaveBeenCalledTimes(1);
    });
  });

  describe('trackSupportNowClick()', () => {
    const grabCustomEventHandler = () => window.tp.at(0).at(2);

    beforeEach(() => {
      jest
        .spyOn(customEventDispatchers, 'dispatchSupportNowEncoreClick')
        .mockImplementation();
    });

    afterEach(() => {
      window.tp = [];
    });

    afterAll(() => {
      delete window.tp;
    });

    it('will only expose custom event handler to Piano if it has loaded', () => {
      eventBindings.trackSupportNowClick();
      expect(window.tp).not.toBeDefined();
      document.dispatchEvent(new Event(EVENT_PIANO_READY));
      expect(window.tp).toBeDefined();
      expect(window.tp).toMatchInlineSnapshot(`
        [
          [
            "addHandler",
            "customEvent",
            [Function],
          ],
        ]
      `);
    });

    it('will expose custom event handler which will do nothing if event name is different to "support-now"', () => {
      eventBindings.trackSupportNowClick();
      document.dispatchEvent(new Event(EVENT_PIANO_READY));
      const customEventHandler = grabCustomEventHandler();
      const mockEvent = {
        eventName: 'not-support-now',
      };
      customEventHandler(mockEvent);
      expect(
        customEventDispatchers.dispatchSupportNowEncoreClick,
      ).not.toHaveBeenCalled();
    });

    it('will expose custom event handler which will track support now event correctly', () => {
      eventBindings.trackSupportNowClick();
      document.dispatchEvent(new Event(EVENT_PIANO_READY));
      const customEventHandler = grabCustomEventHandler();
      const mockEvent = {
        eventName: 'support-now',
      };
      customEventHandler(mockEvent);
      expect(
        customEventDispatchers.dispatchSupportNowEncoreClick,
      ).toHaveBeenCalledTimes(1);
    });
  });

  describe('eventNotificationPromptLoad()', () => {
    beforeEach(() => {
      onClassChange.mockImplementation((_promptElement, callback) =>
        callback(),
      );
      jest
        .spyOn(customEventDispatchers, 'dispatchNotificationPromptLoad')
        .mockImplementation();
      window.digitalData = {
        components_list: 'some-components-list',
      };
    });

    afterEach(() => {
      document.body.innerHTML = '';
    });

    afterAll(() => {
      delete window.digitalData;
    });

    it('will do nothing if notification prompt is not visible', () => {
      document.body.innerHTML = `
        <div class="${CLASS_NOTIFICATION_PROMPT}"></div>
      `;
      eventBindings.eventNotificationPromptLoad();
      expect(onClassChange).toHaveBeenCalledTimes(1);
      expect(onClassChange).toHaveBeenCalledWith(
        expect.any(HTMLElement),
        expect.any(Function),
      );
      expect(
        customEventDispatchers.dispatchNotificationPromptLoad,
      ).not.toHaveBeenCalled();
      expect(shouldRenderPushPrimerOnNewsArticles).not.toHaveBeenCalled();
    });

    it('will dispatch prompt loaded event with E1 CL for live blog articles', () => {
      document.body.innerHTML = `
        <div class="${CLASS_NOTIFICATION_PROMPT} ${CLASS_NOTIFICATION_PROMPT_SHOW}"></div>
      `;
      shouldRenderPushPrimerOnNewsArticles.mockReturnValueOnce(false);
      eventBindings.eventNotificationPromptLoad();
      expect(
        customEventDispatchers.dispatchNotificationPromptLoad,
      ).toHaveBeenCalledTimes(1);
      expect(
        customEventDispatchers.dispatchNotificationPromptLoad,
      ).toHaveBeenCalledWith({
        components_list: `${window.digitalData.components_list},${CL_NOTIFICATION_PROMPT}`,
      });
    });

    it('will dispatch prompt loaded event with E2 CL for image-led news articles', () => {
      document.body.innerHTML = `
        <div class="${CLASS_NOTIFICATION_PROMPT} ${CLASS_NOTIFICATION_PROMPT_SHOW}"></div>
      `;
      shouldRenderPushPrimerOnNewsArticles.mockReturnValueOnce(true);
      eventBindings.eventNotificationPromptLoad();
      expect(
        customEventDispatchers.dispatchNotificationPromptLoad,
      ).toHaveBeenCalledTimes(1);
      expect(
        customEventDispatchers.dispatchNotificationPromptLoad,
      ).toHaveBeenCalledWith({
        components_list: `${window.digitalData.components_list},${CL_NOTIFICATION_PROMPT_IMAGE_LED}`,
      });
    });
  });
});
