import styles from './podcast-card.scss?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles Podcast teaser
 */

const template = document.createElement('template');
template.innerHTML = `
      <style>
      	${styles}
        ${cssVariables}
        </style>
<div class="podcast-card">
  <div class="podcast-card__image">
    <svg width="140" height="52" viewBox="0 0 140 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M80.406 0.914062H76.4551V22.4948H80.406V0.914062Z" fill="black"/>
      <path d="M101.833 17.9934C102.836 18.9052 104.386 19.4522 105.876 19.4522C106.94 19.4522 107.76 18.9351 107.76 18.2057C107.76 15.9867 100.618 16.7769 100.618 12.0349C100.618 9.20803 103.353 7.44531 106.271 7.44531C108.187 7.44531 110.283 8.17471 111.257 8.93495L109.402 11.7926C108.642 11.2456 107.639 10.7893 106.575 10.7893C105.481 10.7893 104.569 11.2148 104.569 11.975C104.569 13.8901 111.713 13.1299 111.713 18.2366C111.713 21.0634 108.947 22.7962 105.847 22.7962C103.81 22.7962 101.653 22.0976 99.9199 20.8203L101.833 17.9934Z" fill="black"/>
      <path d="M52.5941 7.87145C48.8933 7.87145 46.0629 4.84725 46.0629 1.21875H41.9551V22.4956H46.0584V9.23159C46.1184 9.38311 46.2945 9.53991 46.387 9.61214C48.0493 10.9265 50.1689 11.7043 52.5941 11.7043C55.0193 11.7043 57.1388 10.9265 58.8011 9.61214C58.8936 9.53903 59.0698 9.38311 59.1297 9.23159V22.4956H63.233V1.21875H59.1253C59.1253 4.84725 56.2948 7.87145 52.5941 7.87145Z" fill="black"/>
      <path d="M97.5209 20.1586C96.092 21.8606 93.7523 22.8031 91.4724 22.8031C87.0651 22.8031 83.752 19.764 83.752 15.1435C83.752 11.0402 86.548 7.45312 90.9254 7.45312C94.9988 7.45312 97.8856 10.8878 97.8856 14.9911C97.8856 15.3867 97.8556 15.7813 97.794 16.1161H87.5813C87.7945 18.1827 89.4657 19.6116 91.5632 19.6116C93.2352 19.6116 94.5724 18.669 95.2719 17.9096L97.5209 20.1586ZM93.843 13.2284C93.7214 11.922 92.5366 10.6447 90.9254 10.6447C89.2842 10.6447 87.9469 11.8912 87.7646 13.2284H93.843Z" fill="black"/>
      <path d="M69.9197 0C71.3486 0 72.5035 1.0941 72.5035 2.52295C72.5035 3.95092 71.3486 5.04502 69.9197 5.04502C68.4908 5.04502 67.3359 3.95092 67.3359 2.52295C67.3368 1.0941 68.4917 0 69.9197 0ZM71.8956 22.4925H67.9447V7.75032H71.8956V22.4925Z" fill="black"/>
      <path d="M123.609 48.6821C122.18 50.384 119.84 51.3266 117.56 51.3266C113.153 51.3266 109.84 48.2874 109.84 43.667C109.84 39.5637 112.636 35.9766 117.013 35.9766C121.087 35.9766 123.973 39.4113 123.973 43.5146C123.973 43.9101 123.944 44.3048 123.882 44.6395H113.669C113.882 46.7062 115.554 48.135 117.651 48.135C119.323 48.135 120.66 47.1924 121.36 46.4331L123.609 48.6821ZM119.931 41.7519C119.809 40.4455 118.624 39.1681 117.013 39.1681C115.372 39.1681 114.035 40.4146 113.852 41.7519H119.931Z" fill="black"/>
      <path d="M45.9615 43.1301V50.8822H41.9551V30.2969H49.6491C53.7137 30.2969 56.4138 32.9969 56.4138 36.7135C56.4138 40.4583 53.7137 43.1301 49.6491 43.1301H45.9615ZM49.1549 39.6751C51.1581 39.6751 52.3774 38.5141 52.3774 36.7426C52.3774 34.9138 51.1581 33.7809 49.1549 33.7809H45.9906V39.6743H49.1549V39.6751Z" fill="black"/>
      <path d="M72.2662 43.7495C72.2662 48.1339 69.0438 51.3272 64.7757 51.3272C60.5076 51.3272 57.2852 48.1339 57.2852 43.7495C57.2852 39.3361 60.5076 36.1719 64.7757 36.1719C69.0438 36.1719 72.2662 39.3361 72.2662 43.7495ZM68.4051 43.7495C68.4051 41.0495 66.6635 39.685 64.7757 39.685C62.8879 39.685 61.1463 41.0495 61.1463 43.7495C61.1463 46.4205 62.8879 47.8141 64.7757 47.8141C66.6635 47.8141 68.4051 46.4496 68.4051 43.7495Z" fill="black"/>
      <path d="M88.9334 48.3039C88.9334 49.2624 88.9916 50.3071 89.0497 50.8877H85.3622C85.304 50.597 85.2168 49.9002 85.2168 49.2324C84.5781 50.3644 83.1264 51.2356 81.2103 51.2356C77.1457 51.2356 74.2422 48.0423 74.2422 43.7161C74.2422 39.5353 77.0585 36.2547 81.0941 36.2547C83.5615 36.2547 84.7235 37.2713 85.1296 38.0254V29.8672H88.9326V48.3039H88.9334ZM81.6746 47.7816C83.6487 47.7816 85.1877 46.2717 85.1877 43.6879C85.1877 41.1333 83.6487 39.7106 81.6746 39.7106C79.7004 39.7106 78.1324 41.1623 78.1324 43.717C78.1332 46.2717 79.6423 47.7816 81.6746 47.7816Z" fill="black"/>
      <path d="M106.726 48.3039C106.726 49.2624 106.785 50.3071 106.843 50.8877H103.155C103.097 50.597 103.01 49.9002 103.01 49.2324C102.371 50.3644 100.919 51.2356 99.0033 51.2356C94.9387 51.2356 92.0352 48.0423 92.0352 43.7161C92.0352 39.5353 94.8515 36.2547 98.887 36.2547C101.355 36.2547 102.516 37.2713 102.923 38.0254V29.8672H106.726V48.3039H106.726ZM99.4676 47.7816C101.442 47.7816 102.981 46.2717 102.981 43.6879C102.981 41.1333 101.442 39.7106 99.4676 39.7106C97.4934 39.7106 95.9253 41.1623 95.9253 43.717C95.9253 46.2717 97.4353 47.7816 99.4676 47.7816Z" fill="black"/>
      <path d="M130.824 50.8886H126.963V36.6045H130.709V38.3751C131.58 36.8943 133.292 36.2266 134.831 36.2266C138.374 36.2266 139.999 38.7522 139.999 41.8882V50.8886H136.138V42.556C136.138 40.9589 135.354 39.7106 133.496 39.7106C131.812 39.7106 130.825 41.017 130.825 42.6722V50.8886H130.824Z" fill="black"/>
      <path d="M17.4573 39.8594H14.0508V47.8793H17.4573V39.8594Z" fill="#A83224"/>
      <path d="M24.698 47.4922H6.8125V50.8987H24.698V47.4922Z" fill="#A83224"/>
      <path d="M20.616 25.9249V22.5184H24.6445V19.6201H20.616V16.2136H24.6445V13.3198H20.616V9.9133H24.6445V9.78645C24.6445 5.05856 20.8116 1.22656 16.0845 1.22656H15.4291C10.7012 1.22656 6.86914 5.05944 6.86914 9.78645V26.2394C6.86914 30.9673 10.7021 34.7993 15.4291 34.7993H16.0845C20.8125 34.7993 24.6445 30.9664 24.6445 26.2394V25.924H20.616V25.9249Z" fill="#A83224"/>
      <path d="M15.7563 41.6771C7.0677 41.6771 0 34.6095 0 25.9219H3.40655C3.40655 32.7314 8.94672 38.2706 15.7554 38.2706C22.5641 38.2706 28.1043 32.7305 28.1043 25.9219H31.5108C31.5117 34.6095 24.444 41.6771 15.7563 41.6771Z" fill="#A83224"/>
    </svg>
  </div>
  <div class="podcast-card__content">
    <h3 class="podcast-card__title" id="title" data-episode=""></h3>
    <div class="podcast-card__date" id="date"></div>
    <div id="summary">
      <p class="podcast-card__description" id="description"></p>	
      <slot></slot>
    </div>
    <div id="player">
      <slot name="player"></slot>
    </div>
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
    return [
      'episode_number',
      'episode_title',
      'published_date',
      'link',
      'description',
      'url',
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'episode_number') {
      this.titlEl.setAttribute('data-episode', `#${newValue}`);
    }

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
    const player = document.createElement('miles-audio-player');
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
