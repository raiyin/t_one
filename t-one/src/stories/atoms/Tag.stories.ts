import type { Meta, StoryObj } from '@storybook/react';
import Tag from '@components/atoms/Tag';

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

export const Normal: Story = {
  args: {
    text: 'Pizza'
  },
};
