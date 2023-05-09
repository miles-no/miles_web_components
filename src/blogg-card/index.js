import styles from './blogg-card.css?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles blog card
 */

const MilesBlogCardTemplate = document.createElement('template');
MilesBlogCardTemplate.innerHTML = `
  <style>
	${styles}\n
  ${cssVariables}
  </style>
  <div id="blog-card">
    <a href="#">
      <slot name="image"></slot>
    </a>
    <div class="text">
    <a href="#">
      <slot name="title"></slot>
    </a>
    <slot name="meta"></slot>
    
    <div>Skrevet av <span id="author"></span></div>
    <div><span id="posted"></span></div>
    <span id="updated"></span>
    </div>
  </div>
`;

class MilesBlogCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(MilesBlogCardTemplate.content.cloneNode(true));
    this.posted = this.shadowRoot.querySelector('#posted');
    this.updated = this.shadowRoot.querySelector('#updated');
    this.author = this.shadowRoot.querySelector('#author');
  }

  static get observedAttributes() {
    return ['url', 'author', 'posted', 'updated'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'url') {
      this.shadowRoot.querySelectorAll('a').forEach(el => {
        el.setAttribute('href', newValue);
      });
    }

    if (name === 'author') {
      this.author.textContent = newValue;
    }
  }

  connectedCallback() {
    const imageEl = this.shadowRoot
      .querySelector('slot[name="image"]')
      .assignedElements();
    if (imageEl[0]?.children) {
      Array.from(imageEl[0]?.children).forEach(el => {
        el.style.objectFit = 'cover';
        el.style.aspectRatio = '2/3';
        el.style.width = '100%';
      });
    }

    const postedEl = this.shadowRoot
      .querySelector('slot[name="meta"]')
      .assignedElements();
    if (postedEl[0]?.children) {
      Array.from(postedEl[0]?.children).forEach(el => {
        const timeArray = Array.from(el.children[0].children);
        this.posted.textContent = `${this.timeFormat(
          new Date(timeArray[0].dateTime)
        )}`;
        this.updated.textContent = `${this.timeFormat(
          new Date(timeArray[1].dateTime)
        )}`;
      });
      postedEl[0].remove();
    }
  }

  timeFormat = date => {
    return new Intl.DateTimeFormat('no', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  disconnectedCallback() {}
}

const MilesBlogCardName = 'miles-blog-card';

if (!customElements.get(MilesBlogCardName)) {
  customElements.define(MilesBlogCardName, MilesBlogCard);
}

export default MilesBlogCard;
export { MilesBlogCard };
