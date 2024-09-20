import { Meta, StoryObj } from '@storybook/react';
import { FC } from 'react';
import { default as ProductComparison } from './ProductComparison';
declare const meta: Meta<typeof ProductComparison>;
export default meta;
declare const ComparisonContainer: FC<{
    children: ReactNode;
}>;
type Story = StoryObj<typeof ComparisonContainer>;
export declare const Base: Story;
//# sourceMappingURL=ProductComparison.stories.d.ts.map