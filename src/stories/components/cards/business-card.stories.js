import { propsToAttrs } from '../../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args =>
    `<miles-business-card  ${propsToAttrs(args)}></miles-business-card>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const BusinessCard = {
  args: {
    name: 'Ola Nordmann',
    email: 'ola.miles.no',
    phone: '917 12 345',
    variant: 'wide',
    jobtitle: 'tjener',
    image:
      'https://www.miles.no/newsite/wp-content/uploads/2019/06/miles_smile.png',
  },
};
