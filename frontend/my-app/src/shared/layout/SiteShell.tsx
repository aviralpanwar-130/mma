import type { ReactNode } from "react";
import { FloatingYoutubeCta } from "./FloatingYoutubeCta";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-[var(--site-header-height)]">
        {children}
      </main>
      <SiteFooter />
      <FloatingYoutubeCta />
    </>
  );
}
