import { GALLERY, IMAGE } from '#app/constants/heroType';
import { SECTION_PATH_NEWS } from '#app/constants/sectionPaths';

export default () => {
  const isNewsSectionOrSubSection =
    location.pathname.includes(SECTION_PATH_NEWS);
  const articleHeroType = window.JSGlobals?.article?.heroType ?? '';
  const isImageOrGalleryHero = [IMAGE, GALLERY].includes(articleHeroType);
  return isImageOrGalleryHero && isNewsSectionOrSubSection;
};
