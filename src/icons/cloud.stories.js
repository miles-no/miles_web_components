import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Icons',
  tags: ['autodocs'],
  render: args => `<miles-cloud  ${propsToAttrs(args)}></miles-cloud>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Cloud = {
  args: {
    color: '#b72318',
    width: '100',
    height: '100',
  },
};
