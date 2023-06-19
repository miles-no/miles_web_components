import { propsToAttrs } from '../storybook.utils.js';
import { ContactCard } from './cards/contact-card.stories';
import { BusinessCard } from './cards/business-card.stories';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: (args, BusinessCardArgs) =>
    `<miles-office-banner ${propsToAttrs(args)}>
        <miles-contact-card ${propsToAttrs(ContactCard.args)} slot="office"></miles-contact-card>
        <miles-business-card ${propsToAttrs(BusinessCard.args)} variant=""></miles-business-card>
        <miles-business-card ${propsToAttrs(BusinessCard.args)} variant=""></miles-business-card>
    </miles-office-banner>`,
};


// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const OfficeBanner = {
  args: {
    background:
        'https://www.miles.no/wp-content/uploads/2021/06/Trondheim.jpg',
    city: 'Trondheim'
  },
};
