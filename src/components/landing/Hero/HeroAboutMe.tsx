import { Emoji } from '@/components/common/Emoji';

export const HeroAboutMe = () => (
	<div className="space-y-1.5 laptop:flex-1">
		<h2 className="text-lg text-heading desktop:text-xl">Krótko o mnie</h2>
		<p className="text-secondary desktop:text-lg">
			Cześć! Nazywam się Adrian i witam Cię serdecznie na moim blogu{' '}
			<Emoji type="👋" />. Na co dzień jestem zmotywowanym Full-Stack Web
			Developerem, który rozwija swoje umiejętności w zakresie NodeJS.
			Technologie, takie jak React.js czy NestJS nie są mi obce i pracuję z nimi
			w ciągu każdego dnia. Myślę, że każdy znajdzie tutaj coś dla siebie.
		</p>
	</div>
);
