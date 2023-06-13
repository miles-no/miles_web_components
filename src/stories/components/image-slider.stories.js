import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args =>
    `<miles-image-slider  ${propsToAttrs(args)}></miles-image-slider>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const ImageSlider = {
  args: {
    inview: 'true',
    autoplay: 'true',
  },
};
