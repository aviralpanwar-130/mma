"use client";

import Link from "next/link";
import { navItems } from "@/config/site";
import { BrandLogo } from "@/shared/ui/BrandLogo";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  return (
    <header className="site-header fixed top-0 right-0 left-0 z-[100] box-border h-[var(--site-header-height)] w-full border-b border-border bg-black p-0 shadow-2xl md:glass-nav">
      <div
        className="h-[env(safe-area-inset-top,0px)] shrink-0"
        aria-hidden
      />
      <div className="mx-auto flex h-[var(--site-header-bar)] max-w-[1440px] items-center gap-3 px-[var(--container-margin)]">
        <div className="relative z-[1] min-w-0 flex-1">
          <BrandLogo size="sm" className="max-w-[calc(100vw-5.5rem)]" />
        </div>

        <div className="hidden min-w-0 flex-1 md:block">
          <div className="scrollbar-hide flex h-full items-center gap-8 overflow-x-auto whitespace-nowrap">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-label shrink-0 text-xs font-bold tracking-widest text-on-surface-muted uppercase transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative z-[220] flex h-full shrink-0 items-center">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
