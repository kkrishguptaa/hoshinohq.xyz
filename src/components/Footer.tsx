import type { CTAConfig, SocialLink } from "../content/site";
import {
  bodyClass,
  primaryButtonClass,
  secondaryButtonClass,
  sectionClass,
} from "../lib/ui";

type FooterProps = {
  wordmark: string;
  location: string;
  dates: string;
  primaryCta: CTAConfig;
  partnerCta: CTAConfig;
  socialLinks: SocialLink[];
};

export function Footer({
  wordmark,
  location,
  dates,
  primaryCta,
  partnerCta,
  socialLinks,
}: FooterProps) {
  return (
    <footer className={sectionClass}>
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <a
            className="inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.12em] text-white"
            href="#top"
          >
            <span
              className="h-2.5 w-2.5 rounded-full bg-[radial-gradient(circle,#f5e6bf_0_28%,transparent_30%),radial-gradient(circle,rgba(231,204,143,0.26)_0_68%,transparent_70%)] shadow-[0_0_18px_rgba(231,204,143,0.5)]"
              aria-hidden="true"
            />
            {wordmark}
          </a>
          <p className={`${bodyClass} mt-4`}>
            {location} / {dates} / Teenager-focused hackathon
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end md:self-start">
          <a className={primaryButtonClass} href={primaryCta.href}>
            {primaryCta.label}
          </a>
          <a className={secondaryButtonClass} href={partnerCta.href}>
            {partnerCta.label}
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 border-t border-white/10 mt-5 pt-5 md:flex-row md:items-center md:justify-between">
        <div
          className="flex flex-wrap gap-4"
          aria-label="Contact and social links"
        >
          {socialLinks.map((link) =>
            link.href ? (
              <a
                className="text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f5e6bf]"
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              >
                {link.label}
              </a>
            ) : (
              <span className="text-slate-300" key={link.label}>
                {link.label}
              </span>
            ),
          )}
        </div>
        <p className="text-sm text-slate-400">
          © 2026 Hoshino. A field for teenage builders.
        </p>
      </div>
    </footer>
  );
}
