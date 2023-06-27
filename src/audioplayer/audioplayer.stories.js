import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args =>
    `<miles-audio-player  ${propsToAttrs(args)}></miles-audio-player>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const AudioPlayer = {
  args: {
    src: 'https://archive.org/embed/NeverGonnaGiveYouUp',
  },
};
