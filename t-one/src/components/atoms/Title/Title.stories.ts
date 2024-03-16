import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta = {
    title: 't-one/atoms/Title',
    component: Title,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        text: "Some Header Text",
        selectStart: 5,
        selectEnd: 11,
        fontWeight:500,
        fontSize:45,
        lineHeight:50
    },
};
