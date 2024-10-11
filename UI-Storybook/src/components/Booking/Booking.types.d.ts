import { Target, Rel } from '../Button/Button.types';
export type Amenity = {
    ref: string;
    name: string;
    items: string[];
    showTooltip: boolean;
};
export type BookingData = {
    id: string;
    name: string;
    price: string;
    amenities: Amenity[];
    url: string;
    target: Target;
    rel: Rel | `${Rel} ${Rel}`;
    reviewUrl?: string;
    reviewUrlTarget?: Target;
    reviewUrlRel?: Rel | `${Rel} ${Rel}`;
};
export type BookingProps = BookingData;
//# sourceMappingURL=Booking.types.d.ts.map