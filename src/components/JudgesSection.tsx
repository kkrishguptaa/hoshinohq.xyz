import type { PlaceholderCard } from "../content/site";
import {
	bodyClass,
	headingClass,
	labelClass,
	panelClass,
	sectionClass,
} from "../lib/ui";

type JudgesSectionProps = {
	items: PlaceholderCard[];
};

export function JudgesSection({ items }: JudgesSectionProps) {
	return (
		<section className={sectionClass} id="judges">
			<div className="mb-7 grid gap-4 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-end">
				<div className="space-y-4">
					<p className={labelClass}>Judges</p>
					<h2 className={`${headingClass} max-w-[13ch] text-5xl sm:text-6xl`}>
						A sharper room deserves sharp eyes.
					</h2>
				</div>
				<p className={`${bodyClass} max-w-2xl`}>
					The final judging panel is still landing. This section should already
					feel confident enough to hold that roster once it arrives.
				</p>
			</div>
			<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
				{items.map((item) => (
					<article className={`${panelClass} min-h-44`} key={item.title}>
						<p className={`${labelClass} text-[0.72rem]`}>Judge</p>
						<h3 className={`${headingClass} mt-3 text-3xl`}>{item.title}</h3>
						{item.subtitle ? (
							<p className={`${bodyClass} mt-3`}>{item.subtitle}</p>
						) : null}
					</article>
				))}
			</div>
		</section>
	);
}
