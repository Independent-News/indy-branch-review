import { GridProps, RowProps, ColumnProps, OffGridProps } from './Grid.types';
/**
 * Use the <OffGrid /> component to create a full-bleed container that spans the
 * full width of the grid. This must only be used within long-form content.
 *
 * This assumes that any offset applied to the parent <Column /> is equal to the
 * effective offset on the right hand side e.g. if the grid is 12 columns wide
 * and the column is offset by 1 then the total span of the column will be 10.
 */
export declare const OffGrid: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | import('react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('react').RefObject<HTMLDivElement> | null | undefined;
}, OffGridProps>> & string;
export declare const Column: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ColumnProps>> & string;
export declare const Row: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, RowProps>> & string;
export declare const Grid: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, GridProps>> & string;
//# sourceMappingURL=Grid.styles.d.ts.map