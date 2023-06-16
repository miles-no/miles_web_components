import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args =>
    `<miles-image-slider  ${propsToAttrs(args)}>
      <figure class="is-layout-flex wp-block-gallery-1 wp-block-gallery has-nested-images columns-default is-cropped miles-image-slider">
        <figure class="wp-block-image size-large tv2"></figure>
        <figure class="wp-block-image size-large equinor"></figure>
        <figure class="wp-block-image size-large fjordkraft"></figure>
        <figure class="wp-block-image size-large cutters"></figure>
        <figure class="wp-block-image size-large tv2"></figure>
        <figure class="wp-block-image size-large scaleaq"></figure>
        <figure class="wp-block-image size-large"></figure>
      </figure>
    </miles-image-slider>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const ImageSlider = {
  args: {
    inview: '3',
    autoplay: 'true',
  },
};
