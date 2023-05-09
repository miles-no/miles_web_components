import styles from './arrow.css?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles Arrow
 */

const MilesArrowTemplate = document.createElement('template');
MilesArrowTemplate.innerHTML = `
  <style>
	${styles}\n
  ${cssVariables}
    </style>
    <div id="arrow">
    <svg width="24" height="41" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.20039 40.8984L0.400391 38.0484L17.5504 20.8984L0.400391 3.74844L3.20039 0.898438L23.2004 20.8984L3.20039 40.8984Z" fill="#FCF8F3"/>
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
