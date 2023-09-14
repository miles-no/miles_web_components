import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Icons',
  tags: ['autodocs'],
  render: args => `<miles-curve ${propsToAttrs(args)}></miles-curve>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Curve = {
  args: {
    color: '#b72318',
    width: '100',
    height: '100',
  },
};

/*
bottom: 45%;
transform: rotate(90deg);
display: block;
position: absolute;
right: 25px;
height: 200px;
width: 200px;

*/
