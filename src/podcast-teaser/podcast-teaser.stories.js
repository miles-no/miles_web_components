import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args =>
    `<miles-podcast-teaser ${propsToAttrs(args)}> </miles-podcast-teaser>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const PodcastTeaser = {
  args: {
    episode_title: 'My Podcast Episode',
    published_date: '2022-01-01',
    link: 'https://example.com',
  },
};
