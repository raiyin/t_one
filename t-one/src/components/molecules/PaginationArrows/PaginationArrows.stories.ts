import type { Meta, StoryObj } from '@storybook/react';
import PaginationArrows from './PaginationArrows';

const meta = {
    title: 't-one/molecules/PaginationArrows',
    component: PaginationArrows,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PaginationArrows>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        leftArrowIsEnable: false,
        rightArrowIsEnable: true,
        leftArrowOnClick: () => { },
        rightArrowOnClick: () => { }
    },
};
