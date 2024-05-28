import type { Meta, StoryObj } from '@storybook/react';
import HashTag from '@components/atoms/HashTag';

const meta = {
    title: 't-one/atoms/HashTag',
    component: HashTag,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof HashTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
        text: '#history, #food',
        size: "small"
    },
};

export const Medium: Story = {
    args: {
        text: '#history, #food',
        size: "medium"
    },
};
