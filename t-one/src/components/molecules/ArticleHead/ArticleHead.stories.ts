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
        userId: 'Terry Medhurst',
        ava_url: 'https://robohash.org/Terry.png?set=set4',
        rating: '7',
        hashtag: '#history, #food'
    },
};
