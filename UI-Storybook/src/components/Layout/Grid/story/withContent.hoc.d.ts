import { FC } from 'react';
import { ColumnProps } from '../Grid.types';
interface ColumnWithContentProps extends ColumnProps {
    children?: ReactNode;
}
/**
 * A higher order component that extracts the grid props and renders a table as
 * the content to a MockContent block. This is purely for storybook purposes.
 */
declare const withContent: (ColumnWithContent: FC<ColumnProps>, renderLabel?: (props: ColumnWithContentProps) => import("react/jsx-runtime").JSX.Element) => (props: ColumnWithContentProps) => import("react/jsx-runtime").JSX.Element;
export default withContent;
//# sourceMappingURL=withContent.hoc.d.ts.map