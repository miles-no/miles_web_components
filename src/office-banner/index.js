import styles from './office-banner.css?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles Office banner
 */

const MilesOfficeBannerTemplate = document.createElement('template');
MilesOfficeBannerTemplate.innerHTML = `
  <style>
	${styles}\n
  ${cssVariables}
  </style>
  <div id="banner">
    <slot name="bannerimage"></slot>
    <div id="menu">
      <div id="people"><slot></slot></div>
    </div>
    <div id="triggerBg">
      <div id="triggerEl"><slot name="bannerheading"></slot><miles-arrow class="open" ></miles-arrow></div>
    </div>
    <div id="content">
      
    </div>
  </div>
`;

class MilesOfficeBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(MilesOfficeBannerTemplate.content.cloneNode(true));
    this.banner = this.shadowRoot.querySelector('#banner');
    this.menu = this.shadowRoot.querySelector('#menu');
    this.people = this.shadowRoot.querySelector('#people');
    this.triggerEl = this.shadowRoot.querySelector('#triggerEl');
    this.triggerBg = this.shadowRoot.querySelector('#triggerBg');
    this.header = null;
  }

  connectedCallback() {
    const rects = this.banner.getBoundingClientRect();
    if (this.triggerEl && rects.width > 769) {
      this.triggerEl.setAttribute('style', 'cursor: pointer; ');
      this.triggerBg.addEventListener('click', this.toggleMenu);
    } else {
      this.triggerEl.querySelector('miles-arrow').classList.add('open');
      this.menu.classList.add('open');
      this.banner.classList.add('open');
    }
  }

  disconnectedCallback() {
    this.triggerBg.removeEventListener('click', this.toggleMenu);
  }

  toggleMenu = () => {
    const cards = this.menu.querySelectorAll('miles-business-card');
    const rects = this.banner.getBoundingClientRect();
    this.menu.classList.toggle('open');
    this.banner.classList.toggle('open');
    if (this.menu.classList.contains('open')) {
      this.triggerEl.querySelector('miles-arrow').classList.remove('open');
      if (rects.width < 769) {
        this.banner.setAttribute(
          'style',
          `height: calc(calc(${cards.length} * var(--headerHeight)) + 300px);`
        );
      }
    } else {
      this.banner.removeAttribute('style');

      this.triggerEl.querySelector('miles-arrow').classList.add('open');
      this.banner.classList.toggle('open');
    }
  };
}

const MilesOfficeBannerName = 'miles-office-banner';

if (!customElements.get(MilesOfficeBannerName)) {
  customElements.define(MilesOfficeBannerName, MilesOfficeBanner);
}

export default MilesOfficeBanner;
export { MilesOfficeBanner };
