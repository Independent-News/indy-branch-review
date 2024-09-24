import { default as Props } from '../Base/SubscriptionPricingCard.types';
import { default as PricingDetailsProps } from '../PricingDetails/PricingDetails.types';
export default interface WithDetailsAndRadioButtonProps extends Omit<Props, 'children'>, PricingDetailsProps {
    isSelected?: boolean;
    inputId: string;
    inputValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => unknown;
}
//# sourceMappingURL=WithDetailsAndRadioButton.types.d.ts.map