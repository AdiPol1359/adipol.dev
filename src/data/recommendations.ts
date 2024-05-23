import DominikSzymanski from '@/assets/images/recommendations/dominik-szymanski.png';
import MichalKowalkowski from '@/assets/images/recommendations/michal-kowalkowski.png';
import MichalMiszczyszyn from '@/assets/images/recommendations/michal-miszczyszyn.png';

import type { Recommendation } from '@/types';

export const recommendations: Recommendation[] = [
	{
		image: MichalKowalkowski,
		name: 'Michał Kowalkowski',
		positions: [
			'Co-Founder and CTO at SegmentX.ai',
			'Co-Founder and CTO at NoSpoilers.ai',
		],
		content: [
			"Adrian is an incredibly talented JavaScript and React developer. His deep knowledge of TypeScript is impressive and sets him apart from most developers I've worked with.",
			"Adrian was crucial in building a scalable architecture for our project, showing his skill and strategic mindset. He's passionate about new technologies and always eager to learn, which brings fresh ideas and solutions to the team.",
			"Adrian's technical expertise and enthusiasm make him a fantastic colleague and a valuable asset to any team. I highly recommend him for any development role!",
		],
	},
	{
		image: MichalMiszczyszyn,
		name: 'Michał Miszczyszyn',
		positions: ['Tech Lead at Saleor', 'CEO at Type Of Web'],
		content: [
			'Pracując z Adrianem, byłem pod wrażeniem jego umiejętności i zaangażowania. Adrian wykazał się głęboką wiedzą w zakresie Next.js 14, TypeScripta, REST API i innych nowoczesnych technologii. Jego zdolność do szybkiego przyswajania nowych koncepcji oraz podejście "can-do" sprawiły, że był nieocenionym członkiem naszego zespołu. Ponadto, Adrian jest doskonały w komunikacji – potrafi jasno wyrażać swoje pomysły i rozwiązania, co jest kluczowe w projektach programistycznych. Zdecydowanie polecam Adriana każdemu, który szuka utalentowanego i odpowiedzialnego programisty do swojego projektu.',
		],
	},
	{
		image: DominikSzymanski,
		name: 'Dominik Szymański',
		positions: ['Co-Founder at CodeHome'],
		content: [
			'Adrian był częścią naszego zespołu, gdzie wykorzystywał swoje umiejętności w technologiach takich jak Vue, TypeScript, Tailwind CSS oraz PHP. Podczas naszej współpracy, wykazał się on jako niezwykle kompetentny i profesjonalny programista. Jego podejście do pracy było zarówno metodyczne, jak i innowacyjne, co pozwoliło na terminowe dostarczanie złożonych zadań bez żadnych kompromisów w jakości. Jego umiejętność szybkiego rozwiązywania problemów i elastyczność w dostosowywaniu się do zmieniających się wymagań były nieocenione dla naszego zespołu. Jedną z największych jego zalet jest jego rozległa wiedza o technologiach, narzędziach i metodykach. To sprawia, że poza samym zleconym kodem potrafi on realnie wpłynąć na końcową jakość wykonywanego produktu. Zdecydowanie polecam współpracę z Adrianem. Jestem pewien, że jego przyszli pracodawcy i zespoły skorzystają z jego szerokiej wiedzy i doświadczenia.',
		],
	},
];
