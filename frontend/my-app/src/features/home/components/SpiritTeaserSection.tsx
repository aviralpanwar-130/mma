import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSiteStats } from "@/services/content";
import { routes } from "@/config/routes";
import { Container } from "@/shared/ui/Container";

const SPIRIT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCUug54rGIG5awd8b5VcobLP7DsyO5bvFfKDo6H-I9n0Q3pyWi-vOytedz4wkn6sAgnPdDCO1PuQ7rkppVT72YAVBooZXXH1id_eDzcO7bM-XRvBweeeneo-YnLCYWvzKP9quNodAI24MdzSE9QrT1mhSKD0GKetxaZqLraH7yfGPc4FJuFBCQhTpM-2CPZe2rdSi01lfTBLq3PBXTgKLsuI8TjFGwhFsbrBBcE-ZyGNYTrSLThypPYDp-rUSLvVnoG2iYguW_NNCOJ";

export async function SpiritTeaserSection() {
  const stats = await getSiteStats();

  return (
    <section className="bg-background py-section md:py-section-lg">
      <Container>
        <h2 className="section-title mb-6">
          The Spirit of <span className="text-primary text-glow">The Baithak</span>
        </h2>

        <p className="mb-6 max-w-3xl text-base leading-relaxed text-on-surface-muted md:text-lg">
          In India, a &quot;Baithak&quot; is more than just a meeting—it&apos;s a sacred space
          where brothers gather to debate, share passion, and celebrate the fight game
          together.
        </p>

        <div className="mb-8 flex gap-10">
          <div>
            <span className="font-display block text-4xl text-primary md:text-5xl">
              {stats.fans}
            </span>
            <span className="font-label text-[10px] font-bold tracking-widest text-on-surface-muted uppercase">
              {stats.fansLabel}
            </span>
          </div>
          <div>
            <span className="font-display block text-4xl text-primary md:text-5xl">
              {stats.views}
            </span>
            <span className="font-label text-[10px] font-bold tracking-widest text-on-surface-muted uppercase">
              {stats.viewsLabel}
            </span>
          </div>
        </div>

        <div className="relative mb-8 aspect-[16/10] overflow-hidden md:aspect-[21/9]">
          <Image
            src={SPIRIT_IMAGE}
            alt="Two MMA fighters in an intense clinch, black and white"
            fill
            className="object-cover grayscale contrast-125"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
        </div>

        <Link
          href={routes.about}
          className="inline-flex items-center gap-2 font-label text-xs font-bold tracking-widest text-primary uppercase transition-colors hover:text-on-surface"
        >
          Read our full story
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Container>
    </section>
  );
}
