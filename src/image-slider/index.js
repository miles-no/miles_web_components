import styles from './image-slider.css?inline';
import splideStyles from './splide.css?inline';
import cssVariables from '../styles/variables.css?inline';
import Splide from '@splidejs/splide';
import { Transition } from './Transition';
/* import splideTheme from '@splidejs/splide/css?inline'; */ // TODO: See issue #101 in GitHub

/**
 * Miles Image Slider
 */
const ImageSliderTemplate = document.createElement('template');
ImageSliderTemplate.innerHTML = `
<style>
${splideStyles}\n
${styles}\n
${cssVariables}
</style>
<section class="splide" aria-label="Splide Basic HTML Example">
  <div class="splide__slider">
    <div class="splide__track">
      <ul class="splide__list">
      </ul>
    </div>
  </div>
</section>
`;

// Reuse the same slide element for all slides
const ImageSliderSlide = document.createElement('li');
ImageSliderSlide.className = 'splide__slide';
ImageSliderSlide.innerHTML = `
  <div class="splide__slide__container">
  </div>
`;

class MilesImageSlider extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(ImageSliderTemplate.content.cloneNode(true));

    this.logos = [
      'fjordkraft',
      'tv2',
      'cutters',
      'scaleaq',
      'telenor',
      'ruter',
      'dnb',
      'ifforsikring',
      'politiet',
    ];

    this.addSlides();
    this.initializeSplide();
  }

  get figures() {
    const figures = this.querySelectorAll('figure');
    return [...figures];
  }

  addSlides() {
    const ul = this.shadowRoot.querySelector('ul');
    this.figures.forEach(figure => {
      this.addOverlay(figure);

      const slide = ul.appendChild(ImageSliderSlide.cloneNode(true));
      const container = slide.querySelector('.splide__slide__container');
      container.appendChild(figure);
    });
  }

  addOverlay(figure) {
    figure.classList.forEach(className => {
      if (this.logos.includes(className)) {
        const overlay = document.createElement('div');
        overlay.className = `overlay ${className}`;
        figure.prepend(overlay);
      }
    });
  }

  initializeSplide() {
    const options = {
      type: 'loop',
      focus: 'center',
      drag: 'free',
      snap: true,
      fixedWidth: '468px',
      fixedHeight: '468px',
    };

    new Splide(this.shadowRoot.querySelector('.splide'), options).mount(
      {},
      Transition
    );
  }
}

const MilesImageSliderName = 'miles-image-slider';

if (!customElements.get(MilesImageSliderName)) {
  customElements.define(MilesImageSliderName, MilesImageSlider);
}

export default MilesImageSlider;
export { MilesImageSlider };
