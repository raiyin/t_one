import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import ButtonType from '../../../types/ButtonProps';
import { ArrowDirection } from '../../../types/ArrowProps';

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

export const PrimaryForth: Story = {
    args: {
        text: "Get started",
        type: ButtonType.Primary,
        needArrow: true,
        direction: ArrowDirection.Forth,
        onClick: () => { }
    },
};

export const GhostBack: Story = {
    args: {
        text: "Go Pro",
        type: ButtonType.Ghost,
        needArrow: true,
        direction: ArrowDirection.Back,
        onClick: () => { }
    },
};
