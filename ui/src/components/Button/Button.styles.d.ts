import { IconWithSVGProps } from '../Icon';
import { StyledButtonProps } from './Button.types';
export declare const baseStyles: import('styled-components').RuleSet<{
    $size?: string;
}>;
export declare const StyledButton: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('react').DetailedHTMLProps<import('react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, StyledButtonProps>> & string;
export declare const LaunchIcon: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<import('styled-components/dist/types').Substitute<import('../Icon').IconProps, import('../Icon').IconProps>, never>, IconWithSVGProps>> & string & Omit<{
    ({ svg, size, ...rest }: import('../Icon').IconProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, keyof import('react').Component<any, {}, any>>;
//# sourceMappingURL=Button.styles.d.ts.map