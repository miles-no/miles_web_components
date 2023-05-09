import styles from './info-block.css?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles Info Block
 */

const MilesInfoBlockTemplate = document.createElement('template');
MilesInfoBlockTemplate.innerHTML = `
  <style>
	${styles}\n
  ${cssVariables}
    </style>
    <div id="wrapper">
    <div id="heading">
      <h2><slot name="heading"></slot></h2>
    </div>
      <p><slot></slot></p>
    </div>
    `;

class MilesInfoBlock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(MilesInfoBlockTemplate.content.cloneNode(true));
    this.headingEl = this.shadowRoot.querySelector('h2');
  }

  static get observedAttributes() {
    return ['heading'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'heading') {
      this.headingEl.textContent = newValue;
    }
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

const MilesInfoBlockName = 'miles-info-block';

if (!customElements.get(MilesInfoBlockName)) {
  customElements.define(MilesInfoBlockName, MilesInfoBlock);
}

export default MilesInfoBlock;
export { MilesInfoBlock };
