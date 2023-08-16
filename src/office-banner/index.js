import styles from './office-banner.scss?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles Office banner
 */

const MilesOfficeBannerTemplate = document.createElement('template');
MilesOfficeBannerTemplate.innerHTML = `
	<style>
		${styles}
		${cssVariables}
	</style>
	<div id="banner" class="office-banner">
		<div class="office-banner__content">
		    <div class="office-banner__trigger js-banner-trigger">
		        <button aria-label="Toggles details menu" aria-controls="details_block"  class="office-banner__title">Oslo</button>
		        <miles-arrow class="office-banner__trigger-arrow"></miles-arrow>
		    </div>
		    <div class="anim" id="details_block">
			    <div class="office-banner__details">
			        <div class="office-banner__office">
			            <slot name="office"></slot>
			        </div>
			        <div class="office-banner__people">
			            <slot></slot>
			        </div>
			    </div>
		    </div>
        </div>
		<div class="office-banner__background" id="bannerImage"></div>
	</div>
`;

class MilesOfficeBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(MilesOfficeBannerTemplate.content.cloneNode(true));
    this.banner = this.shadowRoot.querySelector('#banner');
    this.triggerEl = this.shadowRoot.querySelector('.js-banner-trigger');
    this.detailsEl = this.shadowRoot.querySelector('#details_block');

    this.backgroundEl = this.shadowRoot.querySelector(
      '.office-banner__background'
    );
    this.titleEl = this.shadowRoot.querySelector('.office-banner__title');
    this.header = null;
  }

  static get observedAttributes() {
    return ['background', 'city'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'background') {
      this.backgroundEl.style.backgroundImage = `url(${newValue})`;
    }

    if (name === 'city') {
      this.titleEl.textContent = newValue;
    }
  }

  connectedCallback() {
    this.triggerEl.addEventListener('click', this.toggleMenu);
  }

  disconnectedCallback() {
    this.triggerEl.removeEventListener('click', this.toggleMenu);
  }

  toggleMenu = () => {
    this.banner.classList.toggle('office-banner--open');
    if (this.banner.classList.contains('office-banner--open')) {
      this.detailsEl.style.display = 'block';
    } else {
      this.detailsEl.style.display = 'none';
    }
  };
}

const MilesOfficeBannerName = 'miles-office-banner';

if (!customElements.get(MilesOfficeBannerName)) {
  customElements.define(MilesOfficeBannerName, MilesOfficeBanner);
}

export default MilesOfficeBanner;
export { MilesOfficeBanner };
