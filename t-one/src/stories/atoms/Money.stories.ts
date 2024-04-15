import type { Meta, StoryObj } from '@storybook/react';
import Money from '@components/atoms/Money';

const meta = {
  title: 't-one/atoms/Money',
  component: Money,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Money>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    price: '$409.00'
  },
};
