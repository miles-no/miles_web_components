/** @type { import('@storybook/web-components-vite').StorybookConfig } */

let BASE_URL = 'https://miles.no/newsite/';

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  core: {},
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },
  docs: {
    autodocs: 'tag',
  },
  env: config => ({
    ...config,
    VITE_BASE_URL: BASE_URL,
  }),
};
export default config;
