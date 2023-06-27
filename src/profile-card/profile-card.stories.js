import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components/Cards/Profile',
  tags: ['autodocs'],
  render: args =>
      `<miles-profile-card  ${propsToAttrs(args)}></miles-profile-card>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const ProfileCard = {
  args: {
    name: 'Ola Nordmann',
    location: 'Oslo',
    jobtitle: 'tjener',
    image:
        'https://www.miles.no/newsite/wp-content/uploads/2019/06/miles_smile.png',
  },
};

export const MultipleProfileCards = {
  args: {
    name: 'Ola Nordmann',
    location: 'Oslo',
    jobtitle: 'tjener',
    image:
        'https://www.miles.no/wp-content/uploads/2019/06/miles_smile.png',
  },
  render: args =>
      `<section class="cv-filter" style="max-width: 1440px;">
        <miles-profile-card  ${propsToAttrs(args)}></miles-profile-card>
        <miles-profile-card  ${propsToAttrs(args)}></miles-profile-card>
        <miles-profile-card  ${propsToAttrs(args)}></miles-profile-card>
        <miles-profile-card  ${propsToAttrs(args)}></miles-profile-card>
        <miles-profile-card  ${propsToAttrs(args)}></miles-profile-card>
        <miles-profile-card  ${propsToAttrs(args)}></miles-profile-card>
        <miles-profile-card  ${propsToAttrs(args)}></miles-profile-card>
        <miles-profile-card  ${propsToAttrs(args)}></miles-profile-card>
      </section>`,
};
