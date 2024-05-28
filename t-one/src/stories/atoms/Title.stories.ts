import type { Meta, StoryObj } from '@storybook/react';
import Title from '@components/atoms/Title';
import { TitleType } from '@/types/TitleProps';

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

export const Normal_600: Story = {
    args: {
        text: "Some Header Text",
        selectStart: 5,
        selectEnd: 11,
        titleType: TitleType.H1,
        hideOverflow: false
    },
};
