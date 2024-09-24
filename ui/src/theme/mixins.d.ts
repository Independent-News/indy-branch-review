import { RuleSet } from 'styled-components';
/**
 * CSS to fully hide elements of the page
 */
declare const hidden: RuleSet<object>;
/**
 * CSS to visually hide semantically necessary elements of the page
 */
declare const visuallyHidden: RuleSet<object>;
/**
 * CSS to apply an ellipsis to text that overflows its container
 */
declare const truncate: RuleSet<object>;
/**
 * Wraps provided declarations in a media query given a feature
 * @param {string} feature Feature to match against
 * @param {string} declarations CSS declarations to apply
 * @returns {string} CSS containing declarations wrapped in a media query
 */
declare function mq(feature: string, declarations: RuleSet<object>): RuleSet<object> | null;
/**
 * Returns CSS required to hide an element on the page
 * @param {string} [feature] Feature to match against to hide elements
 * @returns {string} CSS containing declarations wrapped in a media query
 */
declare function hiddenOn(feature: string): RuleSet<object> | null;
/**
 * Returns CSS required to visually hide an element on the page
 * @param {string} [feature] Feature to match against to hide elements
 * @returns {string} CSS containing declarations wrapped in a media query
 */
declare function visuallyHiddenOn(feature: string): RuleSet<object> | null;
declare const customScrollbar: RuleSet<object>;
/**
 * CSS to hide scrollbars across different browsers.
 * Note: This does not prevent scrolling, only hides the scrollbar UI.
 */
declare const hideScrollbar: RuleSet<object>;
/**
 * CSS to replicate animating an element to height: auto
 */
declare const transitionToDynamicHeight: RuleSet<{
    $isActive: boolean;
}>;
export { hidden, visuallyHidden, mq, hiddenOn, visuallyHiddenOn, customScrollbar, hideScrollbar, truncate, transitionToDynamicHeight, };
//# sourceMappingURL=mixins.d.ts.map