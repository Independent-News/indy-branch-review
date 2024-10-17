import { Rel, Target } from '../Button/Button.types';
export type BuyNowClickHandler = (productId: string, productName: string, price: string) => void;
export type ReadReviewClickHandler = (productId: string, productName: string, price: string) => void;
export type ProductSpec = {
    label: string;
    value: string | number | null;
};
export type Product = {
    anchorHref: string;
    anchorId: string;
    bestForPrefixed: string;
    id: string;
    prettyPrice: string;
    rating: number;
    title: string;
    vendorLink: string;
    rel?: Rel | `${Rel} ${Rel}`;
    target?: Target;
    image: ReactNode;
    endpoint: string;
    isExternal: boolean;
    productSpec: ProductSpec[];
    bestFor: string;
    isAvailable: boolean;
};
//# sourceMappingURL=types.d.ts.map