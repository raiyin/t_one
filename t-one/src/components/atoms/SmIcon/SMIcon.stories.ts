import type { Meta, StoryObj } from '@storybook/react';
import SMIcon from './SMIcon';

const meta = {
    title: 't-one/atoms/SMIcon',
    component: SMIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SMIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InstaIcon: Story = {
    args: {
        sm_name: "insta"
    },
};
export const FacebookIcon: Story = {
    args: {
        sm_name: "facebook"
    },
};
export const LinkedinIcon: Story = {
    args: {
        sm_name: "linkedin"
    },
};
export const TwitterIcon: Story = {
    args: {
        sm_name: "twitter"
    },
};
