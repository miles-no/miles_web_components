import styles from './banner.css?inline';
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
        <div id="banner">
			<div class="banner-content">
				<h1 id="title"></h1>
				<p id="slogan"></p>
			</div>
			<div class="banner-image"></div>
        </div>
        `;

class MilesBanner extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.banner = shadow.querySelector('.banner-image');
    this.bannerImage = shadow.querySelector('.banner-image');
    this.titleEl = shadow.querySelector('#title');
    this.sloganEl = shadow.querySelector('#slogan');
  }

  static get observedAttributes() {
    return ['image', 'title', 'slogan', 'url', 'variant'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'image') {
      this.bannerImage.style.backgroundImage = `url(${newValue})`;
    }

    if (name === 'title') {
      this.titleEl.textContent = newValue;
    }

    if (name === 'slogan') {
      this.sloganEl.textContent = newValue;
    }

    if (name === 'reversed' && newValue === 'true') {
      this.banner.classList.add('reversed');
    }
  }
}

const MilesBannerName = 'miles-banner';

if (!customElements.get(MilesBannerName)) {
  customElements.define(MilesBannerName, MilesBanner);
}

export default MilesBanner;
export { MilesBanner };
