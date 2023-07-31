import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args =>
    `<miles-image-slider  ${propsToAttrs(args)}>
        <figure class="is-layout-flex wp-block-gallery-1 wp-block-gallery has-nested-images columns-default is-cropped miles-image-slider">
            <figure data-slide-image="0" class="altibox">
              <div class="overlay altibox"></div>
              <img
                decoding="async"
                loading="lazy"
                width="825"
                height="550"
                src="https://loremflickr.com/540/420/dog"
                alt=""
                class="wp-image-8861"
                  https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2400-@-Tony-Hall.jpg          1200w
                "
                sizes="(max-width: 825px) 100vw, 825px"
                draggable="false" />
            </figure>
            <figure data-slide-image="1" class="equinor">
              <div class="overlay equinor"></div>
              <img
                decoding="async"
                loading="lazy"
                width="463"
                height="550"
                src="https://loremflickr.com/540/420/cat"
                alt=""
                class="wp-image-9826"
                sizes="(max-width: 463px) 100vw, 463px"
                draggable="false" />
            </figure>
            <figure data-slide-image="2" class="dnb">
              <div class="overlay dnb"></div>
              <img
                decoding="async"
                loading="lazy"
                width="508"
                height="550"
                src="https://loremflickr.com/540/420/dragon"
                alt=""
                class="wp-image-9825"
                sizes="(max-width: 508px) 100vw, 508px"
                draggable="false" />
            </figure>
            <figure data-slide-image="3" class="storebrand">
              <div class="overlay stp"></div>
              <img
                decoding="async"
                loading="lazy"
                width="796"
                height="550"
                src="https://loremflickr.com/540/420/door"
                alt=""
                class="wp-image-9996"
                sizes="(max-width: 796px) 100vw, 796px"
                draggable="false" />
            </figure>
            <figure data-slide-image="4" class="politiet">
              <div class="overlay"></div>
              <img
                decoding="async"
                loading="lazy"
                width="978"
                height="550"
                src="https://loremflickr.com/540/420/car"
                alt=""
                class="wp-image-9995"
                sizes="(max-width: 978px) 100vw, 978px"
                draggable="false" />
            </figure>
          </figure>
    </miles-image-slider>`,
};

export const ImageSlider = {
  args: {
    inview: '3',
    autoplay: 'true',
  },
};
