import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import WidgetTitle from './WidgetTitle';
import LinkLocation from '@types/LinkLocation';

const meta = {
    title: 't-one/WidgetTitle',
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
