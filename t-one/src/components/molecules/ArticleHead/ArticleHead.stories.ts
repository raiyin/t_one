import type { Meta, StoryObj } from '@storybook/react';
import ArticleHead from './ArticleHead';

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

export const Main: Story = {
    args: {
        userId: 1,
        reactions: '5',
        tags: ['#story', '#more']
    },
};
