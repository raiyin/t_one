import type { Meta, StoryObj } from '@storybook/react';
import WidgetTitle from './WidgetTitle';

const meta = {
    title: 't-one/atoms/WidgetTitle',
    component: WidgetTitle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof WidgetTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
    },
};
