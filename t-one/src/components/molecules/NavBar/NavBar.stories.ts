import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import NavBar from './NavBar';
import { LinkLocation } from '../../../types/LinkLocation';

const meta = {
    title: 't-one/NavBar',
    component: NavBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    //   argTypes: {
    //     backgroundColor: { control: 'color' },
    //   },
    // args: { onClick: fn() },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
    args: {
        links: ["ya.ru", "mail.eu"],
        location: LinkLocation.Header
    },
};
