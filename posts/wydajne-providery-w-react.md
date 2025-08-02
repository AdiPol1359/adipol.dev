---
slug: wydajne-providery-w-react
date: 2023-11-11
thumbnail: '../src/assets/images/thumbnails/wydajne-providery-w-react.png'
title: Wydajne providery w React.js 🔥
introduction: Context API to zdecydowanie jedna z podstawowych funkcjonalności w Reakcie, a dogłębne poznanie jego działania pozwoli pisać Ci bardziej świadomy oraz wydajny kod.
sources:
  - title: useContext – React
    url: https://react.dev/reference/react/useContext
tags:
  - React
---

Providery w Reakcie to zdecydowanie jedna z najistotniejszych rzeczy przy budowaniu aplikacji webowych. To właśnie z ich pomocą raz na zawsze zakończyliśmy bolączkę w postaci przesyłania X razy propsów w dół do naszych dzieci, żeby dzielić stan między sobą. Pomimo tego, że context API znacznie ułatwia nam zarządzanie globalnym stanem, pomagając jednocześnie przy codziennej pracy, musimy być czujni i uważać na pułapki, które mogą negatywnie wpłynąć na wydajność naszej strony. Dlatego w tym artykule chciałbym Cię przestrzec przed najczęściej popełnianymi błędami podczas używania providerów, które spotykam szczególnie wśród początkujących programistów, zaczynających dopiero swoją przygodę z Reactem. Mam nadzieję, że po przeczytaniu tego posta lepiej zrozumiesz w jaki sposób działa share'owanie stanu w Reakcie, co pozwoli pisać Ci bardziej świadomy oraz wydajny kod. Zapraszam do lektury 🙂.

## Jak dzielić stan pomiędzy komponentami?

Proponuję zacząć od krótkiego przypomnienia, w jaki sposób tworzymy providery w Reakcie:

```tsx
export const ThemeContext = createContext<'dark' | 'light'>('dark');

export const App = () => (
	<ThemeContext.Provider value="dark">
		<Theme />
	</ThemeContext.Provider>
);
```

```tsx
export const Theme = () => {
	const theme = useContext(ThemeContext);

	return (
		<p>
			Current theme: <strong>{theme}</strong>
		</p>
	);
};
```

Na początku stworzyliśmy `ThemeContext` za pomocą funkcji `createContext`, zaimportowanej z Reacta. Do środka przekazaliśmy **domyślną wartość**, która zostanie użyta na wypadek, gdy React **nie znajdzie żadnego providera w drzewie komponentów rodziców**. Następnie w głównym komponencie `App` wyrenderowaliśmy `ThemeContext.Provider`, który **dostarczy przekazaną wartość `value` do swoich dzieci**. Finalnie zostało nam już tylko odczytać wartość z contextu za pomocą hooka `useContext`. No i to tyle, właśnie udało nam się przekazać stan do swoich dzieci. Kod działa, a my możemy rozejść się do domu. Providery w Reakcie wydają się na tyle proste i logiczne, że przecież nic złego nie może się tutaj wydarzyć - ale czy na pewno? Pójdźmy o krok dalej i rozbudujmy trochę ten przykład.

## Task z jiry

Zderzmy się z rzeczywistym problemem, który możemy napotkać przy codziennej pracy z Reactem. Powiedzmy, że dostaliśmy taska na jirze, w którym to musimy zaimplementować **dark theme** oraz **system logowania**. W opisie zadania jasno postawiono nam wymogi, że zarówno theme, jak i zalogowany user **powinien być łatwo dostępny z poziomu każdego komponentu**. Do głowy od razu przychodzi nam context API. Zabieramy się więc do pracy.

Idąc po linii najmniejszego oporu, pierwsza wersja naszego zadania mogłaby wyglądać mniej więcej w taki sposób:

<iframe
	src="https://codesandbox.io/embed/wydajne-providery-w-reactjs-1-rq879q?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.tsx&theme=dark"
	title="wydajne-providery-w-reactjs-1"
	allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
	sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Na pierwszy rzut oka wszystko działa, a my czujemy, że możemy zamknąć taska, wrzucić brancha na code review i być z siebie dumni, że podołaliśmy kolejnemu ciężkiemu zadaniu w robocie. Czy aby na pewno? Przyjrzyjmy się temu bliżej.

Dzielony stan pomiędzy komponentami zdefiniowaliśmy **bezpośrednio w komponencie `App`**, czyli **głównym komponencie naszej aplikacji**. Jest to pierwszy, **bardzo częsty błąd popełniany przez początkujących programistów**. Nie ma co się dziwić, bo wydaje się to dosyć logiczne i intucyjne, żeby dzielony stan wrzucić na samą górę naszej aplikacji. Spowoduje to natomiast pewne problemy. Przede wszystkim, z perspektywy czytelności kodu, **nie jest to najlepsze podejście**, bo w przyszłości, gdy do naszej aplikacji dojdą jeszcze dwa globalne stany, plik `App.tsx` **urośnie i nie będzie dało się go przeczytać**. Ja natomiast chciałbym skupić się na drugej, trochę poważniejszej konsekwencji tego błędu.

Używając wartości z globalnego stanu w komponencie oczekujemy od niej, że gdy ta **ulegnie zmianie**, nasz komponent **również się przerenderuje wraz z najnowszymi danymi**. Jak React sobie z tym radzi? Każdy komponent, który używa w sobie hooka `useContext` **zostanie automatycznie przerenderowany**, gdy zmieni się wartość `value` pochodząca z naszego providera. No właśnie - powinny przerenderować się **tylko** komponenty używające hooka `useContext`, czy tak się u nas dzieje?

![Podgląd 1](/posts/wydajne-providery-w-react/preview-1.gif)

Zauważ, że zmieniając wartość stanu `theme`, pochodzącego z `ThemeContext.Provider`, **przerenderowywują się wszystkie komponenty**, a nie tylko te, **które wykorzystują hooka `useContext`**. Dlaczego tak się dzieje? Zerknijmy na plik `App.tsx`:

```tsx
export const App = () => {
	const [theme, setTheme] = useState<Theme>('dark');
	const [user, setUser] = useState<User>({
		id: 1,
		email: 'foo@gmail.com',
	});

	const changeTheme = (theme: Theme) => setTheme(theme);
	const changeUser = (user: User) => setUser(user);

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			<UserContext.Provider value={{ user, changeUser }}>
				<Header />
				<main style={{ padding: '20px' }}>
					<User />
					<Theme />
				</main>
				<Footer />
			</UserContext.Provider>
		</ThemeContext.Provider>
	);
};
```

Klikając przycisk `Toggle theme`, wywołujemy funkcję `changeTheme`. Funkcja ta wywołuje pod spodem `setTheme`, aby zaktualizować nasz stan. Tylko musimy pamiętać, że wywołanie settera z useState spowoduje **ponowne wykonanie funkcji komponentu**, żeby ten mógł otrzymać najnowsze dane.

Dlatego właśnie po wywołaniu funkcji `changeTheme`, wywołujemy `setTheme`, co z kolei wywołuje funkcję `App`, a ponieważ w komponencie `App` wyrenderowaliśmy komponenty `Header`, `User`, `Theme` oraz `Footer` - **wszystkie zostaną wyrenderowane od nowa** (nie biorąc pod uwagę memoizacji). Musimy więc pamiętać, żeby nie zagnieżdżać komponentów naszej aplikacji bezpośrednio w providerach, bo doprowadzi to do **przerenderowania całej aplikacji od nowa po zmianie jakiegokolwiek stanu**, i przy okazji kompletnie nie korzystamy z optymalizacji, o której wcześniej wspomniałem.

Możemy poradzić sobie z tym problemem za pomocą propsa `children`. Zabierzmy się zatem za refaktoryzację.

## Przeniesienie providerów do osobnego pliku

Oczyściłem trochę plik `App.tsx` **przenosząc logikę odpowiedzialną za globalny stan** do osobnego pliku - `AppProviders.tsx`. Zobaczmy jak to się teraz prezentuje:

<iframe
	src="https://codesandbox.io/embed/wydajne-providery-w-reactjs-2-52n96v?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fproviders%2FAppProviders.tsx&theme=dark"
	title="wydajne-providery-w-reactjs-2"
	allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
	sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Patrząc na nasz projekt na pewno śmiało możemy powiedzieć, że **stał się on dużo czytelniejszy**. Przenosząc kod do pliku `AppProviders.tsx` **nie zaśmiecamy już niepotrzebnie komponentu `App`**. Wciąż nie jest idealnie, ale zawsze jest to jakiś krok do przodu 🙂. Skontrolujmy rerendery naszych komponentów:

![Podgląd 2](/posts/wydajne-providery-w-react/preview-2.gif)

Jest trochę lepiej, prawda? Przestaliśmy już niepotrzebnie rerenderować komponenty, które **nie korzystają z żadnego kontekstu** i tak naprawdę **nie mają nawet powodu, żeby się ponownie wyrenderować**. Natomiast zauważyłem teraz trochę inny problem. Po zmianie wartości stanu `theme`, React przerenderowywuje **wszystkie komponenty, które korzystają z hooka `useContext`**. Dlaczego tak się dzieje?

Tak jak już wcześniej wspomniałem, React **automatycznie przerenderuje komponent** korzystający z hooka `useContext`, gdy **zmieni się wartość `value` w providerze**, po to, aby zaktualizować go o najnowsze dane. No dobra, ale skąd React ma wiedzieć, że wartość uległa zmianie i trzeba ponownie wyrenderować nasz komponent? Wszystko dzieje się za sprawą `Object.is`. React używa tej metody, aby **porównać wartość `value` względem poprzedniego i aktualnego rendera**, a następnie na podstawie zwróconego wyniku zadecyduje, **czy wartość uległa zmianie i trzeba przerenderować komponent**, czy może jednak **zostawiamy go w spokoju**.

Posiadając tę wiedzę, skupmy się na komponencie `AppProviders`:

```tsx
export const AppProviders = ({
	children,
}: {
	readonly children: ReactNode;
}) => {
	const [theme, setTheme] = useState<Theme>('dark');
	const [user, setUser] = useState<User>({
		id: 1,
		email: 'foo@gmail.com',
	});

	const changeTheme = (theme: Theme) => setTheme(theme);
	const changeUser = (user: User) => setUser(user);

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			<UserContext.Provider value={{ user, changeUser }}>
				{children}
			</UserContext.Provider>
		</ThemeContext.Provider>
	);
};
```

Znowu wywołując funkcję `changeTheme`, ta powoduje wywołanie `setTheme`, co z kolei przekłada się na ponowne wywołanie funkcji `AppProviders`. Dlatego toggle'ując stan za pomocą buttona na stronie, **spowoduje to rerender komponentu `AppProviders`**. No spoko, ale jak to się ma do sposobu porównywania wartości `value`, o którym wcześniej wspomniałem?

Spojrzmy na tę linijkę: `<UserContext.Provider value={{ user, changeUser }}>`. Przekazujemy w niej do propsa `value` **obiekt z naszym userem wraz z funkcją do jego zmiany**. Zauważ, że w żaden sposób **nie zapisujemy tego obiektu**. Jest on tworzony **od nowa za każdym razem przy wywołaniu naszej funkcji**, co oznacza, że co render będzie **posiadał on inną referencję**. Zaglądając do [dokumentacji `Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) możemy przeczytać, że obiekty **porównywane są za pomocą referencji**, już rozumiesz?

Pomimo tego, że **nie zmieniliśmy żadnej wartości stanu providera `UserContext.Provider`**, przez to, że **zmieniła się referencja do obiektu w propsie `value`**, React myśli, że **wartość w tym providerze również uległa zmianie i trzeba przerenderować wszystkie komponenty, które używają kontekstu `UserContext`**. Tak właśnie działa pod spodem odświeżanie komponentów korzystających z kontekstów.

To jest drugi powód dla którego umieszczanie wszystkich providerów w jednym komponencie również nie jest najlepszą opcją. No dobra, ale czy możemy coś z tym zrobić? Spróbujmy 🙂.

### Dodanie memoizacji

<iframe
	src="https://codesandbox.io/embed/wydajne-providery-w-reactjs-3-nssnc8?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fproviders%2FAppProviders.tsx&theme=dark"
	title="wydajne-providery-w-reactjs-3"
	allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
	sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Nasz komponent `AppProviders` ponownie uległ zmianie. Zaraz przyjrzymy mu się bliżej, ale najpierw skontrolujmy rerendery:

![Podgląd 3](/posts/wydajne-providery-w-react/preview-3.gif)

Co widzimy? Od teraz React **przerenderowywuje tylko i wyłącznie komponenty, w których globalny stan faktycznie uległ zmianie**. Jest to zdecydowanie najbardziej optymalne rozwiązanie, bo **odświeżamy tylko to, co rzeczywiście tego potrzebuje**. No dobra, zajrzyjmy do środka i przeanalizujmy zmiany:

```tsx
export const AppProviders = ({
	children,
}: {
	readonly children: ReactNode;
}) => {
	const [theme, setTheme] = useState<Theme>('dark');
	const [user, setUser] = useState<User>({
		id: 1,
		email: 'foo@gmail.com',
	});

	const changeTheme = useCallback((theme: Theme) => setTheme(theme), []);
	const changeUser = useCallback((user: User) => setUser(user), []);

	const themeValue = useMemo(
		() => ({ theme, changeTheme }),
		[theme, changeTheme],
	);

	const userValue = useMemo(() => ({ user, changeUser }), [user, changeUser]);

	return (
		<ThemeContext.Provider value={themeValue}>
			<UserContext.Provider value={userValue}>{children}</UserContext.Provider>
		</ThemeContext.Provider>
	);
};
```

Zauważyłeś/aś co się zmieniło w nowym komponencie `AppProviders`? Jak widać, do naszych funkcji oraz wartości providerów doszły **dwa hooki** - `useCallback` oraz `useMemo`. Jaki to ma cel?

Od teraz React będzie **cache'ował definicje naszych funkcji oraz obiektów** i dopóki **nie zmieni się tablica zależności**, co każdy render otrzymamy **dokładnie tę samą referencję, co wywołanie wcześniej**. Jaki to miało wpływ na `useContext`?

Tym razem zmieniając wartość stanu `theme` za pomocą funkcji `changeTheme`, przerenderowanie komponentu spowoduje **zmianę referencji tylko i wyłącznie obiektu `themeValue`**, co za tym idzie - przerenderują się **tylko i wyłącznie komponenty korzystające z jego kontekstu**. Dlaczego?

Do tablicy zależności `themeValue` przekazaliśmy **dwa obiekty**: `theme` oraz `changeTheme`. Callback `changeTheme` nie powinien nigdy zmienić swojej referencji, ponieważ posiada **pustą tablicę zależności**. Natomiast wywołując funkcję `setTheme` **zmutowaliśmy stan**, co za tym idzie - **zmieniliśmy wartość `theme`**, a więc **`useMemo` w `themeValue` zwróci nową referencję**. Ponieważ referencja obiektu `themeValue` **uległa zmianie**, `Object.is` zwróci `false`, co za tym idzie - React **musi odświeżyć komponenty korzystające z kontekstu `ThemeContext`**.

W przypadku obiektu `userValue`, podczas zmiany stanu `theme`, **nie zmieniła się żadna wartość w tablicy zależności**, dlatego **dostajemy za każdym razem tę samą referencję**, a React **nie ma powodu, aby przerenderować komponenty używające kontekstu `UserContext`**. W ten sposób udowodniłem, że porównywanie wartości `value` **faktycznie odbywa się za pomocą metody `Object.is`**.

Fajnie, wszystko działa jak należy, ale czy możemy zrobić to lepiej? Oczywiście - na tworzenie providerów znam jeszcze lepszy sposób, pokażę Ci go 🙂.

## Wydzielenie każdego providera do osobnego pliku

Zamiast **trzymać stan wszystkich providerów w jednym komponencie**, możemy **stworzyć komponent ze stanem dla każdego providera osobno**:

<iframe
	src="https://codesandbox.io/embed/wydajne-providery-w-reactjs-4-rx4lqg?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fproviders%2FAppProviders.tsx&theme=dark"
	title="wydajne-providery-w-reactjs-4"
	allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
	sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Wprowadziliśmy kilka poprawek, ale zanim się im przyjrzymy, ponownie zacznijmy od skontrolowania sytuacji rerenderów:

![Podgląd 4](/posts/wydajne-providery-w-react/preview-4.gif)

Tak jak widzimy, nasz kod dalej **zachowuje się w najbardziej optymalny sposób**, **odświeżając tylko to, co potrzebne**. Zajrzyjmy więc do środka i omówmy zmiany, które zaszły:

```tsx
export const AppProviders = ({
	children,
}: {
	readonly children: ReactNode;
}) => (
	<ThemeProvider>
		<UserProvider>{children}</UserProvider>
	</ThemeProvider>
);
```

```tsx
export const ThemeProvider = ({
	children,
}: {
	readonly children: ReactNode;
}) => {
	const [theme, setTheme] = useState<Theme>('dark');

	const changeTheme = (theme: Theme) => setTheme(theme);

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
```

```tsx
export const UserProvider = ({
	children,
}: {
	readonly children: ReactNode;
}) => {
	const [user, setUser] = useState<User>({
		id: 1,
		email: 'foo@gmail.com',
	});

	const changeUser = (user: User) => setUser(user);

	return (
		<UserContext.Provider value={{ user, changeUser }}>
			{children}
		</UserContext.Provider>
	);
};
```

Z komponentu `AppProviders` **pozbyliśmy się tony kodu odpowiedzalnego za zarządzanie stanem dwóch providerów w naszej aplikacji**. Został on **przeniesiony do osobnych komponentów**, utworzonych specjalnie pod każdy provider - `ThemeProvider` oraz `UserProvider`. Jakie mamy zalety? Przede wszystkim **pozbyliśmy się problemu z czytelnością**, o którym wspomniałem na samym początku tego artykułu. Od teraz chcąc edytować dany provider, **nie przebijamy się przez masę logiki pochodzącej z innego providera**. Zamiast tego **udajemy się do osobnego komponentu**, gdzie **wszystko jest ładnie uporządkowane**. Jednocześnie jesteśmy przygotowani na ewentualność **dodania kolejnych providerów w przyszłości**, bez obawy o czytelność kodu.

Bardziej spostrzegawcze osoby zauważyły pewnie, że **przestaliśmy również używać `useCallback` oraz `useMemo`**, a mimo wszystko **kod zachowuje się tak, jak tego oczekiwaliśmy**. Dlaczego tak się dzieje?

Zauważ, że od teraz **nie renderujemy żadnego komponentu bezpośrednio w providerach**. Zamiast tego przekazujemy je w propsie `children`. Oznacza to, że renderując ponownie komponent `ThemeProvider`, **nie spowoduje on przerenderowania komponentu `UserProvider`**, ponieważ **go tam nie ma**. Zwracamy tylko obiekt `children`, który **został utworzony wyżej**. Tak więc zmieniając stan w komponencie `ThemeProvider`, **nie spowoduje on rerenderu `UserProvider`**, co za tym idzie - referencja `value` **nie ulegnie zmianie podczas mutacji tego stanu**, dzięki czemu React **nie przerenderuje komponentów korzystających z contextu `UserContext`**.

Zdecydowanie jest to **najlepsze podejście z wyżej wymienionych**. Dzięki niemu nie tylko **zyskaliśmy na czytelności kodu**, ale i **pozbyliśmy się hooków `useCallback` oraz `useMemo`**, co na pewno wpłynie pozytywnie na **optymalizację naszej strony Internetowej**.

## Inny sposób na rozwiązanie zadania

Zabierając się za taska z jiry, tak naprawdę możemy rozwiązać go na jeszcze jeden sposób. Celowo pominąłem to podejście, żeby nie wprowadzać zamieszania, dlatego spójrzmy teraz na przykład:

<iframe
	src="https://codesandbox.io/embed/wydajne-providery-w-reactjs-5-cjsx6z?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fproviders%2FAppProvider.tsx&theme=dark"
	title="wydajne-providery-w-reactjs-5"
	allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
	sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Osoby początkujące mogą **nie wpaść na pomysł**, żeby stworzyć **dwa osobne providery** - zamiast tego **utworzą jeden wielki provider**, przechowujący **globalny stan naszej całej aplikacji**. Jest to **poważny błąd**, który zaraz Ci wytłumaczę, ale najpierw skontrolujmy rerendery na naszej stronie:

![Podgląd 5](/posts/wydajne-providery-w-react/preview-5.gif)

Ponownie wróciliśmy do problemu, który przez cały czas próbowaliśmy zwalczyć - **rerenderujemy wszystkie komponenty, używające hooka `useContext`**. Muszę Cię niestety zmartwić - **tutaj nie da się tego naprawić i tym razem nawet memoizacja nam nie pomoże** - dlaczego? Spójrzmy na plik `AppProvider.tsx`:

```tsx
export const AppProvider = ({ children }: { readonly children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>('dark');
	const [user, setUser] = useState<User>({
		id: 1,
		email: 'foo@gmail.com',
	});

	const changeTheme = (theme: Theme) => setTheme(theme);
	const changeUser = (user: User) => setUser(user);

	return (
		<AppContext.Provider value={{ theme, user, changeTheme, changeUser }}>
			{children}
		</AppContext.Provider>
	);
};
```

Widzimy, że komponent `AppProvider` odpowiedzialny jest za **przechowywanie globalnego stanu całej naszej aplikacji**. Jaki jest w tym problem?

Tak jak wcześniej wspomniałem, React **analizuje kiedy ma przerenderować komponenet** za pomocą metody `Object.is`. W tym przypadku wywołanie funkcji `changeTheme` spowoduje wywołanie `setTheme`, co z kolei przełoży się na wywołanie funkcji `AppProvider`, czyli wykonamy rerender. Przy następnym wywołaniu funkcji **ponownie tworzymy obiekt `{ theme, user, changeTheme, changeUser }`**, więc **dostaje on nową referencję**, `Object.is` zwraca `false` i w konsekwencji **dostajemy rerender**. No dobra, to może znowu spróbujemy ugasić pożar za pomocą memoizacji?

```tsx
export const AppProvider = ({ children }: { readonly children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>('dark');
	const [user, setUser] = useState<User>({
		id: 1,
		email: 'foo@gmail.com',
	});

	const changeTheme = useCallback((theme: Theme) => setTheme(theme), []);
	const changeUser = useCallback((user: User) => setUser(user), []);

	const value = useMemo(
		() => ({ theme, user, changeTheme, changeUser }),
		[theme, user, changeTheme, changeUser],
	);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
```

Widzimy, że memoizacja w tym przypadku **nie ma kompletnie żadnego sensu**, bo do tablicy zależności przekazujemy `theme`, który zmieni się po wywołaniu funkcji `changeTheme`, tak więc obiekt `value` **i tak za każdym razem dostanie nową referencję**.

Upraszczając to co napisałem wyżej - **zamiast tworzyć jeden ogromny provider, lepiej utworzyć kilka mniejszych, przechowujących małe, zgrupowane wartości**. Dzięki temu **unikniemy sytuacji rerenderowania komponentów, które co prawda korzystają z tego samego kontekstu, ale wartość, której używamy się nie zmieniła**, więc ten rerender **kompletnie nic nie wnosi i wpłyna negatywnie na wydajność**.

**Problem rerenderowania komponentów, których używana wartość ze stanu nie uległa zmianie** to dosyć powszechny temat, dlatego powstało na to kilka rozwiązań. Zamiast korzystać z domyślnego sposobu na globalny stan w Reakcie, możemy **posłużyć się popularnymi bibliotekami do state managment'u**. Pomocny może okazać się tutaj chociażby [zustand](https://zustand-demo.pmnd.rs/), który **trzyma swój stan poza Reactem** i **synchronizuje go za pomocą hooka `useSyncExternalStore`**. Rozwiązał on m.in **ten, jak i masę innych problemów**, dlatego zainteresowanych odsyłam do dokumentacji 🙂.

## Podsumowanie

To tyle na dzisiaj. Tym artykułem chciałem rozjaśnić Ci trochę, w jaki sposób działa globalny stan w Reakcie, żebyś mógł pisać bardziej świadomy oraz wydajny kod. Mam nadzieję, że wyniosłeś z niego jakąś cenną lekcję, którą zastosujesz przy codziennej pracy. Zainteresowanych zachęcam również do podzielenia się swoimi przemyśleniami w sekcji komentarzy 🙂.
