'use client';

import { BiMoon, BiSun } from 'react-icons/bi';

import { useThemeContext } from '@/providers/ThemeProvider';

export const SwitchThemeButton = () => {
	const { theme, changeTheme } = useThemeContext();

	const isDarkMode = theme === 'dark';

	return (
		<button
			type="button"
			onClick={() => changeTheme(isDarkMode ? 'light' : 'dark')}
			aria-label={`${isDarkMode ? 'Wyłącz' : 'Włącz'} ciemny motyw`}
			className="text-2xl hover:text-primary"
		>
			{theme === 'dark' ? <BiSun /> : <BiMoon />}
		</button>
	);
};
