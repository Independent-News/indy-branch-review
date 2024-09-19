import { default as FeaturedNewsletterProps } from './FeaturedNewsletter.types';
declare const _default: {
    title: string;
    component: (props: FeaturedNewsletterProps) => import("react/jsx-runtime").JSX.Element;
    render: (args: FeaturedNewsletterProps) => import("react/jsx-runtime").JSX.Element;
};
export default _default;
export declare const Default: {
    args: FeaturedNewsletterProps;
};
export declare const PremiumFeaturedNewsletter: {
    title: string;
    args: {
        isPremium: boolean;
        title: string;
        standfirst: string;
        author: string;
        frequency: string;
        image: string;
        isSubscribed?: boolean;
        onSubscribe: () => void;
        onUnsubscribe: () => void;
        onSampleClick: () => void;
    };
};
//# sourceMappingURL=FeaturedNewsletter.stories.d.ts.map