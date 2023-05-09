import styles from './podcast-teaser.css?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles Podcast teaser
 */

class MilesPodcastTeaser extends HTMLElement {
  // https://feeds.acast.com/public/shows/63d28f41cd0f720011930608
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
      	${styles}\n
        ${cssVariables}
        </style>
        <div class="podcast-teaser">
        <div class="bg">
          <div class="inner">
            <div class="left">
              <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="46" cy="46" r="46" fill="#EB4645"/>
                <path d="M32 27V65L70 46L32 27Z" fill="#FCF8F3"/>
              </svg>
              <div class="text">
                <h3>UX - med brukeren i sentrum</h3>
                <p>22. Mars - MilesPodden</p>
              </div>
            </div>
            <a class="more" href="/milespodden">Hør alle episodene</a>
          </div>
        </div>
          <miles-info>
          <miles-pod slot="icon"></miles-pod>
          Hør siste episode av MilesPodden!
          </miles-info>
        </div>
        `;
  }
}

const MilesPodcastTeaserName = 'miles-podcast-teaser';

if (!customElements.get(MilesPodcastTeaserName)) {
  customElements.define(MilesPodcastTeaserName, MilesPodcastTeaser);
}

export default MilesPodcastTeaser;
export { MilesPodcastTeaser };
