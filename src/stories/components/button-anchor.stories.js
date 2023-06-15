import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args =>
    `<miles-button-anchor  ${propsToAttrs(
      args
    )}>Miles Button Anchor</miles-button-anchor>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const ButtonAnchor = {
  args: {
    href: 'https://archive.org/embed/NeverGonnaGiveYouUp',
    color: 'red',
    selected: 'true',
  },
};
