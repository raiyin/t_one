import type { Meta, StoryObj } from '@storybook/react';
import FeatureItem from './FeatureItem';

const meta = {
    title: 't-one/molecules/FeatureItem',
    component: FeatureItem,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'dark' },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FeatureItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
    },
};
