import type { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';

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

export const Main: Story = {
    args: {
    },
};
