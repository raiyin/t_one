import type { Meta, StoryObj } from '@storybook/react';
import H1Title from './H1Title';

const meta = {
    title: 't-one/H1Title',
    component: H1Title,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof H1Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        text: "Some Header Text",
        selectStart: 5,
        selectEnd: 11
    },
};
