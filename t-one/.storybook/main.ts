import type { StorybookConfig } from "@storybook/react-vite";
import * as path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
    stories: [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    "core": {
        "builder": "@storybook/builder-vite"
    },
    viteFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve?.alias,
            '@': path.resolve(__dirname, '../src'),
            '@types': path.resolve(__dirname, '../src/types'),
            '@assets': path.resolve(__dirname, '../src/assets'),
            '@components': path.resolve(__dirname, '../src/components'),
        };
        return config;
    },
};
export default config;
