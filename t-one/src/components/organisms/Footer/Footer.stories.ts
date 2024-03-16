import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

const meta = {
    title: 't-one/organisms/Footer',
    component: Footer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
    },
};
