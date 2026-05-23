"use client";

import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FloatingYoutubeCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={siteConfig.youtubeCta.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={siteConfig.youtubeCta.label}
      className="fixed right-4 bottom-6 z-40 flex items-center gap-2 bg-primary px-5 py-3 font-display text-xs uppercase text-white crimson-glow transition-transform hover:scale-105 sm:right-6 sm:px-6 sm:py-4 sm:text-sm"
    >
      <Play className="h-5 w-5 shrink-0 fill-current" aria-hidden />
      <span className="hidden sm:inline">{siteConfig.youtubeCta.label}</span>
      <span className="sm:hidden">YouTube</span>
    </a>
  );
}
