import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  build: {
    test: {
      disabledAddons: [
        '@storybook/addon-docs',
        '@storybook/addon-essentials',
      ],
      disableBlocks: true,
      disableMDXEntries: true,
      disableAutoDocs: true,
      disableDocgen: true,
      disableSourcemaps: true,
      disableTreeShaking: true,
    },
  },
  typescript: {
    skipCompiler: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};

export default config;
