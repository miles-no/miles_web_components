import { propsToAttrs } from '../../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args =>
    `<miles-info-block  ${propsToAttrs(args)}></miles-info-block>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const InfoBlock = {
  args: {
    heading: 'h1',
  },
};
