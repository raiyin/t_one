import type { Meta, StoryObj } from '@storybook/react';
import HashTag from './HashTag';

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

export const MainSelected: Story = {
    args: {
        text:'#history, #food',
    },
};
