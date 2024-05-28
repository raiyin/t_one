import type { Meta, StoryObj } from '@storybook/react';
import FeatureBlock from '@components/organisms/FeaturesBlock';
import featureJsonData from '@data/feature_data.json';

const meta = {
    title: 't-one/organisms/FeatureBlock',
    component: FeatureBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FeatureBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const featureData = featureJsonData;
export const Normal: Story = {
    args: {
        features: featureData.features
    },
};
