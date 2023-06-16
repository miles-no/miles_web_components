/** @type { import('@storybook/web-components').Preview } */

/**
 * Load all buuildt component from main file.
 */
import '../src/main.js';
import '../src/styles/variables.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
