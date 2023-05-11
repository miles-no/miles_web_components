import styles from './podcast-card.css?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles Podcast teaser
 */

const template = document.createElement('template');
template.innerHTML = `
      <style>
      	${styles}\n
        ${cssVariables}
        </style>
        <div class="podcast-card">
        <div class="bg">
          <div class="text">
            <h3 id="title">UX - med brukeren i sentrum</h3>
            <p id="date">22. Mars - MilesPodden</p>
          </div>
		  <div id="summary">
	 		<p id="description"></p>	
		  	<slot></slot>
		  </div>
		  <div id="player"></div>
        </div>
        </div>
        `;

class MilesPodcastCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.titlEl = this.shadowRoot.querySelector('#title');
    this.dateEl = this.shadowRoot.querySelector('#date');
    this.summaryEl = this.shadowRoot.querySelector('#summary');
    this.descriptionEl = this.shadowRoot.querySelector('#description');
    this.playerEl = this.shadowRoot.querySelector('#player');
  }

  static get observedAttributes() {
    return ['episode_title', 'published_date', 'link', 'description', 'url'];
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

    if (name === 'description') {
      this.descriptionEl.textContent = newValue;
    }

    if (name === 'url') {
      this.playerEl.appendChild(this.createPlayer(newValue));
    }
  }

  timeFormat = date => {
    return new Intl.DateTimeFormat('no', {
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  createPlayer = url => {
    const player = document.createElement('audio');
    player.setAttribute('controls', '');
    player.setAttribute('preload', 'none');
    player.setAttribute('src', url);
    return player;
  };
}

const MilesPodcastCardName = 'miles-podcast-card';

if (!customElements.get(MilesPodcastCardName)) {
  customElements.define(MilesPodcastCardName, MilesPodcastCard);
}

export default MilesPodcastCard;
export { MilesPodcastCard };
