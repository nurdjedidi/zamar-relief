import { motion } from "framer-motion";
import {
  fieldFeatures,
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
                  className="rounded-[1.4rem] border border-[var(--color-border)] bg-white/82 px-4 py-4 text-sm leading-6 text-[var(--color-ink)]"
                >
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] align-middle" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {openSourcePrinciples.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="rounded-[1.6rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(223,245,255,0.72))] p-5"
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
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
