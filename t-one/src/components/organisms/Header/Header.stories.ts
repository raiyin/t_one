import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta = {
    title: 't-one/oraganisms/Header',
    component: Header,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
    },
};
