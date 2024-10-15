import { IconProps, IconSizes } from '../Icon';
import { APPEARANCE_BADGE, APPEARANCE_PLAIN, VARIANT_BADGE, VARIANT_PLAIN, VARIANT_PRIDE } from './Logo.constants';
export type VariantType = typeof VARIANT_BADGE | typeof VARIANT_PLAIN | typeof VARIANT_PRIDE;
export type AppearanceType = typeof APPEARANCE_BADGE | typeof APPEARANCE_PLAIN;
export type LogoProps = {
    className?: string;
    variant: VariantType;
};
export type WrapperProps = Omit<IconProps, 'size'> & {
    className?: string;
    children?: Children;
    size?: IconSizes;
    $appearance: AppearanceType;
};
//# sourceMappingURL=Logo.types.d.ts.map