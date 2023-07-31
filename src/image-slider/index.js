import styles from './image-slider.css?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles Image Slider
 */

const ImageSliderTemplate = document.createElement('template');
ImageSliderTemplate.innerHTML = `
  <style>
	${styles}\n
  ${cssVariables}
  </style>
  <div id="slide-wrapper">
    <h2>Noen av våre kunder</h2>
    <section>
      <div id="leftnav">
        <div id="nav-overlay-left"></div>
        <button  aria-label="Previous" aria-description="go to previous image">
          <miles-arrow-nav color="#3F1221"></miles-arrow-nav>
        </button>
      </div>
      <div class="slides"></div>
      <div id="rightnav">
        <div id="nav-overlay-right"></div>
        <button aria-description="go to next image"  aria-label="Next">
          <miles-arrow-nav color="#3F1221"></miles-arrow-nav>
        </button>
      </div>
      <slot></slot>
      <nav class="controls"> </nav>
    </section>
  </div>
    `;

class MilesImageSlider extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(ImageSliderTemplate.content.cloneNode(true));
    this.slides = shadow.querySelector('.slides');
    this.controls = shadow.querySelector('.controls');
    this.wrapper = shadow.querySelector('#slide-wrapper');
    this.numberOfSlides = 0;
    this.autoPlay = 0;
    this.index = 0;
    this.logos = [
      'equinor',
      'fjordkraft',
      'tv2',
      'cutters',
      'scaleaq',
      'altibox',
      'dnb',
      'storebrand',
      'politiet',
    ];
    this.rightNav = shadow.querySelector('#rightnav');
    this.leftNav = shadow.querySelector('#leftnav');
  }

  connectedCallback() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startAutoPlay(true);
        } else {
          this.startAutoPlay(false);
        }
      });
    }, options);

    this.observer.observe(this.wrapper);

    this.controls.addEventListener('click', this.goToSlide);
    this.rightNav.addEventListener('click', this.goLeft);
    this.leftNav.addEventListener('click', this.goRight);

    const slot = this.shadowRoot.querySelector('slot');
    if (slot) {
      let slottedElements =
        slot.assignedElements().length === 1
          ? slot.assignedElements()[0].children
          : slot.assignedElements();

      if (typeof slottedElements === 'object') {
        try {
          const slottedElementsArray = Array.from(slottedElements);
          this.numberOfSlides = slottedElements.length;

          console.log(slottedElementsArray);
          slottedElementsArray.forEach((element, index) => {
            const figure = document.createElement('figure');
            const overlay = document.createElement('div');
            overlay.setAttribute('class', 'overlay');

            element.classList.forEach(className => {
              if (this.logos.includes(className)) {
                overlay.classList.add(className);
              }
            });
            figure.setAttribute('data-slide-image', index);
            figure.appendChild(overlay);

            if (element.querySelector('img')) {
              const image = element.querySelector('img');
              image.setAttribute('draggable', false);
              figure.appendChild(image);
              this.slides.appendChild(figure);

              const navDot = document.createElement('span');
              navDot.setAttribute('class', 'nav-dot');
              navDot.setAttribute('data-slide', index);
              this.controls.appendChild(navDot);
            }
          });

          // Create copies of images for infinite loop
          Array.from(this.slides.children).map(e => {
            const clone = e.cloneNode(true);
            clone.setAttribute('aria-hidden', true);
            this.slides.appendChild(clone);
          });
        } catch (error) {
          console.log(slottedElements);
        }
      }
    }

    this.setActiveDot(this.index);
  }

  disconnectedCallback() {
    this.controls.removeEventListener('click', this.goToSlide);
    this.observer.unobserve(this.wrapper);
    this.rightNav.removeEventListener('click', this.goLeft);
    this.leftNav.removeEventListener('click', this.goRight);
  }

  goRight = () => {
    this.startAutoPlay(false);
    if (Math.abs(this.index) === 0) {
      this.index = -this.numberOfSlides + 1;
    } else {
      this.index++;
    }
    this.setActiveDot(this.index);
    this.slides.style.setProperty('--slides-offset', this.index);
    console.log(this.index);
  };

  goLeft = () => {
    this.startAutoPlay(false);
    if (Math.abs(this.index) === this.numberOfSlides - 1) {
      this.slides.style.setProperty('transition', 'none');
      this.slides.style.setProperty('--slides-offset', this.index - 1);

      this.slides.style.setProperty(
        'transition',
        'transform 1s cubic-bezier(0.46, 0.03, 0.52, 0.96)'
      );
      this.index = 0;
    } else {
      this.index--;
    }
    this.setActiveDot(this.index);
    this.slides.style.setProperty('--slides-offset', this.index);
    console.log(this.index);
  };

  goToSlide = e => {
    let index = parseInt(e.target.dataset.slide) * -1;
    if (this.numberOfSlides - 1 === parseInt(e.target.dataset.slide)) {
      index = 0;
    }

    this.startAutoPlay(false);

    this.slides.style.setProperty('--slides-offset', index);
    this.setActiveDot(index);
  };

  startAutoPlay = autoplay => {
    if (autoplay) {
      this.autoPlay = setInterval(() => {
        if (Math.abs(this.index) === this.numberOfSlides - 2) {
          this.index = 0;
        } else {
          this.index--;
        }
        this.setActiveDot(this.index);
        this.slides.style.setProperty('--slides-offset', this.index);
      }, 5000);
    } else {
      clearInterval(this.autoPlay);
    }
  };

  setActiveDot = index => {
    const allDots = this.controls.querySelectorAll('.nav-dot');

    allDots.forEach(dot => {
      dot.classList.remove('active');
    });

    allDots.forEach(dot => {
      if (parseInt(dot.getAttribute('data-slide')) === Math.abs(index)) {
        dot.classList.add('active');
      }
    });
  };

  static get observedAttributes() {
    return ['inview', 'autoplay'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'inview') {
      // this.style.setProperty('--slide-container-width', `calc(var(--slide-container-height) * ${parseInt(newValue)})`)
    }

    if (name === 'autoplay') {
      if (newValue === 'true') {
        // this.startAutoPlay(true)
      } else {
        // this.startAutoPlay(false)
      }
    }
  }
}

const MilesImageSliderName = 'miles-image-slider';

if (!customElements.get(MilesImageSliderName)) {
  customElements.define(MilesImageSliderName, MilesImageSlider);
}

export default MilesImageSlider;
export { MilesImageSlider };
