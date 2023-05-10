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
          el.querySelector('a[href="#"]').remove();
          this.menuContent.append(el);
        }
      });

    this.burgerEl.addEventListener('click', this.openmenu);
  }

  disconnectedCallback() {
    this.burgerEl.removeEventListener('click', this.openmenu);
  }

  openmenu = event => {
    console.log('menu toggle');
    event.preventDefault();
    this.burgerEl.classList.toggle('open-menu');
    this.menuContent.classList.toggle('open');
  };
}

const SiteMenuName = 'miles-site-menu';

if (!customElements.get(SiteMenuName)) {
  customElements.define(SiteMenuName, SiteMenu);
}

export default SiteMenu;
export { SiteMenu };
