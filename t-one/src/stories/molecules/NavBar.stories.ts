import type { Meta, StoryObj } from '@storybook/react';
import NavBar from '@components/molecules/NavBar';
import Location from '@types/Location';

const meta = {
    title: 't-one/molecules/NavBar',
    component: NavBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        links: [
            {
                location: Location.Header,
                link: "https://ya.ru",
                content: "ya.ru site",
            },
            {
                location: Location.Header,
                link: "https://mail.ru",
                content: "mail.ru site",
            },],
        location: Location.Header,
    },
};
