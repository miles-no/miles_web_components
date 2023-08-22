import { propsToAttrs } from '../../../storybook.utils.js';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default {
  title: 'Miles/Components/Cards/Profile',
  tags: ['autodocs'],
  render: args =>
    `<miles-profile-card  ${propsToAttrs(args)}></miles-profile-card>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Card = {
  args: {
    name: 'Ola Nordmann',
    location: 'Oslo',
    jobtitle: 'tjener',
    image: `${BASE_URL}wp-content/uploads/2019/06/miles_smile.png`,
  },
};
