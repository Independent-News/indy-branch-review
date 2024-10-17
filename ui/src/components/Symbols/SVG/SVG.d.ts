import { SvgProps, SymbolProps } from './SVG.types';
/**
 * This component is a simple abstraction which allows for the rendering of an
 * SVG as 'inline' or as a 'use' reference via a flag.
 */
export declare const SVG: ({ isInline, children, ...rest }: SvgProps) => import("react/jsx-runtime").JSX.Element;
/**
 * This component is the symbol definition which is  included in the symbols
 * drop and referenced by <Use />
 */
export declare const Symbol: ({ children, id, viewBox }: SymbolProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SVG.d.ts.map