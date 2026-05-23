import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { routes } from "@/config/routes";

type BrandLogoSize = "sm" | "md" | "xl";

interface BrandLogoProps {
  size?: BrandLogoSize;
  showName?: boolean;
  href?: string | null;
  className?: string;
}

const sizeStyles: Record<
  BrandLogoSize,
  { image: string; name: string; gap: string }
> = {
  sm: {
    image: "h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14",
    name: "text-lg sm:text-xl md:text-2xl",
    gap: "gap-3",
  },
  md: {
    image: "h-14 w-14",
    name: "text-xl",
    gap: "gap-3",
  },
  xl: {
    image: "h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64",
    name: "text-3xl sm:text-4xl",
    gap: "gap-6",
  },
};

export function BrandLogo({
  size = "sm",
  showName = true,
  href = routes.home,
  className = "",
}: BrandLogoProps) {
  const styles = sizeStyles[size];
  const isLarge = size === "xl";

  const content = (
    <div
      className={`flex items-center ${isLarge ? "flex-col text-center" : "flex-row"} ${styles.gap} ${className}`}
    >
      <div
        className={`relative shrink-0 overflow-hidden rounded-sm ${styles.image} ${isLarge ? "crimson-glow" : ""}`}
      >
        <Image
          src={siteConfig.logo.src}
          alt={siteConfig.logo.alt}
          fill
          className="object-cover"
          sizes={
            size === "xl"
              ? "256px"
              : size === "md"
                ? "56px"
                : "56px"
          }
          priority={size === "sm"}
        />
      </div>
      {showName ? (
        <span
          className={`font-display uppercase leading-none tracking-tighter text-on-surface ${styles.name}`}
        >
          {siteConfig.name}
        </span>
      ) : null}
    </div>
  );

  if (href === null || href === undefined) {
    return <div className={`inline-flex shrink-0 ${className}`}>{content}</div>;
  }

  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 transition-opacity hover:opacity-90 ${className}`}
    >
      {content}
    </Link>
  );
}
