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
      'https://www.miles.no/newsite/wp-content/uploads/2019/06/miles_smile.png',
    title: 'Welcome to our website!',
    slogan: 'Discover our latest products',
    url: 'https://example.com/products',
    variant: 'wide',
  },
};
