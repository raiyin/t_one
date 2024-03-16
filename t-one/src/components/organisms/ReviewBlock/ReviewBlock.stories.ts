import type { Meta, StoryObj } from '@storybook/react';
import ReviewBlock from './ReviewBlock';

const meta = {
    title: 't-one/organisms/ReviewBlock',
    component: ReviewBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ReviewBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {}
};