
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
	},
	render: args => `<div>
		<miles-sticky-image-block background="${args.background}" color="${args.color}" image="${args.image}" reverse="${args.reverse}">
			${args.child}
        </miles-sticky-image-block>
    </div>`,
};


export const StickyImage = {
	args: {
		image: 'https://loremflickr.com/960/1280/dog',
		reverse: false,
		background: '',
		color: '',
		alt: '',
		child: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis elit nec purus dignissim bibendum. Nam nec rhoncus arcu. Donec vel convallis neque. Duis auctor ut dolor sed fringilla. Integer convallis posuere consequat. Pellentesque laoreet eget felis ut consectetur. Integer lobortis at metus ut congue. Nam nec diam at magna vulputate tempus ultrices tristique tortor. In blandit dui vestibulum tincidunt hendrerit.</p>' +
			'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis elit nec purus dignissim bibendum. Nam nec rhoncus arcu. Donec vel convallis neque. Duis auctor ut dolor sed fringilla. Integer convallis posuere consequat. Pellentesque laoreet eget felis ut consectetur. Integer lobortis at metus ut congue. Nam nec diam at magna vulputate tempus ultrices tristique tortor. In blandit dui vestibulum tincidunt hendrerit.</p>' +
			'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis elit nec purus dignissim bibendum. Nam nec rhoncus arcu. Donec vel convallis neque. Duis auctor ut dolor sed fringilla. Integer convallis posuere consequat. Pellentesque laoreet eget felis ut consectetur. Integer lobortis at metus ut congue. Nam nec diam at magna vulputate tempus ultrices tristique tortor. In blandit dui vestibulum tincidunt hendrerit.</p>' +
			'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis elit nec purus dignissim bibendum. Nam nec rhoncus arcu. Donec vel convallis neque. Duis auctor ut dolor sed fringilla. Integer convallis posuere consequat. Pellentesque laoreet eget felis ut consectetur. Integer lobortis at metus ut congue. Nam nec diam at magna vulputate tempus ultrices tristique tortor. In blandit dui vestibulum tincidunt hendrerit.</p>' +
			'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis elit nec purus dignissim bibendum. Nam nec rhoncus arcu. Donec vel convallis neque. Duis auctor ut dolor sed fringilla. Integer convallis posuere consequat. Pellentesque laoreet eget felis ut consectetur. Integer lobortis at metus ut congue. Nam nec diam at magna vulputate tempus ultrices tristique tortor. In blandit dui vestibulum tincidunt hendrerit.</p>' +
			'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis elit nec purus dignissim bibendum. Nam nec rhoncus arcu. Donec vel convallis neque. Duis auctor ut dolor sed fringilla. Integer convallis posuere consequat. Pellentesque laoreet eget felis ut consectetur. Integer lobortis at metus ut congue. Nam nec diam at magna vulputate tempus ultrices tristique tortor. In blandit dui vestibulum tincidunt hendrerit.</p>'
	},
};
