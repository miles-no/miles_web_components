import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components/Cards/Business',
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
    `<miles-business-card  ${propsToAttrs(args)}></miles-business-card>`,
};

//

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const BusinessCard = {
  args: {
    name: 'Ola Nordmann',
    email: 'ola.miles.no',
    phone: '917 12 345',
    variant: 'default',
    jobtitle: 'Pressekontakt / markedstjener',
    image:
      'https://www.miles.no/wp-content/uploads/2019/06/miles_smile.png',
  },
};
