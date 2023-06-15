import { propsToAttrs } from '../../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args =>
    `<miles-contact-card  ${propsToAttrs(args)}></miles-contact-card>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const ContactCard = {
  args: {
    name: 'Ola Nordmann',
    address: 'Norgeveien 1',
    email: 'ola.miles.no',
    phone: '917 12 345',
    orgnr: '123456789',
    image:
      'https://www.miles.no/newsite/wp-content/uploads/2019/06/miles_smile.png',
  },
};
