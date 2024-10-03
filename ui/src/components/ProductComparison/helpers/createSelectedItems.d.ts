import { Product } from '../../ProductComparisonCommon/types';
export declare function createSelectedItems(selectedItems: string[], products: Product[]): {
    productSpecs: import('../../ProductComparisonCommon/types').ProductSpec[];
    best: string;
    buyNow: import('../ProductComparison.types').BuyNow;
    id: string;
    image: ReactNode;
    originalPrice?: string;
    price: string;
    rating: number;
    readReview: import('../ProductComparison.types').Review;
    title: string;
}[];
//# sourceMappingURL=createSelectedItems.d.ts.map