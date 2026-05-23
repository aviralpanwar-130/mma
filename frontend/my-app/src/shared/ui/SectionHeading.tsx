interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow ? <p className="section-eyebrow mb-2">{eyebrow}</p> : null}
      <h2 className="section-title">
        {title}
        {highlight ? (
          <>
            {" "}
            <span className="text-primary text-glow">{highlight}</span>
          </>
        ) : null}
      </h2>
    </div>
  );
}
