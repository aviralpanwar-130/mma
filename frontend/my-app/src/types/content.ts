export type ContentCategory = "Analysis" | "Documentary" | "News" | "Exclusive";

export interface FeaturedArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: ContentCategory;
  duration: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
}

export interface UpcomingFight {
  id: string;
  weightClass: string;
  fighterA: string;
  fighterB: string;
  dateLabel: string;
  location: string;
  featured?: boolean;
}

export interface SocialPlatform {
  id: string;
  name: string;
  description: string;
  href: string;
  watermark: string;
  icon: "youtube" | "instagram" | "twitter" | "threads";
}

export interface SiteStats {
  fans: string;
  fansLabel: string;
  views: string;
  viewsLabel: string;
}
