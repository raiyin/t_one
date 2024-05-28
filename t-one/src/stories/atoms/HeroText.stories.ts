import type { Meta, StoryObj } from '@storybook/react';
import HeroText from '@components/atoms/HeroText';

const meta = {
    title: 't-one/atoms/HeroText',
    component: HeroText,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof HeroText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        text_main: "EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early.",
        text_bonus: 'Get a $20 bonus.'
    },
};
