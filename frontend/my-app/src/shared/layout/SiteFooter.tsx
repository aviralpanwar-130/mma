import Link from "next/link";
import { Video } from "lucide-react";
import { footerLinks, siteConfig } from "@/config/site";
import { BrandLogo } from "@/shared/ui/BrandLogo";
import { Container } from "@/shared/ui/Container";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12 2.25c-2.58 0-4.68 2.1-4.68 4.68 0 .9.25 1.74.69 2.46-1.1-.28-2.14-.44-3.01-.44-2.58 0-4.68 2.1-4.68 4.68 0 2.58 2.1 4.68 4.68 4.68.87 0 1.91-.16 3.01-.44-.44.72-.69 1.56-.69 2.46 0 2.58 2.1 4.68 4.68 4.68s4.68-2.1 4.68-4.68c0-.9-.25-1.74-.69-2.46 1.1.28 2.14.44 3.01.44 2.58 0 4.68-2.1 4.68-4.68 0-2.58-2.1-4.68-4.68-4.68-.87 0-1.91.16-3.01.44.44-.72.69-1.56.69-2.46 0-2.58-2.1-4.68-4.68-4.68zm0 3.5a1.18 1.18 0 1 1 0 2.36 1.18 1.18 0 0 1 0-2.36zm-3.01 5.18a1.18 1.18 0 1 1 0 2.36 1.18 1.18 0 0 1 0-2.36zm6.02 0a1.18 1.18 0 1 1 0 2.36 1.18 1.18 0 0 1 0-2.36zm-3.01 5.18a1.18 1.18 0 1 1 0 2.36 1.18 1.18 0 0 1 0-2.36z" />
    </svg>
  );
}

const socialIcons = [
  { href: siteConfig.social.youtube, label: "YouTube", Icon: Video },
  // { href: siteConfig.social.instagram, label: "Instagram", Icon: Camera },
  { href: siteConfig.social.twitter, label: "X", Icon: XIcon },
  { href: siteConfig.social.threads, label: "Threads", Icon: ThreadsIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-16 md:py-24">
      <Container className="flex flex-col items-center gap-8">
        <BrandLogo size="md" href={null} className="opacity-80" />

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-label text-xs font-bold tracking-widest text-on-surface-muted uppercase transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {socialIcons.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-on-surface-muted transition-colors hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="font-label text-xs tracking-widest text-on-surface-dim uppercase">
            {siteConfig.copyright}
          </p>
          <p className="mt-4 text-sm text-on-surface-dim italic">
            {siteConfig.footerTagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
