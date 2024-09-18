import { IconProps } from '../../Icon';
export default interface FeatureListItemProps {
    icon?: IconProps['svg'];
    iconSize?: IconProps['size'];
    children: Children;
    className?: string;
}
