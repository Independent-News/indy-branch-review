import { ReactNode } from 'react';
export type Author = {
    name: string;
    path: string;
};
interface DefaultProps {
    biography?: string;
    image?: ReactNode;
}
export interface AuthorHighlightProps extends DefaultProps {
    authors: Author[];
    className?: string;
}
export interface AuthorProps extends DefaultProps {
    author: Author;
}
export interface AuthorsProps extends DefaultProps {
    authors: Author[];
}
export interface CardProps extends DefaultProps {
    children: ReactNode;
}
export interface AuthorsWithBioProps {
    authors: Author[];
    biography?: string;
}
export {};
//# sourceMappingURL=AuthorHighlight.types.d.ts.map