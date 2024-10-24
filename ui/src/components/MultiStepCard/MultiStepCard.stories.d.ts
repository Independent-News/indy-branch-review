import { default as MultiStepCardProps } from './MultiStepCard.types';
declare const _default: {
    title: string;
    component: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<Omit<MultiStepCardProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | import('react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('react').RefObject<HTMLDivElement> | null | undefined;
    }, never>> & string & Omit<import('react').ForwardRefExoticComponent<MultiStepCardProps & import('react').RefAttributes<HTMLDivElement>>, keyof import('react').Component<any, {}, any>>;
};
export default _default;
export declare const Default: {
    args: {
        currentStep: string;
        title: string;
        description: string;
        isCardActive: boolean;
        children: string;
    };
};
export declare const Active: {
    args: {
        isCardActive: boolean;
        currentStep: string;
        title: string;
        description: string;
        children: string;
    };
};
export declare const WithBackToPreviousStep: {
    args: {
        currentStep: string;
        goBackToPreviousStep: import("react/jsx-runtime").JSX.Element;
        title: string;
        description: string;
        isCardActive: boolean;
        children: string;
    };
    render: (args: MultiStepCardProps) => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=MultiStepCard.stories.d.ts.map