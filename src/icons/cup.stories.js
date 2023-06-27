import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Icons',
  tags: ['autodocs'],
  render: args => `<miles-cup  ${propsToAttrs(args)}></miles-cup>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Cup = {
  args: {
    color: '#b72318',
    width: '100',
    height: '100',
  },
};
