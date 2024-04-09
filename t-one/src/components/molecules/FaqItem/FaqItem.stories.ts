import type { Meta, StoryObj } from '@storybook/react';
import FaqItem from './FaqItem';

const meta = {
    title: 't-one/molecules/FaqItem',
    component: FaqItem,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'dark' },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FaqItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Expanded: Story = {
    args: {
        answer: 'You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?',
        quest: 'How long does delivery take?'
    },
};

export const Collapsed: Story = {
    args: {
        answer: 'You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?',
        quest: 'How long does delivery take?'
    },
};
