"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/config/site";
import { routes } from "@/config/routes";

function getMenuTopOffset(): string {
  return "var(--site-header-height)";
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  // Lock scroll on iOS (overflow:hidden alone is unreliable on Safari)
  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { body, documentElement } = document;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    documentElement.style.overflow = "hidden";

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      documentElement.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  // Close on escape
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  const overlay =
    open && mounted
      ? createPortal(
          <>
            <button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-[200] bg-black/75 md:hidden"
              onClick={close}
            />
            <nav
              id="mobile-nav-menu"
              className="fixed inset-x-0 bottom-0 z-[210] overflow-y-auto bg-black md:hidden"
              style={{ top: getMenuTopOffset() }}
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col px-[var(--container-margin)] py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={close}
                    className="border-b border-border py-4 font-label text-sm font-bold tracking-widest text-on-surface-muted uppercase active:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={siteConfig.youtubeCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="mt-5 bg-primary py-4 text-center font-display text-sm uppercase text-on-primary crimson-glow"
                >
                  {siteConfig.youtubeCta.label}
                </a>
                <Link
                  href={routes.home}
                  onClick={close}
                  className="mt-4 py-3 text-center font-label text-xs tracking-widest text-on-surface-dim uppercase"
                >
                  Home
                </Link>
              </div>
            </nav>
          </>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={open ? "mobile-nav-menu" : undefined}
        onClick={toggle}
        onPointerUp={(e) => {
          // Extra reliability for iOS Safari tap handling
          e.currentTarget.blur();
        }}
        className="relative z-[220] flex h-11 min-h-[44px] w-11 min-w-[44px] cursor-pointer touch-manipulation items-center justify-center rounded-sm bg-transparent text-on-surface [-webkit-tap-highlight-color:transparent] md:hidden"
        style={{ WebkitTouchCallout: "none" }}
      >
        {open ? (
          <X size={26} strokeWidth={2.5} className="pointer-events-none" aria-hidden />
        ) : (
          <Menu size={26} strokeWidth={2.5} className="pointer-events-none" aria-hidden />
        )}
      </button>
      {overlay}
    </>
  );
}
