interface FeaturedNewsletterProps {
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
export default FeaturedNewsletterProps;
//# sourceMappingURL=FeaturedNewsletter.types.d.ts.map