import type { Meta, StoryObj } from '@storybook/react';
import Alert from '@components/molecules/Alert';
import { AlertType } from '@types/AlertProps';

const meta = {
    title: 't-one/molecules/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'dark' },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        type: AlertType.success,
        text: 'Comment was added successfully',
        show: true,
        setShow: () => { }
    },
};

export const Info: Story = {
    args: {
        type: AlertType.info,
        text: 'Comment was added successfully',
        show: true,
        setShow: () => { }
    },
};

export const Warning: Story = {
    args: {
        type: AlertType.warning,
        text: 'Comment was added successfully',
        show: true,
        setShow: () => { }
    },
};

export const Error: Story = {
    args: {
        type: AlertType.error,
        text: 'Comment was added successfully',
        show: true,
        setShow: () => { }
    },
};
