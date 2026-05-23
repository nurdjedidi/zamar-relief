import { steps } from "./content";
import { SectionHeading } from "./section-heading";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-shell py-12 sm:py-18">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          kicker="How it works"
          title="A simple flow from capture to follow-up."
          copy="The product direction is intentionally narrow: help teams capture what they need, anchor it geographically, and reopen it later without creating extra operational noise."
        />

        <div className="space-y-4">
          {steps.map((item, index) => (
            <div
              key={item.title}
              className="glass-panel hover-card rounded-[1.8rem] p-5 sm:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
