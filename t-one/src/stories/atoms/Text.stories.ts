import type { Meta, StoryObj } from '@storybook/react';
import Text from '@components/atoms/Text';

const meta = {
    title: 't-one/atoms/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        content: 'Pizza',
        font: "Poppins",
        fontSize: 16,
        fontWeight: 600,
        color: "red"
    },
};
