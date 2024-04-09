import type { Meta, StoryObj } from '@storybook/react';
import Time from './Time';

const meta = {
    title: 't-one/atoms/Time',
    component: Time,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Time>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstManrope: Story = {
    args: {
        time: '3:05 PM',
        fontSize: 12,
        fontWeight: 600,
        lineHeight: 16,
        font: 'manrope'
    },
};

export const SecondPoppins: Story = {
    args: {
        time: '3:05 PM',
        fontSize: 22,
        fontWeight: 600,
        lineHeight: 22,
        font: 'poppins'
    },
};
