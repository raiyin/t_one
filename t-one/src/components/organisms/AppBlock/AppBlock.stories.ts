import type { Meta, StoryObj } from '@storybook/react';
import AppBlock from './AppBlock';

const meta = {
    title: 't-one/organisms/AppBlock',
    component: AppBlock,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'dark' },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AppBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
    },
};
