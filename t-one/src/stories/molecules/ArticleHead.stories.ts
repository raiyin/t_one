import type { Meta, StoryObj } from '@storybook/react';
import ArticleHead from '@components/molecules/ArticleHead';

const meta = {
    title: 't-one/molecules/ArticleHead',
    component: ArticleHead,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'dark' },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleHead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        userId: 1,
        reactions: '5',
        tags: ['story', 'more']
    },
};
