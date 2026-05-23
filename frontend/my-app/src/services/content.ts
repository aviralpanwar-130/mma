import featuredArticlesData from "@/data/featured-articles.json";
import upcomingFightsData from "@/data/upcoming-fights.json";
import socialPlatformsData from "@/data/social-platforms.json";
import type {
  FeaturedArticle,
  SocialPlatform,
  SiteStats,
  UpcomingFight,
} from "@/types/content";

export async function getFeaturedArticles(): Promise<FeaturedArticle[]> {
  return featuredArticlesData as FeaturedArticle[];
}

export async function getUpcomingFights(): Promise<UpcomingFight[]> {
  return upcomingFightsData as UpcomingFight[];
}

export async function getSocialPlatforms(): Promise<SocialPlatform[]> {
  const platforms = socialPlatformsData as SocialPlatform[];
  // Instagram hidden for now — uncomment in site.ts, SiteFooter, and social-platforms.json when ready:
  // { id: "instagram", name: "Instagram", href: "https://www.instagram.com/mmabaithak", ... }
  return platforms.filter((platform) => platform.id !== "instagram");
}

export async function getSiteStats(): Promise<SiteStats> {
  return {
    fans: "500K+",
    fansLabel: "Active Fans",
    views: "10M+",
    viewsLabel: "Video Views",
  };
}
