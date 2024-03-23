import type { Meta, StoryObj } from '@storybook/react';
import CommentWidget from './CommentWidget';

const meta = {
    title: 't-one/molecules/CommentWidget',
    component: CommentWidget,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'dark' },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CommentWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainSelected: Story = {
    args: {
        user_handle:'@omottley2h',
        comment: 'I cannot believe how I found you, this is so pretty.',
    },
};

export const MainUnselected: Story = {
    args: {
        user_handle:'@omottley2h',
        comment: 'I cannot believe how I found you, this is so pretty.',
    },
};
