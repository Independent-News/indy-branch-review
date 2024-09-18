import { ReactNode } from 'react';
export type Item = {
    title: string;
    body: string;
};
export interface MediaPlusListProps {
    media: ReactNode;
    items: Item[];
}
