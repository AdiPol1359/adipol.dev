import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Button',
	component: Button,
	tags: ['autodocs'],
	args: { children: 'Example' },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
	args: {
		size: 'sm',
	},
};

export const Medium: Story = {
	args: {
		size: 'md',
	},
};

export const Large: Story = {
	args: {
		size: 'lg',
	},
};
