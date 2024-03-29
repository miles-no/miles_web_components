import styles from './podcast-teaser.css?inline';
import cssVariables from '../styles/variables.css?inline';
const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
 * Miles Podcast teaser
 */

const template = document.createElement('template');
template.innerHTML = `
      <style>
      	${styles}\n
        ${cssVariables}
        </style>
        <div class="podcast-teaser">
        <div class="bg">
          <div class="inner">
            <div class="left">
              <a href="" aria-label="Miles Podcast Link">
                <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="46" cy="46" r="46" fill="#EB4645"/>
                <path d="M32 27V65L70 46L32 27Z" fill="#FCF8F3"/>
              </svg>
              </a>
              <div class="text">
                <h3 id="title">UX - med brukeren i sentrum</h3>
                <p id="date">22. Mars - MilesPodden</p>
              </div>
            </div>
          </div>
        </div>
          <miles-info link="">
          <miles-pod slot="icon"></miles-pod>
             <div>Interessert i faglig påfyll?</div>
            <div>Sjekk ut podcasten vår! </div>
          </miles-info>
        </div>
        `;

class MilesPodcastTeaser extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.titlEl = this.shadowRoot.querySelector('#title');
    this.dateEl = this.shadowRoot.querySelector('#date');
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('miles-info')
      .setAttribute('link', `${BASE_URL}milespodden`);
    this.shadowRoot
      .querySelector('a')
      .setAttribute('href', `${BASE_URL}milespodden`);
  }

  static get observedAttributes() {
    return ['episode_title', 'published_date', 'link'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'episode_title') {
      this.titlEl.textContent = newValue;
    }
    if (name === 'published_date') {
      this.dateEl.textContent = `${this.timeFormat(
        new Date(newValue)
      )} - MilesPodden`;
    }
  }

  timeFormat = date => {
    return new Intl.DateTimeFormat('no', {
      month: 'short',
      day: 'numeric',
    }).format(date);
  };
}

const MilesPodcastTeaserName = 'miles-podcast-teaser';

if (!customElements.get(MilesPodcastTeaserName)) {
  customElements.define(MilesPodcastTeaserName, MilesPodcastTeaser);
}

export default MilesPodcastTeaser;
export { MilesPodcastTeaser };
