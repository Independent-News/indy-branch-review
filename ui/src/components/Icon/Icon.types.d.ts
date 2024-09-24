import { SvgrProps } from '../../types/svgr.d';
import { SIZE_X_SMALL, SIZE_SMALL, SIZE_BASE, SIZE_LARGE } from './Icon.constants';
export type IconSizes = typeof SIZE_X_SMALL | typeof SIZE_SMALL | typeof SIZE_BASE | typeof SIZE_LARGE;
export interface IconProps {
    svg: SvgrProps;
    size?: IconSizes;
}
/**
 * A type for icons that have been configured through styled-components
 */
export type IconWithSVGProps = Omit<IconProps, 'svg'> & {
    svg?: IconProps['svg'];
};
//# sourceMappingURL=Icon.types.d.ts.map