/** @type { import('@storybook/html-vite').Preview } */

/**
 * Load all buuildt component from main file.
 */
import '../src/main.js';
import '../src/styles/variables.css';
import './wp-styles.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story =>
      `<div style="display: flex;">
       ${Story()}
      </div>`,
  ],
};

export default preview;
