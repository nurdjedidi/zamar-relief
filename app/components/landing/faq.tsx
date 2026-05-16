import { faqs } from "./content";
import { SectionHeading } from "./section-heading";

export function FaqSection() {
  return (
    <section id="faq" className="section-shell py-12 sm:py-18">
      <SectionHeading
        kicker="FAQ"
        title="A few careful answers."
        copy="The language around the project matters. Here is the current baseline for how Zamar Relief and Zamar Field are described in public."
      />

      <div className="mt-10 space-y-4">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="glass-panel group rounded-[1.6rem] p-5"
          >
            <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-[var(--color-ink)] marker:content-none">
              {item.question}
              <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-sm text-[var(--color-muted)] group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="pt-4 text-sm leading-7 text-[var(--color-muted)]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
