import type { Meta, StoryObj } from '@storybook/react';
import LunchBlock from '@components/organisms/LunchBlock';

const meta = {
    title: 't-one/organisms/LunchBlock',
    component: LunchBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LunchBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};
