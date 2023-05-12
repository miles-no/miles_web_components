import styles from './info.css?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles info
 */
class MilesInfo extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.link = null;
    shadow.innerHTML = `
        <style>
      	${styles}\n
        ${cssVariables}
        </style>
        <div class="info">
          <span class="info__icon">
            <slot name="icon"></slot>
          </span>
          <span class="info__description">
            <slot></slot>
          </span>
        </div>
      `;
  }

  static get observedAttributes() {
    return ['link'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'link') {
      this.link = newValue;
      this.shadowRoot.querySelector('.info').classList.add('info--link');
      this.mic = this.shadowRoot
        .querySelector('slot[name="icon"]')
        .assignedNodes()[0];
    }
  }

  connectedCallback() {
    if (this.link) {
      this.addEventListener('click', this.goTo);
      this.addEventListener('mouseenter', this.addColor);
      this.addEventListener('mouseleave', this.removeColor);
    }
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.goTo);
    this.removeEventListener('mouseenter', this.addColor);
    this.removeEventListener('mouseleave', this.removeColor);
  }

  removeColor = e => {
    this.mic.removeAttribute('color');
  };

  addColor = e => {
    this.mic.setAttribute('color', '#ff303b');
  };

  goTo = () => {
    window.location.href = escape(this.link);
  };
}

const MilesInfoName = 'miles-info';

if (!customElements.get(MilesInfoName)) {
  customElements.define(MilesInfoName, MilesInfo);
}

export default MilesInfo;
export { MilesInfo };
