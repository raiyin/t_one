import type { Meta, StoryObj } from '@storybook/react';
import HeroTextBlock from './HeroTextBlock';

const meta = {
    title: 't-one/molecules/HeroTextBlock',
    component: HeroTextBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof HeroTextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
    },
};
