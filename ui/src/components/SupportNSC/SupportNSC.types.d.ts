export interface SupportNSCProps {
    title?: React.ReactNode;
    collapsedContent?: React.ReactNode;
    link?: {
        url: string;
        copy: string;
        trackingCallback?: (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>, trackingData: {
            url: string;
            copy: string;
        }) => void;
    };
    icons?: React.ReactNode;
}
export type DropdownTriggerProps = {
    isOpen: boolean;
    copy: string;
    className?: string;
    testId?: string;
    onInteract: () => void;
};
//# sourceMappingURL=SupportNSC.types.d.ts.map