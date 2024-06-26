import type { Meta, StoryObj } from '@storybook/react';
import HeroImage from '@components/molecules/HeroImage';

const meta = {
    title: 't-one/molecules/HeroImage',
    component: HeroImage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof HeroImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
    },
};
