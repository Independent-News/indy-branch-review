import { Meta, StoryObj } from '@storybook/react';
import { MediaPlusFlushCaption, MediaPlusPaddedCaption, MediaPlusCaptionForHero, MediaPlusCaptionForParallax, MediaPlusCaptionForSlider } from './MediaPlusCaption';
declare const MediaPlusCaption: () => null;
declare const meta: Meta<typeof MediaPlusCaption>;
export default meta;
export declare const Flush: StoryObj<typeof MediaPlusFlushCaption>;
export declare const Padded: StoryObj<typeof MediaPlusPaddedCaption>;
/**
 * This variant is for hero caption e.g. in an article header
 * where video spans the full width of the screen on mobile and tablet devices
 */
export declare const ForHero: StoryObj<typeof MediaPlusCaptionForHero>;
/**
 * This variant is for caption e.g. in an article header for signed in subscribers
 * where the hero image is parallaxed
 */
export declare const ForParallax: StoryObj<typeof MediaPlusCaptionForParallax>;
/**
 * This variant is for use wherever a ref needs attaching to the caption e.g. in
 * a slider where the height of the caption needs to be controlled
 */
export declare const ForSlider: StoryObj<typeof MediaPlusCaptionForSlider>;
//# sourceMappingURL=MediaPlusCaption.stories.d.ts.map