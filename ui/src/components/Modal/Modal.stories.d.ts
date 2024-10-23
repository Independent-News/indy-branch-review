import { PageSpecificProps } from './PageSpecific/ModalPageSpecific.types';
import { default as SuccessConfirmationModalProps } from './SuccessConfirmationModal/SuccessConfirmationModal.types';
declare const _default: {
    title: string;
    component: (props: import('./Base').ModalProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        isHidden: {
            description: string;
            control: {
                type: string;
            };
        };
        children: {
            description: string;
            options: string[];
            mapping: {
                Text: string;
                'Single Element': import("react/jsx-runtime").JSX.Element;
                'Multiple Elements': import("react/jsx-runtime").JSX.Element[];
            };
        };
        className: {
            description: string;
            control: {
                type: string;
            };
        };
        returnFocus: {
            description: string;
            control: {
                type: string;
            };
        };
        onBackgroundClick: {
            description: string;
            control: {
                type: string;
            };
        };
    };
    decorators: ((Story: import('react').FC) => import("react/jsx-runtime").JSX.Element)[];
};
export default _default;
export declare const Default: {
    args: {
        children: string;
        isHidden: boolean;
        returnFocus: string;
    };
};
export declare const PageSpecific: {
    args: {
        onEscapeKeyPress: () => void;
        children: string;
        isHidden: boolean;
        returnFocus: string;
    };
    render: (args: PageSpecificProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const SuccessConfirmation: {
    args: {
        onEscapeKeyPress: () => void;
        children: string;
        isHidden: boolean;
        returnFocus: string;
    };
    decorators: ((Story: import('react').FC) => import("react/jsx-runtime").JSX.Element)[];
    render: (args: SuccessConfirmationModalProps) => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=Modal.stories.d.ts.map