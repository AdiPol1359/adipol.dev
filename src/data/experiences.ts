import type { Experience } from '@/types/experience';

export const experiences: Experience[] = [
	{
		company: { name: 'Code Your Brand', url: 'https://www.codeyourbrand.com/' },
		period: { from: '04.06.2024' },
		position: 'Front-End Developer',
	},
	{
		company: { name: 'SalesPlay X', url: 'https://www.salesplayx.com/' },
		period: { from: '05.01.2024', to: '04.06.2024' },
		position: 'Full-Stack Developer',
	},
	{
		company: { name: 'Codehome', url: 'https://codehome.pl/' },
		period: { from: '23.08.2023', to: '05.01.2024' },
		position: 'Full-Stack Developer',
	},
	{
		company: { name: 'Type of Web', url: 'https://typeofweb.com/' },
		period: { from: '05.12.2022', to: '23.12.2022' },
		position: 'Full-Stack Developer',
	},
];
