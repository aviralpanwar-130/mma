import Image from "next/image";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { siteConfig } from "@/config/site";
import { routes } from "@/config/routes";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD4AMYcZx9wjih7kAHb5N_y4M1ZBJ1a3x0zCmxfrVCwwzmkOmLyc7vp9SoyujdVVFe8bzzqmbnFO-0fGQqK2QYzk_mUrbKuL0hV1LHtF0TpnkCLqDG7Ym7dHj5s4DyyFE8iXnRAAFI5Ni5mAreRLx8SDjfjVA8jnU6O39v1oEB7RP_90ilCT9rklYk5TFie4rNLZDoZD8E9X6QB6GeNiR8-8U6x7GtLJYmm6lQM1TIJ4cYNlLE7dHNbm6ngcBFkXKofoTEpu9uGlR0D";

export function HeroSection() {
  return (
    <header className="hero-spotlight hero-arena relative flex items-start overflow-hidden lg:min-h-screen lg:items-center">
      {/* Octagon image — desktop only */}
      <div className="absolute inset-0 z-0 hidden overflow-hidden md:block">
        <Image
          src={HERO_IMAGE}
          alt="Professional MMA octagon under dramatic stadium lighting"
          fill
          priority
          className="object-cover opacity-35 grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-black/40" />
        <div className="absolute -right-40 -bottom-40 h-[600px] w-[600px] rounded-full bg-primary/25 blur-[120px]" />
      </div>

      {/* Mobile red ambient glow */}
      <div className="absolute bottom-0 left-1/2 z-0 h-48 w-[80%] -translate-x-1/2 rounded-full bg-primary/15 blur-[80px] md:hidden" />

      <Container className="relative z-10 py-10 md:py-16 lg:py-24">
        <div className="max-w-4xl space-y-5 md:space-y-6">
          <div className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="font-label text-[10px] font-bold text-primary uppercase sm:text-xs">
              {siteConfig.heroBadge}
            </span>
          </div>

          <h1 className="font-display text-[2.5rem] leading-[0.95] text-white uppercase drop-shadow-lg sm:text-5xl md:text-[5rem] md:leading-[0.9]">
            India&apos;s MMA &amp;{" "}
            <span className="text-primary text-glow">UFC Community</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-on-surface-muted md:text-lg">
            {siteConfig.description}
          </p>

          <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:gap-4 sm:pt-8">
            <Button href={siteConfig.youtubeCta.href} external variant="primary">
              {siteConfig.youtubeCta.label}
            </Button>
            <Button href={`${routes.home}#upcoming-war-zone`} variant="outline">
              Upcoming Wars
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
