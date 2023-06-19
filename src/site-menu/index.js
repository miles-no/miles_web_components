import styles from './site-menu.css?inline';
import cssVariables from '../styles/variables.css?inline';

const SiteMenuTemplate = document.createElement('template');
SiteMenuTemplate.innerHTML = `
        <style>
          	${styles}\n
           ${cssVariables}
        </style>
        <div id="menu">
  				<div id="nav-icon" class="menu-toggle-icon">
    					<span></span>
    					<span></span>
    					<span></span>
    					<span></span>
  			  </div>
          <div id="menu-content"></div>
    			<slot></slot>
        </div>  
      `;

/**
 * Miles Site Menu
 */
class SiteMenu extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(SiteMenuTemplate.content.cloneNode(true));
    this.burgerEl = shadow.querySelector('#nav-icon');
    this.menuContent = shadow.querySelector('#menu-content');

    this.burgerEl.setAttribute('tabindex', '0');
    this.burgerEl.setAttribute('role', 'button');
    this.burgerEl.setAttribute('aria-haspopup', 'true');
    this.burgerEl.setAttribute('aria-expanded', 'false');
    this.burgerEl.setAttribute('aria-label', 'Meny');
  }

  /*
  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {

  }
  */

  connectedCallback() {
    this.shadowRoot
      .querySelector('slot')
      .assignedElements()
      .forEach(el => {
        if (el.tagName === 'NAV') {
          el.querySelector('a[href="#"]') &&
            el.querySelector('a[href="#"]').remove();
          this.menuContent.append(el);
        }
      });

    this.burgerEl.addEventListener('keydown', this.handleKeys);
    this.burgerEl.addEventListener('click', this.openmenu);

    window.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        this.closemenu(event);
      }
    });
  }

  disconnectedCallback() {
    this.burgerEl.removeEventListener('click', this.openmenu);
  }

  handleKeys = event => {
    // keyCode 13 is the enter key
    if (event.keyCode === 13) {
      this.openmenu(event, true);
    }
  };

  openmenu = (event, fromKeyboard) => {
    event.preventDefault();

    const expanded =
      this.burgerEl.getAttribute('aria-expanded') === 'true' || false;
    this.burgerEl.setAttribute('aria-expanded', !expanded);
    this.burgerEl.classList.toggle('open-menu');
    this.menuContent.classList.toggle('open');
    // Move focus to the first element in the menu when it's open
    if (!expanded && fromKeyboard) {
      this.menuContent.querySelector('a').focus();
    }
  };

  closemenu = event => {
    event.preventDefault();
    // Close the menu
    const expanded =
      this.burgerEl.getAttribute('aria-expanded') === 'true' || false;
    if (expanded) {
      this.burgerEl.setAttribute('aria-expanded', false);
      this.burgerEl.classList.remove('open-menu');
      this.menuContent.classList.remove('open');
      // Move focus back to the hamburger menu
      this.burgerEl.focus();
    }
  };
}

const SiteMenuName = 'miles-site-menu';

if (!customElements.get(SiteMenuName)) {
  customElements.define(SiteMenuName, SiteMenu);
}

export default SiteMenu;
export { SiteMenu };
