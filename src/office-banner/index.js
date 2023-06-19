import styles from './office-banner.scss';
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
		        <h2 class="office-banner__title">Oslo</h2>
		        <miles-arrow class="office-banner__trigger-arrow"></miles-arrow>
		    </div>
		    <div class="anim">
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


		this.backgroundEl = this.shadowRoot.querySelector('.office-banner__background');
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
		this.triggerBg.removeEventListener('click', this.toggleMenu);
	}

	toggleMenu = () => {
		this.banner.classList.toggle('office-banner--open');
	};
}

const MilesOfficeBannerName = 'miles-office-banner';

if (!customElements.get(MilesOfficeBannerName)) {
	customElements.define(MilesOfficeBannerName, MilesOfficeBanner);
}

export default MilesOfficeBanner;
export { MilesOfficeBanner };
