import type { Meta, StoryObj } from '@storybook/react';
import Header from '@components/organisms/Header';

const meta = {
    title: 't-one/organisms/Header',
    component: Header,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
    },
};
