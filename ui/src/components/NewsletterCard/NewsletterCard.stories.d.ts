import { default as NewsletterCardProps } from './Base/NewsletterCard.types';
import { default as NewsletterCardWithStateProps } from './WithState/NewsletterCardWithState.types';
declare const _default: {
    title: string;
    component: import('react').FC<NewsletterCardProps>;
    argTypes: {
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
        newsletterKey: {
            description: string;
            control: {
                type: string;
            };
        };
        title: {
            description: string;
            control: {
                type: string;
            };
        };
        frequency: {
            description: string;
            control: {
                type: string;
            };
        };
        descriptionShort: {
            description: string;
            control: {
                type: string;
            };
        };
        descriptionLong: {
            description: string;
            control: {
                type: string;
            };
        };
        imageMobileSrc: {
            description: string;
            control: {
                type: string;
            };
        };
        imageTabletSrc: {
            description: string;
            control: {
                type: string;
            };
        };
        isSubscribed: {
            description: string;
            control: {
                type: string;
            };
        };
        onSubscribeStatusChange: {
            description: string;
            control: {
                type: null;
            };
        };
        onEnterKeyPress: {
            description: string;
            control: {
                type: null;
            };
        };
    };
};
export default _default;
export declare const Default: {
    args: {
        newsletterKey: string;
        title: string;
        frequency: string;
        descriptionShort: string;
        isSubscribed: boolean;
        onSubscribeStatusChange: () => void;
    };
};
export declare const DefaultChecked: {
    args: {
        isSubscribed: boolean;
        newsletterKey: string;
        title: string;
        frequency: string;
        descriptionShort: string;
        onSubscribeStatusChange: () => void;
    };
};
export declare const Premium: {
    args: {
        newsletterKey: string;
        title: string;
        frequency: string;
        descriptionShort: string;
        isSubscribed: boolean;
        onSubscribeStatusChange: () => void;
    };
    render: (args: NewsletterCardProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const PremiumChecked: {
    args: {
        isSubscribed: boolean;
        newsletterKey: string;
        title: string;
        frequency: string;
        descriptionShort: string;
        onSubscribeStatusChange: () => void;
    };
    render: (args: NewsletterCardProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const PremiumWithState: {
    args: {
        newsletterKey: string;
        title: string;
        frequency: string;
        descriptionShort: string;
        isSubscribed: boolean;
        onSubscribeStatusChange: () => void;
    };
    render: (args: NewsletterCardWithStateProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const WithState: {
    args: {
        newsletterKey: string;
        title: string;
        frequency: string;
        descriptionShort: string;
        isSubscribed: boolean;
        onSubscribeStatusChange: () => void;
    };
    render: (args: NewsletterCardWithStateProps) => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=NewsletterCard.stories.d.ts.map