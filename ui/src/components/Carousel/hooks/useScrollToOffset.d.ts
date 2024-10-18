import { RefObject } from 'react';
interface UseScrollToOffsetProps {
    root: RefObject<HTMLDivElement>;
    offsetKey: string;
}
/**
 * A custom hook to handle scroll position and persist it using sessionStorage.
 *
 * @param {Object} options
 * @param {React.RefObject} options.root - a React ref object pointing to the scrollable container.
 * @param {string} options.offsetKey - a string key to store the scroll position in sessionStorage.
 * @returns {Function[]} - an array containing the debounced handleScroll function.
 */
declare const useScrollToOffset: ({ root, offsetKey, }: UseScrollToOffsetProps) => [() => void];
export default useScrollToOffset;
//# sourceMappingURL=useScrollToOffset.d.ts.map