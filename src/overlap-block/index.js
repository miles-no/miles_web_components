import styles from './overlap-block.scss?inline';
import cssVariables from '../styles/variables.css?inline';
/**
 * Miles Overlap Block
 */

const MilesOverlapBlockTemplate = document.createElement('template');
MilesOverlapBlockTemplate.innerHTML = `
  <style>
	${styles}\n
  ${cssVariables}
  </style>
  <div id="overlap-block">
    <div class="content-block">
      <slot></slot>
    </div>
    <div class="overlap"></div>
    <div class="list-block">
      <div id="list"></div>
    </div>
    <!-- <miles-bulb color="var(--miles_secondary_two)" width="3rem"></miles-bulb> -->
  </div>
`;

class MilesOverlapBlock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(MilesOverlapBlockTemplate.content.cloneNode(true));
    this.list = this.shadowRoot.querySelector('#list');
    this.featureBlockEl = this.shadowRoot.querySelector('#feature-block');
  }

  connectedCallback() {
    const areas = {
      'Team as a service': '/team-as-a-service',
      Systemutvikling: '/fagomrader/#system',
      Prosjektledelse: '/fagomrader/#prosjekt',
      Testledelse: '/fagomrader/#test',
      'Smidig Coaching': '/fagomrader/#smidig',
      'UX-design': '/fagomrader/#design',
      Arkitektur: '/fagomrader/#system',
      Rådgivning: '/fagomrader/#radgivning',
      AI: '/fagomrader/#ai',
    };
    const listElement = document.createElement('ul');

    Object.entries(areas).forEach(([text, path]) => {
      const listItemEl = document.createElement('li');
      listItemEl.innerHTML = `<miles-curve color="currentColor" width="1em"></miles-curve><a href="${path}" style="color:white;">${text}</a>`;
      listElement.append(listItemEl);
    });
    this.list.append(listElement);

    // Move slotted content to shadowDOM
    this.featureBlockEl.append(...this.childNodes);
  }

  disconnectedCallback() {}
}

const MilesOverlapBlockName = 'miles-overlap-block';

if (!customElements.get(MilesOverlapBlockName)) {
  customElements.define(MilesOverlapBlockName, MilesOverlapBlock);
}

export default MilesOverlapBlock;
export { MilesOverlapBlock };
