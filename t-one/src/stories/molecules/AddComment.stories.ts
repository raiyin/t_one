import type { Meta, StoryObj } from '@storybook/react';
import AddComment from '@components/molecules/AddComment';

const meta = {
    title: 't-one/molecules/AddComment',
    component: AddComment,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'dark' },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AddComment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        author: 'athor name',
        postId: 1,
        buttonAction: () => { }
    },
};
