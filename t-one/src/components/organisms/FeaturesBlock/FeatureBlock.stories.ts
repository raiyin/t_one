import type { Meta, StoryObj } from '@storybook/react';
import FeatureBlock from './FeatureBlock';

const meta = {
    title: 't-one/organisms/FeatureBlock',
    component: FeatureBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FeatureBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
    },
};
