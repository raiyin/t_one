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

export const MainSelected: Story = {
    args: {
        title:'Chicken Hell',
        status: 'On The Way',
        img_alt: 'img alt text',
        img_url: '../../../src/assets/images/pngs/food_image_1.png',
        time: '3:09 PM',
        selected: true
    },
};

export const MainNotSelected: Story = {
    args: {
        title:'Chicken Hell',
        status: 'On The Way',
        img_alt: 'img alt text',
        img_url: '../../../src/assets/images/pngs/food_image_1.png',
        time: '3:09 PM',
        selected: false
    },
};
