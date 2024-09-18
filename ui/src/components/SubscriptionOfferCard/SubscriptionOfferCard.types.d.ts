export default interface SubscriptionOfferCardProps {
    subscriptionType?: string;
    subscriptionLength: string;
    newPrice: string;
    oldPrice: string;
    terms: ReactNode;
    buttonProps?: {
        [key: string]: unknown;
    };
    className?: string;
}
