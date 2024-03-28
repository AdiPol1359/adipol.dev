import { Container } from './Container';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Container',
	component: Container,
	tags: ['autodocs'],
	args: { children: 'Example' },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
