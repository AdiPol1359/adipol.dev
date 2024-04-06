import DashedArrow from '@/assets/svg/dashed-arrow-4.svg';

export const RecentPostsSectionHeaderTitle = () => (
	<div className="space-y-1.5 laptop:relative laptop:space-y-2.5">
		<h2 className="text-2xl font-semibold text-heading laptop:text-3xl">
			Mój blog
		</h2>
		<p className="text-lg text-secondary">Obczaj moje ostatnie wpisy 🔥</p>
		<DashedArrow
			className="hidden laptop:absolute laptop:-right-24 laptop:-top-3 laptop:block laptop:text-decoration-dark"
			aria-hidden
		/>
	</div>
);
