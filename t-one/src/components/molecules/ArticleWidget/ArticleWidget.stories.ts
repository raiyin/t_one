import type { Meta, StoryObj } from '@storybook/react';
import ArticleWidget from './ArticleWidget';

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

export const Article: Story = {
    args: {
        id: 1,
        body: 'delicious paltty',
        tags: ['#sdfsdf', '#lkjsdf'],
        reactions: '6',
        title: 'The truth title of the story'
    },
};
