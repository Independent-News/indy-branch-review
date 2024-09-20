import { default as NewsletterProps } from './Newsletter.types';
declare const _default: {
    title: string;
    render: (args: NewsletterProps) => import("react/jsx-runtime").JSX.Element;
};
export default _default;
export declare const Default: {
    args: NewsletterProps;
};
export declare const PremiumNewsletter: {
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
//# sourceMappingURL=Newsletter.stories.d.ts.map