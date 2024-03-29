import styles from './profile-card.scss?inline';
import cssVariables from '../styles/variables.css?inline';

const MilesProfileCardTemplate = document.createElement('template');
MilesProfileCardTemplate.innerHTML = `
        <style>
          	${styles}\n
           ${cssVariables}
        </style>
       
        <div class="profile-card">
          <figure>
            <a id="profile-image-url" href="#">
              <img class="profile-card__image" id="profileimage" loading="lazy" /> 
            </a>
          </figure>
          <div class="profile-card__info">
            <a id="profile-name-url" href="#">
              <p id="name"></p>
            </a>
            <div class="description jobtitle">
              <p id="jobtitle"></p>
            </div>
            <div class="description location">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6 6.61789V1.62965H11.2V4.07671L8 0.688477L0 9.15907H2.4V16.6885H6.4V11.0414H9.6V16.6885H13.6V9.15907H16L13.6 6.61789ZM6.4 7.27671C6.4 6.24142 7.12 5.39436 8 5.39436C8.88 5.39436 9.6 6.24142 9.6 7.27671H6.4Z" fill="#EB4645"/>
              </svg>
              <p id="location"></p>
            </div>
          </div>
        </div>  
      `;

/**
 * Miles Profile Card
 */
class MilesProfileCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(MilesProfileCardTemplate.content.cloneNode(true));

    this.officeLocationEl = this.shadowRoot.querySelector('#location');
    this.jobTitleEl = this.shadowRoot.querySelector('#jobtitle');
    this.consultantNameEl = this.shadowRoot.querySelector('#name');
    this.profileImageEl = this.shadowRoot.querySelector('#profileimage');

    this.profileImageUrl = this.shadowRoot.querySelector("#profile-image-url");
    this.profileNameUrl = this.shadowRoot.querySelector("#profile-name-url");
  }

  static get observedAttributes() {
    return ['image', 'name', 'jobtitle', 'location', 'preloadimage', "profileurl"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'image') {
      if (newValue === '' || newValue === null) {
        const fallbackAvatar =
          'https://www.miles.no/wp-content/uploads/2019/06/miles_smile.png';
        this.profileImageEl.setAttribute('src', fallbackAvatar);
      } else {
        this.profileImageEl.setAttribute('src', newValue);
      }
    }

    if (name === 'location') {
      this.officeLocationEl.textContent = newValue;
    }

    if (name === 'jobtitle') {
      this.jobTitleEl.textContent = newValue;
    }

    if (name === 'name') {
      this.profileImageEl.setAttribute('alt', newValue);
      this.consultantNameEl.textContent = newValue;
    }

    if (name === 'preloadimage') {
      this.profileImageEl.removeAttribute('loading');
    }

    if (name === 'profileurl') {
      this.profileImageUrl.setAttribute('href', newValue);
      this.profileNameUrl.setAttribute('href', newValue);
    }
  }

  connectedCallback() { }

  disconnectedCallback() { }
}

const MilesProfileCardName = 'miles-profile-card';

if (!customElements.get(MilesProfileCardName)) {
  customElements.define(MilesProfileCardName, MilesProfileCard);
}

export default MilesProfileCard;
export { MilesProfileCard };