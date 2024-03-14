import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import NavBar from './NavBar';
import LinkLocation from '@types/LinkLocation';

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

export const Main: Story = {
    args: {
        links: [
            {
                location: LinkLocation.Header,
                link: "https://ya.ru",
                content: "ya.ru site",
            },
            {
                location: LinkLocation.Header,
                link: "https://mail.ru",
                content: "mail.ru site",
            },],
        location: LinkLocation.Header,
    },
};
