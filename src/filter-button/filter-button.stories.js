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
    `<miles-filter-button color="${args.color}" selected="${args.selected}" count="${args.count}">
        ${args.children}
    </miles-filter-button>`,
};

export const FilterButton = {
  args: {
    children: 'Button text',
    href: 'https://archive.org/embed/NeverGonnaGiveYouUp',
    color: '#3F1221',
    selected: 'false',
    count: 0,
  },
};
