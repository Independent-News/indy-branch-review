import { default as BaseProps } from './Base/SubscriptionPricingCard.types';
import { default as WithDetailsProps } from './WithDetails/SubscriptionPricingCardWithDetails.types';
import { default as WithDetailsAndRadioButtonProps } from './WithDetailsAndRadioButton/WithDetailsAndRadioButton.types';
import { default as WithDetailsAndSubscribeButtonProps } from './WithDetailsAndSubscribeButton/WithDetailsAndSubscribeButton.types';
declare const _default: {
    title: string;
    component: <T extends BaseProps>(args: T) => import("react/jsx-runtime").JSX.Element;
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
    };
};
export default _default;
export declare const Default: {
    args: {
        children: string;
    };
};
export declare const DefaultWithBadge: {
    args: {
        badgeText: string;
        children: string;
    };
    render: <T extends BaseProps>(args: T) => import("react/jsx-runtime").JSX.Element;
};
export declare const DefaultWithBadgeAndDetails: {
    args: {
        children: string;
        subscriptionLength: string;
        discountedPrice: string;
        normalPrice: string;
        continuedPrice: string;
        badgeText: string;
    };
    render: <T extends WithDetailsProps>(args: T) => import("react/jsx-runtime").JSX.Element;
};
export declare const DefaultWithBadgeAndDetailsAndSubscribeButton: {
    args: {
        callToActionText: string;
        children: string;
        subscriptionLength: string;
        discountedPrice: string;
        normalPrice: string;
        continuedPrice: string;
        badgeText: string;
    };
    render: <T extends WithDetailsAndSubscribeButtonProps>(args: T) => import("react/jsx-runtime").JSX.Element;
};
export declare const DefaultWithBadgeAndDetailsAndRadioButton: {
    args: {
        inputId: string;
        children: string;
        subscriptionLength: string;
        discountedPrice: string;
        normalPrice: string;
        continuedPrice: string;
        badgeText: string;
    };
    render: (args: WithDetailsAndRadioButtonProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const DefaultWithBadgeAndDetailsAndRadioButtonSelected: {
    args: {
        isSelected: boolean;
        inputId: string;
        children: string;
        subscriptionLength: string;
        discountedPrice: string;
        normalPrice: string;
        continuedPrice: string;
        badgeText: string;
    };
    render: (args: WithDetailsAndRadioButtonProps) => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=SubscriptionPricingCard.stories.d.ts.map