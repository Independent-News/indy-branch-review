import { MutableRefObject } from 'react';
interface UseSimpleSliderProps {
    initialIndex?: number;
    autoPlayInterval?: number;
}
interface UseSimpleSliderReturnValue {
    sliderRef: MutableRefObject<HTMLUListElement | null>;
    currentIndex: number;
    handlePrev: () => void;
    handleNext: () => void;
}
declare const useSimpleSlider: ({ initialIndex, autoPlayInterval, }?: UseSimpleSliderProps) => UseSimpleSliderReturnValue;
export default useSimpleSlider;
//# sourceMappingURL=useSimpleSlider.d.ts.map