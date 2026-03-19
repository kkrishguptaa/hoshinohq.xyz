import type { CTAConfig, SiteContent } from "../content/site";
import {
	bodyClass,
	headingClass,
	labelClass,
	panelClass,
	primaryButtonClass,
	sectionClass,
} from "../lib/ui";

type FormatSectionProps = {
	format: SiteContent["format"];
	primaryCta: CTAConfig;
};

export function FormatSection({ format, primaryCta }: FormatSectionProps) {
	return (
		<section className={sectionClass} id="format">
			<div className="grid gap-5 xl:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] xl:items-start">
				<div className="space-y-4 xl:sticky xl:top-28">
					<p className={labelClass}>Concept</p>
					<h2 className={`${headingClass} max-w-[13ch] text-5xl sm:text-6xl`}>
						The room should feel electric before the first demo even starts.
					</h2>
					<p className={`${bodyClass} max-w-[34rem]`}>{format.intro}</p>
				</div>
				<div className="space-y-5">
					<div className="grid gap-4 md:grid-cols-2">
						<article className={panelClass}>
							<p className={labelClass}>Why attend</p>
							<ul className="mt-4 grid gap-3.5">
								{format.whyAttend.map((item) => (
									<li className={`${bodyClass} relative pl-5`} key={item}>
										<span className="absolute left-0 top-3 h-2 w-2 rounded-full bg-gradient-to-br from-[#e7cc8f] to-cyan-300 shadow-[0_0_18px_rgba(136,214,255,0.34)]" />
										{item}
									</li>
								))}
							</ul>
						</article>
						<article className={panelClass}>
							<p className={labelClass}>Format</p>
							<ul className="mt-4 grid gap-3.5">
								{format.formatPoints.map((item) => (
									<li className={`${bodyClass} relative pl-5`} key={item}>
										<span className="absolute left-0 top-3 h-2 w-2 rounded-full bg-gradient-to-br from-[#e7cc8f] to-cyan-300 shadow-[0_0_18px_rgba(136,214,255,0.34)]" />
										{item}
									</li>
								))}
							</ul>
						</article>
					</div>
					<div
						className={`${panelClass} flex flex-col gap-4 bg-[linear-gradient(145deg,rgba(15,31,49,0.92),rgba(12,28,46,0.82))] md:flex-row md:items-center md:justify-between`}
					>
						<p className={`${bodyClass} max-w-3xl`}>{format.bannerCopy}</p>
						<a
							className={`${primaryButtonClass} shrink-0`}
							href={primaryCta.href}
						>
							{primaryCta.label}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
