import { BuyNow, Item, Review, Specs } from '../../ProductComparison/ProductComparison.types';
export declare class ItemBuilder {
    item: Item;
    best(best: string): this;
    buyNow(buyNow: BuyNow): this;
    id(id: string): this;
    image(image: ReactNode): this;
    originalPrice(originalPrice: string): this;
    price(price: string): this;
    productSpecs(productSpecs: Specs): this;
    rating(rating: number): this;
    readReview(readReview: Review): this;
    title(title: string): this;
    build(): Item;
}
//# sourceMappingURL=ItemBuilder.d.ts.map