import type { Meta, StoryObj } from '@storybook/react';
import PostCard from './PostCard';

const meta = {
    title: 't-one/molecules/PostCard',
    component: PostCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
    },
};
