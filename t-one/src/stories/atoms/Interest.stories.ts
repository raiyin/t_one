import type { Meta, StoryObj } from '@storybook/react';
import Interest from '@components/atoms/Interest';

const meta = {
  title: 't-one/atoms/Interest',
  component: Interest,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Interest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    text: 'Increased By 10%'
  },
};
