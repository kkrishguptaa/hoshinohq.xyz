export type CTAConfig = {
  label: string;
  href: string;
  kind: "primary" | "secondary";
};

import anayImage from "../../image/anay.jfif";
import anshImage from "../../image/ansh.jpeg";
import aryanImage from "../../image/aryan.jfif";
import krishImage from "../../image/krish.png";

export type MetaPill = {
  label: string;
};

export type HeroAsideCard = {
  eyebrow: string;
  title: string;
  body: string;
};

export type PlaceholderCard = {
  title: string;
  subtitle?: string;
  status?: "coming-soon";
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type TeamMemberLink = {
  label: "Website" | "Twitter" | "LinkedIn" | "Email";
  href: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
  links?: TeamMemberLink[];
  featured?: boolean;
};

export type SiteContent = {
  hero: {
    headline: string;
    subcopy: string;
    meta: MetaPill[];
    primaryCta: CTAConfig;
    asideCards: HeroAsideCard[];
  };
  format: {
    intro: string;
    whyAttend: string[];
    formatPoints: string[];
    bannerCopy: string;
  };
  prizes: PlaceholderCard[];
  judges: PlaceholderCard[];
  sponsors: PlaceholderCard[];
  faq: FAQItem[];
  team: TeamMember[];
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type InfoBandItem = {
  label: string;
  value: string;
};

export type SocialLink = {
  label: string;
  href?: string;
};

export const siteContent: SiteContent = {
  hero: {
    headline: "A starry field for teenage builders.",
    subcopy:
      "Hoshino lands in Delhi for a 36-hour in-person build sprint with demos, mentors, momentum, and the kind of teenage ambition that changes your orbit.",
    meta: [
      { label: "Teenager-focused" },
      { label: "Delhi" },
      { label: "36 hour" },
      { label: "June 27-28, 2026" },
    ],
    primaryCta: {
      label: "Register now",
      href: "https://apply.hoshinohq.xyz",
      kind: "primary",
    },
    asideCards: [
      {
        eyebrow: "Teenager-focused",
        title: "Applications open",
        body: "Come with a team or find one in the room. The event is designed for ambitious teenage builders.",
      },
      {
        eyebrow: "What it feels like",
        title: "Sharp room. Real momentum.",
        body: "Mentor checkpoints, demo pressure, and a visual world that feels worth showing up for.",
      },
    ],
  },
  format: {
    intro:
      "Hoshino takes its name from the Japanese idea of a starry field, a place where individual sparks become something bigger together. We are building that field in Delhi for teenagers who want to ship, learn fast, and meet peers who care just as much.",
    whyAttend: [
      "Meet a room full of teenage builders who are already making things, not just talking about them.",
      "Build with mentorship, checkpoints, demos, and enough pressure to actually finish something worth showing.",
      "Join a hackathon designed to feel sharp, modern, and credible to both participants and future sponsors.",
    ],
    formatPoints: [
      "36-hour in-person hackathon in Delhi",
      "Open building sprints with mentor check-ins",
      "Team formation support if you come solo",
      "Project demos, judging, and closing celebration",
      "Built specifically for teenagers",
    ],
    bannerCopy:
      "Applications are open for teenagers who want a sharper room, stronger peers, and 36 hours to build something worth shipping.",
  },
  prizes: [
    {
      title: "Grand Prize",
      subtitle: "Announcing soon",
      status: "coming-soon",
    },
    { title: "Best Build", subtitle: "Announcing soon", status: "coming-soon" },
    {
      title: "Jury Favorite",
      subtitle: "Announcing soon",
      status: "coming-soon",
    },
  ],
  judges: [
    { title: "Judge 01", subtitle: "Announcing soon", status: "coming-soon" },
    { title: "Judge 02", subtitle: "Announcing soon", status: "coming-soon" },
    { title: "Judge 03", subtitle: "Announcing soon", status: "coming-soon" },
    { title: "Judge 04", subtitle: "Announcing soon", status: "coming-soon" },
  ],
  sponsors: [
    { title: "Title partner", subtitle: "Coming soon", status: "coming-soon" },
    {
      title: "Ecosystem partner",
      subtitle: "Coming soon",
      status: "coming-soon",
    },
    {
      title: "Community partner",
      subtitle: "Coming soon",
      status: "coming-soon",
    },
    { title: "Youth partner", subtitle: "Coming soon", status: "coming-soon" },
    { title: "Infra partner", subtitle: "Coming soon", status: "coming-soon" },
    { title: "Media partner", subtitle: "Coming soon", status: "coming-soon" },
  ],
  faq: [
    {
      question: "Who can apply?",
      answer:
        "Hoshino is built for teenage builders. If you are a teenager who wants to spend 36 hours building in person in Delhi, this is the audience the event is designed for.",
    },
    {
      question: "Is Hoshino only for teenagers?",
      answer:
        "It is teenager-focused by design, so the room, programming, and experience are shaped around that community first.",
    },
    {
      question: "Do I need a team already?",
      answer:
        "No. You can apply solo and find collaborators at the event, or arrive with a team if you already know who you want to build with.",
    },
    {
      question: "Is it in person?",
      answer:
        "Yes. Hoshino is an in-person event in Delhi on June 27-28, 2026. Venue details will be announced closer to the event.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, charger, any hardware you rely on, and enough focus to build for 36 hours. A full prep note will go out before the event.",
    },
    {
      question: "Will food, internet, and workspace be provided?",
      answer:
        "That is the plan. Exact logistics will be confirmed once the venue and partner stack are finalized, and participants will get the detailed rundown before the event.",
    },
    {
      question: "How do sponsors get involved?",
      answer:
        "We are actively opening sponsor conversations. If you want to back teen builders in Delhi, use the partner CTA on this page and we will get you the partnership deck.",
    },
  ],
  team: [
    {
      name: "Krish Gupta",
      role: "Co-Founder",
      bio: "Krish shapes the vision, pacing, and builder experience behind Hoshino so the event feels ambitious from the first scroll to the final demo.",
      imageSrc: krishImage,
      featured: true,
    },
    {
      name: "Aryan Brite",
      role: "Co-Founder",
      bio: "Aryan works on the strategy and execution details that turn Hoshino from an idea into a room full of teenage builders shipping together.",
      imageSrc: aryanImage,
      featured: true,
    },
    {
      name: "Iqra Fathima",
      role: "Creative Team",
      bio: "Iqra helps define the visual world of Hoshino and makes sure the brand feels intentional across every touchpoint.",
    },
    {
      name: "Anay Jain",
      role: "Creative Team",
      bio: "Anay contributes to the creative direction and the design choices that give Hoshino its editorial personality.",
      imageSrc: anayImage,
    },
    {
      name: "Ansh",
      role: "Creative Team",
      bio: "Ansh supports the creative team with concepts and details that make the event feel cohesive and memorable.",
      imageSrc: anshImage,
    },
  ],
};

export const siteConfig = {
  wordmark: "Hoshino",
  location: "Delhi",
  dates: "June 27-28, 2026",
  eventNote: "Teenager-focused hackathon",
  heroMarquee: "Delhi / June 27-28 / Teenager-focused / In person",
  navigation: [
    { label: "Format", href: "#format" },
    { label: "Prizes", href: "#prizes" },
    { label: "Judges", href: "#judges" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "FAQ", href: "#faq" },
  ] satisfies NavigationItem[],
  infoBand: [
    { label: "City", value: "Delhi" },
    { label: "Dates", value: "June 27-28, 2026" },
    { label: "Format", value: "36 hour" },
    { label: "Audience", value: "Teenager-focused" },
  ] satisfies InfoBandItem[],
  footer: {
    partnerCta: {
      label: "Partner with us",
      href: "mailto:krish@hoshinohq.xyz",
      kind: "secondary",
    } satisfies CTAConfig,
  },
  socialLinks: [
    { label: "Email", href: "mailto:krish@hoshinohq.xyz" },
    { label: "Instagram", href: "https://instagram.com/hoshinohq" },
  ] satisfies SocialLink[],
};
