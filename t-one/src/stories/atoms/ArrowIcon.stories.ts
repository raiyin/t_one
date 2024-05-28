import type { Meta, StoryObj } from '@storybook/react';
import ArrowIcon from '@components/atoms/ArrowIcon';
import { ArrowDirection } from '@types/ArrowProps';

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
        isEnable: true,
        direction: ArrowDirection.Back,
        onClick: () => { }
    },
};

export const UnselectedForth: Story = {
    args: {
        isEnable: false,
        direction: ArrowDirection.Forth,
        onClick: () => { }
    },
};
