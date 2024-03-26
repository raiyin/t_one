import type { Meta, StoryObj } from '@storybook/react';
import PurchaseTextBlock from './PurchaseTextBlock';

const meta = {
    title: 't-one/molecules/PurchaseTextBlock',
    component: PurchaseTextBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PurchaseTextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
    },
};
