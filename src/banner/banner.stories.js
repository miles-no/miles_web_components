export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args => `<miles-banner image="${args.image}" title="${args.title}" variant="${args.variant}" reverse="${args.reverse}">
    ${args.text}
    </miles-banner>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Banner = {
  args: {
    image:
      'https://www.miles.no/wp-content/uploads/2021/11/Lily-258.jpg',
    title: 'Welcome to our website!',
    text: '<p>Now supporting <strong>bold</strong>, <em>italic</em>, <span style="background:#004047;color:#fff;">colours</span> and other HTML tags</p>',
    variant: 'split',
    reverse: false,
  },
};
