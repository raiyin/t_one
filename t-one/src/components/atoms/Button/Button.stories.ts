import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import ButtonType from '../../../types/ButtonProps';

const meta = {
    title: 't-one/atoms/Button',
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
        type: ButtonType.Primary,
        needArrow:true
    },
};

export const Ghost: Story = {
    args: {
        text: "Go Pro",
        type: ButtonType.Ghost,
        needArrow: false
    },
};
