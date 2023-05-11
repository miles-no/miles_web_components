import styles from './banner.css?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles Podcast teaser
 */

const template = document.createElement('template');
template.innerHTML = `
      <style>
      	${styles}\n
        ${cssVariables}
        </style>
        <div id="banner">
			<div class="banner-content">
				<h1 id="title"></h1>
				<p id="slogan"></p>
			</div>
        </div>
        `;

class MilesBanner extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.bannerEl = shadow.querySelector('#banner');
    this.titleEl = shadow.querySelector('#title');
    this.sloganEl = shadow.querySelector('#slogan');
  }

  static get observedAttributes() {
    return ['image', 'title', 'slogan', 'url', 'variant'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'image') {
      this.bannerEl.style.backgroundImage = `url(${newValue})`;
    }

    if (name === 'title') {
      this.titleEl.textContent = newValue;
    }

    if (name === 'slogan') {
      this.sloganEl.textContent = newValue;
    }
  }
}

const MilesBannerName = 'miles-banner';

if (!customElements.get(MilesBannerName)) {
  customElements.define(MilesBannerName, MilesBanner);
}

export default MilesBanner;
export { MilesBanner };
