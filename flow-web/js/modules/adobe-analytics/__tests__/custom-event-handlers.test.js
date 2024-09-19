import { EVENT_ANALYTICS_TRIGGER } from '#app/constants/customEvents';

import setupAnalyticsEvent, * as adobeEvents from '../custom-event-handlers';
import * as cache from '../services/sessionCache';
import getSubsEVarsFromEventData from '../utils/getSubsEVarsFromEventData';
import trackCustomEvent from '../utils/trackCustomEvent';

jest.mock('../utils/trackCustomEvent');
jest.mock('../services/sessionCache');

jest.mock('../utils/getSubsEVarsFromEventData', () => {
  const original = jest.requireActual('../utils/getSubsEVarsFromEventData');
  return {
    __esModule: true,
    default: jest.fn(original.default),
  };
});

describe('custom-events.js', () => {
  const mockSubEVars = {
    subscription_package: 'test-sub-package',
    subscription_length: 'test-sub-length',
    subscription_price: 'test-sub-price',
    marketing_opt_in: true,
    selling_page_variant: 'single-prop',
  };
  const mockArticleData = { article_id: 'test-article-id' };
  const mockInitialSelectedPackageData = {
    ...mockSubEVars,
    initial_selected_package: 'TEST_INITIAL_SELECTED_PACKAGE',
  };

  beforeEach(() => {
    jest.spyOn(console, 'debug').mockImplementation(() => {});
  });

  describe('adobeEventHandlers', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    describe('adblock_detected', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.adblock_detected();

        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'Adblock Detected',
          {
            eVar36: 'Native',
            eVar42: 'Adblock Detected',
            prop36: 'D=v36',
            prop42: 'D=v42',
          },
          ['event105'],
        );
      });
    });

    describe('article_bookmark', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.article_bookmark({
          article_id: 'TEST_ARTICLE_ID',
        });

        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'Article Bookmark',
          { prop20: 'TEST_ARTICLE_ID' },
          ['event17'],
        );
      });
    });

    describe('article_bulleted_list_click', () => {
      it('will call adobe correctly', () => {
        const mockBulletedListPosition = 'TEST_BULLET_LIST_POSITION';
        adobeEvents.adobeEventHandlers.article_bulleted_list_click({
          bulleted_list_position: mockBulletedListPosition,
        });

        expect(cache.store).toHaveBeenCalledTimes(2);
        expect(cache.store).toHaveBeenCalledWith(
          'link_click_label',
          'Article Bullet Related Link',
        );
        expect(cache.store).toHaveBeenCalledWith(
          'link_click_position',
          mockBulletedListPosition,
        );
      });
    });

    describe('article_share', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.article_share({
          article_id: 'TEST_ARTICLE_ID',
          article_category: 'TEST_ARTICLE_CAT',
          share_provider: 'TEST_ARTICLE_SHARE_PROVIDER',
        });

        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'Article Share',
          {
            eVar9: 'TEST_ARTICLE_ID',
            eVar19: 'TEST_ARTICLE_CAT',
            eVar42: 'TEST_ARTICLE_SHARE_PROVIDER',
            eVar72: 'TEST_ARTICLE_SHARE_PROVIDER',
            prop9: 'D=v9',
            prop19: 'D=v19',
            prop42: 'D=v42',
            prop72: 'D=v72',
          },
          ['event10', 'event41'],
        );
      });
    });

    describe('article_topic_tag_click', () => {
      it('will call adobe correctly', () => {
        const mockTag = 'TEST_TAG';
        adobeEvents.adobeEventHandlers.article_topic_tag_click({
          tag: mockTag,
        });

        expect(cache.store).toHaveBeenCalledTimes(2);
        expect(cache.store).toHaveBeenCalledWith(
          'link_click_label',
          'Article Topic Tag Link',
        );
        expect(cache.store).toHaveBeenCalledWith('topic_tag', mockTag);
      });
    });

    describe('auto_renewal_off', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.auto_renewal_off();
        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith('Auto Renewal Off', {}, [
          'event29',
        ]);
      });
    });

    describe('blog_post_article_link_click', () => {
      it('will call adobe correctly', () => {
        const mockData = {
          article_link_position: 'TEST_ARTICLE_LINK_POSITION',
        };
        adobeEvents.adobeEventHandlers.blog_post_article_link_click(mockData);
        expect(cache.store).toHaveBeenCalledTimes(2);
        expect(cache.store).toHaveBeenCalledWith(
          'link_click_label',
          'Live Blog In-line Article Link',
        );
        expect(cache.store).toHaveBeenCalledWith(
          'link_click_position',
          mockData.article_link_position,
        );
      });
    });

    describe('burger_menu_click', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.burger_menu_click();
        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith('Burger Menu Click', {}, [
          'event80',
        ]);
      });
    });

    describe('change_payment_method', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.change_payment_method({
          subscription_package: 'TEST_SUBS_PACKAGE',
          subscription_length: 'TEST_SUBS_LENGTH',
          subscription_price: 'TEST_SUBS_PRICE',
          initial_selected_package: 'TEST_INIT_SEL_PACKAGE',
          name_form_field: 'TEST_NAME_FORM_FIELD',
        });

        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'Payment Method Selected',
          {
            eVar43: 'TEST_SUBS_PACKAGE',
            eVar44: 'TEST_SUBS_LENGTH',
            eVar45: 'TEST_SUBS_PRICE',
            eVar90: 'TEST_INIT_SEL_PACKAGE',
            eVar91: 'TEST_NAME_FORM_FIELD',
            prop43: 'D=v43',
            prop44: 'D=v44',
            prop45: 'D=v45',
          },
          ['event75'],
        );
      });
    });

    describe('change_subscription_package', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.change_subscription_package(
          mockSubEVars,
        );

        expect(getSubsEVarsFromEventData).toHaveBeenCalledTimes(1);
        expect(getSubsEVarsFromEventData).toHaveBeenCalledWith(mockSubEVars);
        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'Subscription Package Changed',
          {
            eVar43: 'test-sub-package',
            eVar44: 'test-sub-length',
            eVar45: 'test-sub-price',
            eVar48: 'Opt in',
            prop43: 'D=v43',
            prop44: 'D=v44',
            prop45: 'D=v45',
          },
          ['event76'],
        );
      });
    });

    describe('comment', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.comment(mockArticleData);
        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'Article Comment',
          { prop9: mockArticleData.article_id },
          ['event12'],
        );
      });
    });

    describe('comment_tab_click', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.comment_tab_click(mockArticleData);
        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'Article Comment Tab Click',
          {
            eVar41: 'D=pageName',
            eVar42: 'Article Comment Tab',
            prop31: 'Article Comment Tab',
            prop41: 'D=pageName',
            prop42: 'D=v42',
            prop9: mockArticleData.article_id,
          },
          ['event43'],
        );
      });
    });

    describe('contextual_inline_click', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.contextual_inline_click();
        expect(cache.store).toHaveBeenCalledTimes(1);
        expect(cache.store).toHaveBeenCalledWith(
          'link_click_label',
          'Article in-line Link',
        );
      });
    });

    describe('contextual_inline_topic_click', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.contextual_inline_topic_click();
        expect(cache.store).toHaveBeenCalledTimes(1);
        expect(cache.store).toHaveBeenCalledWith(
          'topic_link_click_label',
          'Article in-line Link (Topic Page)',
        );
      });
    });

    describe('contextual_inline_non_topic_click', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.contextual_inline_non_topic_click();
        expect(cache.store).toHaveBeenCalledTimes(1);
        expect(cache.store).toHaveBeenCalledWith(
          'topic_link_click_label',
          'Article in-line Link (Non-Topic Page)',
        );
      });
    });

    describe('donation', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.donation(mockInitialSelectedPackageData);
        expect(getSubsEVarsFromEventData).toHaveBeenCalledTimes(1);
        expect(getSubsEVarsFromEventData).toHaveBeenCalledWith(
          mockInitialSelectedPackageData,
        );
        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'Donation Click',
          {
            eVar43: 'test-sub-package',
            eVar44: 'test-sub-length',
            eVar45: 'test-sub-price',
            eVar48: 'Opt in',
            eVar90: mockInitialSelectedPackageData.initial_selected_package,
            prop43: 'D=v43',
            prop44: 'D=v44',
            prop45: 'D=v45',
          },
          ['event34'],
        );
      });
    });

    describe('donation_apple_pay', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.donation_apple_pay(
          mockInitialSelectedPackageData,
        );
        expect(getSubsEVarsFromEventData).toHaveBeenCalledTimes(1);
        expect(getSubsEVarsFromEventData).toHaveBeenCalledWith(
          mockInitialSelectedPackageData,
        );
        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'Donation Click - Apple Pay',
          {
            eVar43: 'test-sub-package',
            eVar44: 'test-sub-length',
            eVar45: 'test-sub-price',
            eVar48: 'Opt in',
            eVar90: mockInitialSelectedPackageData.initial_selected_package,
            prop43: 'D=v43',
            prop44: 'D=v44',
            prop45: 'D=v45',
          },
          ['event34'],
        );
      });
    });

    describe('donation_article_bottom', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.donation_article_bottom();
        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'Donation Click (Article Bottom)',
          {},
          ['event36'],
        );
      });
    });

    describe('edition_link_click', () => {
      it('will call adobe correctly', () => {
        const mockData = { edition_link_text: 'TEST_EDITION_LINK_TEXT' };
        adobeEvents.adobeEventHandlers.edition_link_click(mockData);
        expect(cache.store).toHaveBeenCalledTimes(2);
        expect(cache.store).toHaveBeenCalledWith(
          'link_click_label',
          'Edition Link',
        );
        expect(cache.store).toHaveBeenCalledWith(
          'link_click_text',
          mockData.edition_link_text,
        );
      });
    });

    describe('expandable_prompt_cta_premium', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.expandable_prompt_cta_premium();
        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'Premium Article Gate CTA Click Premium',
          {},
          ['event21'],
        );
      });
    });

    describe('expandable_prompt_cta_tide', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.expandable_prompt_cta_tide();
        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'Premium Article Gate CTA Click Tide',
          {},
          ['event21'],
        );
      });
    });

    describe('focus_reg_subscription_field', () => {
      it('will call adobe correctly', () => {
        const mockData = {
          ...mockInitialSelectedPackageData,
          name_form_field: 'TEST_NAME_FORM_FIELD',
        };
        adobeEvents.adobeEventHandlers.focus_reg_subscription_field(
          mockData,
          '/register',
        );
        expect(getSubsEVarsFromEventData).toHaveBeenCalledTimes(1);
        expect(getSubsEVarsFromEventData).toHaveBeenCalledWith(mockData);
        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'Form Field details',
          {
            eVar43: 'test-sub-package',
            eVar44: 'test-sub-length',
            eVar45: 'test-sub-price',
            eVar48: 'Opt in',
            eVar90: 'TEST_INITIAL_SELECTED_PACKAGE',
            eVar91: mockData.name_form_field,
            prop43: 'D=v43',
            prop44: 'D=v44',
            prop45: 'D=v45',
          },
          ['event74'],
        );
      });
    });

    describe('login_success', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.login_success();

        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith('Login Success', {}, [
          'event9',
        ]);
      });
    });

    describe('affiliate_link_click', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.affiliate_link_click({
          affiliate_link_click_text: 'TEST_AFFILIATE_LINK_TEXT',
        });

        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'Affiliate Link Click',
          {
            eVar42: 'TEST_AFFILIATE_LINK_TEXT',
            prop42: 'D=v42',
          },
          ['event79'],
        );
      });
    });

    describe('gallery_view', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.gallery_view();

        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'Gallery Image View',
          { prop21: 'Gallery' },
          ['event3'],
        );
      });
    });

    describe('indy100_trending_link_click', () => {
      it('will call adobe correctly', () => {
        const mockData = {
          indy100_trending_link_position: 'test_indy100_trending_link_position',
        };
        adobeEvents.adobeEventHandlers.indy100_trending_link_click(mockData);
        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'RHR Indy100 Trending',
          {
            prop41: 'D=pageName',
            prop42: 'D=v42',
            prop67: mockData.indy100_trending_link_position,
          },
          ['event20'],
        );
      });
    });

    describe('ip_ebook_click', () => {
      it('will call adobe correctly', () => {
        const mockData = { ebook_title: 'test_ebook_title' };
        adobeEvents.adobeEventHandlers.ip_ebook_click(mockData);
        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'My Independent Premium eBooks Click',
          { eVar42: mockData.ebook_title, prop42: 'D=v42' },
          ['event69'],
        );
      });
    });

    describe('ip_event_click', () => {
      it('will call adobe correctly', () => {
        const mockData = { event_name: 'test_event_name' };
        adobeEvents.adobeEventHandlers.ip_event_click(mockData);
        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'My Independent Premium Event Click',
          { eVar42: mockData.event_name, prop42: 'D=v42' },
          ['event70'],
        );
      });
    });

    describe('support_now_encore_click', () => {
      it('will call adobe correctly', () => {
        adobeEvents.adobeEventHandlers.support_now_encore_click();
        expect(trackCustomEvent).toHaveBeenCalledTimes(1);
        expect(trackCustomEvent).toHaveBeenCalledWith(
          'Support Now Link Click - Encore Component',
          {
            eVar42: 'Support Now Link Click - Encore Component',
            prop42: 'D=v42',
          },
          ['event110'],
        );
      });
    });

    // Product template

    describe('will call adobe correctly for', () => {
      const mockProductName = 'test-product-name';
      const mockPrice = 999.99;
      const mockEventPayload = {
        name: mockProductName,
        price: mockPrice,
      };
      const expectedAnalyticsPayload = {
        eVar96: mockProductName,
        eVar97: mockPrice,
      };

      it.each([
        // Price comparison

        {
          handler: 'price_comparison_list_buy_now_click',
          eventName: 'Price Comparison Buy Link Click',
          eventLabel: 'Price Comparison - Buy Link Click',
          eventPayload: mockEventPayload,
          expectedEvents: ['event93'],
          expectedAnalyticsPayload,
        },
        {
          handler: 'price_comparison_buttons_buy_now_click',
          eventName: 'Price Comparison Buttons Buy Now Click',
          eventLabel: 'Left CTA Button - Position 0',
          eventPayload: {
            ...mockEventPayload,
            isLeft: true,
            index: 0,
          },
          expectedEvents: ['event107'],
          expectedAnalyticsPayload,
        },
        {
          handler: 'price_comparison_buttons_buy_now_click',
          eventName: 'Price Comparison Buttons Buy Now Click',
          eventLabel: 'Right CTA Button - Position 999',
          eventPayload: {
            ...mockEventPayload,
            isLeft: false,
            index: 999,
          },
          expectedEvents: ['event107'],
          expectedAnalyticsPayload,
        },

        // Product carousel

        {
          handler: 'product_carousel_buy_now_click',
          eventName: 'Comparison Carousel Buy Link Click',
          eventLabel: 'Top Picks Carousel - Buy Now - Position 999',
          eventPayload: {
            ...mockEventPayload,
            index: 999,
          },
          expectedEvents: ['event108'],
          expectedAnalyticsPayload,
        },
        {
          handler: 'product_carousel_read_review_click',
          eventName: 'Comparison Carousel/Modal Read Review Link Click',
          eventLabel: 'Comparison Carousel - Read Review Link Click',
          eventPayload: mockEventPayload,
          expectedEvents: ['event99'],
          expectedAnalyticsPayload,
        },
        {
          handler: 'product_comparison_checkbox_click',
          eventName: 'Comparison Carousel Checkbox Click',
          eventLabel: 'Comparison Carousel - Compare Checkbox Selected',
          eventPayload: mockEventPayload,
          expectedEvents: ['event100'],
          expectedAnalyticsPayload,
        },

        // Product comparison modal

        {
          handler: 'product_comparison_modal_open',
          eventName: 'Compare Table Pop-up',
          eventLabel: 'Compare Table Pop-up',
          eventPayload: mockEventPayload,
          expectedAnalyticsPayload: {},
          expectedEvents: ['event101'],
        },
        {
          handler: 'product_comparison_modal_buy_now_click',
          eventName: 'Compare Modal Buy Link Click',
          eventLabel: 'Compare Modal - Buy Link Click',
          eventPayload: mockEventPayload,
          expectedEvents: ['event108'],
          expectedAnalyticsPayload,
        },
        {
          handler: 'product_comparison_modal_read_review_click',
          eventName: 'Comparison Carousel/Modal Read Review Link Click',
          eventLabel: 'Comparison Carousel - Read Review Link Click',
          eventPayload: mockEventPayload,
          expectedAnalyticsPayload,
          expectedEvents: ['event99'],
        },
      ])(
        '$handler',
        ({
          handler,
          eventName,
          eventLabel,
          eventPayload,
          expectedAnalyticsPayload,
          expectedEvents,
        }) => {
          const customEventHandler = adobeEvents.adobeEventHandlers[handler];

          customEventHandler(eventPayload);

          expect(trackCustomEvent).toHaveBeenCalledWith(
            eventName,
            {
              eVar42: eventLabel,
              prop42: 'D=v42',
              ...expectedAnalyticsPayload,
            },
            expectedEvents,
          );
        },
      );
    });
  });

  // TODO: these are not great tests - we need to abstract handler to a name export and test that separately
  describe.skip('setupAnalyticsEvent()', () => {
    beforeEach(() => {
      jest.spyOn(console, 'warn').mockImplementation(() => {});
    });

    afterEach(() => jest.restoreAllMocks());

    it('will setup correct analytics event listener on body and console warn if provided event handler not found in adobeEventHandlers', () => {
      setupAnalyticsEvent();
      window.document.body.dispatchEvent(
        new CustomEvent(EVENT_ANALYTICS_TRIGGER, {
          detail: { eventName: 'invalid-event-name' },
        }),
      );

      expect(console.warn).toHaveBeenCalledTimes(1);
      expect(console.warn).toHaveBeenCalledWith(
        'Adobe event not recognised!',
        'invalid-event-name',
      );
    });

    it('will setup correct analytics event listener on body and not console warn if provided event handler found in adobeEventHandlers', () => {
      setupAnalyticsEvent();
      window.document.body.dispatchEvent(
        new CustomEvent(EVENT_ANALYTICS_TRIGGER, {
          detail: { eventName: 'adblock_detected' },
        }),
      );

      expect(console.warn).not.toHaveBeenCalled();
    });
  });
});
