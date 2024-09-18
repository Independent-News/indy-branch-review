import { default as React } from 'react';
export default interface Props {
    children: string | React.ReactNode | React.ReactNode[];
    badgeText?: string;
    className?: string;
}
