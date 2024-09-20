/**
 * Converts an SVG string into a data URI.
 *
 * This function cleans the SVG string by removing unnecessary newlines and whitespace,
 * and then encodes it either using URI encoding or Base64 encoding based on the `useBase64` flag.
 *
 * @param svg - The SVG string to convert into a data URI.
 * @param useBase64 - A boolean flag indicating whether to encode the SVG as Base64 (default is false for URI encoding).
 * @returns The SVG as a data URI, either URI-encoded or Base64-encoded depending on the `useBase64` flag.
 */
declare const svgToDataUri: (svg: string, useBase64?: boolean) => string;
export default svgToDataUri;
//# sourceMappingURL=svgToDataUri.d.ts.map