/**
 * Wraps a given component in an InlineContainer for use in RichText content
 * @param WrappedComponent A component with which to wrap in an InlineContainer
 * @returns An InlineContainer containing the given component
 */
declare function withInlineContainer<T extends object>(WrappedComponent: React.ComponentType<T>): (props: T) => import("react/jsx-runtime").JSX.Element;
export default withInlineContainer;
//# sourceMappingURL=InlineContainer.hoc.d.ts.map