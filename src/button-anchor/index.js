import cssVariables from '../styles/variables.css?inline';
import { isAttributeValueTruthy } from '../shared-component-utilities/customElementUtils.js';
/**
 * Miles Button Anchor
 */

const MilesButtonAnchorTemplate = document.createElement('template');
MilesButtonAnchorTemplate.innerHTML = `
        <style>
          ${cssVariables}\n
          :host {
            display: inline-block;
            color: var(--miles_primary_dark);
            background-color: inherit;
          }
          a {
            display: inline-block;
            color: var(--color);
            padding: 0.5rem 1rem;
            border-radius: 3rem;
            border: 2px solid var(--color);
            text-decoration: none;
            font-weight: bold;
            transition: all 0.5s ease;
            white-space: nowrap;
          }
          a:hover, a.selected {
            color: var(--miles_primary_light);
            background-color: var(--color);
          }
        </style>
        <a id="buttonTarget"">
          <slot></slot>
        </a>
      `;

class MilesButtonAnchor extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(MilesButtonAnchorTemplate.content.cloneNode(true));
    this.buttontarget = shadow.querySelector('#buttonTarget');
  }

  static get observedAttributes() {
    return ['href', 'color', 'selected'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'href') {
      this.buttontarget.setAttribute('href', newValue);
    }

    if (name === 'color') {
      this.style.setProperty('--color', newValue);
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
