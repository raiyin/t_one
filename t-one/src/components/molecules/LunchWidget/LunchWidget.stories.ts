import type { Meta, StoryObj } from '@storybook/react';
import LunchWidget from './LunchWidget';

const meta = {
    title: 't-one/molecules/LunchWidget',
    component: LunchWidget,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'dark' },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LunchWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
    },
};
