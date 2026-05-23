import Link from "next/link";
import { getSiteStats, getSocialPlatforms } from "@/services/content";
import { siteConfig } from "@/config/site";
import { routes } from "@/config/routes";
import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";
import { BrandLogo } from "@/shared/ui/BrandLogo";
import { EcosystemSection } from "@/shared/sections/EcosystemSection";

export async function AboutPage() {
  const [stats, platforms] = await Promise.all([
    getSiteStats(),
    getSocialPlatforms(),
  ]);

  return (
    <>
      <section className="border-b border-border bg-surface-muted py-16 md:py-24">
        <Container className="flex flex-col items-center text-center">
          <BrandLogo size="xl" href={null} />
          <p className="mt-8 max-w-2xl text-lg text-on-surface-muted">
            {siteConfig.tagline} — {siteConfig.heroBadge}
          </p>
        </Container>
      </section>

      <section className="bg-background py-16 md:py-24">
        <Container>
          <p className="section-eyebrow mb-4">Our story</p>
          <h1 className="section-title mb-12 md:text-[4.5rem]">
            The Spirit of <span className="text-primary text-glow">The Baithak</span>
          </h1>

          <div className="max-w-3xl space-y-6">
            <p className="text-lg leading-relaxed text-on-surface">
              In India, a &quot;Baithak&quot; is more than just a meeting, it&apos;s a sacred
              space where brothers gather to discuss, debate, and share passion. We took
              that essence and brought it to the Octagon.
            </p>
            <p className="leading-relaxed text-on-surface-muted">
              {siteConfig.name}
              {" "}
              was born from the need for technical, high-level analysis tailored for the
              Indian fight fan. We don&apos;t just follow trends, we break down the
              mechanics of a perfect liver shot and the soul of a warrior&apos;s journey.
            </p>
            <p className="leading-relaxed text-on-surface-muted">
              From underground gyms in the heartland to the brightest lights of the UFC,
              we document the rise of Indian MMA with the respect and depth the sport
              deserves. This is your baithak—pull up a chair.
            </p>

            <div className="flex gap-12 pt-6">
              <div>
                <span className="font-display block text-4xl text-primary md:text-5xl">
                  {stats.fans}
                </span>
                <span className="font-label text-xs font-bold tracking-widest text-on-surface-muted uppercase">
                  {stats.fansLabel}
                </span>
              </div>
              <div>
                <span className="font-display block text-4xl text-primary md:text-5xl">
                  {stats.views}
                </span>
                <span className="font-label text-xs font-bold tracking-widest text-on-surface-muted uppercase">
                  {stats.viewsLabel}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-8 sm:flex-row">
              <Button href={siteConfig.youtubeCta.href} external>
                {siteConfig.youtubeCta.label}
              </Button>
              <Button href={routes.contact} variant="outline">
                Contact us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-muted py-16 md:py-24">
        <Container>
          <h2 className="font-display mb-8 text-3xl uppercase text-on-surface md:text-4xl">
            What we stand for
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Technical depth",
                body: "Breakdowns that respect the craft—striking, grappling, and fight IQ for fans who want more than highlights.",
              },
              {
                title: "India-first voice",
                body: "Coverage rooted in the Indian MMA community, from local promotions to global UFC storylines that matter here.",
              },
              {
                title: "Community baithak",
                body: "A gathering place across YouTube, X, and Threads where fight fans debate like family.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-l-4 border-primary bg-surface-card p-6"
              >
                <h3 className="font-display mb-3 text-xl uppercase">{item.title}</h3>
                <p className="text-on-surface-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <EcosystemSection platforms={platforms} />

      <section className="bg-background py-12">
        <Container className="text-center">
          <Link
            href={routes.home}
            className="font-label text-xs font-bold tracking-widest text-on-surface-muted uppercase hover:text-primary"
          >
            ← Back to home
          </Link>
        </Container>
      </section>
    </>
  );
}
