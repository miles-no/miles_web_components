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
      <div id="orgnrlabel">Organisasjonsnummer:</div>
      <div aria-describedby="ordnrlabel" id="orgnr"></div>
    </div>
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
    this.orgnrEl = this.shadowRoot.querySelector('#orgnr');
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
      this.phoneEl.setAttribute('href', `tel:${newValue}`);
      this.phoneEl.textContent = newValue;
    }

    if (name === 'orgnr') {
      this.orgnrEl.textContent = newValue;
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
