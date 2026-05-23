import { reasons } from "./content";
import { SectionHeading } from "./section-heading";

export function WhySection() {
  return (
    <section id="why" className="section-shell py-12 sm:py-18">
      <SectionHeading
        kicker="Why"
        title="A digital layer for humanitarian work."
        copy="Zamar Relief starts from the field, not from dashboards. The idea is to support practical documentation with tools that stay readable, respectful, and useful when the situation is messy."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {reasons.map((item, index) => (
          <article
            key={item.title}
            className="glass-panel hover-card rounded-[1.8rem] p-6"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-sm font-bold text-[var(--color-accent-strong)]">
              0{index + 1}
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-ink)]">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
