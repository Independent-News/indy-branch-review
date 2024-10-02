import { ImageProps } from '../../Image/Image.types';
export type OnSubscribeStatusChange = (newsletterKey: string, isSubscribed: boolean) => unknown;
export default interface NewsletterCardProps {
    newsletterKey: string;
    title: string;
    descriptionShort: string;
    descriptionLong?: string;
    frequency: string;
    imageMobileSrc: string;
    imageTabletSrc?: string;
    isSubscribed: boolean;
    onSubscribeStatusChange: OnSubscribeStatusChange;
    onEnterKeyPress?: OnSubscribeStatusChange;
    children?: React.ReactNode;
    className?: string;
    tabIndex?: number;
}
export interface NewsletterCardImageProps extends ImageProps {
    src: string;
    alt: string;
    className?: string;
}
//# sourceMappingURL=NewsletterCard.types.d.ts.map