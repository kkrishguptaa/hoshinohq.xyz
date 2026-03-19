import type { InfoBandItem } from "../content/site";
import { labelClass, panelClass, sectionClass } from "../lib/ui";

type InfoBandProps = {
	items: InfoBandItem[];
};

export function InfoBand({ items }: InfoBandProps) {
	return (
		<section
			className={`${sectionClass} grid gap-4 bg-white/[0.025] md:grid-cols-2 xl:grid-cols-4`}
			aria-label="Event overview"
		>
			{items.map((item) => (
				<article className={panelClass} key={item.label}>
					<p className={labelClass}>{item.label}</p>
					<p className="mt-3 text-lg font-bold text-white">{item.value}</p>
				</article>
			))}
		</section>
	);
}
