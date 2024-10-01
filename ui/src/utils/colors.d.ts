/**
 * Extracts the RGB values from a hex color
 * @param hex The hex value to extract the RGB values from
 * @returns An array of RGB values
 */
export declare const extractRGB: (hex?: string) => number[];
/**
 * Validates a hex color code
 * @param hex The hex value to validate
 * @returns True if the hex value is valid, false otherwise
 */
export declare const isValidHex: (hex: string) => boolean;
/**
 * Converts a hex color to rgba
 * @param hex The hex value to convert to rgba
 * @param alpha The alpha value to use
 * @param asFunction Whether or not to return the rgba as a function
 * @returns The rgba value in the form '{r} {g} {b} {alpha}' or
 * 'rgba({r}, {g}, {b}, {alpha})
 */
export declare function hex2rgba(hex: string, alpha?: number, asFunction?: boolean): string;
export declare function getLuma(value: string): number | null;
//# sourceMappingURL=colors.d.ts.map