import type { UpcomingFight } from "@/types/content";
import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";

interface UpcomingWarZoneSectionProps {
  fights: UpcomingFight[];
}

export function UpcomingWarZoneSection({ fights }: UpcomingWarZoneSectionProps) {
  return (
    <section
      id="upcoming-war-zone"
      className="border-y border-border bg-surface-muted py-section md:py-section-lg"
    >
      <Container>
        <div className="mb-10 text-center md:mb-16">
          <SectionHeading
            eyebrow="Main Card Schedule"
            title="Upcoming War Zone"
            align="center"
          />
        </div>

        <div className="space-y-3 md:space-y-4">
          {fights.map((fight) => (
            <div
              key={fight.id}
              className={
                fight.featured
                  ? "fight-card-featured relative overflow-hidden p-6 md:p-8"
                  : "fight-card relative overflow-hidden p-6 transition-colors md:p-8"
              }
            >
              {/* Mobile: centered stack */}
              <div className="flex flex-col items-center text-center md:hidden">
                <span
                  className={`font-label mb-3 text-[10px] font-bold tracking-widest uppercase ${
                    fight.featured ? "text-primary" : "text-on-surface-dim"
                  }`}
                >
                  {fight.weightClass}
                </span>
                <h4 className="font-display text-2xl uppercase leading-tight">
                  {fight.fighterA}
                </h4>
                <span className="my-2 font-display text-3xl text-on-surface-dim/40 uppercase">
                  vs
                </span>
                <h4 className="font-display text-2xl uppercase leading-tight">
                  {fight.fighterB}
                </h4>
                <p className="font-label mt-3 text-[10px] tracking-widest text-on-surface-dim uppercase">
                  {fight.dateLabel} | {fight.location}
                </p>
              </div>

              {/* Desktop: horizontal row */}
              <div className="relative hidden items-center justify-between md:flex">
                {fight.featured ? (
                  <div className="absolute top-0 right-0 bottom-0 w-1/4 bg-gradient-to-l from-primary/10 to-transparent" />
                ) : null}
                <div className="flex-1 text-left">
                  <span
                    className={`font-label mb-2 block text-xs font-bold tracking-widest uppercase ${
                      fight.featured ? "text-primary" : "text-on-surface-dim"
                    }`}
                  >
                    {fight.weightClass}
                  </span>
                  <h4 className="font-display text-2xl uppercase tracking-tight">
                    {fight.fighterA}
                  </h4>
                </div>
                <div className="flex flex-col items-center px-12">
                  <div className="font-display text-6xl leading-none text-white/10 uppercase select-none">
                    VS
                  </div>
                  <div className="font-label mt-2 text-xs tracking-widest text-on-surface-dim uppercase">
                    {fight.dateLabel} | {fight.location}
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <span className="font-label mb-2 block text-xs font-bold tracking-widest text-on-surface-dim uppercase">
                    {fight.featured ? "Challenger" : fight.weightClass}
                  </span>
                  <h4 className="font-display text-2xl uppercase tracking-tight">
                    {fight.fighterB}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
