import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  argTypes: {
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

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const ButtonAnchor = {
  args: {
    href: 'https://archive.org/embed/NeverGonnaGiveYouUp',
    color: '#3F1221',
    selected: 'false',
    count: 15,
  },
};
