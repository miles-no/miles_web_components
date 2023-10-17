import styles from './info.css?inline';
import cssVariables from '../styles/variables.css?inline';

const BASE_URL = import.meta.VITE_BASE_URL;

/**
 * Miles info
 */
class MilesInfo extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this._link = "";
    shadow.innerHTML = `
        <style>
      	${styles}\n
        ${cssVariables}
        </style>
        <a href="${this._link}" class="info">
          <span class="info__icon">
            <slot name="icon"></slot>
          </span>
          <span class="info__description">
            <slot></slot>
          </span>
        </a>
      `;
  }

  static get observedAttributes() {
    return ['link'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.anchorEl = this.shadowRoot.querySelector('a'); 

    if (name === 'link' && oldValue !== newValue) {
      this._link = newValue;
      this.anchorEl.setAttribute('href', newValue); 
    }
  }

  connectedCallback() {
    if (this._link) {
      this.anchorEl.setAttribute("href", this._link);
      this.anchorEl.addEventListener('click', this.goTo);
      this.anchorEl.addEventListener('keydown', this.handleKeydown);
      this.anchorEl.classList.add('info--link');
      this.anchorEl.setAttribute('role', 'link');
      this.anchorEl.setAttribute('aria-label', 'Gå til ' + this._link);
      this.anchorEl.setAttribute('tabindex', '0');

      this.mic = this.shadowRoot
        .querySelector('slot[name="icon"]')
        .assignedNodes()[0];
    }
  }

  disconnectedCallback() {
    this.anchorEl.removeEventListener('click', this.goTo);
    this.anchorEl.removeEventListener('keydown', this.handleKeydown);
    this.anchorEl.removeEventListener('mouseenter', this.addColor);
    this.anchorEl.removeEventListener('focus', this.addColor);
    this.anchorEl.removeEventListener('mouseleave', this.removeColor);
    this.anchorEl.removeEventListener('focusout', this.removeColor);
  }

  removeColor = () => {
    this.mic.removeAttribute('color');
  };

  addColor = () => {
    this.mic.setAttribute('color', '#ff303b');
  };

  handleKeydown = event => {
    if (event.key === 'Enter') {
      this.goTo();
    }
  };

  goTo = () => {
    window.location.href = escape(encodeURI(this._link));
  };
}

function escape(url) {
  // Only allow absolute URLs starting with https://www.miles.no and relative URLs
  if (
    (url && url.length > 0 && url.startsWith(BASE_URL)) ||
    url.startsWith('/')
  ) {
    return url;
  }
  throw new Error('Invalid URL.');
}

const MilesInfoName = 'miles-info';

if (!customElements.get(MilesInfoName)) {
  customElements.define(MilesInfoName, MilesInfo);
}

export default MilesInfo;
export { MilesInfo };
