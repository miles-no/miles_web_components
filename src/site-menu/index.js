import styles from './site-menu.css?inline';
import cssVariables from '../styles/variables.css?inline';

const SiteMenuTemplate = document.createElement('template');
SiteMenuTemplate.innerHTML = /* html */ `
	<style>
	    ${styles}\n ${cssVariables}
	</style>
	<div id="menu">
	    <div id="nav-icon" class="menu-toggle-icon" tabindex="0" role="button" aria-haspopup="true" aria-label="Meny">
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
    const shadow = this.attachShadow({
      mode: 'open',
    });
    shadow.append(SiteMenuTemplate.content.cloneNode(true));
    this.burgerEl = shadow.querySelector('#nav-icon');
    this.menuContent = shadow.querySelector('#menu-content');

    this.burgerEl.setAttribute('aria-expanded', 'false');
  }

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

    // Add event listener for clicks outside the menu
    document.addEventListener('click', this.closemenu);

    // Prevent event propagation when clicking the menu
    this.menuContent.addEventListener('click', this.stopEventPropagation);
    this.burgerEl.addEventListener('click', this.stopEventPropagation);

    window.addEventListener('keydown', this.handleEscapeKeydown);
  }

  disconnectedCallback() {
    this.burgerEl.removeEventListener('click', this.openmenu);
    document.removeEventListener('click', this.closemenu);
    window.removeEventListener('keydown', this.handleEscapeKeydown);
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

  menuIsOpen = () => {
    return this.burgerEl.getAttribute('aria-expanded') === 'true' || false;
  };

  closemenu = event => {
    if (!this.menuIsOpen()) return;

    // Clicks inside menu should not close menu -->
    // Only proceed if event target is not inside menuContent
    if (this.menuContent.contains(event.target)) return;

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

  stopEventPropagation = event => {
    event.stopPropagation();
  };

  handleEscapeKeydown = event => {
    if (event.key === 'Escape') {
      this.closemenu(event);
    }
  };
}

const SiteMenuName = 'miles-site-menu';

if (!customElements.get(SiteMenuName)) {
  customElements.define(SiteMenuName, SiteMenu);
}

export default SiteMenu;
export { SiteMenu };
