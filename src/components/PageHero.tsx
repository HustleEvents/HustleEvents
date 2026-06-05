import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-6 inline-flex items-center gap-3 animate-fade-up">
          <span className="gold-line" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h1 className="font-display text-5xl leading-[1.02] text-ink md:text-7xl lg:text-8xl animate-fade-up delay-100">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-fade-up delay-200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
