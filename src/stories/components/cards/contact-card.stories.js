import { propsToAttrs } from '../../storybook.utils.js';

export default {
  title: 'Miles/Components/Cards/Contact',
  tags: ['autodocs'],
  render: args =>
    `<miles-contact-card  ${propsToAttrs(args)}></miles-contact-card>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Card = {
  args: {
    name: 'Ola Nordmann',
    address: 'Norgeveien 1',
    email: 'ola.miles.no',
    phone: '917 12 345',
    orgnr: '123456789',
    map: '',
  },
};

export const CardBusiness = {
  args: {
    name: 'Miles Oslo AS',
    address: 'Bislettgata 4, 0170',
    email: 'oslo.miles.no',
    phone: '+47 951 44 636',
    orgnr: '888 884 122 MVA',
    map: 'https://www.google.com/maps/place/Bislettgata+4,+0170+Oslo/@59.9246148,10.7320915,17z/data=!3m1!4b1!4m6!3m5!1s0x46416e782e8a3a57:0x2037efb4f642d14c!8m2!3d59.9246148!4d10.7320915!16s%2Fg%2F11csdn8jg1?entry=ttu',
  },
};
