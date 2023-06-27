import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Icons',
  tags: ['autodocs'],
  render: args => `<miles-heart ${propsToAttrs(args)}></miles-heart>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Heart = {
  args: {
    color: '#b72318',
    width: '100',
    height: '100',
  },
};
