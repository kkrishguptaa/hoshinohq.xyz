import type { PlaceholderCard } from "../content/site";
import {
	bodyClass,
	headingClass,
	labelClass,
	panelClass,
	sectionClass,
} from "../lib/ui";

type SponsorsSectionProps = {
	items: PlaceholderCard[];
};

export function SponsorsSection({ items }: SponsorsSectionProps) {
	return (
		<section className={sectionClass} id="sponsors">
			<div className="mb-7 grid gap-4 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-end">
				<div className="space-y-4">
					<p className={labelClass}>Sponsors</p>
					<h2 className={`${headingClass} max-w-[13ch] text-5xl sm:text-6xl`}>
						The logo wall has room to grow.
					</h2>
				</div>
				<p className={`${bodyClass} max-w-2xl`}>
					Sponsors are intentionally presented as their own section. The first
					version still needs to look complete before the real partner marks
					drop in.
				</p>
			</div>
			<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
				{items.map((item) => (
					<article
						className={`${panelClass} flex min-h-36 flex-col justify-between bg-[linear-gradient(145deg,rgba(11,24,40,0.88),rgba(12,28,46,0.74))]`}
						key={item.title}
					>
						<p className={`${labelClass} text-[0.72rem]`}>Sponsor slot</p>
						<div>
							<h3 className={`${headingClass} text-3xl`}>{item.title}</h3>
							{item.subtitle ? (
								<p className={`${bodyClass} mt-3`}>{item.subtitle}</p>
							) : null}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
