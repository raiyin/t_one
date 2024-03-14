import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Tag from './Tag';

const meta = {
  title: 't-one/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    text:'Pizza'
  },
};
