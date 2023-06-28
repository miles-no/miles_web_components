import styles from './sticky-block.scss?inline';
import cssVariables from '../styles/variables.css?inline';

const MilesStickyBlockTemplate = document.createElement('template');
MilesStickyBlockTemplate.innerHTML = `
  <style>
    ${styles}
    ${cssVariables}
  </style>
  <div class="sticky-block">
    <div class="sticky-block__wrapper">
      <div class="sticky-block__title">
         <h3></h3>
      </div>
      <div class="sticky-block__content">
        <slot></slot>
      </div>
    </div>
  </div>
`;

class MilesStickyBlock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(MilesStickyBlockTemplate.content.cloneNode(true));

    this.titleElement = this.shadowRoot.querySelector('.sticky-block__title h3');

  }


  static get observedAttributes() {
    return ['heading', 'color', 'background'];
  }

  attributeChangedCallback(name, oldValue, newValue) {

    if (name === 'heading') {
      this.titleElement.textContent = newValue;
    }

    if (name === 'color') {
      if(newValue) {
        this.style.setProperty('--text-color', newValue);
      }
    }

    if (name === 'background') {
      if(newValue) {
        this.style.setProperty('--background-color', newValue);
      }
    }
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

const MilesStickyBlockName = 'miles-sticky-block';

if (!customElements.get(MilesStickyBlockName)) {
  customElements.define(MilesStickyBlockName, MilesStickyBlock);
}

export default MilesStickyBlock;
export { MilesStickyBlock };
