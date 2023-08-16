import styles from './business-card.scss?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles Business Card
 */

const MilesBusinessCardTemplate = document.createElement('template');
MilesBusinessCardTemplate.innerHTML = `
  <style>
	${styles}
    ${cssVariables}
    </style>
  <div id="card-wrapper">
    <div id="card">
      <figure>
          <slot name="image"></slot>
      </figure>
      <div id="group">
        <h3 id="name"></h3>
        <span id="title"></span>
        <span id="email_el">
          <miles-email class="icon"></miles-email>
          <span>Epost:</span>
          <a id="email"></a>
        </span>
        <span id="phone_el">
          <miles-phone class="icon"></miles-phone>
          <span>Telefon:</span>
          <a id="phone"></a>
        </span>
      </div>
    </div>
    <div id="extras">
        <slot></slot>
    </div>
  </div>
    `;

class MilesBusinessCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(MilesBusinessCardTemplate.content.cloneNode(true));
    this.emailEl = this.shadowRoot.querySelector('#email_el');
    this.nameEl = this.shadowRoot.querySelector('#name');
    this.phoneEl = this.shadowRoot.querySelector('#phone_el');
    this.phoneAnchor = this.shadowRoot.querySelector('#phone');
    this.mailAnchor = this.shadowRoot.querySelector('#email');
    this.titleEl = this.shadowRoot.querySelector('#title');
    this.firgureEl = this.shadowRoot.querySelector('figure');
    this.card = this.shadowRoot.querySelector('#card');
  }

  static get observedAttributes() {
    return ['email', 'name', 'phone', 'jobtitle', 'image', 'variant'];
  }

  connectedCallback() {
    if (this.hasAttribute('name')) {
      this.firgureEl
        .querySelector('img')
        .setAttribute('alt', `Profile picture ${this.getAttribute('name')}`);
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'email') {
      this.mailAnchor.setAttribute('href', `mailto:${newValue}`);
      this.mailAnchor.textContent = newValue;
    }

    if (name === 'name') {
      this.nameEl.textContent = newValue;
    }

    if (name === 'phone') {
      const telWithoutSpaces = newValue.replace(/\s/g, '');
      this.phoneAnchor.setAttribute('href', `tel:${telWithoutSpaces}`);
      this.shadowRoot.querySelector('#phone').style.display = 'block';
      this.phoneAnchor.textContent = newValue;
    }

    if (name === 'jobtitle') {
      this.titleEl.textContent = newValue;
    }

    if (name === 'image') {
      const image = document.createElement('img');
      image.setAttribute('src', newValue);

      this.firgureEl.append(image);
    }

    if (name === 'variant') {
      if (newValue === 'wide') {
        this.card.classList.add('wide');
      }

      if (newValue === 'author') {
        this.card.classList.add('author');
      }
    }
  }
}

const MilesBusinessCardName = 'miles-business-card';

if (!customElements.get(MilesBusinessCardName)) {
  customElements.define(MilesBusinessCardName, MilesBusinessCard);
}

export default MilesBusinessCard;
export { MilesBusinessCard };
