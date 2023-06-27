export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  argTypes: {
    selected: {
      control: 'boolean',
      description: 'select or unselect button',
    }
  },
  render: args =>
    `<miles-button-anchor href="${args.href}" color="${args.color}" selected="${args.selected}" count="${args.count}">
        ${args.children}
    </miles-button-anchor>`,
};

export const ButtonAnchor = {
  args: {
    children: 'Button text',
    href: 'https://archive.org/embed/NeverGonnaGiveYouUp',
    color: '#3F1221',
    selected: 'false',
    count: 0,
  },
};
