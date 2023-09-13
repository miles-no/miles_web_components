import styles from './filter-button.scss?inline';
import MilesButton from '../button';
import { isAttributeValueTruthy } from '../shared-component-utilities/customElementUtils.js';

class MilesFilterButton extends MilesButton {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      'filter',
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);

    if (name === 'selected') {
      this.button.classList.toggle(
        'selected',
        isAttributeValueTruthy(newValue)
      );
    }
  }

  connectedCallback() {
    let styleTag = this.shadowRoot.querySelector('style');

    if (styleTag) {
      styleTag.textContent = styles;
    }
    this.button.addEventListener('click', this.clickHandler);
  }

  disconnectedCallback() {
    this.button.removeEventListener('click', this.clickHandler);
  }

  clickHandler = () => {
    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        composed: true,
        detail: {
          value: this.getAttribute('filter')
        },
      })
    );
    this.button.classList.toggle('selected');
  };
}

const MilesButtonName = 'miles-filter-button';

if (!customElements.get(MilesButtonName)) {
  customElements.define(MilesButtonName, MilesFilterButton);
}

export default MilesFilterButton;
export { MilesFilterButton };
