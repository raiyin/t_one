import type { Meta, StoryObj } from '@storybook/react';
import ReviewBlock from '@components/organisms/ReviewBlock';

const meta = {
    title: 't-one/organisms/ReviewBlock',
    component: ReviewBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ReviewBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        direction: 'row',
        comments: [
            {
                "id": 1,
                "body": "This is some awesome thinking!",
                "postId": 100,
                "user": {
                    "id": 63,
                    "username": "eburras1q"
                }
            },
            {
                "id": 2,
                "body": "What terrific math skills you’re showing!",
                "postId": 27,
                "user": {
                    "id": 71,
                    "username": "omarsland1y"
                }
            },
            {
                "id": 3,
                "body": "You are an amazing writer!",
                "postId": 61,
                "user": {
                    "id": 29,
                    "username": "jissetts"
                }
            },
            {
                "id": 4,
                "body": "Wow! You have improved so much!",
                "postId": 8,
                "user": {
                    "id": 19,
                    "username": "bleveragei"
                }
            },
            {
                "id": 5,
                "body": "Nice idea!",
                "postId": 62,
                "user": {
                    "id": 70,
                    "username": "cmasurel1x"
                }
            },
            {
                "id": 6,
                "body": "You are showing excellent understanding!",
                "postId": 19,
                "user": {
                    "id": 97,
                    "username": "cdavydochkin2o"
                }
            }
        ]
    }
};
