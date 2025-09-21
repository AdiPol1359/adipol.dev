import DevFAQThumbnail from '@/assets/images/projects/devfaq.png';
import DiscordCloneThumbnail from '@/assets/images/projects/discord-clone.png';
import HappyShopThumbnail from '@/assets/images/projects/happy-shop.png';
import ImpressoStudioThumbnail from '@/assets/images/projects/impresso-studio.png';
import MobiusThumbnail from '@/assets/images/projects/mobius.png';
import NodeJSMinecraftItemShopThumbnail from '@/assets/images/projects/nodejs-minecraft-itemshop.png';
import NoodlyThumbnail from '@/assets/images/projects/noodly.png';
import PicstagramThumbnail from '@/assets/images/projects/picstagram.png';

import type { Project } from '@/types/project';

export const projects: Project[] = [
	{
		thumbnail: DevFAQThumbnail,
		title: 'DevFAQ',
		description:
			'Platforma internetowa do dzielenia się pytaniami rekrutacyjnymi na stanowiska programistyczne oraz pokrewne role w branży IT.',
		url: 'https://github.com/typeofweb-org/devfaq',
	},
	{
		thumbnail: DiscordCloneThumbnail,
		title: 'Discord Clone',
		description:
			'Klon aplikacji discord napisany w najnowszych technologiach. Projekt stawia ogromny nacisk na frontend oraz architekturę aplikacji.',
		url: 'https://github.com/AdiPol1359/discord-clone',
	},
	{
		thumbnail: ImpressoStudioThumbnail,
		title: 'Impresso Studio - system rezerwacyjny',
		description:
			'Moim celem było dodanie systemu rezerwacyjnego do istniejącej aplikacji webowej. W skład funkcjonalności wchodził m.in. kreator zamówień, koszyk, czy integracja płatności online z zewnętrznym dostawcą.',
		url: 'https://impresso.studio/',
	},
	{
		thumbnail: PicstagramThumbnail,
		title: 'Picstagram',
		description:
			'Picstagram to aplikacja służąca do dzielenia się zdjęciami i najlepszymi momentami ze swojego życia. Umożliwia stworzenie prywatnego profilu, a także zdobywanie lajków i obserwujących.',
		url: 'https://github.com/AdiPol1359/picstagram',
	},
	{
		thumbnail: MobiusThumbnail,
		title: 'Mobius',
		description:
			'Aplikacja webowa wspierająca zarządzanie zespołem w pracy. Umożliwia tworzenie prywatnych grup i zapraszanie członków, co sprzyja sprawnej organizacji i efektywnej komunikacji w zespole.',
		url: 'https://github.com/adipol1359/mobius',
	},
	{
		thumbnail: NoodlyThumbnail,
		title: 'Noodly',
		description:
			'Strona internetowa w formie blogowej platformy, która umożliwia użytkownikom zakładanie własnych profili i publikowanie artykułów na dowolne tematy. To przestrzeń do dzielenia się wiedzą, opiniami i pasjami.',
		url: 'https://github.com/adipol1359/noodly',
	},
	{
		thumbnail: HappyShopThumbnail,
		title: 'Happy Shop',
		description:
			'Prosty sklep internetowy, napisany w oparciu o React.js. Zawiera listę produktów, koszyk oraz możliwość składania zamówień.',
		url: 'https://github.com/AdiPol1359/Happy-Shop',
	},
	{
		thumbnail: NodeJSMinecraftItemShopThumbnail,
		title: 'NodeJS Minecraft ItemShop',
		description:
			'Strona internetowa dedykowana serwerom Minecraft, oferująca sklep z przedmiotami oraz zintegrowany system płatności LVL UP.',
		url: 'https://github.com/AdiPol1359/NodeJS-Minecraft-ItemShop',
	},
];
