---
date: 2025-10-14
thumbnail: '../src/assets/images/thumbnails/optymalizuj-aplikacje-jak-mistrz-cz-1.png'
title: Optymalizuj aplikacje jak mistrz cz. 1
introduction: Nic tak nie frustruje, jak powolna i ociężała aplikacja. Dlatego tak ważne jest zrozumienie, jak pisać wydajny kod, który działa sprawnie i nie sprawia problemów.
sources:
  - title: memo
    url: https://react.dev/reference/react/memo
  - title: <StrictMode>
    url: https://react.dev/reference/react/StrictMode
  - title: Keeping Components Pure
    url: https://react.dev/learn/keeping-components-pure
  - title: React.Component (displayName)
    url: https://legacy.reactjs.org/docs/react-component.html#displayname
  - title: useDebounce React Hook
    url: https://usehooks.com/usedebounce
  - title: Pure Happiness with Pure Functions
    url: https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch03
tags:
  - React
---

Przeprowadzając rozmowy rekrutacyjne na stanowisko Front-end Developera, zauważyłem, że jednym z pytań, które sprawia najwięcej trudności, jest — ku mojemu zaskoczeniu — pytanie o memoizację. Jak się okazuje, temat ten nie jest prosty i czasami może przyprawić o niemały ból głowy. Zaistniałe sytuacje zmotywowały mnie więc do rozpoczęcia serii postów na temat optymalizacji kodu w Reakcie. Postaram się nią raz na zawsze zażegnać wszelkie problemy związane z niezrozumieniem zagadnienia memoizacji przez programistów. Chciałbym, żeby po przeczytaniu tych wpisów temat ten wydawał się każdemu prosty i logiczny. Rozsiądźcie się wygodnie, zapraszam do lektury 🍹!

## Czym jest memoizacja?

No dobra… ale czym tak właściwie jest ta cała memoizacja? Mówiąc prostym językiem, jest to specjalna technika optymalizacyjna, pozwalająca uniknąć ciągłego wykonywania tych samych kosztownych operacji. Odbywa się to poprzez zapamiętanie przez Reakta obliczonych danych, które następnie może ponownie wykorzystać _(zamiast liczyć je kolejny raz)_, jeśli sprzyjające warunki na to pozwalają. Po co takie coś powstało? No właśnie w celach optymalizacyjnych — żeby poprawić wydajność naszej aplikacji. A co w takim razie może być taką operacją? Głównie wykonanie funkcji: zarówno komponentu, jak i każdej innej, która przetwarza dane i zwraca obliczony wynik. Okej… a jak w takim razie skorzystać z memoizacji? Sprawa jest bardzo prosta — służą do tego trzy funkcje: `memo`, `useMemo` oraz `useCallback`. Brzmią znajomo? Przejdźmy zatem do _mięska_ i weźmy na warsztat pierwszą z nich.

## Kiedy komponent się rerenderuje?

Moim ulubionym pytaniem podczas rozmowy technicznej, które zawsze zadaję, jest: _Kiedy komponent się rerenderuje?_. Dlaczego o tym wspominam? Ponieważ bardzo często słyszę odpowiedź: _Na skutek zmiany propsów_. I co, to tyle? Odpowiedź ta oczywiście po części jest poprawna, ale tylko pod warunkiem, że nie zapomniemy o memoizacji i odwołamy się do mechanizmu działania `memo`. Jak się pewnie domyślacie, nawiązuję do tego, ponieważ rzadko kiedy słyszę taką odpowiedź. Do tego tematu wrócimy jeszcze za chwilę, ale najpierw chciałbym przybliżyć Wam działanie wspomnianej wcześniej funkcji.

Teoria jest bardzo prosta. Mój perfekcjonizm zmusza mnie do zacytowania oficjalnej dokumentacji Reakta:

> Your component will usually not be re-rendered when its parent component is re-rendered as long as its props have not changed.

Przeczytajmy to jeszcze raz. Komponent dziecko nie przerenderuje się na skutek rerenderu rodzica, jeśli jego propsy _(komponentu dziecko)_ nie uległy zmianie. Dostrzegacie coś w tej formułce? Tak, mamy tutaj dwie istotne informacje.

Po pierwsze, możemy dowiedzieć się, że jesteśmy w stanie zoptymalizować naszą aplikację i odbić niepotrzebne rerendery, jeśli propsy komponentu cały czas są takie same.

No a kiedy przyda nam się taka optymalizacja? Gdy komponent rodzic zostanie przerenderowany. Tak więc co to oznacza? Że prawidłową odpowiedzią na moje pytanie jest: _Kiedy komponent się przerenderuje, wszystkie jego dzieci również zostaną przerenderowane. Dlatego rerender komponentu może być czasami spowodowany rerenderem rodzica_. Komponent sam w sobie nie zostaje przerenderowany bezpośrednio przez zmianę swoich propsów, lecz z powodu rerenderu rodzica. No i jeżeli nam się to nie podoba, możemy wprowadzić optymalizację dla komponentu dziecko w postaci `memo`. Wtedy powiedzmy za pierwszym razem rerender rodzica wyzywala rerender dziecka, ale dziecko nie zostaje przerenderowane, ponieważ jego propsy nie uległy zmianie. Po jakimś czasie następuje znowu rerender rodzica, który ponownie powoduje rerender dziecka opakowanego w `memo`, a ponieważ tym razem zmieniły się jego propsy — ten komponent zostaje również przerenderowany. Uff... trochę to zagmatwane. Podsumowując: zahaczając o temat memoizacji, możemy po części powiedzieć, że komponent rerenderuje się na skutek zmiany swoich propsów. Nie zapominajmy tylko, że "akcja" porównywania parametrów została wywołana przez rerender rodzica.

Dla lepszego zrozumienia zagadnienia zahaczmy o jeszcze jeden wątek — przyda nam się to przy okazji w późniejszej części artykułu. Wspomniałem, że rerender rodzica wyzwala rerender dziecka. A kiedy w takim razie może dojść do rerenderu rodzica? Po pierwsze analogicznie: gdy ponownie w drzewie komponentów przerenderuje się komponent rodzic, czyli komponent położony jeszcze wyżej w hierarchii. Oprócz tego mamy dwa inne przypadki: zmiana lokalnego stanu oraz zmiana wartości kontekstu.

Tak więc podsumowując dotychczasowe informacje. Według mnie najlepszą odpowiedzią na pytanie: _Kiedy komponent się rerenderuje?_ jest:

1. _Gdy zmieni się jego stan_.
2. _Gdy zmieni się wartość subskrybowanego kontekstu_.
3. _Gdy nastąpi rerender rodzica_.

_Dodatkowo możemy zoptymalizować trzeci punkt przy pomocy `memo`_.

Dobra… zostawmy już ten temat. Czas przejść do praktyki i pobawić się memoizacją.

## Praktyczny przykład

Stwórzmy jakiś komponent:

```tsx
const AmazingView = () => {
	return <p>Amazing View</p>;
};
```

I opakujmy go w `memo`:

```tsx
import { memo } from 'react';

const AmazingView = memo(function AmazingView() {
	return <p>Amazing View</p>;
});
```

Jak widać, korzystanie z memoizacji jest bardzo proste. Wystarczy tylko zaimportować funkcję, wywołać ją przekazując do środka komponent, który chcemy zoptymalizować i robotę mamy z głowy 🥳.

> Dodatkowym aspektem jest zmiana funkcji strzałkowej na normalną funkcję z nazwą. Krok ten jest opcjonalny i ma związek z wyświetlaniem nazwy komponentu w React Developer Tools. Ponieważ memo to HOC, Reakt nie potrafi automatycznie wywnioskować nazwy przekazanego komponentu. W takiej sytuacji, chcąc dalej korzystać z funkcji strzałkowej, zaleca się ustawienie nazwy manualnie poprzez właściwość displayName. Po więcej informacji odsyłam do sekcji źródeł.

Następnie użyjmy go w aplikacji:

```tsx
import { memo } from 'react';

const AmazingView = memo(function AmazingView() {
	return <p>Amazing View</p>;
});

const App = () => {
	return (
		<div>
			<h1>Welcome to AdiPol.dev!</h1>
			<AmazingView />
		</div>
	);
};
```

Super! Po odświeżeniu strony naszym oczom powinien ukazać się napis "Amazing View". To teraz przyjrzyjmy się nieco bliżej, jak dokładniej działa `memo`.

Kiedy aplikacja renderuje się po raz pierwszy, zarówno komponent `App`, jak i wszystkie jego dzieci _(czyli w tym przypadku komponent `AmazingView`)_ zostaną również wyrenderowane. Tutaj nie ma wyjątku — działa to tak samo, niezależnie od tego, czy komponent został zmemoizowany, czy też nie. Ciekawiej robi się, gdy komponent `App` się przerenderuje. Rozbudujmy naszą aplikację:

```tsx
import { memo, useState } from 'react';

const AmazingView = memo(function AmazingView() {
	console.log('<AmazingView />');

	return <p>Amazing View</p>;
});

const App = () => {
	console.log('<App />');

	const [clicks, setClicks] = useState(0);

	return (
		<div>
			<h1>Welcome to AdiPol.dev!</h1>
			<button onClick={() => setClicks(prev => prev + 1)}>
				Clicks: {clicks}
			</button>
			<AmazingView />
		</div>
	);
};
```

Pozwoliłem sobie dodać dwie rzeczy. Po pierwsze, od teraz mamy komunikaty w konsoli, które znacząco ułatwią śledzenie rerenderów. Doszła również nowa komórka stanu, przechowująca liczbę kliknięć w przycisk.

To teraz odświeżmy przeglądarkę i zobaczmy co wyświetli się w konsoli:

```bash
<App />
<AmazingView />
```

Kliknijmy w przycisk `3` razy:

```bash
<App />
<AmazingView />
<App />
<App />
<App />
```

Jaki płynie z tego wniosek? Że zoptymalizowaliśmy naszą aplikację! Funkcja komponentu `AmazingView` wykonała się tylko raz 😎.

> Dla uproszczenia pominąłem Strict Mode, który renderuje każdy komponent dwa razy, aby upewnić się, że został on zaimplementowany zgodnie z zasadą czystej funkcji. Załóżmy więc, że w naszej aplikacji tryb ścisły jest wyłączony.

A jak to się stało? Żeby odpowiedzieć na to pytanie, musimy dowiedzieć się, w jaki sposób działa mechanizm porównywania propsów.

## Porównywanie propsów

Gdy następuje rerender zmemoizowanego komponentu, każdy props porównywany jest względem starej i nowej wartości za pomocą metody `Object.is`. Jeżeli z porównania wynikło, że propsy się nie zmieniły — komponent nie zostanie przerenderowany. W przeciwnym razie — zostanie. W naszej aplikacji nie przekazaliśmy żadnego propsa do zmemoizowanego komponentu, tak więc wyrenderuje się on tylko i wyłącznie raz. Tutaj nawet nie ma co porównywać między sobą. Rozbudujmy go zatem.

Przebudowałem naszą aplikację i od teraz komponent `AmazingView` potrzebuje propsa `clicks` do poprawnego działania:

```tsx
const App = () => {
	console.log('<App />');

	const [clicks, setClicks] = useState(0);

	return (
		<div>
			<h1>Welcome to AdiPol.dev!</h1>
			<button onClick={() => setClicks(prev => prev + 1)}>
				Clicks: {clicks}
			</button>
			<AmazingView clicks={clicks} />
		</div>
	);
};
```

Odtwórzmy następujący scenariusz testowy:

1. Odświeżam przeglądarkę.
2. Klikam w przycisk `3` razy.

Co się wyświetliło w konsoli?

```bash
<App />
<AmazingView />
<App />
<AmazingView />
<App />
<AmazingView />
<App />
<AmazingView />
```

Jak można zauważyć, komponent `AmazingView` zaczął się rerenderować razem ze swoim rodzicem. Utraciliśmy optymalizację, która jeszcze przed chwilą działała. Dlaczego tak się stało? Pomyślmy...

```ts
// 1 rerender
Object.is(0, 1); // false

// 2 rerender
Object.is(1, 2); // false

// 3 rerender
Object.is(2, 3); // false
```

Zwizualizowałem, jak w dużym uproszczeniu przebiega domyślny proces porównywania propsów. Przy pierwszym rerenderze Reakt podstawił do metody `Object.is` w pierwszym argumencie starą wartość propsa `clicks` — `0`, a w drugim argumencie nową wartość — `1`. Zatem wynikiem wykonywania tej metody będzie `false`, co oznacza, że komponent zostanie przerenderowany. Analogicznie, przy drugim rerenderze w pierwszym argumencie została podstawiona wartość `1`, w drugim — `2`, a metoda ponownie zwróciła `false` i leci rerender. I tak dalej, i tak dalej.

Od razu na tej podstawie możemy wysnuć jeden wniosek. Nie opłaca się używać `memo` dla każdego komponentu w naszej aplikacji. Powyższy przykład pokazuje, że zmemoizowanie komponentu `AmazingView` nie przyniosło żadnych korzyści — i tak będzie się on rerenderował za każdym razem. Powiem więcej — w tym przypadku użycie `memo` jest nawet gorszym pomysłem niż rezygnacja z jego użycia. Wywołaliśmy funkcję, która nic nie daje, a ponadto przy każdym rerenderze uruchamiamy mechanizm porównywania. Chciałem przestrzec Was przed tym, żeby podchodzić do memoizacji z głową i nie wciskać jej wszędzie gdzie to możliwe.

Ponownie przerobię naszą aplikację:

```tsx
const App = () => {
	console.log('<App />');

	const [clicks, setClicks] = useState(0);
	const [firstName, setFirstName] = useState('');

	return (
		<div>
			<h1>Welcome to AdiPol.dev!</h1>
			<button onClick={() => setClicks(prev => prev + 1)}>
				Clicks: {clicks}
			</button>
			<input
				type="text"
				value={firstName}
				onChange={({ target: { value } }) => setFirstName(value)}
			/>
			<AmazingView firstName={firstName} />
		</div>
	);
};
```

Tym razem doszła nam nowa komórka stanu, przechowująca wpisane imię w inpucie. Dodatkowo komponent `AmazingView` zaczął od teraz wymagać propsa `firstName`.

Odtwórzmy kolejny scenariusz testowy:

1. Odświeżam przeglądarkę.
2. Klikam w przycisk `2` razy.
3. Wpisuję imię `Adrian`.
4. Klikam w przycisk `1` raz.

Co się pokaże w konsoli?

```bash
<App />
<AmazingView />
<App />
<App />
<App />
<AmazingView />
<App />
```

> Dla uproszczenia założyłem, że input został zaimplementowany z użyciem debouncera. Tak więc event onChange nie wywołuje się co wpisanie znaku, lecz co wpisanie frazy — w tym przypadku imienia. Po więcej informacji odsyłam do sekcji źródeł.

Co tym razem się zadziało?

```ts
// 1 rerender
Object.is('', ''); // true

// 2 rerender
Object.is('', ''); // true

// 3 rerender
Object.is('', 'Adrian'); // false

// 4 rerender
Object.is('Adrian', 'Adrian'); // true
```

Przy pierwszym oraz drugim kliknięciu przycisku, stan `firstName` nie zmienił się. Dlatego w metodzie `Object.is` dwa argumenty zostały wypełnione wartościami `''`, co skutkuje odbiciem rerenderu.

W trzecim kroku rerender komponentu `App` został spowodowany mutacją stanu `firstName` _(co oczywiście pociągnęło za sobą rerender dzieci)_. Metoda `Object.is` w pierwszym argumencie dostała `''`, czyli poprzednia wartość stanu `firstName`, a w drugim argumencie `'Adrian'` — bieżąca wartość tego stanu. Zatem wywołanie tej metody zwróciło `false`, a co za tym idzie — komponent się przerenderował.

W czwartym kroku ponownie nie zmieniliśmy wartości stanu z imieniem, dlatego `Object.is` zwrócił `true` i komponent pozostał nienaruszony.

> Zauważ, że w powyższych wyjaśnieniach cały czas odwołujemy się do teorii, która mówi, że rerender rodzica wyzwala rerender dziecka, a dziecko może odbić ten rerender, jeśli jego propsy nie uległy zmianie. Tak więc krótka przypominajka: zmiana propsów nie powoduje rerenderu komponentu! Ta zmiana wynikła z rerenderu rodzica.

To teraz przebudujmy raz jeszcze naszą aplikację, łącząc ze sobą dwa powyższe przykłady:

```tsx
const App = () => {
	console.log('<App />');

	const [clicks, setClicks] = useState(0);
	const [firstName, setFirstName] = useState('');

	return (
		<div>
			<h1>Welcome to AdiPol.dev!</h1>
			<button onClick={() => setClicks(prev => prev + 1)}>
				Clicks: {clicks}
			</button>
			<input
				type="text"
				value={firstName}
				onChange={({ target: { value } }) => setFirstName(value)}
			/>
			<AmazingView clicks={clicks} firstName={firstName} />
		</div>
	);
};
```

Komponent `AmazingView` współpracuje tym razem z dwoma propsami na raz. Odtwórzmy ten sam scenariusz testowy:

1. Odświeżam przeglądarkę.
2. Klikam w przycisk `2` razy.
3. Wpisuję imię `Adrian`.
4. Klikam w przycisk `1` raz.

Jaki będzie rezultat?

```bash
<App />
<AmazingView />
<App />
<AmazingView />
<App />
<AmazingView />
<App />
<AmazingView />
<App />
<AmazingView />
```

Macie pomysł dlaczego tak się stało?

```ts
// 1 rerender
Object.is(0, 1); // false
Object.is('', ''); // true
// wynik końcowy: false

// 2 rerender
Object.is(1, 2); // false
Object.is('', ''); // true
// wynik końcowy: false

// 3 rerender
Object.is(2, 2); // true
Object.is('', 'Adrian'); // false
// wynik końcowy: false

// 3 rerender
Object.is(2, 3); // false
Object.is('Adrian', 'Adrian'); // true
// wynik końcowy: false
```

Mówiłem wcześniej, że `memo` porównuje każdego propsa z osobna. Dlatego pomimo tego, że przy pierwszym rerenderze wartość `firstName` się nie zmieniła i `Object.is('', '')` zwróciło `true`, zmiana nastąpiła w `clicks`, `Object.is(0, 1)` zwróciło `false`, zatem końcowym wynikiem operacji porównywania jest również `false`.

## Lokalny stan i kontekst

Chciałbym powiedzieć o jeszcze jednej istotnej kwestii. Wiemy już, że jesteśmy w stanie odrzucić rerender zmemoizowanego komponentu, który został spowodowany rerenderem rodzica. A co z pozostałymi przypadkami rerenderów? Co ze zmianą lokalnego stanu lub wartości kontekstu? Tutaj sprawy mają się nieco inaczej.

Memoizacja w Reakcie zabezpiecza nas jedynie przed rerenderem rodzica. Komponent dalej będzie się rerenderował, jeśli jego lokalny stan lub subskrybowany kontekst uległ zmianie. Zobaczmy to na przykładzie:

```tsx
const AmazingView = memo(function AmazingView() {
	console.log('<AmazingView />');

	const [clicks, setClicks] = useState(0);

	return (
		<button onClick={() => setClicks(prev => prev + 1)}>
			Clicks: {clicks}
		</button>
	);
});
```

Pomimo tego, że opakowaliśmy komponent `AmazingView` w `memo`, dalej będzie się on rerenderował, jeśli wartość stanu `clicks` ulegnie zmianie. Użycie `memo` w takim przypadku nie wprowadza żadnej optymalizacji.

Podobnie jest z kontekstem:

```tsx
const AmazingView = memo(function AmazingView() {
	console.log('<AmazingView />');

	const { theme } = useContext(ThemeContext);

	return <p>Theme: {theme}</p>;
});
```

Jeżeli zmieni się wartość kontekstu `ThemeContext`, komponent również się przerenderuje. Chociaż w tym przypadku moglibyśmy wynieść odczytywanie wartości wyżej i przekazywać ją w propsie do zmemoizowanego komponentu:

```tsx
const AmazingView = memo(function AmazingView({ theme }: { theme: string }) {
	console.log('<AmazingView />');

	return <p>Theme: {theme}</p>;
});

const App = () => {
	console.log('<App />');

	const { theme } = useContext(ThemeContext);

	return <AmazingView theme={theme} />;
};
```

W powyższej implementacji komponent `AmazingView` rzeczywiście rerenderowałby się tylko na skutek zmiany `theme`. Kiedy miałoby to sens? Gdyby kontekst `ThemeContext` exportował więcej wartości, które nie są odczytywane w komponencie `App`. Nie chcę tutaj szczegółowo wyjaśniać tego zachowania, ponieważ zająłem się tym tematem w osobnym wpisie: [Wydajne providery w React.js 🔥](/wydajne-providery-w-react).

## Czyste funkcje

Na deser zostawiłem jeszcze jeden ciekawy temat. Wspominałem wyżej o "czystych funkcjach".

W Reakcie panuje zasada, która mówi, że każda funkcja komponentu powinna być pure. A co to tak właściwie oznacza?

Wzorzec ten wziął się z paradygmatu programowania funkcyjnego. Czysta funkcja to taka, która dla tych samych danych wejściowych zawsze zwraca te same dane wyjściowe, a dodatkowo nie powoduje efektów ubocznych. Zobaczmy to na przykładzie:

```ts
const add = (a: number, b: number) => a + b;

add(1, 1); // 2
add(1, 1); // 2
add(2, 3); // 5
add(2, 3); // 5
```

Zaimplementowałem funkcję, która dodaje do siebie dwie liczby przekazane w argumentach. Dlaczego możemy mówić o niej, że jest czysta? Ponieważ jedyne co się wewnątrz niej dzieje to operacja arytmetyczna, a dodatkowo nie wpływa ona w żaden sposób na pozostałą część naszego systemu. Jest tylko przekazanie danych wejściowych, operacje na nich, zwrócenie wyniku i koniec. Pod spodem wywołałem ją kilka razy i wyraźnie widać, że dla tych samych liczb zawsze uzyskamy ten sam wynik dodawania. Co to ma wspólnego z Reaktem?

Pomyślmy o propsach jako o danych wejściowych, a o zwróconym JSX jako o danych wyjściowych. Coś Wam zaczyna świtać? Żeby założenia `memo` się sprawdziły, Reakt musi mieć pewność, że dla tych samych propsów komponent zawsze zwróci ten sam JSX. Dzięki temu można bezpiecznie podjąć decyzję o zrezygnowaniu z ponownego wykonania funkcji komponentu, jeśli jego propsy nie uległy zmianie. Między innymi stąd się wzięła zasada w Reakcie, która każe nam implementować funkcje komponentów zgodnie z zasadą pure functions. Bez tego wymogu wykrywanie zmian byłoby ciężkie.

## Podsumowanie

To już wszystko w tym wpisie. Postarałem się nim płynnie wprowadzić Was w zagadnienie memoizacji. Niestety jest to temat-rzeka i są jeszcze kwestie, o których nie wspomniałem, a wypadałoby je poruszyć. Ale spokojnie — zostawiłem je na kolejną część tej serii. Osoby, które jednak chciałyby się dowiedzieć więcej, odsyłam do sekcji źródeł — tam znajdziecie wszystkie potrzebne linki. W razie jakichkolwiek wątpliwości, zapraszam również do zadawania pytań w sekcji komentarzy 🙂.
