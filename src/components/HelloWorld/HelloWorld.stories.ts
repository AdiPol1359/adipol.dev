import { HelloWorld } from './HelloWorld';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'HelloWorld',
	component: HelloWorld,
	tags: ['autodocs'],
} satisfies Meta<typeof HelloWorld>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
