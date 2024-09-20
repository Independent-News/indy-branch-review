declare function minHeight(val: number): string;
declare function minWidth(val: number): string;
declare function maxWidth(val: number): string;
/**
 * Sorts an object of devices based on their width values in ascending order.
 *
 * @param {Object} devices - An object containing device names as keys and corresponding width values as values.
 * @returns {Array} An array of key-value pairs representing devices, sorted in ascending order based on width.
 */
declare function sortSizesAscending(devices: {
    [str: string]: number;
}): [string, number][];
/**
 *
 * @param {object} breakPoints Key/value pairs of named breakpoints and widths
 * @returns Media query rules based on the breakpoint e.g.
 *   {
 *     deviceName: '(min-width: 100px)',
 *     maxDeviceName: '(max-width: 99px)',
 *     onlyDeviceName: '(min-width: 100px) and (max-width: 199px)',
 *     ...
 *   }
 */
declare function generateMediaQueryRules(devices: {
    [str: string]: number;
}): {
    [key: string]: string;
};
export { minHeight, minWidth, maxWidth, sortSizesAscending, generateMediaQueryRules, };
//# sourceMappingURL=mediaQueries.d.ts.map