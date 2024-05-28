import type { Meta, StoryObj } from '@storybook/react';
import AppTextBlock from '@components/molecules/AppTextBlock';

const meta = {
    title: 't-one/molecules/AppTextBlock',
    component: AppTextBlock,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'dark' },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AppTextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
    },
};
