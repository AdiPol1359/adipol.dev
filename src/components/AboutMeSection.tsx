import SoftwareDeveloper from '@/assets/svg/software-developer.svg';
import { PageTitle } from '@/components/PageTitle';

export const AboutMeSection = () => (
	<section>
		<PageTitle>O mnie</PageTitle>
		<p className="prose mt-4 max-w-full text-justify text-white-black">
			Cześć 👋, nazywam się Adrian i mam 18 lat. Swoją przygodę z programowaniem
			zacząłem w wieku 11 lat, kiedy to po raz pierwszy obejrzałem darmowy kurs
			C++ na YouTube. Od tego momentu programowanie stało się trwałą częścią
			mojego życia. W przeszłości bardzo dużo pisałem w Javie oraz Springu, ale
			ostatecznie poczułem, że te technologie nie są dla mnie. Aktualnie skupiam
			się na języku TypeScript i całym ekosystemie NodeJS. Głównie zajmuję się
			tworzeniem stron Internetowych, zarówno od strony frontendowej, jak i
			backendowej. Moim ulubionym stackiem technologicznym do zbudowania
			Full-Stackowej aplikacji webowej jest TypeScript, React, Next.js, NestJS,
			Turborepo, oraz OpenAPI. Oprócz tego, jednym z moich odległych planów
			przyszłościowych jest nauka Rusta, ponieważ widzę ogromny potencjał w tym
			języku. Od dłuższego czasu zastanawiałem się nad stworzeniem własnego
			bloga, ponieważ potrzebowałem jakiegoś miejsca, w którym mógłbym
			segregować całą moją zdobytą wiedzę.
		</p>
		<div className="mx-auto mt-3 max-w-md">
			<SoftwareDeveloper className="h-full w-full" />
		</div>
	</section>
);
