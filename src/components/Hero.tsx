import type { MetaPill, SiteContent } from "../content/site";
import {
	bodyClass,
	headingClass,
	labelClass,
	panelClass,
	pillClass,
	primaryButtonClass,
	sectionClass,
} from "../lib/ui";

type HeroProps = {
	hero: SiteContent["hero"];
	marquee: string;
	eventNote: string;
};

function MetaList({ items }: { items: MetaPill[] }) {
	return (
		<ul className="mt-7 flex flex-wrap gap-3" aria-label="Event highlights">
			{items.map((item) => (
				<li className={pillClass} key={item.label}>
					{item.label}
				</li>
			))}
		</ul>
	);
}

export function Hero({ hero, marquee, eventNote }: HeroProps) {
	return (
		<section
			className={`${sectionClass} min-h-[62svh] bg-[linear-gradient(145deg,rgba(8,20,35,0.98),rgba(8,16,29,0.88))] lg:min-h-[70svh]`}
			id="top"
		>
			<div className="grid gap-5 lg:grid-cols-[minmax(0,1.04fr)_minmax(320px,0.96fr)] lg:items-stretch">
				<div className={`${panelClass} flex flex-col justify-center`}>
					<p className={labelClass}>Hoshino 2026 / Delhi</p>
					<h1
						className={`${headingClass} mt-4 max-w-[12ch] text-[clamp(3.8rem,7vw,6.6rem)]`}
					>
						{hero.headline}
					</h1>
					<p className={`${bodyClass} mt-5 max-w-[38rem] text-[1.02rem]`}>
						{hero.subcopy}
					</p>
					<div className="mt-7 flex flex-wrap gap-3">
						<a className={primaryButtonClass} href={hero.primaryCta.href}>
							{hero.primaryCta.label}
						</a>
					</div>
					<MetaList items={hero.meta} />
				</div>
				<div
					className={`${panelClass} relative flex flex-col gap-4 overflow-hidden`}
				>
					<div
						className="pointer-events-none absolute right-6 top-6 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl"
						aria-hidden="true"
					/>
					<div
						className="pointer-events-none absolute bottom-8 left-6 h-44 w-44 rounded-full bg-[#e7cc8f]/15 blur-3xl"
						aria-hidden="true"
					/>
					<div className="relative rounded-[24px] border border-[#e7cc8f]/25 bg-[linear-gradient(180deg,rgba(12,28,46,0.88),rgba(7,18,31,0.94))] p-6 sm:p-7">
						<p className={labelClass}>{marquee}</p>
						<p className="mt-2 text-[0.78rem] uppercase tracking-[0.16em] text-slate-400">
							{eventNote}
						</p>
						<div
							className={`${headingClass} mt-8 text-[clamp(4.8rem,12vw,7rem)] text-[#f5e6bf]`}
						>
							27-28
						</div>
						<p className="mt-8 text-xl uppercase tracking-[0.16em] text-slate-100">
							Delhi
						</p>
						<p className="mt-2 text-slate-400">Build under a brighter sky.</p>
					</div>
					<div className="grid gap-4 md:grid-cols-2">
						{hero.asideCards.map((card) => (
							<article className={panelClass} key={card.title}>
								<p className={labelClass}>{card.eyebrow}</p>
								<h2
									className={`${headingClass} mt-3 text-3xl sm:text-[2.2rem]`}
								>
									{card.title}
								</h2>
								<p className={`${bodyClass} mt-3`}>{card.body}</p>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
