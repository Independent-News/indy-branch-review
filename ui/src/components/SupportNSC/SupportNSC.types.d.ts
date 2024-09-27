export interface SupportNSCProps {
    title?: React.ReactNode;
    collapsedContent?: React.ReactNode;
    author?: {
        name: string;
        copy: string;
        imageUrl: string;
    };
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
//# sourceMappingURL=SupportNSC.types.d.ts.map