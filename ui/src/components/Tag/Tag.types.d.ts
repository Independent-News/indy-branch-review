import { SIZE_SMALL, SIZE_BASE, SIZE_LARGE, VARIANT_BASE, VARIANT_EXPANDED, AS_A, AS_P, AS_SPAN, AS_H1, AS_H2, AS_H3, AS_H4, AS_H5 } from './Tag.constants';
export type TagSizes = typeof SIZE_SMALL | typeof SIZE_BASE | typeof SIZE_LARGE;
export type TagVariants = typeof VARIANT_BASE | typeof VARIANT_EXPANDED;
type TagAs = typeof AS_A | typeof AS_P | typeof AS_SPAN | typeof AS_H1 | typeof AS_H2 | typeof AS_H3 | typeof AS_H4 | typeof AS_H5;
export interface TagProps {
    children: Children;
    /** The size of the tag */
    size?: TagSizes;
    /** The element to create the tag from */
    as?: TagAs;
    /** Rendered with increased kerning */
    isExpanded?: boolean;
}
export interface WrapperProps {
    $size: TagSizes;
    $variant: TagVariants;
}
export {};
//# sourceMappingURL=Tag.types.d.ts.map