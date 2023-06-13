import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args => `<miles-arrow-nav  ${propsToAttrs(args)}></miles-arrow-nav>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const ArrowNav = {
  args: {
    width: '400px',
    height: '200px',
    color: 'red',
  },
};
