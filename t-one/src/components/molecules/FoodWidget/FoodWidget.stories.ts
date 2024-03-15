import type { Meta, StoryObj } from '@storybook/react';
import FoodWidget from './FoodWidget';

const meta = {
    title: 't-one/molecules/FoodWidget',
    component: FoodWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FoodWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
    },
};
