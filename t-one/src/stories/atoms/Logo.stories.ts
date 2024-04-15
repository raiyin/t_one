import type { Meta, StoryObj } from '@storybook/react';
import Logo from '@components/atoms/Logo';

const meta = {
    title: 't-one/atoms/Logo',
    component: Logo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main_30: Story = {
    args: {
        image_size: 30,
        font_size: 30
    },
};

export const Main_50: Story = {
    args: {
        image_size: 50,
        font_size: 50
    },
};
