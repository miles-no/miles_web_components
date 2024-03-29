import styles from './fagblogg-teaser.css?inline';
import cssVariables from '../styles/variables.css?inline';
const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
  Miles Fagblogg teaser
*/

const MilesFagbloggTeaserTemplate = document.createElement('template');
MilesFagbloggTeaserTemplate.innerHTML = `
  <style>
  ${cssVariables}\n${styles}
  </style>
  <div id="fagblogg-teaser">
    <div class="bg">
      <div id="header">
        <h2>Miles fagblogg</h2>
        <miles-info link="">
        <miles-pod id="mic" slot="icon"></miles-pod>
          <div>Interessert i faglig påfyll?</div>
          <div>Sjekk ut podcasten vår! </div>
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
    this.mic = this.shadowRoot.querySelector('#mic');
  }

  connectedCallback() {
    const slotElements = this.shadowRoot
      .querySelector('slot')
      .assignedElements()[0];
    if (slotElements) {
      const images = slotElements.querySelectorAll('img');
      const links = Array.from(slotElements.querySelectorAll('a'));

      Array.from(images).forEach((image, index) => {
        image.setAttribute('style', 'height: auto; cursor: pointer;');
        image.setAttribute('loading', 'lazy');
        image.setAttribute('data-post', links[index].href);
        image.addEventListener('click', this.goToPost);
      });
    }

    this.shadowRoot
      .querySelector('miles-info')
      .setAttribute('link', BASE_URL);
  }

  disconnectedCallback() {}

  goToPost = e => {
    window.location.href = escape(encodeURI(e.target.dataset.post));
  };
}

function escape(url) {
  // Only allow absolute URLs starting with https://www.miles.no and relative URLs
  if (url && url.startsWith('https://www.miles.no' || url.startsWith('/'))) {
    return url;
  }
  throw new Error('Invalid URL.');
}

const MilesFagbloggTeaserName = 'miles-fagblogg-teaser';

if (!customElements.get(MilesFagbloggTeaserName)) {
  customElements.define(MilesFagbloggTeaserName, MilesFagbloggTeaser);
}

export default MilesFagbloggTeaser;
export { MilesFagbloggTeaser };
