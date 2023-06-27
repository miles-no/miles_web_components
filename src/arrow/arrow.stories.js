import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args => `<miles-arrow ${propsToAttrs(args)}></miles-arrow>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Arrow = {};
