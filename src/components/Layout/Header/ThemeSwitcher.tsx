'use client';

import { BiMoon, BiSun } from 'react-icons/bi';

import { useThemeContext } from '@/providers/ThemeProvider';

export const ThemeSwitcher = () => {
	const { theme, changeTheme } = useThemeContext();

	const isDarkMode = theme === 'dark';

	return (
		<button
			type="button"
			onClick={() => changeTheme(isDarkMode ? 'light' : 'dark')}
			aria-label={`${isDarkMode ? 'Wyłącz' : 'Włącz'} ciemny motyw`}
			className="mx-auto mt-10 block text-2xl hover:text-primary sm:ml-8 sm:mt-0"
		>
			{theme === 'dark' ? <BiSun /> : <BiMoon />}
		</button>
	);
};
