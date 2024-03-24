import type { Meta, StoryObj } from '@storybook/react';
import Rating from './Rating';

const meta = {
    title: 't-one/atoms/Rating',
    component: Rating,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        rating: '4.8',
        startFirst: true
    },
};
