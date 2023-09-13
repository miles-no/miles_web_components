import styles from './button.scss?inline';
import cssVariables from '../styles/variables.css?inline';
import { isAttributeValueTruthy } from '../shared-component-utilities/customElementUtils.js';

const MilesButtonTemplate = document.createElement('template');
MilesButtonTemplate.innerHTML = `
  <style>
    ${styles}
    ${cssVariables}
  </style>
  <button type="button">
	<slot>
  </button>
`;

class MilesButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(MilesButtonTemplate.content.cloneNode(true));
    this.button = shadow.querySelector('button');
  }

  static get observedAttributes() {
    return [
      'color',
      'selected',
      'name',
      'disabled',
      'value',
      'variant',
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'color') {
      this.style.setProperty('--color', newValue);
    }

    if (name === 'name') {
      this.button.setAttribute('name', newValue);
    }

    if (name === 'value') {
      this.button.setAttribute('name', newValue);
    }

    if (name === 'variant') {
      this.button.classList.add(`${newValue}`);
    }

    if (name === 'selected') {
      if (isAttributeValueTruthy(newValue)) {
        this.button.setAttribute('selected', '');
      } else {
        this.button.removeAttribute('selected');
      }
    }
  }
}

const MilesButtonName = 'miles-button';

if (!customElements.get(MilesButtonName)) {
  customElements.define(MilesButtonName, MilesButton);
}

export default MilesButton;
export { MilesButton };
