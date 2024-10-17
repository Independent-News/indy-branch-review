export default useVisibleIndexes;
/**
 * useVisibleIndexes
 * This is a custom hook that uses the IntersectionObserver API to determine
 * whether refs are visible or not.
 *
 * @param {Object} options
 * @param {Array<React.RefObject>} options.nodes - an array of refs to observe
 * @param {React.RefObject} options.root - the ref of the root element
 *
 * @returns {Array<boolean>} visibleIndexes - an array of booleans that indicate whether the items are visible or not
 */
declare function useVisibleIndexes({ nodes, root }: {
    nodes: Array<import('react').RefObject<any>>;
    root: import('react').RefObject<any>;
}): Array<boolean>;
//# sourceMappingURL=useVisibleIndexes.d.ts.map