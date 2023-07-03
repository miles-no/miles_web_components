import styles from './image-block.scss?inline';
import cssVariables from '../styles/variables.css?inline';

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
    this.contentElement = this.shadowRoot.querySelector('.image-block__content');

  }

  createButton(text) {
    const button = document.createElement( 'a' );
    button.setAttribute("class", "button");
    button.textContent = text;
    if(this.href) {
      button.setAttribute("href", this.getAttribute('href'));
    }
    this.contentElement.appendChild( button );
  }

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
      if(newValue) {
        this.style.setProperty('--text-color', newValue);
      }
    }

    if (name === 'background') {
      if(newValue) {
        this.style.setProperty('--background-color', newValue);
      }
    }

    if (name === 'button') {
      if(newValue) {
        this.createButton(newValue);
      }
    }

    if (name === 'href') {
      const buttonElement = this.shadowRoot.querySelector('.button');

      if(newValue && buttonElement) {
        buttonElement.setAttribute("href", newValue);
      }
    }
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

const MilesImageBlockName = 'miles-image-block';

if (!customElements.get(MilesImageBlockName)) {
  customElements.define(MilesImageBlockName, MilesImageBlock);
}

export default MilesImageBlock;
export { MilesImageBlock };
