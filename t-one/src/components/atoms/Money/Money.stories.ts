import type { Meta, StoryObj } from '@storybook/react';
import Money from './Money';

const meta = {
  title: 't-one/Money',
  component: Money,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Money>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    price:'$409.00'
  },
};
