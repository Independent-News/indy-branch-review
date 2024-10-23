import { Product, ProductSpec } from '../types';
export declare class ProductBuilder {
    product: Product;
    anchorHref(anchorHref: string): this;
    bestFor(bestFor: string): this;
    bestForPrefixed(bestForPrefixed: string): this;
    endpoint(endpoint: string): this;
    anchorId(anchorId: string): this;
    isExternal(isExternal: boolean): this;
    isAvailable(isAvailable: boolean): this;
    id(id: string): this;
    image(image: ReactNode): this;
    prettyPrice(prettyPrice: string): this;
    productSpec(productSpec: ProductSpec[]): this;
    vendorLink(vendorLink: string): this;
    rating(rating: number): this;
    title(title: string): this;
    build(): Product;
}
//# sourceMappingURL=ProductBuilder.d.ts.map