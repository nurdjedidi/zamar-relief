import {
  fieldFeatures,
  fieldRelease,
  openSourcePrinciples,
} from "./content";
import { SectionHeading } from "./section-heading";

export function ZamarFieldSection() {
  return (
    <section id="zamar-field" className="section-shell py-12 sm:py-18">
      <div className="glass-panel overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <SectionHeading
              kicker="Zamar Field"
              title="An open-source field companion for mapping, media, and fast records."
              copy="Zamar Field is the first public-facing software project connected to Zamar Relief. It is being shaped as an offline-capable, map-first tool for teams who need to document terrain work with less friction."
            />

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {fieldFeatures.map((feature) => (
                <li
                  key={feature}
                  className="hover-card rounded-[1.4rem] border border-[var(--color-border)] bg-white/82 px-4 py-4 text-sm leading-6 text-[var(--color-ink)]"
                >
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] align-middle" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="hover-card mt-6 rounded-[1.6rem] border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(20,184,212,0.12),rgba(255,255,255,0.92))] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                {fieldRelease.label}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">
                {fieldRelease.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                {fieldRelease.body}
              </p>
              <div className="mt-5">
                <a
                  href={fieldRelease.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[#0d2738]"
                >
                  {fieldRelease.cta}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {openSourcePrinciples.map((item, index) => (
              <article
                key={item.title}
                className="hover-card rounded-[1.6rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(223,245,255,0.72))] p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                  Open source principle
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
