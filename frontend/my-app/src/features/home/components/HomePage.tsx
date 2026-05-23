import {
  getFeaturedArticles,
  getSocialPlatforms,
  getUpcomingFights,
} from "@/services/content";
import { EcosystemSection } from "@/shared/sections/EcosystemSection";
import { HeroSection } from "./HeroSection";
import { LatestSection } from "./LatestSection";
import { SpiritTeaserSection } from "./SpiritTeaserSection";
import { UpcomingWarZoneSection } from "./UpcomingWarZoneSection";

export async function HomePage() {
  const [articles, fights, platforms] = await Promise.all([
    getFeaturedArticles(),
    getUpcomingFights(),
    getSocialPlatforms(),
  ]);

  return (
    <>
      <HeroSection />
      <LatestSection articles={articles} />
      <UpcomingWarZoneSection fights={fights} />
      <SpiritTeaserSection />
      <EcosystemSection platforms={platforms} />
    </>
  );
}
