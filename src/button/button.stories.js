import { propsToAttrs } from '../storybook.utils.js';
import { withActions } from '@storybook/addon-actions/decorator';
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
  parameters: {
    actions: {
      handles: ['change', 'click', 'focus', 'blur'],
    },
  },
  decorators: [withActions],

  render: args => `<div style="width: 100%;max-width: 1440px;">
  		<miles-button type="button" ${propsToAttrs(args)}>Don't panic</miles-button>
    </div>`,
};

export const Button = {
  args: {
    value: `${import.meta.env.VITE_BASE_URL}vi-er-miles/`,
    name: 'button-1',
    variant: 'primary',
  },
};
