import { IconWithSVGProps } from '../Icon';
import { VARIANT_DEFAULT, VARIANT_ERROR, VARIANT_SUCCESS } from './MessageBanner.constants';
export type Variant = typeof VARIANT_DEFAULT | typeof VARIANT_SUCCESS | typeof VARIANT_ERROR;
export interface Props {
    messageTimeout?: number;
    className?: string;
    children: Children;
    variant?: Variant;
}
export type StyledIconProps = IconWithSVGProps & {
    $variant: Variant;
};
//# sourceMappingURL=MessageBanner.types.d.ts.map