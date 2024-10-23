import { Target, Rel } from '../Button/Button.types';
import { SvgrProps } from '../../types/svgr.d';
import { Amenity, BookingData } from './Booking.types';
export declare const readReviewButtonLabel: (name: string) => string;
export declare const iconMap: {
    [key: string]: SvgrProps;
};
export declare class AmenityBuilder {
    amenity: Amenity;
    name(name: string): this;
    items(items: string[]): this;
    showTooltip(showTooltip: boolean): this;
    ref(ref: string): this;
    build(): Amenity;
}
export declare class BookingBuilder {
    booking: BookingData;
    id(id: string): this;
    name(name: string): this;
    price(price: string): this;
    amenities(amenities: Amenity[]): this;
    url(url: string): this;
    target(target: Target): this;
    rel(rel: Rel | `${Rel} ${Rel}`): this;
    reviewUrl(reviewUrl: string): this;
    build(): BookingData;
}
//# sourceMappingURL=Booking.helpers.d.ts.map