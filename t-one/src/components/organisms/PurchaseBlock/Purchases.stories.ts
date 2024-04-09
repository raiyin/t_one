import type { Meta, StoryObj } from '@storybook/react';
import PurchasesBlock from './PurchasesBlock';

const meta = {
    title: 't-one/organisms/PurchasesBlock',
    component: PurchasesBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PurchasesBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {}
};
