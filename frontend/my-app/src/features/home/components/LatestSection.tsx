import Image from "next/image";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import type { FeaturedArticle } from "@/types/content";
import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";

interface LatestSectionProps {
  articles: FeaturedArticle[];
}

export function LatestSection({ articles }: LatestSectionProps) {
  return (
    <section id="latest" className="bg-background py-section md:py-section-lg">
      <Container>
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <SectionHeading title="Latest from the Baithak" />
          <Link
            href="#"
            className="hidden items-center gap-2 font-label text-xs font-bold tracking-widest text-on-surface-muted uppercase transition-colors hover:text-primary md:flex"
          >
            View all content
            <TrendingUp className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile: stacked cards with dividers */}
        <div className="flex flex-col md:hidden">
          {articles.map((article) => (
            <article key={article.id} className="content-card group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={article.imageUrl}
                  alt={article.imageAlt}
                  fill
                  className="object-cover grayscale contrast-125"
                  sizes="100vw"
                />
                <span className="absolute top-3 left-3 bg-primary px-2.5 py-1 font-label text-[10px] font-bold text-white uppercase">
                  {article.category}
                </span>
              </div>
              <div className="space-y-2 p-5">
                <h3 className="font-display text-xl leading-tight uppercase">
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-muted">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop: grid with hover effects */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group overflow-hidden bg-surface-card border border-border transition-all duration-500 hover:-translate-y-2 hover:border-primary/30"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={article.imageUrl}
                  alt={article.imageAlt}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  sizes="33vw"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-primary px-3 py-1 font-label text-xs font-bold text-white uppercase">
                    {article.category}
                  </span>
                  <span className="bg-black/70 px-3 py-1 font-label text-xs font-bold text-white uppercase backdrop-blur-sm">
                    {article.duration}
                  </span>
                </div>
              </div>
              <div className="border-b-4 border-transparent p-6 transition-colors group-hover:border-primary">
                <h3 className="font-display mb-3 line-clamp-2 text-xl uppercase">
                  {article.title}
                </h3>
                <p className="line-clamp-2 text-on-surface-muted">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
