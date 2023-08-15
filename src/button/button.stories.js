import { propsToAttrs } from '../storybook.utils.js';
import '../button/index.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'tertiary', 'blank'],
    },
    selected: {
      control: 'boolean',
    },
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },

  render: args => `<div style="width: 100%;max-width: 1440px;">
  		<miles-button type="button" ${propsToAttrs(args)}>Don't panic</miles-button>
    </div>`,
};

export const Button = {
  args: {
    value: 'https://www.miles.no/newsite/vi-er-miles/',
    name: 'button-1',
    variant: 'blank',
  },
};
