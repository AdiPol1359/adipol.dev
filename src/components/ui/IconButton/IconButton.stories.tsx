import { TbMoodSmile } from 'react-icons/tb';

import { IconButton } from './IconButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'IconButton',
	component: IconButton,
	tags: ['autodocs'],
	args: {
		label: 'Click me!',
		children: <TbMoodSmile />,
	},
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
