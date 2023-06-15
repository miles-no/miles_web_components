import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args =>
    `<miles-overlap-block ${propsToAttrs(args)}></miles-overlap-block`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const OverlapBlock = {};
