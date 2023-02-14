import type { ReactNode } from 'react';
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextValue {
	readonly theme: Theme;
	readonly changeTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const getCurrentTheme = (): Theme => {
	const theme = localStorage.getItem('theme');

	if (theme === 'light' || theme === 'dark') {
		return theme;
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
};

export const ThemeProvider = ({
	children,
}: {
	readonly children: ReactNode;
}) => {
	const [theme, setTheme] = useState<Theme>('light');

	const changeTheme = useCallback((theme: Theme) => {
		localStorage.setItem('theme', theme);
		setTheme(theme);
	}, []);

	useEffect(() => {
		changeTheme(getCurrentTheme());
	}, [changeTheme]);

	useEffect(() => {
		const target = document.querySelector('html');

		if (theme === 'light') {
			target?.classList.remove('dark');
		} else {
			target?.classList.add('dark');
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useThemeContext must be use inside ThemeProvider!');
	}

	return context;
};
