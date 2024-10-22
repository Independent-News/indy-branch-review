interface NewsletterProps {
    title: string;
    standfirst: string;
    author: string;
    frequency: string;
    image: string;
    isSubscribed?: boolean;
    isPremium?: boolean;
    isSignedUp?: boolean;
    onSubscribe: () => void;
    onUnsubscribe: () => void;
    onSampleClick?: () => void;
}
export default NewsletterProps;
//# sourceMappingURL=Newsletter.types.d.ts.map