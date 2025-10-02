const LOCALE = 'pl-PL';

const rules = new Intl.PluralRules(LOCALE);

export const createPluralizer =
	(phrases: Partial<Record<Intl.LDMLPluralRule, string>>) => (count: number) =>
		phrases[rules.select(count)] ?? null;
