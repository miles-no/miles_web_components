import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args => {
    return `<miles-banner ${propsToAttrs(args)}>
      <p>Now supporting <strong>bold</strong>, <em>italic</em>, <span style="background:#004047;color:#fff;">colours</span> and other HTML tags</p>
    </miles-banner>`;
  },
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Banner = {
  args: {
    image: 'https://www.miles.no/wp-content/uploads/2021/11/Lily-258.jpg',
    title: 'Welcome to our website!',
    variant: 'split',
    reverse: false,
    icon: 'miles-curve',
  },
};
