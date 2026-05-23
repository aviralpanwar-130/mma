import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary crimson-glow crimson-glow-hover hover:bg-primary-bright active:scale-[0.98]",
  outline:
    "border-2 border-on-surface bg-transparent text-on-surface hover:bg-on-surface hover:text-background active:scale-[0.98]",
  ghost: "text-on-surface-muted hover:text-on-surface",
};

export function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  external = false,
  fullWidth = true,
}: ButtonProps) {
  const widthClass = fullWidth ? "w-full sm:w-auto" : "";
  const classes = `inline-flex items-center justify-center px-8 py-4 font-display text-sm uppercase tracking-wide transition-all duration-300 sm:text-base ${widthClass} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
