import { propsToAttrs } from '../storybook.utils.js';
const BASE_URL = import.meta.env.VITE_BASE_URL;
export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args => `
<miles-overlap-block ${propsToAttrs(args)}>
  <div id="" class="custom-block-feature-block miles-overlap-block">
    <div class="feature-wrapper">
      <div class="feature-content">
        <h2 class="feature-title">Kompetanse i særklasse</h2>
        <p class="feature-text">
          Miles er et IT-konsulentselskap der gleden over faget og hverandre er de viktigste ledestjernene.
          Kjernekompetansen vår ligger i utvikling, design, prosjetledelse og rådgivning.
        </p>
        <div class="link_wrapper">
          <a href="${BASE_URL}}dette-kan-vi-i-miles/" class="link">Les mer om vår kompetanse </a>
        </div>
      </div>
    </div>
  </div>
</miles-overlap-block>
`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const OverlapBlock = {};
