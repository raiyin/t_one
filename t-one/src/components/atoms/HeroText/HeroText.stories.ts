import type { Meta, StoryObj } from '@storybook/react';
import HeroText from './HeroText';

const meta = {
    title: 't-one/HeroText',
    component: HeroText,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof HeroText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
    args: {
        text: "EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a $20 bonus."
    },
};
