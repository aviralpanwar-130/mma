import { routes } from "./routes";

export const siteConfig = {
  name: "MMA Baithak",
  tagline: "The Heartbeat of Indian MMA",
  url: "https://mmabaithak.com",
  description:
    "Deep-dives, technical fight analysis, and the unfiltered heartbeat of Indian MMA. Join the baithak where legends are debated and contenders are born.",
  copyright: "© 2025 MMA BAITHAK. ALL RIGHTS RESERVED.",
  footerTagline: "Built for the warriors of Bharat.",
  logo: {
    src: "/brand/logo.png",
    alt: "MMA Baithak logo",
  },
  heroBadge: "Fight Analysis & Documentaries",
  social: {
    youtube: "https://www.youtube.com/@MMABaithak",
    // instagram: "https://www.instagram.com/mmabaithak",
    twitter: "https://x.com/mmabaithak",
    threads: "https://www.threads.net/@mmabaithak",
  },
  youtubeCta: {
    label: "Watch on YouTube",
    href: "https://www.youtube.com/@MMABaithak",
  },
} as const;

export const navItems = [
  { label: "Best Fighters", href: routes.fighters },
  { label: "Upcoming Events", href: routes.events },
  { label: "News", href: `${routes.home}#latest` },
  { label: "Analysis", href: `${routes.home}#latest` },
  { label: "Rankings", href: routes.rankings },
  { label: "About Us", href: routes.about },
  { label: "Community", href: routes.community },
] as const;

export const footerLinks = [
  { label: "About Us", href: routes.about },
  { label: "Contact", href: routes.contact },
  { label: "Privacy Policy", href: routes.privacy },
  { label: "Terms of Service", href: routes.terms },
] as const;
