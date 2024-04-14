import React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

import { poppins } from '../src/lib/fonts';
import tailwindConfig from '../tailwind.config';

import type { Preview } from '@storybook/react';

import '../src/assets/styles/tailwind.css';

const fullConfig = resolveConfig(tailwindConfig);

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'dark',
					value: fullConfig.theme.colors.navy[950],
				},
			],
		},
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
