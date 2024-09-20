import { LAYOUT_RESPONSIVE, LAYOUT_FIXED, LAYOUT_FILL } from './Image.constants';
type Layout = typeof LAYOUT_RESPONSIVE | typeof LAYOUT_FIXED | typeof LAYOUT_FILL;
export interface ImageProps {
    layout?: Layout;
    height?: number;
    width?: number;
    [key: string]: unknown;
}
export interface LayoutStylesProps {
    $layout: Layout;
    $width?: number;
    $height?: number;
}
export interface StyledImageProps extends LayoutStylesProps {
    src: string;
}
export {};
//# sourceMappingURL=Image.types.d.ts.map