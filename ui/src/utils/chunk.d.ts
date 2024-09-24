/**
 * Splits an array of items into chunks of size n.
 *
 * @param items - The array of items to split.
 * @param n - The size of each chunk.
 * @returns An array of arrays, where each inner array contains up to n items.
 * @throws An error if items is not an array, n is not a number, or n is not a positive integer.
 *
 * @example
 * chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5], 3) // [[1, 2, 3], [4, 5]]
 */
declare const chunk: <T>(items: T[], n: number) => T[][];
export default chunk;
//# sourceMappingURL=chunk.d.ts.map