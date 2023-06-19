import styles from './arrow.css?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles Arrow
 */

const MilesArrowTemplate = document.createElement('template');
MilesArrowTemplate.innerHTML = `
  <style>
	${styles}
  ${cssVariables}
    </style>
    <div id="arrow">
      <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.69141 28.7704L21.1914 11.2266L38.6914 28.7704L36.1977 31.2266L21.1914 16.1827L6.18516 31.2266L3.69141 28.7704Z" fill="#FCF8F3"/>
      </svg>
    </div>
   `;

class MilesArrow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(MilesArrowTemplate.content.cloneNode(true));
  }
}

const MilesArrowName = 'miles-arrow';

if (!customElements.get(MilesArrowName)) {
  customElements.define(MilesArrowName, MilesArrow);
}

export default MilesArrow;
export { MilesArrow };
