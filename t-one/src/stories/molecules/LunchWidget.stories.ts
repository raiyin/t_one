import type { Meta, StoryObj } from '@storybook/react';
import LunchWidget from '@components/molecules/LunchWidget';

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

export const Normal: Story = {
    args: {
        id: 1,
        name: 'pizza',
        tags: ['#food', '#lunch'],
        rating: 5,
        prepTimeMinutes: 34,
        cookTimeMinutes: 23,
        image: 'https://cdn.dummyjson.com/recipe-images/11.webp'
    },
};
