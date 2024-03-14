import type { Meta, StoryObj } from '@storybook/react';
import Link from './Link';

const meta = {
    title: 't-one/Link',
    component: Link,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
    },
};
