import type { Meta, StoryObj } from '@storybook/react';
import LunchBlock from './LunchBlock';

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

export const Main: Story = {
    args: {}
};