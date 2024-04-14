import devFAQ from '@/assets/images/projects/devfaq.png';
import discordClone from '@/assets/images/projects/discord-clone.png';
import happyShop from '@/assets/images/projects/happy-shop.png';
import impressoStudio from '@/assets/images/projects/impresso-studio.png';
import mobius from '@/assets/images/projects/mobius.png';
import nodeJSMinecraftItemShop from '@/assets/images/projects/nodejs-minecraft-itemshop.png';
import noodly from '@/assets/images/projects/noodly.png';
import picstagram from '@/assets/images/projects/picstagram.png';

import type { Project } from '@/types';

export const projects: Project[] = [
	{
		image: devFAQ,
		title: 'DevFAQ',
		description:
			'Serwis internetowy służący do udostępniania i wymiany pytań rekrutacyjnych na stanowiska developerów oraz inne pokrewne.',
		url: 'https://app.devfaq.pl/',
		technologies: [
			'TypeScript',
			'React.js',
			'Next.js',
			'Tailwind CSS',
			'Vitest',
			'Tanstack Query',
			'Storybook',
			'OpenAPI',
			'Swagger UI',
			'Fastify',
			'Docker',
			'Prisma',
			'PostgreSQL',
		],
	},
	{
		image: impressoStudio,
		title: 'Impresso Studio - system rezerwacyjny',
		description:
			'Celem projektu było dodanie do istniejącej strony Internetowej systemu rezerwacyjnego. W skład funkcjonalności wchodził m.in kreator zamówienia, koszyk, czy integracja płatności online od zewnętrznego dostawcy.',
		url: 'https://impresso.studio/',
		technologies: [
			'TypeScript',
			'React.js',
			'Next.js',
			'Tailwind CSS',
			'Stripe',
			'AWS S3',
			'Zustand',
		],
	},
	{
		image: discordClone,
		title: 'Discord Clone',
		description:
			'Klon discorda napisany w najnowszych technologiach. Projekt stawia ogromny nacisk na frontend oraz architekturę domenową aplikacji.',
		url: 'https://github.com/AdiPol1359/discord-clone/',
		technologies: [
			'TypeScript',
			'React.js',
			'Next.js',
			'Tailwind CSS',
			'Vitest',
			'Cypress',
			'React Testing Library',
			'React Hook Form',
			'Storybook',
			'Tanstack Query',
			'Supabase',
		],
	},
	{
		image: picstagram,
		title: 'Picstagram',
		description:
			'Picstagram to strona internetowa służąca do dzielenia się najlepszymi momentami ze swojego życia poprzez przesyłanie zdjęć. Pozwala na utworzenie prywatnego profilu, na którym możesz następnie zdobywać lajki oraz obserwacje.',
		url: 'https://picstagram.adipol.dev/',
		technologies: [
			'TypeScript',
			'React.js',
			'Next.js',
			'Tailwind CSS',
			'Vitest',
			'React Testing Library',
			'React Hook Form',
			'Storybook',
			'Tanstack Query',
			'Docker',
			'NextAuth',
			'PostgreSQL',
			'tRPC',
		],
	},
	{
		image: mobius,
		title: 'Mobius',
		description:
			'Aplikacja webowa służąca do zarządzania zespołem w Twojej pracy. Umożliwia utworzenie prywatnej grupy, na którą możesz zaprosić następnie członków całego zespołu. Utworzenie grupy pozwala na szybką i efektywną komunikację wraz z całym zespołem.',
		url: 'https://mobius.adipol.dev/',
		technologies: [
			'TypeScript',
			'React.js',
			'Next.js',
			'React Hook Form',
			'Storybook',
			'Tailwind CSS',
			'Tanstack Query',
			'NestJS',
			'Docker',
			'PostgreSQL',
			'OpenAPI',
			'Swagger UI',
			'Socket.io',
			'Redis',
		],
	},
	{
		image: noodly,
		title: 'Noodly',
		description:
			'Strona internetowa w postaci platformy blogowej, umożliwiająca prowadzenie własnego profilu pisząc artykuły na różne tematy.',
		url: 'https://noodly.adipol.dev/',
		technologies: [
			'TypeScript',
			'React.js',
			'Next.js',
			'React Hook Form',
			'MUI',
			'Fastify',
			'Prisma',
		],
	},
	{
		image: happyShop,
		title: 'Happy Shop',
		description: 'Prosty sklep internetowy, napisany w oparciu o React.js.',
		url: 'https://happy-shop.vercel.app/',
		technologies: [
			'JavaScript',
			'React.js',
			'React Router',
			'Styled Components',
		],
	},
	{
		image: nodeJSMinecraftItemShop,
		title: 'NodeJS Minecraft ItemShop',
		description:
			'Strona Internetowa dla serwerów minecraft. Posiada sklep z przedmiotami, oraz zaimplementowane płatności LVL UP.',
		url: 'https://github.com/AdiPol1359/NodeJS-Minecraft-ItemShop/',
		technologies: ['JavaScript', 'NodeJS', 'Express', 'Pug'],
	},
];
