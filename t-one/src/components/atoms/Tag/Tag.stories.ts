import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';

const meta = {
  title: 't-one/atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    text:'Pizza'
  },
};
