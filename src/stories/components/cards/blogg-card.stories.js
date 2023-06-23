import { propsToAttrs } from '../../storybook.utils.js';

export default {
  title: 'Miles/Components/Cards/Blog',
  tags: ['autodocs'],
  render: args => `<miles-blog-card  ${propsToAttrs(args)} />`,
  decorators: [
    Story => `<div style="max-width: 400px; margin: 0 auto;">${Story()}</div>`,
  ],
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const BloggCard = {
  args: {
    title: 'Smidig samspill: Hvordan IT-prosjektledelse og endri(...)',
    author: 'Ida Severinsen',
    image:
      'https://www.miles.no/newsite/wp-content/uploads/2023/06/Kopi-av-_D__0061-1080x721.jpg',
    posted: '12/12/2022',
    url: 'https://www.vg.no',
    id: 'post-9903',
  },
};

// id="post-9903"
