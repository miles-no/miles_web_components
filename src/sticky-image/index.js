import styles from './sticky-image.scss?inline';
import cssVariables from '../styles/variables.css?inline';

const MilesStickyImageBlockTemplate = document.createElement('template');
MilesStickyImageBlockTemplate.innerHTML = `
  <style>
    ${styles}
    ${cssVariables}
  </style>
  <div class="sticky-image">
    <div class="sticky-image__wrapper">
      <div class="sticky-image__image"></div>
      <div class="sticky-image__content">
        <slot></slot>
      </div>
    </div>
  </div>
`;

class MilesStickyImageBlock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(MilesStickyImageBlockTemplate.content.cloneNode(true));

    this.mainElement = this.shadowRoot.querySelector('.sticky-image');
    this.imageWrapper = this.shadowRoot.querySelector('.sticky-image__image');

  }

  addImage(src) {
    const image = document.createElement( 'img' );
    image.setAttribute('src', src);
    this.imageWrapper.appendChild( image );
  }


  static get observedAttributes() {
    return ['image', 'color', 'background', 'alt', 'reverse'];
  }

  attributeChangedCallback(name, oldValue, newValue) {

    if (name === 'image') {
      this.addImage(newValue);
    }

    if (name === 'color') {
      if(newValue && newValue !== 'undefined') {
        this.style.setProperty('--text-color', newValue);
      }
    }

    if (name === 'background') {
      if(newValue && newValue !== 'undefined') {
        this.style.setProperty('--background-color', newValue);
      }
    }

    if (name === 'alt') {
      if (newValue) {
        this.imageWrapper.querySelector('img').setAttribute('alt', newValue);
      }
    }

    if (name === 'reverse') {
      if (newValue === 'true') {
        this.mainElement.classList.add('sticky-image--reverse');
      }
    }
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

const MilesStickyImageBlockName = 'miles-sticky-image-block';

if (!customElements.get(MilesStickyImageBlockName)) {
  customElements.define(MilesStickyImageBlockName, MilesStickyImageBlock);
}

export default MilesStickyImageBlock;
export { MilesStickyImageBlock };
