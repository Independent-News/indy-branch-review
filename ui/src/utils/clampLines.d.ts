export declare function sanitiseCssVar(value: string | number): string | number;
/**
 * In lieu of string pattern matching, this is a type alias for a CSS variable e.g. --var
 * @typedef CSSVar
 * @type {string}
 */
/**
 * Truncates text with an ellipsis when the number of lines is exceeded
 * @param {number | CSSVar} lines The number of lines to clamp to
 * @param {number | CSSVar | null} lineHeight The line height (only required if
 * fixedHeight is `true`)
 * @param {bool | CSSVar} fixedHeight Fix the height of the element. If `true`,
 * this will be calculated from the number of lines and the line height. If a
 * CSS variable is passed, this will be used as the height
 * @returns The CSS required to clamp the lines
 */
export default function clampLines(lines?: string | number, lineHeight?: string | number, fixedHeight?: boolean | string): import('styled-components').RuleSet<object>;
//# sourceMappingURL=clampLines.d.ts.map