import { IconProps } from '../Icon';
export interface Feature {
    icon?: IconProps['svg'];
    iconSize?: IconProps['size'];
    feature: string | React.ReactNode;
}
export default interface FeatureListProps {
    features: Feature[];
    className?: string;
}
//# sourceMappingURL=FeatureList.types.d.ts.map