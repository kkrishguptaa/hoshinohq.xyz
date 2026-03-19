import { AboutTeam } from "./components/AboutTeam";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { FormatSection } from "./components/FormatSection";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InfoBand } from "./components/InfoBand";
import { PrizesSection } from "./components/PrizesSection";
import { siteConfig, siteContent } from "./content/site";
import { primaryButtonClass } from "./lib/ui";

export function App() {
	return (
		<div className="relative min-h-screen overflow-x-hidden bg-[#07121f] font-sans text-slate-100">
			<div
				aria-hidden="true"
				className="pointer-events-none fixed inset-0 -z-30 bg-[linear-gradient(180deg,#081423_0%,#06101c_45%,#050d18_100%)]"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(75,126,191,0.24),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(136,214,255,0.12),transparent_25%)]"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none fixed inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:120px_120px]"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.8)_0_1px,transparent_1.2px),radial-gradient(circle_at_78%_12%,rgba(231,204,143,0.8)_0_1px,transparent_1.2px),radial-gradient(circle_at_66%_72%,rgba(136,214,255,0.65)_0_1px,transparent_1.2px),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.55)_0_1px,transparent_1.2px),radial-gradient(circle_at_52%_38%,rgba(255,255,255,0.38)_0_1px,transparent_1.2px)]"
			/>
			<div className="relative mx-auto w-full max-w-[1200px] px-3 pb-24 pt-4 sm:px-4 lg:px-6">
				<Header
					wordmark={siteConfig.wordmark}
					nav={siteConfig.navigation}
					primaryCta={siteContent.hero.primaryCta}
				/>
				<main className="relative z-10 space-y-7">
					<Hero
						hero={siteContent.hero}
						marquee={siteConfig.heroMarquee}
						eventNote={siteConfig.eventNote}
					/>
					<FormatSection
						format={siteContent.format}
						primaryCta={siteContent.hero.primaryCta}
					/>
					<InfoBand items={siteConfig.infoBand} />
					<PrizesSection items={siteContent.prizes} />
					<FAQ items={siteContent.faq} />
					<Footer
						wordmark={siteConfig.wordmark}
						location={siteConfig.location}
						dates={siteConfig.dates}
						primaryCta={siteContent.hero.primaryCta}
						partnerCta={siteConfig.footer.partnerCta}
						socialLinks={siteConfig.socialLinks}
					/>
					<AboutTeam team={siteContent.team} />
				</main>
				<a
					className={`${primaryButtonClass} fixed bottom-4 right-4 z-50 sm:hidden`}
					href={siteContent.hero.primaryCta.href}
				>
					{siteContent.hero.primaryCta.label}
				</a>
			</div>
		</div>
	);
}
