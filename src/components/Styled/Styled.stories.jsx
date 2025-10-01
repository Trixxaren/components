import {Styled} from '.';

export default {
	title: 'Components/Styled',
	component: Styled,

}

export const Default = {
	args: {
		text: "Hello storybook!",
		fontSize: 16,
	},
};

export const Large = {
	args: {
		text: "Large text",
		fontSize: 24,
		},
};

export const InvalidProp = {
	args: {
		text: 123,
	},
};
