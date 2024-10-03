/* global JSGlobals */

import {
  COOKIE_FEAT_SELLING_PAGE_REDESIGN,
  COOKIE_FEAT_SUBSCRIBE_BEFORE_REG,
} from '#app/constants/cookies';

import { PATH_WEB_PUSH } from '#app/constants/paths';
import {
  SELLING_PAGE_CONTROL,
  SELLING_PAGE_VARIANT_ONE,
  SELLING_PAGE_VARIANT_THREE,
  SELLING_PAGE_VARIANT_TWO,
} from '#app/constants/sellingPageVariants';

const PATH_MATCH_TYPE_STARTS_WITH = 'startsWith';

const pageNamesMap = new Map([
  ['/', { name: 'frontpage' }],
  ['/contact-us', { name: 'Contact Us', type: PATH_MATCH_TYPE_STARTS_WITH }],
  ['/jobs', { name: 'Jobs', type: PATH_MATCH_TYPE_STARTS_WITH }],
  [
    '/news/code-of-conduct',
    {
      name: 'Code of conduct and complaints',
      type: PATH_MATCH_TYPE_STARTS_WITH,
    },
  ],
  [
    '/service/external-contributors-policy',
    {
      name: 'Code of conduct and complaints',
      type: PATH_MATCH_TYPE_STARTS_WITH,
    },
  ],
  [
    '/service/cookie-policy',
    { name: 'Cookie policies', type: PATH_MATCH_TYPE_STARTS_WITH },
  ],
  [
    '/service/privacy-policy',
    { name: 'Privacy notice', type: PATH_MATCH_TYPE_STARTS_WITH },
  ],
  [
    '/service/user-policies',
    { name: 'User policies', type: PATH_MATCH_TYPE_STARTS_WITH },
  ],
  [
    '/subscribe',
    {
      name: 'Subscribe',
      featureModeName: COOKIE_FEAT_SELLING_PAGE_REDESIGN,
      featureModeVariants: {
        [SELLING_PAGE_CONTROL]: 'Subscribe',
        [SELLING_PAGE_VARIANT_ONE]: 'Subscribe - Redesign - v1',
        [SELLING_PAGE_VARIANT_TWO]: 'Subscribe - Redesign - v2',
        [SELLING_PAGE_VARIANT_THREE]: 'Subscribe - Redesign - v3',
      },
    },
  ],
  ['/subscribe/app', { name: 'Subscribe - App' }],
  [
    '/subscribe/register',
    {
      name: 'Subscribe - Register',
      featureFlagVariants: {
        [COOKIE_FEAT_SUBSCRIBE_BEFORE_REG]:
          'Subs before reg - Subscribe Register',
      },
    },
  ],
  ['/subscribe/login', { name: 'Subs before reg - Subscribe Login' }],
  ['/subscribe/our-story', { name: 'Subscribe - Our Story' }],
  [PATH_WEB_PUSH, { name: 'Web notification Landing Page' }],
  ['/donations', { name: 'Donations', type: PATH_MATCH_TYPE_STARTS_WITH }],
  ['/archive', { name: 'Archive', type: PATH_MATCH_TYPE_STARTS_WITH }],
  ['/topics-list', { name: 'All topics', type: PATH_MATCH_TYPE_STARTS_WITH }],
  [
    '/vouchercodes',
    { name: 'Voucher codes', type: PATH_MATCH_TYPE_STARTS_WITH },
  ],
  ['/login', { name: 'Login', type: PATH_MATCH_TYPE_STARTS_WITH }],
  ['/register', { name: 'Register', type: PATH_MATCH_TYPE_STARTS_WITH }],
  [
    '/independent-premium',
    { name: 'Independent Premium', type: PATH_MATCH_TYPE_STARTS_WITH },
  ],
  ['/profile', { name: 'Account Details', type: PATH_MATCH_TYPE_STARTS_WITH }],
]);

const getPageName = (pathname, digitalData) => {
  try {
    for (const [
      testPath,
      {
        name,
        type,
        featureFlagVariants = {},
        featureModeVariants = {},
        featureModeName = '',
      },
    ] of pageNamesMap) {
      if (type === PATH_MATCH_TYPE_STARTS_WITH) {
        if (pathname.startsWith(testPath)) {
          return name;
        }
      } else {
        if (pathname === testPath) {
          const entries = Object.entries(featureFlagVariants);
          for (const [key, value] of entries) {
            if (JSGlobals.featureFlags[key]) {
              return value;
            }
          }
          if (featureModeName) {
            const featureModeValue = JSGlobals.featureModes?.[featureModeName];
            if (featureModeValue) {
              return featureModeVariants[featureModeValue];
            }
          }
          return name;
        }
      }
    }

    if (
      digitalData.page_type === 'Channel frontpage' &&
      digitalData.site_sections
    ) {
      return `${digitalData.site_sections.split(':').join('/')}/home`;
    }

    if (digitalData.page_type === 'Topic' && digitalData.site_sections) {
      return `${digitalData.site_sections.split(':').join('/')}/home`;
    }

    if (digitalData.page_type === 'Article' && digitalData.site_sections) {
      return `${digitalData.site_sections
        .split(':')
        .join('/')}/article${digitalData.article_id.replace(/\D/g, '')}`;
    }

    if (
      digitalData.page_type === 'Video Article' &&
      digitalData.site_sections
    ) {
      return `${digitalData.site_sections.split(':').join('/')}/article${
        digitalData.article_id
      }`;
    }
    return pathname;
  } catch (err) {
    console.warn('getPageName() error', err);
    return pathname;
  }
};

export default getPageName;
