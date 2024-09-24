export default SVGMock;
/**
 * We don't use webpack loader for jest so we use sequential id here to
 * eliminate the rendering error. svgUidDataAttribute.js won't work here.
 */
declare function SVGMock(props: any): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=svg.d.ts.map