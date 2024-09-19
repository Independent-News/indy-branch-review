/**
 * A custom hook which scrolls the focused element into view inside a given
 * container.
 *
 * @param {Object} options
 * @param {React.RefObject} options.root - the ref of the root element
 * @param {string} options.behavior - the scroll behavior
 * @param {string} options.block - the scroll block
 * @param {string} options.inline - the scroll inline
 * @todo there is sometimes a jump in the page when the buttons are clicked. Not
 * sure if this is the cause.
 */
type Props = {
    root: React.RefObject<HTMLElement>;
    behavior: ScrollBehavior;
    block: ScrollLogicalPosition;
    inline: ScrollLogicalPosition;
};
declare const useScrollToFocusedElement: ({ root, behavior, block, inline, }: Props) => void;
export default useScrollToFocusedElement;
//# sourceMappingURL=useScrollToFocusedElement.d.ts.map