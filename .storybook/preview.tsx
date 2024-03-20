import React from 'react';

import { poppins } from '../src/lib/fonts';

import type { Preview } from '@storybook/react';

import '../src/assets/styles/tailwind.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<div className={`font-sans ${poppins.variable}`}>
				<Story />
			</div>
		),
	],
};

export default preview;
