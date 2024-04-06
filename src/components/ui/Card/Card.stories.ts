import { Card } from './Card';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Card',
	component: Card,
	tags: ['autodocs'],
	args: {
		children: 'Example',
	},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dashed: Story = {
	args: {
		border: 'dashed',
	},
};
