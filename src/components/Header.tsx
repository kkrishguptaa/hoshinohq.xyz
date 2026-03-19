import type { CTAConfig, NavigationItem } from "../content/site";
import { primaryButtonClass } from "../lib/ui";

type HeaderProps = {
	wordmark: string;
	nav: NavigationItem[];
	primaryCta: CTAConfig;
};

export function Header({ wordmark, nav, primaryCta }: HeaderProps) {
	return (
		<header className="sticky top-4 z-50 mb-6 flex items-center justify-between gap-4 rounded-full border border-white/10 bg-[#06101c]/75 px-4 py-3 shadow-[0_28px_80px_rgba(3,8,16,0.46)] backdrop-blur-2xl sm:px-5">
			<a
				className="inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.12em] text-white"
				href="#top"
				aria-label="Hoshino home"
			>
				<span
					className="h-2.5 w-2.5 rounded-full bg-[radial-gradient(circle,#f5e6bf_0_28%,transparent_30%),radial-gradient(circle,rgba(231,204,143,0.26)_0_68%,transparent_70%)] shadow-[0_0_18px_rgba(231,204,143,0.5)]"
					aria-hidden="true"
				/>
				{wordmark}
			</a>
			<nav
				className="hidden items-center gap-5 text-sm text-slate-300 lg:flex"
				aria-label="Primary"
			>
				{nav.map((item) => (
					<a
						className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f5e6bf]"
						key={item.href}
						href={item.href}
					>
						{item.label}
					</a>
				))}
			</nav>
			<a
				className={`${primaryButtonClass} hidden min-h-11 px-4 sm:inline-flex`}
				href={primaryCta.href}
			>
				{primaryCta.label}
			</a>
		</header>
	);
}
