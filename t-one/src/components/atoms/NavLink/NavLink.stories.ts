import type { Meta, StoryObj } from '@storybook/react';
import NavLink from './NavLink';
import Location from '@types/Location';

const meta = {
  title: 't-one/atoms/NavLink',
  component: NavLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    location: Location.Header,
    link: "mail.ru",
    content: "MAIL.RU"
  },
};

export const Footer: Story = {
  args: {
    location: Location.Footer,
    link: "ya.ru",
    content: "YANDEX.RU"
  },
};
