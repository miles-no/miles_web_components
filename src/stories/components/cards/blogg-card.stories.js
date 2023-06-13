import { propsToAttrs } from '../../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args =>
    `<miles-blogg-card  ${propsToAttrs(args)}></miles-blogg-card>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const BloggCard = {
  args: {
    author: 'Ola Nordmann',
    email: 'ola.miles.no',
    posted: '917 12 345',
    updated: 'wide',
    url: 'https://www.vg.no',
  },
};
