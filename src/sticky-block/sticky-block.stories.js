
export default {
	title: 'Miles/Components',
	tags: ['autodocs'],
	argTypes: {
		background: {
			control: 'color'
		},
		color: {
			control: 'color'
		},
		'heading-color': {
			control: 'color'
		},
	},
	render: args => `<div>
		<miles-sticky-block heading="${args.heading}" background="${args.background}" color="${args.color}" heading-color="${args['heading-color']}">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis elit nec purus dignissim bibendum. Nam nec rhoncus arcu. Donec vel convallis neque. Duis auctor ut dolor sed fringilla. Integer convallis posuere consequat. Pellentesque laoreet eget felis ut consectetur. Integer lobortis at metus ut congue. Nam nec diam at magna vulputate tempus ultrices tristique tortor. In blandit dui vestibulum tincidunt hendrerit.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis elit nec purus dignissim bibendum. Nam nec rhoncus arcu. Donec vel convallis neque. Duis auctor ut dolor sed fringilla. Integer convallis posuere consequat. Pellentesque laoreet eget felis ut consectetur. Integer lobortis at metus ut congue. Nam nec diam at magna vulputate tempus ultrices tristique tortor. In blandit dui vestibulum tincidunt hendrerit.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis elit nec purus dignissim bibendum. Nam nec rhoncus arcu. Donec vel convallis neque. Duis auctor ut dolor sed fringilla. Integer convallis posuere consequat. Pellentesque laoreet eget felis ut consectetur. Integer lobortis at metus ut congue. Nam nec diam at magna vulputate tempus ultrices tristique tortor. In blandit dui vestibulum tincidunt hendrerit.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis elit nec purus dignissim bibendum. Nam nec rhoncus arcu. Donec vel convallis neque. Duis auctor ut dolor sed fringilla. Integer convallis posuere consequat. Pellentesque laoreet eget felis ut consectetur. Integer lobortis at metus ut congue. Nam nec diam at magna vulputate tempus ultrices tristique tortor. In blandit dui vestibulum tincidunt hendrerit.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis elit nec purus dignissim bibendum. Nam nec rhoncus arcu. Donec vel convallis neque. Duis auctor ut dolor sed fringilla. Integer convallis posuere consequat. Pellentesque laoreet eget felis ut consectetur. Integer lobortis at metus ut congue. Nam nec diam at magna vulputate tempus ultrices tristique tortor. In blandit dui vestibulum tincidunt hendrerit.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis elit nec purus dignissim bibendum. Nam nec rhoncus arcu. Donec vel convallis neque. Duis auctor ut dolor sed fringilla. Integer convallis posuere consequat. Pellentesque laoreet eget felis ut consectetur. Integer lobortis at metus ut congue. Nam nec diam at magna vulputate tempus ultrices tristique tortor. In blandit dui vestibulum tincidunt hendrerit.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis elit nec purus dignissim bibendum. Nam nec rhoncus arcu. Donec vel convallis neque. Duis auctor ut dolor sed fringilla. Integer convallis posuere consequat. Pellentesque laoreet eget felis ut consectetur. Integer lobortis at metus ut congue. Nam nec diam at magna vulputate tempus ultrices tristique tortor. In blandit dui vestibulum tincidunt hendrerit.</p>
        </miles-sticky-block>
    </div>`,
};


export const StickyBlock = {
	args: {
		heading: 'This is the title',
		background: '',
		color: '',
		'heading-color': null,
	},
};
