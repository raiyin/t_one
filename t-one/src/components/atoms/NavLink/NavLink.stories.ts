import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import NavLink from './NavLink';
import { LinkLocation } from '../../../types/NavLinkProps';

const meta = {
  title: 't-one/NavLink',
  component: NavLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
  // args: { onClick: fn() },
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    location: LinkLocation.Header
  },
};

export const Footer: Story = {
  args: {
    location: LinkLocation.Footer,
    link: "ya.ru"
  },
};
