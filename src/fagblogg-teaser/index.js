import styles from './fagblogg-teaser.css?inline';
import cssVariables from '../styles/variables.css?inline';

/**
  Miles Fagblogg teaser
*/

const MilesFagbloggTeaserTemplate = document.createElement('template');
MilesFagbloggTeaserTemplate.innerHTML = `
  <style>
	${styles}\n
  ${cssVariables}
  </style>
  <div id="fagblogg-teaser">
    <div class="bg">
      <div id="header">
        <h2>Miles fagblogg</h2>
        <miles-info >
        <miles-pod slot="icon"></miles-pod>
          <div>Interessert i faglig påfyll?</div>
          <div>Sjekk ut faagpodden vår</div>
        </miles-info>
      </div>
      <div class="inner">
        <slot></slot>
      </div>
    </div>

  </div>
`;

class MilesFagbloggTeaser extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(MilesFagbloggTeaserTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    const slotElements = this.shadowRoot
      .querySelector('slot')
      .assignedElements()[0];
    if (slotElements) {
      const images = slotElements.querySelectorAll('img');
      const links = Array.from(slotElements.querySelectorAll('a'));

      Array.from(images).forEach((image, index) => {
        image.setAttribute(
          'style',
          'max-width: var(--maxWidth); height: auto; cursor: pointer;'
        );

        image.setAttribute('data-post', links[index].href);
        image.addEventListener('click', this.goToPost);
      });
    }
  }

  disconnectedCallback() {}

  goToPost = e => {
    window.location.href = escape(e.target.dataset.post);
  };
}

const MilesFagbloggTeaserName = 'miles-fagblogg-teaser';

if (!customElements.get(MilesFagbloggTeaserName)) {
  customElements.define(MilesFagbloggTeaserName, MilesFagbloggTeaser);
}

export default MilesFagbloggTeaser;
export { MilesFagbloggTeaser };
