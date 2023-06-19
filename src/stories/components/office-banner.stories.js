import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args =>
    `<miles-office-banner ${propsToAttrs(args)}></miles-office-banner>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const OfficeBanner = {
  args: {
    background:
        'https://www.miles.no/wp-content/uploads/2021/06/Trondheim.jpg',
    city: 'Trondheim'
  },
};
