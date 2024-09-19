interface UseCaptionHeightProps {
    itemCount: number;
}
interface UseCaptionHeighReturnValue {
    handleCaptionRef: (index: number) => (element: HTMLDivElement | null) => void;
    captionHeight: number;
}
declare const useCaptionHeight: ({ itemCount, }: UseCaptionHeightProps) => UseCaptionHeighReturnValue;
export default useCaptionHeight;
//# sourceMappingURL=useCaptionHeight.d.ts.map