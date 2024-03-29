import { propsToAttrs } from '../storybook.utils.js';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default {
  title: 'Miles/Components/Cards/Author',
  tags: ['autodocs'],
  argTypes: {
    // 👇 All Button stories expect a label arg
    variant: {
      control: 'select',
      options: ['wide', 'default'],
      description: 'Overwritten description',
    },
  },
  render: args =>
    `<miles-author-card  ${propsToAttrs(args)}></miles-author-card>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Card = {
  args: {
    name: 'Ola Nordmann',
    email: 'ola.miles.no',
    phone: '917 12 345',
    variant: 'wide',
    jobtitle: 'tjener',
    image: `${BASE_URL}wp-content/uploads/2019/06/miles_smile.png`,
  },
};
