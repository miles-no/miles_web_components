import { propsToAttrs } from '../../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args =>
    `<miles-podcast-card  ${propsToAttrs(args)}></miles-podcast-card>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const PodcastCard = {
  args: {
    episode_number: '123',
    episode_title: 'My Podcast Episode',
    published_date: '2022-01-01',
    link: 'https://example.com',
    description: 'This is a description of my podcast episode',
    url: 'https://sphinx.acast.com/p/open/s/63d28f41cd0f720011930608/e/64802452d9a829001153defb/media.mp3',
  },
};
