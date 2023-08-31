import styles from './blogg-card.css?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles blog card
 */

const MilesBlogCardTemplate = document.createElement('template');
MilesBlogCardTemplate.innerHTML = `
  <style>
    ${styles}

     ${cssVariables}
  </style>
  <a href="#" id="blog-card-container">
    <figure id="image-container">
      <slot name="image"></slot>
    </figure>
    <div id="group">
        <h2 id="title">Sertifisering i innovasjonsledelse</h2>
      <div>Publisert <span id="posted"></span></div>
      <div>Av <span id="author"></span></div>
    </div>
  </a>
`;

class MilesBlogCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(MilesBlogCardTemplate.content.cloneNode(true));
    this.posted = this.shadowRoot.querySelector('#posted');
    this.author = this.shadowRoot.querySelector('#author');
    this.titleEl = this.shadowRoot.querySelector('#title');
    this.firgureEl = this.shadowRoot.querySelector('figure');
  }

  timeFormat = date => {
    return new Intl.DateTimeFormat('no', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  parseDate = value => {
    const dateComponents = value.replaceAll('.', '/').split('/');
    const day = dateComponents[0];
    const month = dateComponents[1] - 1; // month is zero indexed
    const year = dateComponents[2];
    return new Date(year, month, day);
  };

  static get observedAttributes() {
    return ['url', 'author', 'posted', 'image', 'title'];
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

    if (name === 'title') {
      this.titleEl.textContent = newValue;
    }

    if (name === 'image') {
      const image = document.createElement('img');
      image.setAttribute('src', newValue);
      image.setAttribute('loading', 'lazy');
      image.setAttribute('alt', 'Image for blog card'); // possible to set via WP?
      this.firgureEl.append(image);
    }

    if (name === 'posted') {
      this.posted.textContent = `${this.timeFormat(
        new Date(this.parseDate(newValue))
      )}`;
    }
  }
}

const MilesBlogCardName = 'miles-blog-card';

if (!customElements.get(MilesBlogCardName)) {
  customElements.define(MilesBlogCardName, MilesBlogCard);
}

export default MilesBlogCard;
export { MilesBlogCard };
