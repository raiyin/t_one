import type { Meta, StoryObj } from '@storybook/react';
import WrittenByBlock from './WrittenByBlock';

const meta = {
    title: 't-one/molecules/WrittenByBlock',
    component: WrittenByBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof WrittenByBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        userId: 1
    },
};
