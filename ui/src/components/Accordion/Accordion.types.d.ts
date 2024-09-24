import { ReactNode } from 'react';
type childrenType = ReactNode[] | string | number;
type section = {
    id: string;
    trigger: string;
    content: childrenType;
};
export interface AccordionProps {
    sections: section[];
    name?: string;
    className?: string;
    initialOpenIndex?: number | null;
}
export interface AccordionSectionProps {
    children: childrenType;
    isOpen?: boolean;
    onInteract?: (index: number) => void;
    id?: string;
    className?: string;
    trigger: string;
}
export {};
//# sourceMappingURL=Accordion.types.d.ts.map