import styles from './info.css?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles info
 */
class MilesInfo extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
        <style>
      	${styles}\n
        ${cssVariables}
        </style>
        <div class="info">
          <span class="info__icon">
            <slot name="icon"></slot>
          </span>
          <span class="info__description">
            <slot></slot>
          </span>
        </div>
      `;
  }
}

const MilesInfoName = 'miles-info';

if (!customElements.get(MilesInfoName)) {
  customElements.define(MilesInfoName, MilesInfo);
}

export default MilesInfo;
export { MilesInfo };
