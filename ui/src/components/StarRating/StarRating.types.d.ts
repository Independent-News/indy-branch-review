import { SvgrProps } from '../../types/svgr.d';
import { SIZE_SMALL, SIZE_BASE, SIZES } from '../Icon/Icon.constants';
export type StarRatingSize = keyof Pick<typeof SIZES, typeof SIZE_SMALL | typeof SIZE_BASE>;
export interface StarRatingProps {
    className?: string;
    size?: StarRatingSize;
    /** Rating value out of 'total' */
    value?: number;
    /** Total potential number of stars */
    total?: number;
}
export type SvgMap = [SvgrProps, number][];
//# sourceMappingURL=StarRating.types.d.ts.map