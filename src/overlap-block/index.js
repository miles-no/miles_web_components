import styles from './overlap-block.css?inline';
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
    <div class="parent">
      <div class="div1"> </div>
      <div class="div2"> </div>
      <div class="inner">
        <div id="content_grid">
          <div id="feature-block">
          <slot></slot>
          </div>
          <div id="list"></div>
        </div>
      </div>
      <div class="div3"> </div>
      <div class="div4"> </div>
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
    const areas = [
      'Team as a service',
      'Systemutvikling',
      'Prosjektledelse',
      'Testledelse',
      'Smidig Coaching',
      'UX-design',
      'Arkitektur',
      'Rådgivning',
      'AI',
    ];
    const listElement = document.createElement('ul');

    areas.forEach(text => {
      const listItemEl = document.createElement('li');
      listItemEl.innerHTML = `<miles-curve color="currentColor" width="1em"></miles-curve><span>${text}</span>`;
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
