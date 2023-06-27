import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  argTypes: {
    // 👇 All Button stories expect a label arg
    selected: {
      control: 'boolean',
      description: 'select or unselect button',
    },
  },
  render: args =>
    `<miles-button-anchor  ${propsToAttrs(
      args
    )}>Miles Button Anchor</miles-button-anchor>`,
};

export const ButtonAnchor = {
  args: {
    href: 'https://archive.org/embed/NeverGonnaGiveYouUp',
    color: '#3F1221',
    selected: 'false',
  },
};
