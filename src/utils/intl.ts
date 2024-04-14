const pluralRules = new Intl.PluralRules('pl-PL');

export const pluralize =
	(rules: Partial<Record<Intl.LDMLPluralRule, string>>) => (count: number) =>
		rules[pluralRules.select(count)] ?? '';
