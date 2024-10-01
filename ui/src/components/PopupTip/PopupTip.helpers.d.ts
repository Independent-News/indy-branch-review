import { RefObject } from 'react';
export declare function calculateTriggerClass(show: boolean, orientation: string): "" | "open above" | "open below";
type PositionAndOrientation = [number, number, string];
export declare const calculatePosition: (triggerRect: DOMRect, bodyRect: DOMRect, viewportWidth: number, viewportHeight: number) => PositionAndOrientation;
export declare const NULL_DOM_RECT: {
    top: number;
    bottom: number;
    left: number;
    right: number;
    width: number;
    height: number;
};
export declare function getBB(ref: RefObject<Element>): DOMRect;
export {};
//# sourceMappingURL=PopupTip.helpers.d.ts.map