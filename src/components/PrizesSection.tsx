import type { PlaceholderCard } from "../content/site";
import {
	bodyClass,
	headingClass,
	labelClass,
	panelClass,
	sectionClass,
} from "../lib/ui";

type PrizesSectionProps = {
	items: PlaceholderCard[];
};

export function PrizesSection({ items }: PrizesSectionProps) {
	return (
		<section className={sectionClass} id="prizes">
			<div className="mb-7 grid gap-4 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-end">
				<div className="space-y-4">
					<p className={labelClass}>Prizes</p>
					<h2 className={`${headingClass} max-w-[12ch] text-5xl sm:text-6xl`}>
						Worth building for.
					</h2>
				</div>
				<p className={`${bodyClass} max-w-2xl`}>
					The categories are locked in. The final reveals will arrive later, but
					the structure already makes it clear what kind of work Hoshino wants
					to reward.
				</p>
			</div>
			<article
				className={`${panelClass} bg-[linear-gradient(145deg,rgba(11,24,40,0.88),rgba(12,28,46,0.74))]`}
			>
				<p className={`${labelClass} text-[0.72rem]`}>Prizes</p>
				<h3 className={`${headingClass} mt-3 text-3xl sm:text-4xl`}>
					Coming soon
				</h3>
				<p className={`${bodyClass} mt-3 max-w-2xl`}>
					Prize categories are locked. The full reveal will land later once the
					event stack is ready to publish them properly.
				</p>
				<div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-300">
					{items.map((item) => (
						<span
							className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2"
							key={item.title}
						>
							{item.title}
						</span>
					))}
				</div>
			</article>
		</section>
	);
}
