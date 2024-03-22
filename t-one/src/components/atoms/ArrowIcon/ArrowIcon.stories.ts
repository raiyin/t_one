import type { Meta, StoryObj } from '@storybook/react';
import ArrowIcon from './ArrowIcon';
import { ArrowDirection } from '../../../types/ArrowProps';

const meta = {
    title: 't-one/atoms/ArrowIcon',
    component: ArrowIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ArrowIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectedBack: Story = {
    args: {
        isActive:true,
        direction: ArrowDirection.Back
    },
};

export const UnselectedForth: Story = {
    args: {
        isActive:false,
        direction: ArrowDirection.Forth
    },
};
