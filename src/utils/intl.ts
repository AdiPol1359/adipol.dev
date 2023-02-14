const LOCALE = 'pl-PL';

const dateTimeFormat = new Intl.DateTimeFormat(LOCALE, {
	day: 'numeric',
	month: 'long',
	year: 'numeric',
});

export const formatDate = (date: Date) => dateTimeFormat.format(date);
