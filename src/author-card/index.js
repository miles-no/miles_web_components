import { MilesBusinessCard } from '../business-card';
/*
  Miles Author Card
*/

class MilesAuthorCard extends MilesBusinessCard {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('variant', 'author');
  }

  attributeChangedCallback(name, oldval, newval) {
    if (name !== 'phone' && name !== 'email') {
      super.attributeChangedCallback(name, oldval, newval);
    }
  }
}

const MilesAuthorCardName = 'miles-author-card';

if (!customElements.get(MilesAuthorCardName)) {
  customElements.define(MilesAuthorCardName, MilesAuthorCard);
}

export default MilesAuthorCard;
export { MilesAuthorCard };
