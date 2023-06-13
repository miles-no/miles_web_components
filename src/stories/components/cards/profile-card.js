import { propsToAttrs } from '../../storybook.utils.js';

export default {
  title: 'Miles/Components',
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
