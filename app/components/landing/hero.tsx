import { heroStats } from "./content";

export function Hero() {
  return (
    <section className="section-shell relative pt-10 pb-14 sm:pt-18 sm:pb-22">
      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/80 px-3 py-2 text-xs text-[var(--color-muted)] sm:px-4 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            Tools for field work
          </div>

          <div className="space-y-4 sm:space-y-5">
            <h1 className="max-w-4xl font-[var(--font-display)] text-4xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Humanitarian work begins with people, not dashboards.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
              Zamar Relief is a human-centered initiative in progress, shaped by
              care, dignity, and practical field realities. Zamar Field is one
              part of that vision: an open-source tool to support calmer data
              collection, mapping, and documentation on the ground.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#zamar-field"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[#0d2738]"
            >
              Explore Zamar Field
            </a>
            <a
              href="#why"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--color-ink)] hover:-translate-y-0.5"
            >
              Why this exists
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:hidden">
            {heroStats.map((item) => (
              <div
                key={item.value}
                className="rounded-[1.2rem] border border-[var(--color-border)] bg-white/80 p-4"
              >
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  {item.value}
                </p>
                <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden max-w-xl items-center gap-3 text-sm text-[var(--color-muted)] sm:flex">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
            Built around people, field realities, and open collaboration.
          </div>
        </div>

        <div className="relative">
          <div className="glass-panel overflow-hidden rounded-[2rem] p-4 sm:p-6">
            <div className="rounded-[1.75rem] border border-white/70 bg-[linear-gradient(180deg,#dff7ff_0%,#fef7ea_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:p-5">
              <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative flex items-center justify-center p-2 sm:p-6 sm:min-h-[450px]">
                  <div className="relative z-10 w-full max-w-[210px] sm:max-w-[240px] -rotate-2 transition-transform duration-700 hover:rotate-0 hover:scale-105">
                    <div className="relative rounded-[2.25rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl ring-1 ring-white/20">
                      <div className="absolute left-1/2 top-0 z-20 h-4 w-24 -translate-x-1/2 rounded-b-xl bg-slate-900" />

                      <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.8rem] bg-black">
                        <img
                          src="/app-screenshot.jpeg"
                          alt="Zamar Field App Interface"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-4 left-1/2 h-4 w-3/4 -translate-x-1/2 rounded-full bg-black/40 blur-md" />
                  </div>
                </div>

                <div className="hidden space-y-4 lg:block">
                  {heroStats.map((item) => (
                    <div
                      key={item.value}
                      className="rounded-[1.4rem] border border-white/70 bg-white/80 p-4 shadow-[0_12px_30px_rgba(17,60,90,0.08)]"
                    >
                      <p className="text-lg font-semibold text-[var(--color-ink)]">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
