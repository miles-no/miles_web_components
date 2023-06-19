import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args => `<miles-banner  ${propsToAttrs(args)}></miles-banner>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Banner = {
  args: {
    image:
      'https://www.miles.no/wp-content/uploads/2021/11/Lily-258.jpg',
    title: 'Welcome to our website!',
    slogan: 'Discover our latest products',
    variant: 'split',
    reverse: true,
  },
};
