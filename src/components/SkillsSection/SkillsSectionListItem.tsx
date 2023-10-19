import type { Skill } from '@/types';

type SkillsSectionListItemProps = Readonly<{
	skill: Skill;
}>;

export const SkillsSectionListItem = ({
	skill: { color, href, label, icon: Icon },
}: SkillsSectionListItemProps) => (
	<li>
		<a
			href={href}
			aria-label={label}
			style={{ '--color': color } as React.CSSProperties}
			target="_blank"
			rel="noreferrer"
			className="flex aspect-square w-full items-center justify-center rounded-lg bg-[--color] text-white [&>svg]:w-9"
		>
			<Icon />
		</a>
	</li>
);
