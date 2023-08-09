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

      let infoElement = this.shadowRoot.querySelector('.info');
      infoElement.classList.add('info--link');
      infoElement.setAttribute('role', 'link');
      infoElement.setAttribute('aria-label', 'Gå til ' + newValue);
      infoElement.setAttribute('tabindex', '0');

      this.mic = this.shadowRoot
        .querySelector('slot[name="icon"]')
        .assignedNodes()[0];
    }
  }

  connectedCallback() {
    if (this.link) {
      this.addEventListener('click', this.goTo);
      this.addEventListener('keydown', this.handleKeydown);
      this.addEventListener('mouseenter', this.addColor);
      this.addEventListener('focus', this.addColor);

      this.addEventListener('mouseleave', this.removeColor);
      this.addEventListener('focusout', this.removeColor);
    }
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.goTo);
    this.removeEventListener('keydown', this.handleKeydown);
    this.removeEventListener('mouseenter', this.addColor);
    this.removeEventListener('focus', this.addColor);
    this.removeEventListener('mouseleave', this.removeColor);
    this.removeEventListener('focusout', this.removeColor);
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
    window.location.href = escape(encodeURI(this.link));
  };
}

function escape(url) {
  // Only allow absolute URLs starting with https://www.miles.no and relative URLs
  if (
    (url && url.length > 0 && url.startsWith('https://www.miles.no')) ||
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
