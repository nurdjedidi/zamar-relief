import { motion } from "framer-motion";
import { heroStats } from "./content";

export function Hero() {
  return (
    <section className="section-shell relative pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/80 px-4 py-2 text-sm text-[var(--color-muted)]">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            Calm digital tools for real humanitarian field work
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl font-[var(--font-display)] text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Building a softer, clearer way to document work in the field.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
              Zamar Relief is an independent humanitarian initiative in progress.
              Its first digital project, Zamar Field, is an open-source effort to
              make offline data collection, mapping, and media capture simpler in
              real terrain conditions.
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="glass-panel overflow-hidden rounded-[2rem] p-5 sm:p-6">
            <div className="rounded-[1.75rem] border border-white/70 bg-[linear-gradient(180deg,#dff7ff_0%,#fef7ea_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:p-5">
              <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[1.5rem] bg-[#12324a] p-5 text-white shadow-2xl">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/80">
                        Zamar Field
                      </p>
                      <p className="mt-2 text-xl font-semibold">Map-first records</p>
                    </div>
                    <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-100">
                      Open source
                    </span>
                  </div>

                  <div className="relative h-56 overflow-hidden rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_35%_35%,rgba(34,211,238,0.38),transparent_22%),linear-gradient(180deg,#113049_0%,#0f2537_100%)]">
                    <div className="absolute inset-4 rounded-[1rem] border border-white/10" />
                    <div className="absolute left-[14%] top-[18%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_0_8px_rgba(103,232,249,0.12)]" />
                    <div className="absolute left-[57%] top-[46%] h-3 w-3 rounded-full bg-amber-200 shadow-[0_0_0_8px_rgba(254,215,170,0.12)]" />
                    <div className="absolute left-[37%] top-[64%] h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_0_8px_rgba(165,243,252,0.12)]" />
                    <div className="absolute left-[11%] top-[58%] h-14 w-28 rounded-[1.1rem] border border-white/8 bg-white/6 p-2 backdrop-blur-sm">
                      <div className="h-2 w-14 rounded-full bg-white/35" />
                      <div className="mt-2 h-2 w-20 rounded-full bg-white/20" />
                      <div className="mt-2 h-10 rounded-xl bg-cyan-300/10" />
                    </div>
                    <div className="absolute right-[8%] top-[14%] h-18 w-28 rounded-[1.1rem] border border-white/8 bg-white/6 p-2 backdrop-blur-sm">
                      <div className="h-16 rounded-xl bg-[linear-gradient(180deg,rgba(254,215,170,0.4),rgba(34,211,238,0.14))]" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
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
        </motion.div>
      </div>
    </section>
  );
}
