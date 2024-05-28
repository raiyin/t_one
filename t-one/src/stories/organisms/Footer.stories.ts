import type { Meta, StoryObj } from '@storybook/react';
import Footer from '@components/organisms/Footer';

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

export const Normal: Story = {
    args: {
    },
};
