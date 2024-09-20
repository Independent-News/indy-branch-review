/* globals JSGlobals, digitalData */
import { COOKIE_FEAT_SUPPORT_NOW_DONATE_COPY } from '#app/constants/cookies';

import { TRACKING_PAYMENT_KEYS } from '#app/constants/adobeConstants';
import { DONATE_COPY, SUPPORT_NOW_COPY } from '#app/constants/donations';

import { getDigitalDataByKeys } from '#app/public/js/modules/digital-data/digital-data-session';

import { isFeatureFlagEnabled } from '../../utils/featureFlag';
import { isIphone } from '../../utils/isIosDevice';
import { getCookie } from '../cookie';

import * as adobeEvents from './constants/events';
import * as adobeProps from './constants/props';
import * as adobeVars from './constants/vars';
import fireBeacon from './services/fireBeacon';
import * as adobeSessionCache from './services/sessionCache';
import addPageLevelTracking from './utils/addPageLevelTracking';
import getCampaign from './utils/getCampaign';
import getPageName from './utils/getPageName';
import getScreenSize from './utils/getScreenSize';
import getSubsEVarsFromEventData from './utils/getSubsEVarsFromEventData';
import makeEVarLink from './utils/makeEVarLink';

const buildPageGenericTracking = (path) => {
  const {
    auto_refresh,
    site_sections,
    page_domain,
    page_path,
    page_query,
    page_type,
    page_previous_url,
    section_type,
    components_list,
    commercial_campaign,
    logged_in_status,
    uid,
    registration_date,
    user_status,
    main_js_version,
  } = digitalData;

  const siteSectionParts = site_sections?.split(':');

  const linkLabel = adobeSessionCache.get('link_click_label');
  const linkPosition = adobeSessionCache.get('link_click_position');

  addPageLevelTracking({
    events: [
      ...(page_type === 'Topic' ? [adobeEvents.TOPIC_PAGE_LOAD] : []),
      ...(auto_refresh ? [adobeEvents.AUTO_REFRESH] : []),
    ],
    props: {
      pageName: getPageName(path, digitalData),

      ...(siteSectionParts && {
        hier1: siteSectionParts.join(','),
        channel: siteSectionParts[0],
        [adobeVars.SUB_SECTION]: siteSectionParts.slice(0, 2).join(':'),
        [adobeVars.SUB_SECTION_2]: siteSectionParts.slice(0, 3).join(':'),
      }),

      [adobeVars.DOMAIN]: page_domain,
      [adobeVars.PAGE_TYPE]: page_type,
      [adobeVars.SITE_SECTIONS]: site_sections,
      [adobeVars.PAGE_PATH]: page_path,
      [adobeVars.PAGE_QUERY]: page_query,
      [adobeVars.PREV_PAGE_URL]: page_previous_url,
      [adobeVars.COMPONENTS_LIST]: components_list,
      [adobeVars.EDITION_LOCALE]: getCookie('locale'),
      [adobeVars.PLATFORM]: 'Native',
      [adobeVars.COMMERCIAL_CAMPAIGN]: commercial_campaign,
      [adobeVars.USER_LOGGED_IN_STATUS]: logged_in_status,
      [adobeVars.USER_ID]: uid,
      [adobeVars.USER_REG_DATE]: registration_date,
      [adobeVars.USER_STATUS]: user_status,
      [adobeVars.CODE_VERSION]: main_js_version,

      [adobeProps.SUB_SECTION]: makeEVarLink(adobeVars.SUB_SECTION),
      [adobeProps.SUB_SECTION_2]: makeEVarLink(adobeVars.SUB_SECTION_2),
      [adobeProps.DOMAIN]: page_domain,
      [adobeProps.PAGE_TYPE]: page_type,
      [adobeProps.ARTICLE_TYPE]: section_type,
      [adobeProps.COMPONENTS_LIST]: makeEVarLink(adobeVars.COMPONENTS_LIST),
      [adobeProps.EDITION_LOCALE]: makeEVarLink(adobeVars.EDITION_LOCALE),
      [adobeProps.PLATFORM]: makeEVarLink(adobeVars.PLATFORM),
      [adobeProps.COMMERCIAL_CAMPAIGN]: makeEVarLink(
        adobeVars.COMMERCIAL_CAMPAIGN,
      ),
      [adobeProps.URL]: 'D=g',
      ...(linkLabel && {
        [adobeVars.LINK_DESTINATION]: 'D=pageName',
        [adobeProps.LINK_DESTINATION]: 'D=pageName',
        [adobeVars.LINK_LABEL]: linkLabel,
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
        [adobeVars.LINK_POSITION]: linkPosition,
        [adobeProps.LINK_POSITION]: makeEVarLink(adobeVars.LINK_POSITION),
      }),
      [adobeProps.USER_LOGGED_IN_STATUS]: makeEVarLink(
        adobeVars.USER_LOGGED_IN_STATUS,
      ),
      [adobeProps.USER_ID]: makeEVarLink(adobeVars.USER_ID),
      [adobeProps.USER_REG_DATE]: makeEVarLink(adobeVars.USER_REG_DATE),
      [adobeProps.USER_STATUS]: makeEVarLink(adobeVars.USER_STATUS),
      ...(isIphone() && {
        [adobeProps.IPHONE_SCREEN_SIZE]: getScreenSize(),
        [adobeVars.IPHONE_SCREEN_SIZE]: getScreenSize(),
      }),
      ...(JSGlobals.httpStatusCode >= 400 && {
        pageName: '',
        pageType: 'errorPage',
      }),
      [adobeProps.CODE_VERSION]: makeEVarLink(adobeVars.CODE_VERSION),

      ...getCampaign(),
    },
  });

  switch (linkLabel) {
    case 'Visible Nav': {
      addPageLevelTracking({
        events: [adobeEvents.NAV_CLICK],
        props: {
          [adobeProps.NAV_LINK_CLICK]: adobeSessionCache.get('link_click_text'),
          [adobeProps.NAV_LINK_CLICK_LOCATION]: 'Visible Nav',
        },
      });

      break;
    }
    case 'Burger Nav':
      addPageLevelTracking({
        events: [adobeEvents.NAV_CLICK],
        props: {
          [adobeProps.BURGER_MENU_CALL_TO_ACTION]:
            adobeSessionCache.get('link_click_text'),
          [adobeProps.NAV_LINK_CLICK_LOCATION]: 'Burger Nav',
        },
      });
      break;
    case 'Temp Link':
      addPageLevelTracking({
        events: [adobeEvents.NAV_CLICK],
        props: {
          [adobeProps.TOP_NAV_LINK_TYPE]:
            adobeSessionCache.get('link_click_text'),
        },
      });
      break;
    case 'RHR Most Popular':
      addPageLevelTracking({
        events: [adobeEvents.RHR_MOST_POPULAR_CLICK],
      });
      break;
    case 'RHR Popular Videos':
      addPageLevelTracking({ events: [adobeEvents.RHR_POPULAR_VIDEOS_CLICK] });
      break;
    case 'RHR Sponsored Features':
      addPageLevelTracking({
        events: [adobeEvents.RHR_SPONSORED_FEATURES_CLICK],
      });
      break;
    case 'RHR Indy100 Trending':
      addPageLevelTracking({
        events: [adobeEvents.RHR_INDY100_TRENDING_CLICK],
      });
      break;
    case 'Article in-line Link':
      addPageLevelTracking({
        events: [adobeEvents.ARTICLE_INLINE_LINK_CLICK],
      });

      break;
    case 'Article Topic Tag Link':
      addPageLevelTracking({
        events: [adobeEvents.ARTICLE_TOPIC_TAG_CLICK],
        props: {
          [adobeProps.ARTICLE_TOPIC_TAGS]: adobeSessionCache.get('topic_tag'),
        },
      });
      break;
    case 'Article Bullet Related Link':
    case 'Live Blog Article Bullet Related Link':
      addPageLevelTracking({
        events: [adobeEvents.RELATED_ARTICLE_BULLET_CLICK],
      });
      break;
    case 'Live Blog In-line Article Link':
      addPageLevelTracking({
        events: [adobeEvents.LIVE_BLOG_INLINE_ARTICLE_CLICK],
      });
      break;
    case 'Most Commented Section Click':
      addPageLevelTracking({
        events: [adobeEvents.MOST_COMMENTED_SECTION_CLICK],
      });
      break;
    case 'Register Now':
      addPageLevelTracking({ events: [adobeEvents.REGISTER_NOW_CLICK] });
      break;
    case 'Most Watched':
      addPageLevelTracking({
        events: [adobeEvents.MOST_WATCHED_CLICK],
        props: {
          [adobeVars.VALID_CODE]: adobeSessionCache.get('video_algorithm'),
          [adobeProps.VALID_CODE]: makeEVarLink(adobeVars.VALID_CODE),
        },
      });
      break;
    case 'Edition Link':
      addPageLevelTracking({
        events: [adobeEvents.EDITION_LINK_CLICK],
        props: {
          [adobeProps.EDITION_LOCALE]: adobeSessionCache.get('link_click_text'),
        },
      });
      break;
  }

  const linkRelatedPosition = adobeSessionCache.get(
    'link_click_related_embed_position',
  );

  if (linkLabel?.startsWith('Related Articles - ')) {
    addPageLevelTracking({
      events: [adobeEvents.READ_MORE_CLICK],
      props: {
        [adobeVars.RELATED_LINK_POSITION]: linkRelatedPosition,
        [adobeProps.RELATED_LINK_POSITION]: makeEVarLink(
          adobeVars.RELATED_LINK_POSITION,
        ),
        ...(linkLabel.startsWith('Related Articles - Auto') && {
          [adobeVars.RELATED_ARTICLES_VIDEO_ALGORITHM]:
            adobeSessionCache.get('video_algorithm'),
          [adobeProps.RELATED_ARTICLES_VIDEO_ALGORITHM]: makeEVarLink(
            adobeVars.RELATED_ARTICLES_VIDEO_ALGORITHM,
          ),
        }),
      },
    });
  }

  const topicLinkLabel = adobeSessionCache.get('topic_link_click_label');
  if (topicLinkLabel) {
    addPageLevelTracking({
      props: {
        [adobeVars.LINK_LABEL]: topicLinkLabel,
        [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
      },
    });

    switch (topicLinkLabel) {
      case 'Article in-line Link (Topic Page)':
        addPageLevelTracking({
          events: [adobeEvents.ARTICLE_INLINE_LINK_TOPIC_PAGE],
          props: {
            [adobeProps.LINK_LABEL]: 'Article in-Line Click (Topic Page)',
          },
        });
        break;
      case 'Article in-line Link (Non-Topic Page)':
        addPageLevelTracking({
          events: [adobeEvents.ARTICLE_INLINE_LINK_NON_TOPIC_PAGE],
          props: {
            [adobeProps.LINK_LABEL]: 'Article in-Line Click (Non-Topic Page)',
          },
        });
        break;
    }
  }
};

export default (path) => {
  try {
    buildPageGenericTracking(path);
  } catch (e) {
    console.error(
      'Something went wrong building page generic tracking vars',
      e,
    );
  }

  switch (path) {
    case '/':
      addPageLevelTracking({
        props: { hier1: 'news', channel: 'news' },
      });
      break;

    case '/subscribe/confirmation': {
      const trackingData = getDigitalDataByKeys(TRACKING_PAYMENT_KEYS);

      if (Object.values(trackingData).every((val) => val === undefined)) {
        return;
      }

      addPageLevelTracking({
        events: [adobeEvents.PAYMENT_DETAILS_SUBMITTED],
        props: {
          ...getSubsEVarsFromEventData(trackingData),
          [adobeProps.PACKAGE]: makeEVarLink(adobeVars.PACKAGE),
          [adobeProps.SUBSCRIPTION_LENGTH]: makeEVarLink(
            adobeVars.SUBSCRIPTION_LENGTH,
          ),
          [adobeProps.SUBSCRIPTION_PRICE]: makeEVarLink(
            adobeVars.SUBSCRIPTION_PRICE,
          ),
        },
      });

      break;
    }

    case '/donate': {
      const replaceSupportNowWithDonate = isFeatureFlagEnabled(
        COOKIE_FEAT_SUPPORT_NOW_DONATE_COPY,
      );
      addPageLevelTracking({
        events: [adobeEvents.DONATE_PAGE_LOAD],
        props: {
          [adobeVars.LINK_LABEL]: replaceSupportNowWithDonate
            ? DONATE_COPY
            : SUPPORT_NOW_COPY,
          [adobeProps.LINK_LABEL]: makeEVarLink(adobeVars.LINK_LABEL),
        },
      });

      break;
    }

    case '/register':
    case '/subscribe/register': {
      const trackingData = getDigitalDataByKeys(TRACKING_PAYMENT_KEYS);

      addPageLevelTracking({
        events: [adobeEvents.REG_PAGE_LOAD],
        props: {
          ...getSubsEVarsFromEventData(trackingData),
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
        },
      });

      break;
    }

    case '/thank-you': {
      const marketingOptIn =
        adobeSessionCache.get('marketing_opt_in') === 'true';

      addPageLevelTracking({
        events: [
          adobeEvents.REG_SUCCESS,
          ...(marketingOptIn ? [adobeEvents.MARKETING_OPT_IN_CLICK] : []),
        ],
        props: {
          [adobeVars.OPT_IN_OUT]: marketingOptIn ? 'Opt in' : 'Opt out',
          [adobeProps.OPT_IN_OUT]: makeEVarLink(adobeVars.OPT_IN_OUT),
        },
      });

      break;
    }

    case '/subscribe/payment': {
      if (digitalData.page_previous_path === '/subscribe/register') {
        const trackingData = getDigitalDataByKeys(TRACKING_PAYMENT_KEYS);

        const marketingOptIn =
          adobeSessionCache.get('marketing_opt_in') === 'true';

        addPageLevelTracking({
          events: [
            adobeEvents.REG_SUCCESS,
            ...(marketingOptIn ? [adobeEvents.MARKETING_OPT_IN_CLICK] : []),
          ],
          props: {
            ...getSubsEVarsFromEventData(trackingData),
            [adobeProps.OPT_IN_OUT]: makeEVarLink(adobeVars.OPT_IN_OUT),
            [adobeProps.PACKAGE]: makeEVarLink(adobeVars.PACKAGE),
            [adobeProps.SUBSCRIPTION_LENGTH]: makeEVarLink(
              adobeVars.SUBSCRIPTION_LENGTH,
            ),
            [adobeProps.SUBSCRIPTION_PRICE]: makeEVarLink(
              adobeVars.SUBSCRIPTION_PRICE,
            ),
            [adobeProps.INITIAL_SELECTED_PACKAGE]: makeEVarLink(
              adobeVars.INITIAL_SELECTED_PACKAGE,
            ),
            [adobeProps.SUBSCRIBE_BUTTON_VERSION]: makeEVarLink(
              adobeVars.SUBSCRIBE_BUTTON_VERSION,
            ),
          },
        });
      }
    }
  }

  if (path.startsWith('/tv/')) {
    addPageLevelTracking({
      events: [adobeEvents.ARTICLE_VIEW],
      props: {
        [adobeVars.HEADLINES]: digitalData.video_title,
        [adobeVars.HUB_VIDEO_TYPE]: 'Independent Video Hub',
        [adobeProps.HEADLINES]: makeEVarLink(adobeVars.HEADLINES),
        [adobeProps.ARTICLE_NAME_OR_ID]: digitalData.article_page_filename,
        [adobeProps.HUB_VIDEO_TYPE]: makeEVarLink(adobeProps.HUB_VIDEO_TYPE),
        [adobeProps.ARTICLE_ID]: makeEVarLink(adobeVars.ARTICLE_ID),
        [adobeProps.ARTICLE_PUBLICATION_TIME]: makeEVarLink(
          adobeVars.ARTICLE_PUBLICATION_TIME,
        ),
        [adobeProps.BYLINE]: makeEVarLink(adobeVars.BYLINE),
        [adobeProps.LEAD_MEDIA_ITEM]: digitalData.lead_media_item,
        [adobeProps.ORIG_PUB_DATE]: digitalData.first_published_date,
        [adobeProps.ARTICLE_TYPE]: makeEVarLink(adobeVars.ARTICLE_TYPE),
        [adobeProps.CONTENT_SOURCE]: makeEVarLink(adobeVars.CONTENT_SOURCE),
        [adobeProps.WORD_COUNT]: makeEVarLink(adobeVars.WORD_COUNT),
        [adobeProps.INTERNAL_LINK_COUNT]: makeEVarLink(
          adobeVars.INTERNAL_LINK_COUNT,
        ),
        [adobeProps.ARTICLE_TOPIC_TAGS]: digitalData.article_topic_tags,
        [adobeProps.REPUBLICATION_DATE]: digitalData.published_date,
        [adobeProps.ARTICLE_PREMIUM_STATUS]: digitalData.article_premium_status,
        [adobeVars.ARTICLE_ID]: digitalData.article_id,
        [adobeVars.ARTICLE_PUBLICATION_TIME]:
          digitalData.article_publication_time,
        [adobeVars.BYLINE]: digitalData.article_author,
        [adobeVars.ARTICLE_TYPE]: digitalData.article_category,
        [adobeVars.CONTENT_SOURCE]: digitalData.content_source,
        [adobeVars.WORD_COUNT]: digitalData.word_count,
        [adobeVars.INTERNAL_LINK_COUNT]: digitalData.internal_links_count,
      },
    });
  }

  if (digitalData.page_type === 'Article') {
    addPageLevelTracking({
      props: {
        [adobeVars.HEADLINES]: digitalData.article_title,
        [adobeVars.BYLINE]: digitalData.article_author,
        [adobeVars.TOPIC_PAGES]: digitalData.topic_pages,
        [adobeVars.ARTICLE_TYPE]: digitalData.article_category,
        [adobeVars.CONTENT_SOURCE]: digitalData.content_source,
        [adobeVars.WORD_COUNT]: digitalData.word_count,
        [adobeVars.INTERNAL_LINK_COUNT]: digitalData.internal_links_count,
        [adobeVars.COMPONENTS_LIST]: `${digitalData.components_list}${
          digitalData.mostWatched_algorithm
            ? `,4,${digitalData.mostWatched_algorithm === 'no-love' ? 5 : ''}`
            : ''
        }`,
        [adobeVars.COMMERCIAL_CAMPAIGN]: digitalData.commercial_campaign,
        [adobeVars.PARAGRAPH]: digitalData.mostWatched_paragraph_number,
        [adobeVars.AFFILIATE_LINK_COUNT]: digitalData.affiliate_links_count,
        [adobeVars.ARTICLE_PUBLICATION_TIME]:
          digitalData.article_publication_time,
        [adobeVars.ARTICLE_ID]: digitalData.article_id,
        [adobeProps.ARTICLE_ID]: makeEVarLink(adobeVars.ARTICLE_ID),
        [adobeProps.ARTICLE_PUBLICATION_TIME]: makeEVarLink(
          adobeVars.ARTICLE_PUBLICATION_TIME,
        ),
        [adobeProps.HEADLINES]: makeEVarLink(adobeVars.HEADLINES),
        [adobeProps.ARTICLE_NAME_OR_ID]: digitalData.article_page_filename,
        [adobeProps.BYLINE]: makeEVarLink(adobeVars.BYLINE),
        [adobeProps.TOPIC_PAGES]: makeEVarLink(adobeVars.TOPIC_PAGES),
        [adobeProps.LEAD_MEDIA_ITEM]: digitalData.lead_media_item,
        [adobeProps.ORIG_PUB_DATE]: digitalData.first_published_date,
        [adobeProps.ARTICLE_TYPE]: makeEVarLink(adobeVars.ARTICLE_TYPE),
        [adobeProps.CONTENT_SOURCE]: makeEVarLink(adobeVars.CONTENT_SOURCE),
        [adobeProps.WORD_COUNT]: makeEVarLink(adobeVars.WORD_COUNT),
        [adobeProps.INTERNAL_LINK_COUNT]: makeEVarLink(
          adobeVars.INTERNAL_LINK_COUNT,
        ),
        [adobeProps.COMPONENTS_LIST]: makeEVarLink(adobeVars.COMPONENTS_LIST),
        [adobeProps.PRODUCT_COMPARISON_FAILURE]:
          digitalData.product_carousel_failure,
        [adobeProps.ARTICLE_MOD_DATE]: digitalData.article_modification_date,
        [adobeProps.AUTO_LEAD_MEDIA_SWAP]: digitalData.article_swap,
        [adobeProps.ARTICLE_TOPIC_TAGS]: digitalData.article_topic_tags,
        [adobeProps.COMMERCIAL_CAMPAIGN]: makeEVarLink(
          adobeVars.COMMERCIAL_CAMPAIGN,
        ),
        [adobeProps.PARAGRAPH]: makeEVarLink(adobeVars.PARAGRAPH),
        [adobeProps.REPUBLICATION_DATE]: digitalData.published_date,
        [adobeProps.ARTICLE_PREMIUM_STATUS]: digitalData.article_premium_status,
      },
      events: [
        adobeEvents.ARTICLE_VIEW,
        ...(digitalData.auto_gallery_view === 'true'
          ? [adobeEvents.AUTO_GALLERY_VIEW_COUNT]
          : []),
        ...(digitalData.homepage_section
          ? [adobeEvents.HOMEPAGE_LINK_CLICK]
          : []),
      ],
    });
  }

  fireBeacon();
  adobeSessionCache.clear();
};
