import type { Meta, StoryObj } from '@storybook/react';
import Time from './Time';

const meta = {
    title: 't-one/Time',
    component: Time,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Time>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        time: '3:05 PM'
    },
};
