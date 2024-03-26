import type { Meta, StoryObj } from '@storybook/react';
import FaqBlock from './FaqBlock';

const meta = {
    title: 't-one/organisms/FaqBlock',
    component: FaqBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FaqBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
    },
};
