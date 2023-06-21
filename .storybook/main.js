/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: {
<<<<<<< Updated upstream
    name: '@storybook/web-components-vite',
=======
    name: '@storybook/html-vite',
>>>>>>> Stashed changes
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
