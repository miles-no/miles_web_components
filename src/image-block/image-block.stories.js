
export default {
	title: 'Miles/Components',
	tags: ['autodocs'],
	argTypes: {
		image: {
			required: true
		},
		reverse: {
			control: 'boolean',
		},
		background: {
			control: 'color'
		},
		color: {
			control: 'color'
		},
	},
	render: args => `<div style="width: 100%;max-width: 1440px;">
		<miles-image-block background="${args.background}" color="${args.color}" reverse="${args.reverse}" image="${args.image}" button="${args.button}" href="${args.href}" alt="${args.alt}">
			<h2>Lorem ipsum</h2>
			<p>Donec sagittis tellus mi, sed consequat nisi luctus et. Donec porttitor dignissim leo in euismod. Pellentesque egestas volutpat tristique. Praesent dolor arcu, fermentum vel scelerisque eu, efficitur ac ex. Proin lacus est, venenatis id feugiat ut, molestie a neque.</p>
			<p>Maecenas at ipsum sollicitudin, egestas sapien eu, auctor erat. Morbi id rhoncus ante. In id felis nisl.</p>
        </miles-image-block>
    </div>`,
};


export const ImageBlock = {
	args: {
		image: 'https://loremflickr.com/540/420/dog',
		alt: '',
		reverse: false,
		button: '',
		href: '',
		background: '',
		color: '',
	},
};
