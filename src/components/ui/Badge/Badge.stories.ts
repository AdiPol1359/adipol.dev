import { Badge } from './Badge';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Badge',
	component: Badge,
	tags: ['autodocs'],
	args: {
		children: 'Example',
	},
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
