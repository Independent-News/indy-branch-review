import { EVENT_ANALYTICS_TRIGGER } from '#app/constants/customEvents';

import * as adobeEvents from './constants/events';
import * as adobeProps from './constants/props';
import * as adobeVars from './constants/vars';
import * as adobeSessionCache from './services/sessionCache';
import getSubsEVarsFromEventData from './utils/getSubsEVarsFromEventData';
import makeEVarLink from './utils/makeEVarLink';
import track from './utils/trackCustomEvent';

export const adobeEventHandlers = {
  adblock_detected: () => {
    track(
      'Adblock Detected',
      {
        [adobeVars.PLATFORM]: 'Native',
        [adobeVars.LINK_LABEL]: 'Adblock Detected',
        [adobeProps.PLATFORM]: makeEVarLink(adobeVars.PLATFORM),
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
      [adobeEvents.ADBLOCK_DETECTED],
    );
  },

  article_bookmark: (data) => {
    track(
      'Article Bookmark',
      { [adobeProps.CONTENT_SOURCE]: data.article_id },
      [adobeEvents.ARTICLE_BOOKMARKED],
    );
  },

  article_bulleted_list_click: (data) => {
    adobeSessionCache.store('link_click_label', 'Article Bullet Related Link');
    adobeSessionCache.store('link_click_position', data.bulleted_list_position);
  },

  article_share: (data) => {
    track(
      'Article Share',
      {
        [adobeVars.ARTICLE_ID]: data.article_id,
        [adobeVars.ARTICLE_TYPE]: data.article_category,
        [adobeVars.LINK_LABEL]: data.share_provider,
        [adobeVars.USER_SHARE_PROVIDER]: data.share_provider,
        [adobeProps.ARTICLE_ID]: makeEVarLink(adobeVars.ARTICLE_ID),
        [adobeProps.ARTICLE_TYPE]: makeEVarLink(adobeVars.ARTICLE_TYPE),
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
        [adobeProps.USER_SHARE_PROVIDER]: makeEVarLink(
          adobeVars.USER_SHARE_PROVIDER,
        ),
      },
      [adobeEvents.ARTICLE_SHARE, adobeEvents.ARTICLE_SHARE_ICON_CLICK],
    );
  },

  article_topic_tag_click: (data) => {
    adobeSessionCache.store('link_click_label', 'Article Topic Tag Link');
    adobeSessionCache.store('topic_tag', data.tag);
  },

  auto_renewal_off: () => {
    track('Auto Renewal Off', {}, [adobeEvents.AUTO_RENEW_DISABLED]);
  },

  blog_post_article_link_click: (data) => {
    adobeSessionCache.store(
      'link_click_label',
      'Live Blog In-line Article Link',
    );
    adobeSessionCache.store('link_click_position', data.article_link_position);
  },

  burger_menu_click: () => {
    track('Burger Menu Click', {}, [adobeEvents.BURGER_MENU_CLICK]);
  },

  change_payment_method: (data) => {
    track(
      'Payment Method Selected',
      {
        ...getSubsEVarsFromEventData(data),
        [adobeVars.INITIAL_SELECTED_PACKAGE]: data.initial_selected_package,
        [adobeVars.FORM_FIELD_DETAILS]: data.name_form_field,
        [adobeProps.PACKAGE]: makeEVarLink(adobeVars.PACKAGE),
        [adobeProps.SUBSCRIPTION_LENGTH]: makeEVarLink(
          adobeVars.SUBSCRIPTION_LENGTH,
        ),
        [adobeProps.SUBSCRIPTION_PRICE]: makeEVarLink(
          adobeVars.SUBSCRIPTION_PRICE,
        ),
      },
      [adobeEvents.SUBSCRIPTION_METHOD_SELECTED],
    );
  },

  change_subscription_package: (data) => {
    track(
      'Subscription Package Changed',
      {
        ...getSubsEVarsFromEventData(data),
        [adobeProps.PACKAGE]: makeEVarLink(adobeVars.PACKAGE),
        [adobeProps.SUBSCRIPTION_LENGTH]: makeEVarLink(
          adobeVars.SUBSCRIPTION_LENGTH,
        ),
        [adobeProps.SUBSCRIPTION_PRICE]: makeEVarLink(
          adobeVars.SUBSCRIPTION_PRICE,
        ),
      },
      [adobeEvents.SUBSCRIPTION_PACKAGE_CHANGED],
    );
  },

  comment: (data) => {
    track('Article Comment', { [adobeProps.ARTICLE_ID]: data.article_id }, [
      adobeEvents.COMMENT_ADD,
    ]);
  },

  comment_tab_click: (data) => {
    track(
      'Article Comment Tab Click',
      {
        [adobeVars.LINK_DESTINATION]: 'D=pageName',
        [adobeVars.LINK_LABEL]: 'Article Comment Tab',
        [adobeProps.ARTICLE_ID]: data.article_id,
        prop31: 'Article Comment Tab',
        [adobeProps.LINK_DESTINATION]: 'D=pageName',
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
      [adobeEvents.COMMENTS_TAB_CLICK],
    );
  },

  contextual_inline_click: () => {
    adobeSessionCache.store('link_click_label', 'Article in-line Link');
  },

  contextual_inline_topic_click: () => {
    adobeSessionCache.store(
      'topic_link_click_label',
      'Article in-line Link (Topic Page)',
    );
  },

  contextual_inline_non_topic_click: () => {
    adobeSessionCache.store(
      'topic_link_click_label',
      'Article in-line Link (Non-Topic Page)',
    );
  },

  donation: (data) => {
    track(
      'Donation Click',
      {
        ...getSubsEVarsFromEventData(data),
        [adobeVars.INITIAL_SELECTED_PACKAGE]: data.initial_selected_package,
        [adobeProps.PACKAGE]: makeEVarLink(adobeVars.PACKAGE),
        [adobeProps.SUBSCRIPTION_LENGTH]: makeEVarLink(
          adobeVars.SUBSCRIPTION_LENGTH,
        ),
        [adobeProps.SUBSCRIPTION_PRICE]: makeEVarLink(
          adobeVars.SUBSCRIPTION_PRICE,
        ),
      },
      [adobeEvents.DONATION_BUTTON_CLICK],
    );
  },

  donation_apple_pay: (data) => {
    track(
      'Donation Click - Apple Pay',
      {
        ...getSubsEVarsFromEventData(data),
        [adobeVars.INITIAL_SELECTED_PACKAGE]: data.initial_selected_package,
        [adobeProps.PACKAGE]: makeEVarLink(adobeVars.PACKAGE),
        [adobeProps.SUBSCRIPTION_LENGTH]: makeEVarLink(
          adobeVars.SUBSCRIPTION_LENGTH,
        ),
        [adobeProps.SUBSCRIPTION_PRICE]: makeEVarLink(
          adobeVars.SUBSCRIPTION_PRICE,
        ),
      },
      [adobeEvents.DONATION_BUTTON_CLICK],
    );
  },

  donation_article_bottom: () => {
    track('Donation Click (Article Bottom)', {}, [
      adobeEvents.DONATION_ARTICLE_BOTTOM_CLICK,
    ]);
  },

  edition_link_click: (data) => {
    adobeSessionCache.store('link_click_label', 'Edition Link');
    adobeSessionCache.store('link_click_text', data.edition_link_text);
  },

  expandable_prompt_cta_premium: () => {
    track('Premium Article Gate CTA Click Premium', {}, [
      adobeEvents.SUBSCRIBE_BUTTON_CLICK,
    ]);
  },

  expandable_prompt_cta_tide: () => {
    track('Premium Article Gate CTA Click Tide', {}, [
      adobeEvents.SUBSCRIBE_BUTTON_CLICK,
    ]);
  },

  focus_reg_subscription_field: (
    data,
    pagePath = document.location.pathname,
  ) => {
    track(
      'Form Field details',
      {
        [adobeVars.FORM_FIELD_DETAILS]: data.name_form_field,
        ...(pagePath.includes('/register')
          ? {
              ...getSubsEVarsFromEventData(data),
              [adobeVars.INITIAL_SELECTED_PACKAGE]:
                data.initial_selected_package,
              [adobeProps.PACKAGE]: makeEVarLink(adobeVars.PACKAGE),
              [adobeProps.SUBSCRIPTION_LENGTH]: makeEVarLink(
                adobeVars.SUBSCRIPTION_LENGTH,
              ),
              [adobeProps.SUBSCRIPTION_PRICE]: makeEVarLink(
                adobeVars.SUBSCRIPTION_PRICE,
              ),
            }
          : {}),
      },
      [adobeEvents.SUBSCRIPTION_FORM_FIELD_FOCUS],
    );
  },

  gallery_view: () => {
    track(
      'Gallery Image View',
      {
        [adobeProps.GALLERY_VIEW_IMAGE_NO]: 'Gallery',
      },
      [adobeEvents.GALLERY_VIEW],
    );
  },

  indy100_trending_link_click: (data) => {
    track(
      'RHR Indy100 Trending',
      {
        [adobeProps.LINK_DESTINATION]: 'D=pageName',
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
        [adobeProps.LINK_POSITION]: data.indy100_trending_link_position,
      },
      [adobeEvents.RHR_INDY100_TRENDING_CLICK],
    );
  },

  ip_ebook_click: (data) => {
    track(
      'My Independent Premium eBooks Click',
      {
        [adobeVars.LINK_LABEL]: data.ebook_title,
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
      [adobeEvents.EBOOKS_CLICK],
    );
  },

  ip_event_click: (data) => {
    track(
      'My Independent Premium Event Click',
      {
        [adobeVars.LINK_LABEL]: data.event_name,
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
      [adobeEvents.PREMIUM_EVENT_CLICK],
    );
  },

  ip_tab_click: (data) => {
    track(
      'My Independent Premium Event Click',
      {
        [adobeProps.INDEPENDENT_PREMIUM_ACCOUNT_PORTAL]: data.tab_name,
        [adobeVars.LINK_LABEL]: `IP ${data.tab_name}`,
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
      [adobeEvents.RHR_PREMIUM_COMPONENT_CLICK],
    );
  },

  liveblog_bulleted_list_click: (data) => {
    adobeSessionCache.store(
      'link_click_label',
      'Live Blog Article Bullet Related Link',
    );
    adobeSessionCache.store('link_click_position', data.bulleted_list_position);
  },

  liveblog_key_points_click: (data) => {
    track(
      'Liveblog Key Points Click',
      {
        [adobeVars.LINK_DESTINATION]: data.liveblog_key_points_destination,
        [adobeVars.LINK_LABEL]: 'Liveblog Key Points',
        [adobeVars.LINK_POSITION]: data.liveblog_key_points_position,
        [adobeProps.LINK_DESTINATION]: makeEVarLink(adobeVars.LINK_DESTINATION),
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
        [adobeProps.LINK_POSITION]: makeEVarLink(adobeVars.LINK_POSITION),
      },
      [adobeEvents.LIVE_BLOG_KEY_POINTS_CLICK],
    );
  },

  load_more_comments: (data) => {
    track('Load More Comments', { [adobeProps.ARTICLE_ID]: data.article_id }, [
      adobeEvents.COMMENTS_LOAD_MORE,
    ]);
  },

  login_success: () => {
    track('Login Success', {}, [adobeEvents.SIGN_IN]);
  },

  main_nav_link_click: (data) => {
    adobeSessionCache.store('link_click_label', 'Visible Nav');
    adobeSessionCache.store(
      'link_click_text',
      `${data.main_nav_link_category}:${data.main_nav_link_text}`,
    );
    adobeSessionCache.store('link_click_position', data.main_nav_link_position);
  },

  marketing_opt: (data) => {
    track(
      'Marketing Opt Changed',
      {
        ...getSubsEVarsFromEventData(data),
        [adobeProps.PACKAGE]: makeEVarLink(adobeVars.PACKAGE),
        [adobeProps.SUBSCRIPTION_LENGTH]: makeEVarLink(
          adobeVars.SUBSCRIPTION_LENGTH,
        ),
        [adobeProps.SUBSCRIPTION_PRICE]: makeEVarLink(
          adobeVars.SUBSCRIPTION_PRICE,
        ),
        [adobeProps.OPT_IN_OUT]: makeEVarLink(adobeVars.OPT_IN_OUT),
      },
      [adobeEvents.MARKETING_OPT_IN_CLICK],
    );

    adobeSessionCache.store('marketing_opt_in', data.marketing_opt_in);
  },

  mega_menu_link_click: (data) => {
    adobeSessionCache.store('link_click_label', 'Burger Nav');
    adobeSessionCache.store(
      'link_click_text',
      `${data.mega_menu_link_category}:${data.mega_menu_link_text}`,
    );
  },

  most_commented_section_click: (data) => {
    track(
      'Most Commented Section Click',
      {
        [adobeVars.LINK_DESTINATION]: data.most_commented_section_link_pagename,
        [adobeVars.LINK_LABEL]: 'Most Commented (Section Page)',
        [adobeVars.LINK_POSITION]: data.most_commented_section_link_position,
        [adobeProps.LINK_DESTINATION]: makeEVarLink(adobeVars.LINK_DESTINATION),
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
        [adobeProps.LINK_POSITION]: makeEVarLink(adobeVars.LINK_POSITION),
      },
      [adobeEvents.MOST_COMMENTED_SECTION_CLICK],
    );
  },

  most_popular_link_click: (data) => {
    adobeSessionCache.store('link_click_label', 'RHR Most Popular');
    adobeSessionCache.store(
      'link_click_position',
      data.most_popular_link_position,
    );
  },

  most_watched_click: (data) => {
    adobeSessionCache.store('link_click_label', data.mostWatched_link_text);
    adobeSessionCache.store('video_algorithm', data.mostWatched_algorithm);
  },

  newsletter_lite_reg_signup: (data) => {
    track(
      'Newsletter Inline Signup Prompt',
      {
        [adobeVars.NEWSLETTER]: data.newsletter,
        [adobeProps.NEWSLETTER]: makeEVarLink(adobeVars.NEWSLETTER),
      },
      [adobeEvents.NEWSLETTER_LITE_REG_SIGNUP],
    );
  },

  // don't remove gtm - other tracking too
  newsletter_page_signup_button_click: (data) => {
    track(
      'Newsletter Page Signup',
      {
        [adobeVars.NEWSLETTER]: data.newsletter,
        [adobeProps.NEWSLETTER]: makeEVarLink(adobeVars.NEWSLETTER),
      },
      [adobeEvents.NEWSLETTER_PAGE_SIGNUP_CLICK],
    );
  },

  newsletter_prefs_subscribe: (data) => {
    track(
      'Newsletter Prefs Subscribe',
      {
        [adobeVars.NEWSLETTER]: data.newsletter,
        [adobeProps.NEWSLETTER]: makeEVarLink(adobeVars.NEWSLETTER),
      },
      [adobeEvents.NEWSLETTER_PREFS_SUBSCRIBE],
    );
  },

  newsletter_prefs_unsubscribe: (data) => {
    track(
      'Newsletter Prefs Unsubscribe',
      {
        [adobeVars.NEWSLETTER]: data.newsletter,
        [adobeProps.NEWSLETTER]: makeEVarLink(adobeVars.NEWSLETTER),
      },
      [adobeEvents.NEWSLETTER_PREFS_UNSUBSCRIBE],
    );
  },

  notification_prompt_accept: () => {
    track(
      'Web Notification Opt In',
      {
        [adobeVars.LINK_LABEL]: 'Yes please',
        [adobeProps.LINK_LABEL]: 'Yes please',
      },
      [adobeEvents.NOTIFICATION_PROMPT_ACCEPT],
    );
  },

  notification_prompt_dismiss: () => {
    track(
      'Web Notification Dismiss',
      {
        [adobeVars.LINK_LABEL]: 'Not now',
        [adobeProps.LINK_LABEL]: 'Not now',
      },
      [adobeEvents.NOTIFICATION_PROMPT_DISMISS],
    );
  },

  notification_prompt_load: (data) => {
    track(
      'Web Notification Prompt Load',
      {
        [adobeVars.COMPONENTS_LIST]: data.components_list,
        [adobeProps.COMPONENTS_LIST]: makeEVarLink(adobeVars.COMPONENTS_LIST),
      },
      [adobeEvents.NOTIFICATION_PROMPT_LOAD],
    );
  },

  payment_details_failed: (data) => {
    track(
      'Payment Form Submit Failed',
      {
        ...getSubsEVarsFromEventData(data),
        [adobeProps.PACKAGE]: makeEVarLink(adobeVars.PACKAGE),
        [adobeProps.SUBSCRIPTION_LENGTH]: makeEVarLink(
          adobeVars.SUBSCRIPTION_LENGTH,
        ),
        [adobeProps.SUBSCRIPTION_PRICE]: makeEVarLink(
          adobeVars.SUBSCRIPTION_PRICE,
        ),
      },
      [adobeEvents.PAYMENT_UNSUCCESSFUL],
    );
  },

  // don't delete other tags fire

  payment_details_success: (data) => {
    track(
      'Payment Form Submit Success',
      {
        ...getSubsEVarsFromEventData(data),
        [adobeProps.PACKAGE]: makeEVarLink(adobeVars.PACKAGE),
        [adobeProps.SUBSCRIPTION_LENGTH]: makeEVarLink(
          adobeVars.SUBSCRIPTION_LENGTH,
        ),
        [adobeProps.SUBSCRIPTION_PRICE]: makeEVarLink(
          adobeVars.SUBSCRIPTION_PRICE,
        ),
      },
      [adobeEvents.PAYMENT_DETAILS_SUBMITTED, adobeEvents.SUBSCRIPTION_SUCCESS],
    );
  },

  payment_form_loaded: (data) => {
    const query = (() => {
      const lastPage = document.referrer;

      if (lastPage) {
        const referrerURLObject = new URL(lastPage);
        const previousPagePath = referrerURLObject.pathname;

        if (previousPagePath === '/subscribe') {
          return referrerURLObject.searchParams;
        }
      }

      if (document.location.pathname === '/subscribe') {
        return new URL(document.location.href).searchParams;
      }
    })();

    track(
      'Payment Form Loaded',
      {
        ...getSubsEVarsFromEventData(data),
        [adobeProps.PACKAGE]: makeEVarLink(adobeVars.PACKAGE),
        [adobeProps.SUBSCRIPTION_LENGTH]: makeEVarLink(
          adobeVars.SUBSCRIPTION_LENGTH,
        ),
        [adobeProps.SUBSCRIPTION_PRICE]: makeEVarLink(
          adobeVars.SUBSCRIPTION_PRICE,
        ),
        ...(query
          ? {
              [adobeVars.UTM_SOURCE]: query.get('itm_source'),
              [adobeVars.UTM_MEDIUM]: query.get('itm_medium'),
              [adobeVars.UTM_CAMPAIGN]: query.get('itm_campaign'),
              [adobeVars.UTM_TERM]: query.get('itm_term'),
            }
          : {}),
      },
      [adobeEvents.PAYMENT_DETAILS_LOADED],
    );
  },

  popular_videos_link_click: (data) => {
    adobeSessionCache.store('link_click_label', 'RHR Popular Videos');
    adobeSessionCache.store(
      'link_click_position',
      data.popular_videos_link_position,
    );
  },

  premium_article_cta_premium: () => {
    track('Premium Article Gate CTA Click Premium', {}, [
      adobeEvents.SUBSCRIBE_BUTTON_CLICK,
    ]);
  },

  premium_article_cta_tide: () => {
    track('Premium Article Gate CTA Click Premium', {}, [
      adobeEvents.SUBSCRIBE_BUTTON_CLICK,
    ]);
  },

  premium_comment: (data) => {
    track(
      'Article Premium Comment',
      { [adobeProps.ARTICLE_ID]: data.article_id },
      [adobeEvents.PREMIUM_COMMENT_ADD],
    );
  },

  read_more_articles_link_click: (data) => {
    adobeSessionCache.store('link_click_label', 'Related Articles');
    adobeSessionCache.store(
      'link_click_position',
      data.read_more_link_position,
    );
  },

  experience_executed: (data) => {
    track(
      'Piano Experience Impression',
      {
        [adobeVars.EXPERIENCE_NAME]: data.experience_name,
        [adobeVars.EXPERIENCE_VARIANT]: data.variant,
      },
      [adobeEvents.PIANO_EXPERIENCE_IMPRESSION],
    );
  },

  registration_failed: () => {},

  // no delete

  registration_success: (data) => {
    const events = [adobeEvents.REG_SUCCESS];

    if (data.marketing_opt_in) {
      events.push(adobeEvents.MARKETING_OPT_IN_CLICK);
    }

    if (data.promo_code_applied) {
      events.push(adobeEvents.PROMO_CODE_APPLIED);
    }

    track(
      'Registration Success',
      {
        ...getSubsEVarsFromEventData(data),
        [adobeProps.PACKAGE]: makeEVarLink(adobeVars.PACKAGE),
        [adobeProps.SUBSCRIPTION_LENGTH]: makeEVarLink(
          adobeVars.SUBSCRIPTION_LENGTH,
        ),
        [adobeProps.SUBSCRIPTION_PRICE]: makeEVarLink(
          adobeVars.SUBSCRIPTION_PRICE,
        ),
        [adobeProps.OPT_IN_OUT]: makeEVarLink(adobeVars.OPT_IN_OUT),
      },
      events,
    );
  },

  registration_success_standard: (data) => {
    const events = [adobeEvents.REG_SUCCESS];

    if (data.marketing_opt_in) {
      events.push(adobeEvents.MARKETING_OPT_IN_CLICK);
    }

    track(
      'Registration Success',
      { ...getSubsEVarsFromEventData(data) },
      events,
    );
  },

  registration_wall_click: ({
    registration_wall_label: label,
    is_register_wall_with_register_form: isRegisterWallWithRegisterForm,
  }) => {
    if (label === 'Register Now') {
      if (!isRegisterWallWithRegisterForm) {
        adobeSessionCache.store('link_click_label', label);
        return;
      }
    } else if (label !== "I'll try later" && label !== 'Log In') {
      return;
    }

    track(
      'Registration Gating Prompt Click',
      {
        [adobeVars.LINK_LABEL]: label,
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
      [adobeEvents.REGISTER_NOW_CLICK],
    );
  },

  related_articles_link_click: (data) => {
    const type = data.related_articles_autolink
      ? `Auto`
      : data.related_articles_topiclink
        ? `Audience`
        : `Manual`;

    const label = `Related Articles - ${type}, Related Articles ${type} Embed Position ${data.related_embed_position}`;

    adobeSessionCache.store('link_click_label', label);
    adobeSessionCache.store(
      'link_click_position',
      data.related_articles_link_position,
    );
    if (data.related_articles_algorithm) {
      adobeSessionCache.store(
        'video_algorithm',
        `Related Articles Video ${data.related_articles_algorithm}`,
      );
    }

    const embed = `Related Articles ${type} Embed Position ${data.related_embed_position}`;
    adobeSessionCache.store('link_click_related_embed_position', embed);
  },

  search: (data) => {
    track(
      'Search',
      {
        [adobeVars.INTERNAL_SEARCH_TERMS]: data.search_term,
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.INTERNAL_SEARCH_TERMS),
      },
      [adobeEvents.INTERNAL_SEARCH],
    );
  },

  selling_page_loaded: () => {
    track('Piano Selling Page loaded', {}, [adobeEvents.SELLING_PAGE_LOADED]);
  },

  show_comments_click: (data) => {
    track(
      'Article Show Comments',
      {
        [adobeProps.ARTICLE_ID]: data.article_id,
        [adobeVars.LINK_POSITION]: data.show_comments_link_position,
        [adobeProps.LINK_POSITION]: makeEVarLink(adobeVars.LINK_POSITION),
      },
      [adobeEvents.COMMENTS_SHOW_CLICK],
    );
  },

  sponsored_features_link_click: (data) => {
    adobeSessionCache.store('link_click_label', 'RHR Sponsored Features');
    adobeSessionCache.store(
      'link_click_position',
      data.sponsored_features_link_position,
    );
  },

  subscription_button_click: (data) => {
    track(
      'Join Premium Button Click',
      {
        ...getSubsEVarsFromEventData(data),
        [adobeVars.SUBSCRIBE_BUTTON_VERSION]: data.subscribe_button_version,
        [adobeProps.PACKAGE]: makeEVarLink(adobeVars.PACKAGE),
        [adobeProps.SUBSCRIPTION_LENGTH]: makeEVarLink(
          adobeVars.SUBSCRIPTION_LENGTH,
        ),
        [adobeProps.SUBSCRIPTION_PRICE]: makeEVarLink(
          adobeVars.SUBSCRIPTION_PRICE,
        ),
        [adobeProps.SUBSCRIBE_BUTTON_VERSION]: makeEVarLink(
          adobeVars.SUBSCRIBE_BUTTON_VERSION,
        ),
        ...(data.selling_page_variant_click && {
          [adobeVars.SELLING_PAGE_VARIANT_CLICK]:
            data.selling_page_variant_click,
        }),
      },
      [adobeEvents.SUBSCRIBE_BUTTON_CLICK],
    );
  },

  taboola_feed_link_click: () => {},

  temporary_link_click: (data) => {
    adobeSessionCache.store('link_click_label', 'Temp Link');
    adobeSessionCache.store('link_click_text', data.temp_link_text);
  },

  update_components_list: (data) => {
    track(
      'Update components list',
      {
        [adobeVars.COMPONENTS_LIST]: data.components_list,
        [adobeProps.COMPONENTS_LIST]: makeEVarLink(adobeVars.COMPONENTS_LIST),
      },
      [],
    );
  },

  voucher_ticker_link_click: (data) => {
    track(
      'Voucher Ticker Link Click',
      {
        [adobeVars.LINK_LABEL]: data.voucher_ticker_text,
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
      [adobeEvents.VOUCHER_TICKER_LINK_CLICK],
    );
  },

  voucher_ticker_arrow_click: () => {
    track('Voucher Ticker Arrow Click', {}, [
      adobeEvents.VOUCHER_TICKER_ARROW_CLICK,
    ]);
  },

  webpush_signup_click: () => {
    track(
      'Get Started Clicks (Web Push Landing Page)',
      {
        [adobeProps.LINK_LABEL]: 'Get Started',
        [adobeVars.LINK_LABEL]: 'Get Started',
      },
      [adobeEvents.WEBPUSH_SIGNUP_CLICK],
    );
  },

  // Price comparison

  price_comparison_list_buy_now_click: ({ name, price }) => {
    track(
      'Price Comparison Buy Link Click',
      {
        [adobeVars.LINK_LABEL]: 'Price Comparison - Buy Link Click',
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
        [adobeVars.PRODUCT_NAME]: name,
        [adobeVars.PRODUCT_PRICE]: price,
      },
      [adobeEvents.BUY_NOW_CLICK],
    );
  },

  price_comparison_buttons_buy_now_click: ({ isLeft, index, name, price }) => {
    const label = `${
      isLeft ? 'Left' : 'Right'
    } CTA Button - Position ${index++}`;

    track(
      'Price Comparison Buttons Buy Now Click',
      {
        [adobeVars.LINK_LABEL]: label,
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
        [adobeVars.PRODUCT_NAME]: name,
        [adobeVars.PRODUCT_PRICE]: price,
      },
      [adobeEvents.PRICE_COMPARISON_BUY_NOW_CLICK],
    );
  },

  // Product carousel

  product_carousel_buy_now_click: ({ name, price, index }) => {
    const label = `Top Picks Carousel - Buy Now - Position ${index++}`;

    track(
      'Comparison Carousel Buy Link Click',
      {
        [adobeVars.LINK_LABEL]: label,
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
        [adobeVars.PRODUCT_NAME]: name,
        [adobeVars.PRODUCT_PRICE]: price,
      },
      [adobeEvents.PRODUCT_CAROUSEL_BUY_NOW_CLICK],
    );
  },

  product_carousel_read_review_click: ({ name, price }) => {
    track(
      'Comparison Carousel/Modal Read Review Link Click',
      {
        [adobeVars.LINK_LABEL]: 'Comparison Carousel - Read Review Link Click',
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
        [adobeVars.PRODUCT_NAME]: name,
        [adobeVars.PRODUCT_PRICE]: price,
      },
      [adobeEvents.PRODUCT_CAROUSEL_READ_REVIEW_CLICK],
    );
  },

  // Product comparison

  product_comparison_checkbox_click: ({ name, price }) => {
    track(
      'Comparison Carousel Checkbox Click',
      {
        [adobeVars.LINK_LABEL]:
          'Comparison Carousel - Compare Checkbox Selected',
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
        [adobeVars.PRODUCT_NAME]: name,
        [adobeVars.PRODUCT_PRICE]: price,
      },
      [adobeEvents.PRODUCT_COMPARISON_CHECKBOX_SELECTED],
    );
  },

  product_comparison_modal_open: () => {
    track(
      'Compare Table Pop-up',
      {
        [adobeVars.LINK_LABEL]: 'Compare Table Pop-up',
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
      [adobeEvents.PRODUCT_COMPARISON_MODAL_OPEN],
    );
  },

  product_comparison_modal_buy_now_click: ({ name, price }) => {
    track(
      'Compare Modal Buy Link Click',
      {
        [adobeVars.LINK_LABEL]: 'Compare Modal - Buy Link Click',
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
        [adobeVars.PRODUCT_NAME]: name,
        [adobeVars.PRODUCT_PRICE]: price,
      },
      [adobeEvents.PRODUCT_CAROUSEL_BUY_NOW_CLICK],
    );
  },

  product_comparison_modal_read_review_click: ({ name, price }) => {
    track(
      'Comparison Carousel/Modal Read Review Link Click',
      {
        [adobeVars.LINK_LABEL]: 'Comparison Carousel - Read Review Link Click',
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
        [adobeVars.PRODUCT_NAME]: name,
        [adobeVars.PRODUCT_PRICE]: price,
      },
      [adobeEvents.PRODUCT_CAROUSEL_READ_REVIEW_CLICK],
    );
  },

  affiliate_link_click: (data) => {
    track(
      'Affiliate Link Click',
      {
        [adobeVars.LINK_LABEL]: data.affiliate_link_click_text,
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
      [adobeEvents.AFFILIATE_LINK_CLICK],
    );
  },

  // this event is fired from piano - hence you will find no dispatcher
  registration_gating_show_prompt: () => {
    track('Registration Show Prompt', {}, [adobeEvents.REG_GATE_SHOWN]);
  },

  registration_gating_first_visit: (data) => {
    track('Registration Gating first visit', {
      [adobeVars.REG_GATE_TRIGGER]: data.reg_gating,
    });
  },

  account_overview_tab_my_details: () => {
    track(
      'Account Overview Tab - My Details',
      {
        pageName: 'Account Overview Tab - My Details',
      },
      [adobeEvents.ACCOUNT_OVERVIEW_CLICK],
    );
  },

  account_overview_tab_change_password: () => {
    track(
      'Account Overview Tab - Change Password',
      {
        pageName: 'Account Overview Tab - Change Password',
      },
      [adobeEvents.ACCOUNT_OVERVIEW_CLICK],
    );
  },

  account_overview_tab_payments_and_billing: () => {
    track(
      'Account Overview Tab - Payments & Billing',
      {
        pageName: 'Account Overview Tab - Payments & Billing',
      },
      [adobeEvents.ACCOUNT_OVERVIEW_CLICK],
    );
  },

  account_overview_tab_manage_subscription: () => {
    track(
      'Account Overview Tab - Manage Subscription',
      {
        pageName: 'Account Overview Tab - Manage Subscription',
      },
      [adobeEvents.ACCOUNT_OVERVIEW_CLICK],
    );
  },

  account_cancellation_barrier_1: () => {
    track(
      'Cancellation journey - Barrier 1',
      {
        pageName: 'Cancellation journey - Barrier 1',
        [adobeVars.LINK_LABEL]: 'Cancel Subscription - Barrier 1',
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
      [adobeEvents.CANCEL_JOURNEY_CLICK],
    );
  },
  account_cancellation_barrier_2: () => {
    track(
      'Cancellation journey - Barrier 2',
      {
        pageName: 'Cancellation journey - Barrier 2',
        [adobeVars.LINK_LABEL]: 'Cancel Subscription - Barrier 2',
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
      [adobeEvents.CANCEL_JOURNEY_CLICK],
    );
  },
  account_cancellation_keep_subscription: () => {
    track(
      'Cancellation journey - Barrier 1',
      {
        pageName: 'Cancellation journey - Barrier 1',
        [adobeVars.LINK_LABEL]: 'Keep Subscription - Barrier 1',
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
      [adobeEvents.CANCEL_JOURNEY_CLICK],
    );
  },
  account_cancellation_take_this_offer: () => {
    track(
      'Cancellation journey - Barrier 2',
      {
        pageName: 'Cancellation journey - Barrier 2',
        [adobeVars.LINK_LABEL]: 'Take this Offer - Barrier 2',
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
      [adobeEvents.CANCEL_JOURNEY_CLICK],
    );
  },
  account_cancellation_continue_to_payment: () => {
    track(
      'Cancellation journey - Thanks',
      {
        pageName: 'Cancellation journey - Thanks',
        [adobeVars.LINK_LABEL]: 'Continue to Payment - Thank you',
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
      [adobeEvents.CANCEL_JOURNEY_CLICK],
    );
  },
  account_cancellation_reactivate_subscription: () => {
    track(
      'Cancellation journey - Thanks',
      {
        pageName: 'Cancellation journey - Thanks',
        [adobeVars.LINK_LABEL]: 'Reactivate Subscription',
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
      [adobeEvents.CANCEL_JOURNEY_CLICK],
    );
  },
  stage_barrier_1: () => {
    track(
      'Cancellation journey - Barrier 1',
      {
        pageName: 'Cancellation journey - Barrier 1',
      },
      [adobeEvents.CANCELLATION_JOURNEY_STAGE],
    );
  },
  stage_barrier_2: () => {
    track(
      'Cancellation journey - Barrier 2',
      {
        pageName: 'Cancellation journey - Barrier 2',
      },
      [adobeEvents.CANCELLATION_JOURNEY_STAGE],
    );
  },
  support_nsc_link_click: () => {
    track(
      'Support NSC Link Click',
      {
        [adobeVars.LINK_LABEL]: 'Support NSC Link Click',
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
      [adobeEvents.SUPPORT_NSC_LINK_CLICK],
    );
  },
  support_now_encore_click: () => {
    track(
      'Support Now Link Click - Encore Component',
      {
        [adobeVars.LINK_LABEL]: 'Support Now Link Click - Encore Component',
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
      [adobeEvents.SUPPORT_NSC_LINK_CLICK],
    );
  },
};

export default () => {
  document.body.addEventListener(EVENT_ANALYTICS_TRIGGER, (evt) => {
    const handler = adobeEventHandlers[evt.detail.eventName];

    if (!handler) {
      console.warn('Adobe event not recognised!', evt.detail.eventName);
      return;
    }

    handler({
      ...window.digitalData,
      ...(evt.detail.data || {}),
    });
  });
};
