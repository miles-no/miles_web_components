import styles from './button-anchor.scss?inline';
import cssVariables from '../styles/variables.css?inline';
import { isAttributeValueTruthy } from '../shared-component-utilities/customElementUtils.js';
/**
 * Miles Button Anchor
 */

const MilesButtonAnchorTemplate = document.createElement('template');
MilesButtonAnchorTemplate.innerHTML = `
        <style>
          ${cssVariables}
          ${styles}
        </style>
        <a id="buttonTarget">
          <slot></slot><div class="count"></div>
        </a>
      `;

class MilesButtonAnchor extends HTMLElement {
  count = null;
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(MilesButtonAnchorTemplate.content.cloneNode(true));
    this.buttontarget = shadow.querySelector('#buttonTarget');
    this.countEl = shadow.querySelector('.count');
  }

  static get observedAttributes() {
    return ['href', 'color', 'selected', 'count'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'href') {
      this.buttontarget.setAttribute('href', newValue);
    }

    if (name === 'color') {
      this.style.setProperty('--color', newValue);
    }

    if (name === 'count') {
      if (newValue > 0) {
        this.countEl.textContent = newValue;
      } else {
        this.countEl.textContent = null;
      }
    }

    if (name === 'selected') {
      this.buttontarget.setAttribute(
        'aria-selected',
        isAttributeValueTruthy(newValue)
      );
      this.buttontarget.classList.toggle(
        'selected',
        isAttributeValueTruthy(newValue)
      );
    }
  }

  connectedCallback() {}
}

const MilesButtonAnchorName = 'miles-button-anchor';

if (!customElements.get(MilesButtonAnchorName)) {
  customElements.define(MilesButtonAnchorName, MilesButtonAnchor);
}

export default MilesButtonAnchor;
export { MilesButtonAnchor };
