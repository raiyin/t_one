import type { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';

const meta = {
    title: 't-one/atoms/Logo',
    component: Logo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
    },
};
