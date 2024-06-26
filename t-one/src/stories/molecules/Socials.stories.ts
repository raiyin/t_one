import type { Meta, StoryObj } from '@storybook/react';
import Socials from '@components/molecules/Socials';

const meta = {
    title: 't-one/molecules/Socials',
    component: Socials,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Socials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
    },
};
