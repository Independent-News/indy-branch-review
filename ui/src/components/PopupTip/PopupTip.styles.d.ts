import { IconSizes } from '../Icon';
type TriggerProps = {
    $size: IconSizes;
};
export declare const StyledIcon: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../Icon').IconProps, never>> & string & Omit<{
    ({ svg, size, ...rest }: import('../Icon').IconProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, keyof import('react').Component<any, {}, any>>;
export declare const Wrapper: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
/**
 * @todo replace with IconButton
 */
export declare const Trigger: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TriggerProps>> & string;
export declare const Body: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export {};
//# sourceMappingURL=PopupTip.styles.d.ts.map