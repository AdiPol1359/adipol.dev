import { SocialsList } from './SocialsList';

export const AboutMeSection = () => (
	<section className="space-y-4 text-gray-800 dark:text-gray-300 md:space-y-6">
		<h1 className="text-5xl font-extrabold text-white-black md:text-6xl">
			AdiPol Dev
		</h1>
		<p className="text-justify">
			Cześć! Nazywam się Adrian i witam Cię serdecznie na moim blogu 👋. Na co
			dzień jestem zmotywowanym Full-Stack Web Developerem, który rozwija swoje
			umiejętności w zakresie NodeJS. Technologie, takie jak React.js czy NestJS
			nie są mi obce i pracuję z nimi w ciągu każdego dnia. Myślę, że każdy
			znajdzie tutaj coś dla siebie.
		</p>
		<SocialsList className="flex gap-x-2 text-2xl" />
	</section>
);
