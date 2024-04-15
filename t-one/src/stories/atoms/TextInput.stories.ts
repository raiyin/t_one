import type { Meta, StoryObj } from '@storybook/react';
import TextInput from '@components/atoms/TextInput';

const meta = {
    title: 't-one/atoms/TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        placeholder: 'enter your comment',
        content: 'Some very short text'
    },
};
