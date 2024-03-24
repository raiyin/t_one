import type { Meta, StoryObj } from '@storybook/react';
import Article from './Article';

const meta = {
    title: 't-one/organisms/Article',
    component: Article,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'dark' },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        id: 1,
        title: 'How To Order Food On eatly ?',
        body: 'It wasnt quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasnt time to salvage the situation, but he continued to delude himself into believing there was.',
        userId: 1,
        reactions: '7',
        tags: ['#history, #food']
    },
};
