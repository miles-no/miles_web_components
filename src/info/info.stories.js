import { propsToAttrs } from '../storybook.utils.js';
const BASE_URL = import.meta.env.VITE_BASE_URL;

const decoratorStyles = `
    width: 90vw;
    height: 50vh;
    margin-top: 5em;
    border: 5px dotted #ccc;
    position: absolute;
  `;

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      if (context.viewMode === 'docs') {
        return Story();
      }

      return `
      <div style="${decoratorStyles}">${Story()}</div>`;
    },
  ],
  render: args => `<miles-info  ${propsToAttrs(args)}>
    <miles-pod id="mic" slot="icon"></miles-pod>
          <div>Interessert i faglig påfyll?</div>
          <div>Sjekk ut podcasten vår! </div>
    </miles-info>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Info = {
  args: {
    link: `${BASE_URL}milespodden/`,
  },
};
