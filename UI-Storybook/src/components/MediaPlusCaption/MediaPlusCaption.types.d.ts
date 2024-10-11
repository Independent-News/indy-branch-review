import { Ref } from 'react';
export interface TextProps {
    caption?: string;
    copyright?: string;
}
export interface MediaPlusCaptionProps extends TextProps {
    children: Children;
    className?: string;
}
export interface MediaPlusCaptionForSliderProps extends MediaPlusCaptionProps {
    ref: Ref<HTMLDivElement>;
}
//# sourceMappingURL=MediaPlusCaption.types.d.ts.map