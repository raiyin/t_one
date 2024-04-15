import type { Meta, StoryObj } from '@storybook/react';
import List from '@components/atoms/List';

const meta = {
    title: 't-one/atoms/List',
    component: List,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        texts: [
            "Premium quality food is made with ingredients that are packed with essential vitamins, minerals.",
            "These foods promote overall wellness by support healthy digestion and boosting immunity"
        ]
    },
};
