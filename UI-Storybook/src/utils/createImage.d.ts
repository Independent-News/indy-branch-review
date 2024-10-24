/**
 * Create svg image data string with provided color and dimensions.
 * @param [red=0] - Red channel value (0-255).
 * @param [green=0] - Green channel value (0-255).
 * @param [blue=0] - Blue channel value (0-255).
 * @param [alpha=1] - Alpha channel value (0-1).
 * @param [ratio=[1, 1]] - Width and height ratio.
 * @returns SVG image data string.
 * @note for simplicity, assume the input is in rgba format
 */
declare const createImage: (red?: number, green?: number, blue?: number, alpha?: number, [width, height]?: [number, number]) => string;
/**
 * Generate SVG image data string from a string with provided opacity.
 * @param str - Input string.
 * @param [alpha=1] - Alpha channel value (0-1).
 * @returns SVG image data string.
 */
export declare const createImageFromString: (str?: string, alpha?: number) => string;
export default createImage;
//# sourceMappingURL=createImage.d.ts.map