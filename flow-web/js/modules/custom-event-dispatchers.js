import { dispatchCustomEvent } from '../utils/dispatchCustomEvent';

import { storeDigitalData } from './digital-data/digital-data-session';

const cacheSubscriptionInfo = ({
  subscription_length,
  subscription_price,
  subscription_package,
  selling_page_variant,
  subscribe_button_version,
}) => {
  storeDigitalData({
    subscription_length,
    subscription_price,
    subscription_package,
    selling_page_variant,
    subscribe_button_version,
  });
};

/**
 * @file
 * All custom events here are used for GTM.
 */

export const dispatchArticleBookmark = (data = {}) =>
  dispatchCustomEvent('article_bookmark', data);

export const dispatchAndCacheChangeSubscriptionPackage = (data = {}) => {
  cacheSubscriptionInfo(data);
  return dispatchCustomEvent('change_subscription_package', data);
};

export const dispatchPremiumArticleCTAPremiumClick = (data = {}) =>
  dispatchCustomEvent('premium_article_cta_premium', data);

export const dispatchPremiumArticleCTATideClick = (data = {}) =>
  dispatchCustomEvent('premium_article_cta_tide', data);

export const dispatchExpandablePromptCTAPremiumClick = (data = {}) =>
  dispatchCustomEvent('expandable_prompt_cta_premium', data);

export const dispatchExpandablePromptCTATideClick = (data = {}) =>
  dispatchCustomEvent('expandable_prompt_cta_tide', data);

export const dispatchChangePaymentMethod = (data = {}) =>
  dispatchCustomEvent('change_payment_method', data);

export const dispatchAndCacheSubscriptionButtonClick = (data = {}) => {
  cacheSubscriptionInfo(data);
  return dispatchCustomEvent('subscription_button_click', data);
};

export const dispatchFocusOnSubsRegField = (data = {}) =>
  dispatchCustomEvent('focus_reg_subscription_field', data);

export const dispatchDonation = (data = {}) =>
  dispatchCustomEvent('donation', data);

export const dispatchDonationApplePay = (data = {}) =>
  dispatchCustomEvent('donation_apple_pay', data);

export const dispatchDonationArticleBottom = (data = {}) =>
  dispatchCustomEvent('donation_article_bottom', data);

export const dispatchGalleryView = (data = {}) =>
  dispatchCustomEvent('gallery_view', data);

export const dispatchAutoGalleryView = (data = {}) =>
  dispatchCustomEvent('auto_gallery_view', data);

export const dispatchMarketingOpt = (data = {}) =>
  dispatchCustomEvent('marketing_opt', data);

export const dispatchRegistrationSuccess = (data = {}) =>
  dispatchCustomEvent('registration_success', data);

export const dispatchRegistrationSuccessStandard = (data = {}) =>
  dispatchCustomEvent('registration_success_standard', data);

export const dispatchRegistrationFailed = (data = {}) =>
  dispatchCustomEvent('registration_failed', data);

export const dispatchLoginSuccess = (data = {}) =>
  dispatchCustomEvent('login_success', data);

export const dispatchArticleShare = (data = {}) =>
  dispatchCustomEvent('article_share', data);

export const dispatchSearch = (data = {}) =>
  dispatchCustomEvent('search', data);

export const dispatchMegaMenuLinkClick = (data = {}) =>
  dispatchCustomEvent('mega_menu_link_click', data);

export const dispatchMainNavLinkClick = (data = {}) =>
  dispatchCustomEvent('main_nav_link_click', data);

export const dispatchMostPopularLinkClick = (data = {}) =>
  dispatchCustomEvent('most_popular_link_click', data);

export const dispatchPopularVideosLinkClick = (data = {}) =>
  dispatchCustomEvent('popular_videos_link_click', data);

export const dispatchSponsoredFeaturesLinkClick = (data = {}) =>
  dispatchCustomEvent('sponsored_features_link_click', data);

export const dispatchReadMoreLinkClick = (data = {}) =>
  dispatchCustomEvent('read_more_link_click', data);

export const dispatchIndy100TrendingLinkClick = (data = {}) =>
  dispatchCustomEvent('indy100_trending_link_click', data);

export const dispatchTaboolaFeedLinkClick = (data = {}) =>
  dispatchCustomEvent('taboola_feed_link_click', data);

export const dispatchRelatedArticlesLinkClick = (data = {}) =>
  dispatchCustomEvent('related_articles_link_click', data);

export const dispatchPaymentFormLoaded = (data = {}) =>
  dispatchCustomEvent('payment_form_loaded', data);

export const dispatchPaymentDetailsSuccess = (data = {}) =>
  dispatchCustomEvent('payment_details_success', data);

export const dispatchPaymentDetailsFailed = (data = {}) =>
  dispatchCustomEvent('payment_details_failed', data);

export const dispatchCommentSubmitted = (data = {}) =>
  dispatchCustomEvent('comment', data);

export const dispatchShowCommentsClick = (data = {}) =>
  dispatchCustomEvent('show_comments_click', data);

export const dispatchFlagCommentClick = (data = {}) =>
  dispatchCustomEvent('flag_comment_click', data);

export const dispatchVoteCommentClick = (data = {}) =>
  dispatchCustomEvent('vote_comment_click', data);

export const dispatchLoadMoreComments = (data = {}) =>
  dispatchCustomEvent('load_more_comments', data);

export const dispatchIpTabClick = (data = {}) =>
  dispatchCustomEvent('ip_tab_click', data);

export const dispatchIpEBookClick = (data = {}) =>
  dispatchCustomEvent('ip_ebook_click', data);

export const dispatchIpEventClick = (data = {}) =>
  dispatchCustomEvent('ip_event_click', data);

export const dispatchPushNotificationShown = (data = {}) =>
  dispatchCustomEvent('push_notification_shown', data);

export const dispatchPushNotificationOptIn = (data = {}) =>
  dispatchCustomEvent('push_notification_optin', data);

export const dispatchPushNotificationDismiss = (data = {}) =>
  dispatchCustomEvent('push_notification_dismiss', data);

export const dispatchLiveBlogBulletedListClick = (data = {}) =>
  dispatchCustomEvent('liveblog_bulleted_list_click', data);

export const dispatchArticleBulletedListClick = (data = {}) =>
  dispatchCustomEvent('article_bulleted_list_click', data);

export const dispatchBlogPostArticleLinkClick = (data = {}) =>
  dispatchCustomEvent('blog_post_article_link_click', data);

export const dispatchRegistrationWallClick = (data = {}) =>
  dispatchCustomEvent('registration_wall_click', data);

export const dispatchMostWatchedLoad = (data = {}) =>
  dispatchCustomEvent('most_watched_load', data);

export const dispatchMostWatchedClick = (data = {}) =>
  dispatchCustomEvent('most_watched_click', data);

export const dispatchContextualInlineClick = (data = {}) =>
  dispatchCustomEvent('contextual_inline_click', data);

export const dispatchContextualInlineTopicClick = (data = {}) =>
  dispatchCustomEvent('contextual_inline_topic_click', data);

export const dispatchContextualInlineNonTopicClick = (data = {}) =>
  dispatchCustomEvent('contextual_inline_non_topic_click', data);

export const dispatchLiveBlogKeyPointsClick = (data = {}) =>
  dispatchCustomEvent('liveblog_key_points_click', data);

export const dispatchSellingPageLoaded = (data = {}) =>
  dispatchCustomEvent('selling_page_loaded', data);

export const dispatchMostCommentedSectionClick = (data = {}) =>
  dispatchCustomEvent('most_commented_section_click', data);

export const dispatchUpdateComponentsList = (data = {}) =>
  dispatchCustomEvent('update_components_list', data);

export const dispatchTopicListItemClick = (data = {}) =>
  dispatchCustomEvent('article_topic_tag_click', data);

export const dispatchAdBlockDetected = () =>
  dispatchCustomEvent('adblock_detected');

export const dispatchExperienceExecuted = (data = {}) =>
  dispatchCustomEvent('experience_executed', data);

export const dispatchVoucherTickerLinkClick = (data = {}) =>
  dispatchCustomEvent('voucher_ticker_link_click', data);

export const dispatchVoucherTickerArrowClick = (data = {}) =>
  dispatchCustomEvent('voucher_ticker_arrow_click', data);

export const dispatchBurgerMenuClick = () =>
  dispatchCustomEvent('burger_menu_click');

export const dispatchEditionLinkClick = (data = {}) =>
  dispatchCustomEvent('edition_link_click', data);

export const dispatchTempLinkClick = (data = {}) =>
  dispatchCustomEvent('temporary_link_click', data);

export const dispatchAffiliateLinkClick = (data = {}) =>
  dispatchCustomEvent('affiliate_link_click', data);

export const dispatchWebpushSignupClick = () =>
  dispatchCustomEvent('webpush_signup_click');

export const dispatchNotificationPromptAccept = () =>
  dispatchCustomEvent('notification_prompt_accept');

export const dispatchNotificationPromptDismiss = () =>
  dispatchCustomEvent('notification_prompt_dismiss');

export const dispatchNotificationPromptLoad = (data = {}) =>
  dispatchCustomEvent('notification_prompt_load', data);

// Price comparison

export const dispatchPriceComparisonListBuyNowClick = (data = {}) =>
  dispatchCustomEvent('price_comparison_list_buy_now_click', data);

export const dispatchPriceComparisonButtonsBuyNowClick = (data = {}) =>
  dispatchCustomEvent('price_comparison_buttons_buy_now_click', data);

// Product carousel

export const dispatchProductCarouselLoaded = (data = {}) =>
  dispatchCustomEvent('product_comparison_carousel_load', data);

export const dispatchProductCarouselBuyNowClick = (data = {}) =>
  dispatchCustomEvent('product_carousel_buy_now_click', data);

export const dispatchProductCarouselReadReviewClick = (data = {}) =>
  dispatchCustomEvent('product_carousel_read_review_click', data);

// Product comparison

export const dispatchProductComparisonCheckboxClick = (data = {}) =>
  dispatchCustomEvent('product_comparison_checkbox_click', data);

export const dispatchProductComparisonModalOpen = (data = {}) =>
  dispatchCustomEvent('product_comparison_modal_open', data);

export const dispatchProductComparisonBuyNowClick = (data = {}) =>
  dispatchCustomEvent('product_comparison_modal_buy_now_click', data);

export const dispatchProductComparisonReadReviewClick = (data = {}) =>
  dispatchCustomEvent('product_comparison_modal_read_review_click', data);

// Cancellation

export const dispatchAccountOverviewTabMyDetailsClick = (data = {}) =>
  dispatchCustomEvent('account_overview_tab_my_details', data);

export const dispatchAccountOverviewTabChangePasswordClick = (data = {}) =>
  dispatchCustomEvent('account_overview_tab_change_password', data);

export const dispatchAccountOverviewTabPaymentAndBillingClick = (data = {}) =>
  dispatchCustomEvent('account_overview_tab_payments_and_billing', data);

export const dispatchAccountOverviewTabManageSubscriptionClick = (data = {}) =>
  dispatchCustomEvent('account_overview_tab_manage_subscription', data);

export const dispatchAccountCancellationBarrier1Click = (data = {}) =>
  dispatchCustomEvent('account_cancellation_barrier_1', data);

export const dispatchAccountCancellationBarrier2Click = (data = {}) =>
  dispatchCustomEvent('account_cancellation_barrier_2', data);

export const dispatchAccountCancellationKeepSubscriptionClick = (data = {}) =>
  dispatchCustomEvent('account_cancellation_keep_subscription', data);

export const dispatchAccountCancellationTakeThisOfferClick = (data = {}) =>
  dispatchCustomEvent('account_cancellation_take_this_offer', data);

export const dispatchAccountCancellationContinueToPaymentClick = (data = {}) =>
  dispatchCustomEvent('account_cancellation_continue_to_payment', data);

export const dispatchAccountCancellationReactivateSubscriptionClick = (
  data = {},
) => dispatchCustomEvent('account_cancellation_reactivate_subscription', data);

export const dispatchStageBarrier1Click = (data = {}) =>
  dispatchCustomEvent('stage_barrier_1', data);

export const dispatchStageBarrier2Click = (data = {}) =>
  dispatchCustomEvent('stage_barrier_2', data);

export const dispatchSupportNSCLinkClick = (data = {}) =>
  dispatchCustomEvent('support_nsc_link_click', data);

export const dispatchSupportNowEncoreClick = (data = {}) =>
  dispatchCustomEvent('support_now_encore_click', data);
