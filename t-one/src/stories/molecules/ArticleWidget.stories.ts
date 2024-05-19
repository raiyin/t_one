import type { Meta, StoryObj } from '@storybook/react';
import ArticleWidget from '@components/molecules/ArticleWidget';

const meta = {
    title: 't-one/molecules/ArticleWidget',
    component: ArticleWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        id: 1,
        userId: 1,
        body: 'delicious paltty',
        tags: ['#food', '#lunch'],
        reactions: '6',
        title: 'The truth title of the story'
    },
};
