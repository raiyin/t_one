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

export const Main: Story = {
    args: {
    },
};
