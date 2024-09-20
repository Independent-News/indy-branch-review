export type SymbolProps = {
    id: string;
    children: Children;
    viewBox: string;
};
export interface UseProps {
    className?: string;
    id: string;
    width: number;
    height: number;
}
export interface InlineProps extends UseProps {
    children: Children;
    viewBox: string;
}
export interface SvgProps extends InlineProps {
    isInline: boolean;
}
export type WrapperProps = {
    $width: number;
    $height: number;
};
//# sourceMappingURL=SVG.types.d.ts.map