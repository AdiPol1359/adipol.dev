'use client';

import { ThemeProvider } from './ThemeProvider';

import type { ReactNode } from 'react';

type AppProvidersProps = Readonly<{
	children: ReactNode;
}>;

export const AppProviders = ({ children }: AppProvidersProps) => (
	<ThemeProvider>{children}</ThemeProvider>
);
