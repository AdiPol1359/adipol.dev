interface ExperienceCompany {
	readonly name: string;
	readonly url: string;
}

interface ExperiencePeriod {
	readonly from: string;
	readonly to?: string;
}

export interface Experience {
	readonly company: ExperienceCompany;
	readonly period: ExperiencePeriod;
	readonly position: string;
}
