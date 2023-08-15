import styles from './image-block.scss?inline';
import cssVariables from '../styles/variables.css?inline';
import { safeUrl } from '../shared-component-utilities/customElementUtils.js';

const MilesImageBlockTemplate = document.createElement('template');
MilesImageBlockTemplate.innerHTML = `
  <style>
    ${styles}
    ${cssVariables}
  </style>
  <div class="image-block">
    <div class="image-block__image">
      <img id="image" alt="Miles image card image" /> 
    </div>
    <div class="image-block__content">
      <div class="centering">
        <slot></slot>
      </div>
    </div>
  </div>
`;

class MilesImageBlock extends HTMLElement {
  get href() {
    return this.hasAttribute('href');
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(MilesImageBlockTemplate.content.cloneNode(true));

    this.imageBlockElement = this.shadowRoot.querySelector('.image-block');
    this.image = this.shadowRoot.querySelector('#image');
    this.contentElement = this.shadowRoot.querySelector(
      '.image-block__content'
    );

    this.resizeObserver;
  }

  createButton(text) {
    const button = document.createElement('miles-button');
    button.setAttribute('type', 'button');
    button.setAttribute('variant', 'secondary');
    button.textContent = text;
    if (this.href) {
      button.setAttribute('value', this.getAttribute('href'));
    }
    this.contentElement.querySelector('.centering').appendChild(button);
  }

  adjustImageHeight = () => {
    try {
      const contentHeight = this.contentElement.getClientRects()[0].height;
      const imageHeight = this.shadowRoot
        .querySelector('.image-block')
        .getClientRects()[0].height;

      console.log('1', contentHeight);
      console.log('2', imageHeight);

      if (contentHeight > imageHeight && imageHeight > 0) {
        this.imageBlockElement.style.setProperty(
          '--textblock-height',
          this.contentElement.getClientRects()[0].height + 'px'
        );
      }
    } catch (error) {
      console.warn(error);
    }
  };

  static get observedAttributes() {
    return ['image', 'color', 'background', 'reverse', 'alt', 'href', 'button'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'alt') {
      if (newValue) {
        this.image.setAttribute('alt', newValue);
      }
    }

    if (name === 'image') {
      const tempImg = 'https://picsum.photos/540/420';
      this.image.setAttribute('src', newValue ? newValue : tempImg);
    }

    if (name === 'reverse') {
      if (newValue === 'true') {
        this.imageBlockElement.classList.add('image-block--reverse');
      }
    }

    if (name === 'color') {
      if (newValue) {
        this.style.setProperty('--text-color', newValue);
      }
    }

    if (name === 'background') {
      if (newValue) {
        this.style.setProperty('--background-color', newValue);
      }
    }

    if (name === 'button') {
      if (newValue) {
        this.createButton(newValue);
      }
    }

    if (name === 'href') {
      const buttonElement = this.shadowRoot.querySelector('miles-button');

      if (newValue && buttonElement) {
        buttonElement.setAttribute('value', newValue);
      }
    }
  }

  connectedCallback() {
    const buttonElement = this.shadowRoot.querySelector('miles-button');
    buttonElement.addEventListener('click', () => {
      // eslint-disable-next-line xss/no-location-href-assign
      window.location.href = safeUrl(buttonElement.getAttribute('value'));
    });

    this.resizeObserver = new ResizeObserver(this.adjustImageHeight);
    this.resizeObserver.observe(this.contentElement);

    this.image.addEventListener('load', this.adjustImageHeight);
  }

  disconnectedCallback() {
    try {
      this.resizeObserver.disconnect();
    } catch (error) {
      console.warn(error);
    }

    this.image.removeEventListener('load', this.adjustImageHeight);
  }
}

const MilesImageBlockName = 'miles-image-block';

if (!customElements.get(MilesImageBlockName)) {
  customElements.define(MilesImageBlockName, MilesImageBlock);
}

export default MilesImageBlock;
export { MilesImageBlock };
