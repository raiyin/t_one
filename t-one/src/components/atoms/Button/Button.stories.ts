import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import ButtonType from '../../../types/ButtonProps';

const meta = {
    title: 't-one/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: "Get started",
        type: ButtonType.Primary
    },
};

export const Ghost: Story = {
    args: {
        text: "Go Pro",
        type: ButtonType.Ghost
    },
};
