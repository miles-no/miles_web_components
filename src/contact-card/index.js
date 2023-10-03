import styles from './contact-card.css?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles Contact Card
 */

const MilesContactCardTemplate = document.createElement('template');
MilesContactCardTemplate.innerHTML = `
  <style>
	${styles}\n
  ${cssVariables}
    </style>
    <div id="wrapper">
      <h2></h2>
      <div id="address"></div>
      <a id="email"></a>
      <a id="phone"></a>
      <slot name="orgnr"></slot>
    </div>
    `;

const OrganizationNumberField = document.createElement('div');
OrganizationNumberField.innerHTML = `
  <div id="orgnrlabel">Organisasjonsnummer:</div>
  <div aria-describedby="orgnrlabel" id="orgnr"></div>
`;

class MilesContactCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(MilesContactCardTemplate.content.cloneNode(true));

    this.nameEl = this.shadowRoot.querySelector('h2');
    this.adresseEl = this.shadowRoot.querySelector('#address');
    this.emailEl = this.shadowRoot.querySelector('#email');
    this.phoneEl = this.shadowRoot.querySelector('#phone');
    this.orgnrSlot = this.shadowRoot.querySelector('slot[name="orgnr"]');
  }

  static get observedAttributes() {
    return ['map', 'name', 'address', 'email', 'phone', 'orgnr'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'name') {
      this.nameEl.textContent = newValue;
    }

    if (name === 'map') {
      this.adresseEl.dataset.mapurl = newValue;
    }

    if (name === 'address') {
      this.adresseEl.textContent = newValue;
    }

    if (name === 'email') {
      this.emailEl.setAttribute('href', `mailto:${newValue}`);
      this.emailEl.textContent = newValue;
    }

    if (name === 'phone') {
      const telWithoutSpaces = newValue.replace(/\s/g, '');
      this.phoneEl.setAttribute('href', `tel:${telWithoutSpaces}`);
      this.phoneEl.textContent = newValue;
    }

    // only add orgnr field if orgnr is set
    if (name === 'orgnr') {
      if (newValue && newValue.length > 0) {
        this.orgnrSlot.innerHTML = OrganizationNumberField.innerHTML;
        const orgnrEl = this.shadowRoot.querySelector('#orgnr');
        orgnrEl.textContent = newValue;
      } else {
        this.orgnrSlot.innerHTML = '';
      }
    }
  }

  connectedCallback() {
    if (this.adresseEl.dataset.mapurl) {
      this.adresseEl.innerHTML = `<a href="${this.adresseEl.dataset.mapurl}">${this.adresseEl.textContent}</a>`;
    }
  }

  disconnectedCallback() {}
}

const MilesContactCardName = 'miles-contact-card';

if (!customElements.get(MilesContactCardName)) {
  customElements.define(MilesContactCardName, MilesContactCard);
}

export default MilesContactCard;
export { MilesContactCard };
