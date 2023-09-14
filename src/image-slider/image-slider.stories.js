import { propsToAttrs } from '../storybook.utils.js';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args =>
    `<miles-image-slider  ${propsToAttrs(args)}>
        <figure class="is-layout-flex wp-block-gallery-1 wp-block-gallery has-nested-images columns-default is-cropped miles-image-slider">
            <figure data-slide-image="0" class="dnb">
              <img
                decoding="async"
                loading="lazy"
                width="825"
                height="550"
                src="${BASE_URL}wp-content/uploads/2023/01/AFH2400-@-Tony-Hall-825x550.jpg"
                alt=""
                class="wp-image-8861"
                srcset="
                  ${BASE_URL}wp-content/uploads/2023/01/AFH2400-@-Tony-Hall-825x550.jpg   825w,
                  ${BASE_URL}wp-content/uploads/2023/01/AFH2400-@-Tony-Hall-768x512.jpg   768w,
                 ${BASE_URL}wp-content/uploads/2023/01/AFH2400-@-Tony-Hall-1080x721.jpg 1080w,
                  ${BASE_URL}wp-content/uploads/2023/01/AFH2400-@-Tony-Hall-385x258.jpg   385w,
                  ${BASE_URL}wp-content/uploads/2023/01/AFH2400-@-Tony-Hall.jpg          1200w
                "
                sizes="(max-width: 825px) 100vw, 825px"
                draggable="false" />
            </figure>
            <figure data-slide-image="1" class="politiet">
              <img
                decoding="async"
                loading="lazy"
                width="463"
                height="550"
                src="${BASE_URL}wp-content/uploads/2023/05/Stavanger-463x550.jpg"
                alt=""
                class="wp-image-9826"
                srcset="
                  ${BASE_URL}wp-content/uploads/2023/05/Stavanger-463x550.jpg  463w,
                  ${BASE_URL}wp-content/uploads/2023/05/Stavanger-768x912.jpg  768w,
                  ${BASE_URL}wp-content/uploads/2023/05/Stavanger.jpg         1010w
                "
                sizes="(max-width: 463px) 100vw, 463px"
                draggable="false" />
            </figure>
            <figure data-slide-image="2" class="ifforsikring">
              <img
                decoding="async"
                loading="lazy"
                width="508"
                height="550"
                src="${BASE_URL}wp-content/uploads/2023/05/Trondheim-3-508x550.jpg"
                alt=""
                class="wp-image-9825"
                srcset="
                  ${BASE_URL}wp-content/uploads/2023/05/Trondheim-3-508x550.jpg  508w,
                  ${BASE_URL}wp-content/uploads/2023/05/Trondheim-3-768x831.jpg  768w,
                  ${BASE_URL}wp-content/uploads/2023/05/Trondheim-3.jpg         1109w
                "
                sizes="(max-width: 508px) 100vw, 508px"
                draggable="false" />
            </figure>
            <figure data-slide-image="3" class="ruter">
              <img
                decoding="async"
                loading="lazy"
                width="796"
                height="550"
                src="${BASE_URL}wp-content/uploads/2023/06/carousell_image-796x550.png"
                alt=""
                class="wp-image-9996"
                srcset="
                  ${BASE_URL}wp-content/uploads/2023/06/carousell_image-796x550.png 796w,
                  ${BASE_URL}wp-content/uploads/2023/06/carousell_image-768x531.png 768w,
                  ${BASE_URL}wp-content/uploads/2023/06/carousell_image.png         991w
                "
                sizes="(max-width: 796px) 100vw, 796px"
                draggable="false" />
            </figure>
            <figure data-slide-image="4" class="telenor">
              <img
                decoding="async"
                loading="lazy"
                width="978"
                height="550"
                src="${BASE_URL}wp-content/uploads/2023/06/carousell_image02-978x550.jpeg"
                alt=""
                class="wp-image-9995"
                srcset="
                  ${BASE_URL}wp-content/uploads/2023/06/carousell_image02-978x550.jpeg  978w,
                  ${BASE_URL}wp-content/uploads/2023/06/carousell_image02-768x432.jpeg  768w,
                  ${BASE_URL}wp-content/uploads/2023/06/carousell_image02.jpeg         1200w
                "
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
