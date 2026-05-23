import Link from "next/link";
import { routes } from "@/config/routes";
import { Container } from "./Container";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="section-eyebrow mb-4">Coming soon</p>
      <h1 className="section-title mb-6">{title}</h1>
      <p className="mb-10 max-w-xl text-on-surface-muted">
        {description ??
          "We are building this section for the MMA Baithak community. Check back soon for updates."}
      </p>
      <Link
        href={routes.home}
        className="bg-primary px-8 py-4 font-display text-sm uppercase text-white crimson-glow transition-transform hover:scale-105"
      >
        Back to home
      </Link>
    </Container>
  );
}
