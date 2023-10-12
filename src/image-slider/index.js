import styles from './image-slider.css?inline';
import cssVariables from '../styles/variables.css?inline';
import splideDefaultTheme from '@splidejs/splide/css?inline';
import Splide from '@splidejs/splide';
import { Transition } from './Transition';

/**
 * Miles Image Slider
 */

const BASE_URL = 'https://miles.no/newsite/';

const ImageSliderTemplate = document.createElement('template');
ImageSliderTemplate.innerHTML = `
<style>
${splideDefaultTheme}\n
${styles}\n
${cssVariables}
</style>
<section class="splide" aria-label="Splide Basic HTML Example">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="splide__slide__container">
          <figure data-slide-image="0">
            <div class="overlay tv2"></div>
            <img decoding="async" loading="lazy" width="825" height="550"
              src="${BASE_URL}wp-content/uploads/2023/01/AFH2336-@-Tony-Hall-825x550.jpg" alt="" class="wp-image-8854"
              srcset="
                    ${BASE_URL}wp-content/uploads/2023/01/AFH2336-@-Tony-Hall-825x550.jpg   825w,
                    ${BASE_URL}wp-content/uploads/2023/01/AFH2336-@-Tony-Hall-768x512.jpg   768w,
                    ${BASE_URL}wp-content/uploads/2023/01/AFH2336-@-Tony-Hall-1080x721.jpg 1080w,
                    ${BASE_URL}wp-content/uploads/2023/01/AFH2336-@-Tony-Hall-385x258.jpg   385w,
                    ${BASE_URL}wp-content/uploads/2023/01/AFH2336-@-Tony-Hall.jpg          1200w
                  " sizes="(max-width: 825px) 100vw, 825px" draggable="false" />
          </figure>
        </div>
      </li>
      <li class="splide__slide">
        <div class="splide__slide__container">
          <figure data-slide-image="0">
            <div class="overlay tv2"></div>
            <img decoding="async" loading="lazy" width="825" height="550"
              src="${BASE_URL}wp-content/uploads/2022/11/0U7A7621-825x550.jpg" alt="" class="wp-image-8707" srcset="
                ${BASE_URL}wp-content/uploads/2022/11/0U7A7621-825x550.jpg   825w,
                ${BASE_URL}wp-content/uploads/2022/11/0U7A7621-768x512.jpg   768w,
                ${BASE_URL}wp-content/uploads/2022/11/0U7A7621-1080x721.jpg 1080w,
                ${BASE_URL}wp-content/uploads/2022/11/0U7A7621-385x258.jpg   385w,
                ${BASE_URL}wp-content/uploads/2022/11/0U7A7621.jpg          1200w
              " sizes="(max-width: 825px) 100vw, 825px" draggable="false" />
          </figure>
        </div>
      </li>
      <li class="splide__slide">
        <div class="splide__slide__container">
          <figure data-slide-image="0">
            <div class="overlay tv2"></div>
             <img decoding="async" loading="lazy" width="508" height="550"
              src="${BASE_URL}wp-content/uploads/2023/05/Trondheim-3-508x550.jpg" alt="" class="wp-image-9825" srcset="
                ${BASE_URL}wp-content/uploads/2023/05/Trondheim-3-508x550.jpg  508w,
                ${BASE_URL}wp-content/uploads/2023/05/Trondheim-3-768x831.jpg  768w,
                ${BASE_URL}wp-content/uploads/2023/05/Trondheim-3.jpg         1109w
              " sizes="(max-width: 508px) 100vw, 508px" draggable="false" />
          </figure>
        </div>
      </li>
      <li class="splide__slide">
        <div class="splide__slide__container">
          <figure data-slide-image="0">
            <div class="overlay tv2"></div>
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
        </div>
      </li>
    </ul>
  </div>
</section>
`;

class MilesImageSlider extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(ImageSliderTemplate.content.cloneNode(true));
    this.splide = shadow.querySelector('.splide');
  }

  connectedCallback() {
    new Splide(this.splide, {
      type: 'loop',
      focus: 'center',
      drag: 'free',
      snap: true,
      fixedWidth: '468px',
      fixedHeight: '468px',
      autoplay: 'play',
    }).mount({}, Transition);
  }
}

const MilesImageSliderName = 'miles-image-slider';

if (!customElements.get(MilesImageSliderName)) {
  customElements.define(MilesImageSliderName, MilesImageSlider);
}

export default MilesImageSlider;
export { MilesImageSlider };
