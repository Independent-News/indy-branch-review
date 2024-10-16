import { laptop } from '@indy/ui/breakPoints';

import { CLASS_NOTIFICATION_PROMPT } from '#app/constants/classNames';
import { HERO_TYPE_VIDEO } from '#app/constants/heroType';

import * as thisModule from './shouldRenderPushPrimerOnNewsArticles';

export const hasPushPrimerRenderedOnNewsSection = () =>
  !!document.querySelector(`.${CLASS_NOTIFICATION_PROMPT}`);

export const isVideoArticle = (articleHeroType: string) =>
  articleHeroType === HERO_TYPE_VIDEO;

export const isLaptop = () =>
  window.matchMedia(`(min-width: ${laptop}px)`).matches;

export const grabArticleHeroType = () =>
  window.JSGlobals?.article?.heroType ?? '';

export default () => {
  const isNewsSection = thisModule.hasPushPrimerRenderedOnNewsSection();
  if (!isNewsSection) {
    return false;
  }
  const articleHeroType = thisModule.grabArticleHeroType();
  const isVideoArticleType = thisModule.isVideoArticle(articleHeroType);
  const shouldRenderForImageArticles = true;
  if (isVideoArticleType) {
    return thisModule.isLaptop();
  }
  return shouldRenderForImageArticles;
};
