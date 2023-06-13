import type { StorybookConfig } from '@storybook/nextjs';
import * as path from 'path';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-styling',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    // the issue solve https://github.com/storybookjs/storybook/issues/11639#issuecomment-690792460
    webpackFinal: async (config) => {
        if (config?.resolve) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@/': path.resolve(__dirname, '../src/'),
                '@/enums': path.resolve(__dirname, '../src/enums'),
                '@/utils': path.resolve(__dirname, '../src/utils'),
                '@/themes': path.resolve(__dirname, '../src/themes'),
            };
        }

        return config;
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            // makes union prop types like variant and size appear as select controls
            shouldExtractLiteralValuesFromEnum: true,
            // makes string and boolean types that can be undefined appear as inputs and switches
            shouldRemoveUndefinedFromOptional: true,
            // Filter out third-party props from node_modules except @mui packages
            propFilter: (prop) =>
                prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true,
        },
    },
};
export default config;
