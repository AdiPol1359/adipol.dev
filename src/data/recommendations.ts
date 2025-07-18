import dominikSzymanski from '@/assets/images/recommendations/dominik-szymanski.jpeg';
import michalKowalkowski from '@/assets/images/recommendations/michal-kowalkowski.jpeg';
import michalMiszczyszyn from '@/assets/images/recommendations/michal-miszczyszyn.jpeg';

import type { Recommendation } from '@/types/recommendation';

export const recommendations: Recommendation[] = [
	{
		photo: michalKowalkowski,
		name: 'Michał Kowalkowski',
		linkedIn: 'https://www.linkedin.com/in/mnkow/',
		position: 'Co-Founder and CTO at SalesPlay X',
		content: [
			'Adrian jest niezwykle utalentowanym programistą JavaScript i React. Jego dogłębna znajomość TypeScript robi ogromne wrażenie i wyróżnia go spośród większości programistów, z którymi współpracowałem.',
			'Adrian odegrał kluczową rolę w tworzeniu skalowalnej architektury naszego projektu, wykazując się swoimi umiejętnościami i strategicznym podejściem. Jest pasjonatem nowych technologii i zawsze chętny do nauki, co wnosi do zespołu świeże pomysły i rozwiązania.',
			'Wiedza techniczna i entuzjazm Adriana sprawiają, że jest on fantastycznym współpracownikiem i cennym nabytkiem dla każdego zespołu. Gorąco polecam go do wszelkich zadań związanych z rozwojem!',
		].join('\n\n'),
	},
	{
		photo: dominikSzymanski,
		name: 'Dominik Szymański',
		linkedIn: 'https://www.linkedin.com/in/dominik-szyma%C5%84ski-49057b1b7/',
		position: 'Co-Founder at Codehome',
		content:
			'Adrian był częścią naszego zespołu, gdzie wykorzystywał swoje umiejętności w technologiach takich jak Vue, TypeScript, Tailwind CSS oraz PHP. Podczas naszej współpracy, wykazał się on jako niezwykle kompetentny i profesjonalny programista. Jego podejście do pracy było zarówno metodyczne, jak i innowacyjne, co pozwoliło na terminowe dostarczanie złożonych zadań bez żadnych kompromisów w jakości. Jego umiejętność szybkiego rozwiązywania problemów i elastyczność w dostosowywaniu się do zmieniających się wymagań były nieocenione dla naszego zespołu. Jedną z największych jego zalet jest jego rozległa wiedza o technologiach, narzędziach i metodykach. To sprawia, że poza samym zleconym kodem potrafi on realnie wpłynąć na końcową jakość wykonywanego produktu. Zdecydowanie polecam współpracę z Adrianem. Jestem pewien, że jego przyszli pracodawcy i zespoły skorzystają z jego szerokiej wiedzy i doświadczenia.',
	},
	{
		photo: michalMiszczyszyn,
		name: 'Michał Miszczyszyn',
		linkedIn: 'https://www.linkedin.com/in/mmiszczyszyn/',
		position: 'Co-Founder and CTO at Your Next Store',
		content:
			'Pracując z Adrianem, byłem pod wrażeniem jego umiejętności i zaangażowania. Adrian wykazał się głęboką wiedzą w zakresie Next.js 14, TypeScripta, REST API i innych nowoczesnych technologii. Jego zdolność do szybkiego przyswajania nowych koncepcji oraz podejście "can-do" sprawiły, że był nieocenionym członkiem naszego zespołu. Ponadto, Adrian jest doskonały w komunikacji – potrafi jasno wyrażać swoje pomysły i rozwiązania, co jest kluczowe w projektach programistycznych. Zdecydowanie polecam Adriana każdemu, który szuka utalentowanego i odpowiedzialnego programisty do swojego projektu.',
	},
];
