import {
  AtSign,
  Camera,
  MessageCircle,
  Video,
} from "lucide-react";
import type { SocialPlatform } from "@/types/content";
import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";

interface EcosystemSectionProps {
  platforms: SocialPlatform[];
}

const iconMap = {
  youtube: { Icon: Video, color: "text-red-600" },
  instagram: { Icon: Camera, color: "text-pink-500" },
  twitter: { Icon: MessageCircle, color: "text-blue-400" },
  threads: { Icon: AtSign, color: "text-white" },
};

export function EcosystemSection({ platforms }: EcosystemSectionProps) {
  return (
    <section id="ecosystem" className="bg-background py-section md:py-section-lg">
      <Container>
        <SectionHeading title="Enter the Ecosystem" className="mb-10 md:mb-16" />

        {/* Mobile: list rows with watermark letters */}
        <div className="flex flex-col md:hidden">
          {platforms.map((platform) => {
            const { Icon, color } = iconMap[platform.icon];
            return (
              <a
                key={platform.id}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-row group flex items-center gap-4 px-4 py-6 transition-colors active:bg-surface-elevated"
              >
                <span className="social-row-watermark">{platform.watermark}</span>
                <Icon className={`relative z-10 h-8 w-8 shrink-0 ${color}`} />
                <div className="relative z-10 min-w-0 flex-1">
                  <h3 className="font-display text-lg uppercase">{platform.name}</h3>
                  <p className="mt-1 text-sm text-on-surface-muted">
                    {platform.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Desktop: card grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform) => {
            const { Icon, color } = iconMap[platform.icon];
            const hoverBorder =
              platform.icon === "youtube"
                ? "hover:border-red-600/50"
                : platform.icon === "instagram"
                  ? "hover:border-pink-600/50"
                  : platform.icon === "twitter"
                    ? "hover:border-blue-400/50"
                    : "hover:border-white/50";

            return (
              <a
                key={platform.id}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block overflow-hidden border border-border bg-surface-card p-8 transition-all duration-500 ${hoverBorder}`}
              >
                <div className="absolute -top-8 -right-8 font-display text-[120px] text-white/5 uppercase transition-colors group-hover:text-primary/10">
                  {platform.watermark}
                </div>
                <Icon
                  className={`relative mb-6 h-12 w-12 ${color} transition-transform group-hover:scale-110`}
                />
                <h3 className="font-display relative mb-2 text-xl uppercase">
                  {platform.name}
                </h3>
                <p className="relative text-on-surface-muted">{platform.description}</p>
                <div className="relative mt-6 h-1 w-full bg-border transition-colors group-hover:bg-primary" />
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
