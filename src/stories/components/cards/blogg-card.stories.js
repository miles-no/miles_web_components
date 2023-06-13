import { propsToAttrs } from '../../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args => `<miles-blog-card  ${propsToAttrs(args)}></miles-blog-card>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const BloggCard = {
  args: {
    author: 'Ola Nordmann',
    email: 'ola.miles.no',
    posted: '12/12/2022',
    updated: 'wide',
    url: 'https://www.vg.no',
  },
};
