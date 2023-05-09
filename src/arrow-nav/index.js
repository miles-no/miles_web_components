import styles from './arrow-nav.css?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles Arrow Nav
 */

const templateArrowNav = document.createElement('template');
templateArrowNav.innerHTML = `
  <style>
	${styles}\n
  ${cssVariables}
  </style>
  <div id="arrow-nav">
    <svg width="24" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.125 22.9234C12.5313 23.5171 11.5687 23.5171 10.975 22.9234L0 11.9484L10.975 0.973437C11.5687 0.379731 12.5313 0.379732 13.125 0.973438C13.7187 1.56714 13.7187 2.52973 13.125 3.12344L4.3 11.9484L13.125 20.7734C13.7187 21.3671 13.7187 22.3297 13.125 22.9234Z" fill="#3F1221"/>
    </svg>
  </div>
  `;

class MilesArrowNav extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(templateArrowNav.content.cloneNode(true));
    this.nav = shadow.querySelector('#arrow-nav');
  }

  static get observedAttributes() {
    return ['width', 'height', 'color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'width') {
      this.nav.setAttribute('width', newValue);
    }

    if (name === 'height') {
      this.nav.setAttribute('height', newValue);
    }

    if (name === 'color') {
      this.nav.setAttribute('color', newValue);
    }
  }
}

const MilesArrowNavName = 'miles-arrow-nav';

if (!customElements.get(MilesArrowNavName)) {
  customElements.define(MilesArrowNavName, MilesArrowNav);
}

export default MilesArrowNav;
export { MilesArrowNav };
