import styles from './banner.scss?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles Podcast teaser
 */

const template = document.createElement('template');
template.innerHTML = `
	<style>
		${styles}
		${cssVariables}
	</style>
	<div class="banner">
		<div class="banner__content">
          <div class="banner__container">
              <h1 id="title"></h1>
              <div class="banner__inner">
                  <slot></slot>
              </div>
          </div>
		</div>
		<div part="banner-image" class="banner__image">
      <slot name="right__banner__content">
      </slot>
    </div>
	</div>
`;

class MilesBanner extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(template.content.cloneNode(true));

    this.banner = shadow.querySelector('.banner');
    this.bannerImage = shadow.querySelector('.banner__image');
    this.titleEl = shadow.querySelector('#title');
  }

  static get observedAttributes() {
    return ['image', 'title', 'variant', 'reverse', 'icon'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'image') {
      this.bannerImage.style.backgroundImage = `url(${newValue})`;
    }

    if (name === 'title') {
      this.titleEl.textContent = newValue;
    }

    if (name === 'reverse' && newValue === 'true') {
      this.banner.classList.add('reverse');
    }

    if (name === 'variant' && newValue === 'split') {
      this.banner.classList.add('split');
    }

    if (name === 'icon') {
      if (newValue && newValue.length > 0) {
        const IconElement = document.createElement(newValue);
        IconElement.setAttribute('part', 'icon');
        this.bannerImage.appendChild(IconElement);
      }
    }
  }
}

const MilesBannerName = 'miles-banner';

if (!customElements.get(MilesBannerName)) {
  customElements.define(MilesBannerName, MilesBanner);
}

export default MilesBanner;
export { MilesBanner };
