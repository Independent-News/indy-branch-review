import { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid.styles';
declare const meta: Meta<typeof Grid>;
export default meta;
type DefaultStory = StoryObj<typeof Grid>;
/**
 * The simplest grid you can make just consists of a single row with a few
 * columns.
 *
 * The grid width will be shared out evenly between the columns.
 *
 * When there are more columns that the maximum number of columns for a device
 * then the columns will wrap onto the next line.
 *
 * A <Grid /> can contain one or more <Row />, which in turn can contain
 * one or more <Column />.
 */
export declare const Columns: DefaultStory;
/**
 * It is possible to specify the number of columns a column should span for each
 * device. This is done by passing a config object via the `span` prop.
 *
 * It is important to note that the number of columns changes for each device
 * and so it is likely that the `span` value will need to be reset for each
 * device.
 */
export declare const ColumnsWithSpan: DefaultStory;
/**
 * Columns can be offset within the `<Grid />`. This is done by passing a config
 * object via the `offset` prop.
 *
 * Bear in mind that it is possible to offset a column by more than the maximum
 * number of columns for the `<Grid />`, therefore pushing it onto a new row.
 */
export declare const ColumnsWithOffset: DefaultStory;
/**
 * The `<OffGrid />` containers can provide some basic means of interacting with
 * the grid system for inline content.
 *
 * When placed within a `<Column />` amongst long-form content the `<OffGrid />`
 * will span edge to edge of the `<Grid />`, regardless of any offset placed on
 * the parent `<Column />`.
 *
 * The `<OffGrid />` can also be used to inset content from the left or right by
 * passing an `align` prop.
 *
 * The assumption is that the offset will be equal on both sides of the grid
 * e.g. if the grid is 12 columns wide and the offset of the column is 1 then
 * the span of the column will be 10.
 */
export declare const OffGridColumns: DefaultStory;
//# sourceMappingURL=Grid.stories.d.ts.map