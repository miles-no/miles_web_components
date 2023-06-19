import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args => `<miles-logo  ${propsToAttrs(args)}></miles-logo>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Logo = {
  args: {
    width: '400px',
    height: '200px',
    color: '#ff303b',
  },
};
