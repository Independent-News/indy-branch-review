import { DefaultTheme } from 'styled-components';
import { InputState } from './Input.types';
export declare const getBorderStyle: (theme: DefaultTheme, state: InputState, type: "focused" | "inactive") => string;
export declare const BaseInput: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('react').DetailedHTMLProps<import('react').InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, never>> & string;
export declare const Wrapper: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const Label: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('react').DetailedHTMLProps<import('react').LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, never>> & string;
export declare const RequiredMarker: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>> & string;
export declare const HelpText: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>> & string;
export declare const InputWrapper: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $state: InputState;
}>> & string;
export declare const ErrorWrapper: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ErrorMessage: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ErrorIcon: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../Icon').IconProps, never>> & string & Omit<import('react').FC<import('../../Icon').IconProps>, keyof import('react').Component<any, {}, any>>;
//# sourceMappingURL=Input.styles.d.ts.map