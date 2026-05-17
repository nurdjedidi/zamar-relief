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
            Digital tools for real humanitarian field work
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
                <div className="relative flex items-center justify-center p-6 sm:min-h-[450px]">
                  <div className="relative z-10 w-full max-w-[220px] sm:max-w-[240px] -rotate-2 transition-transform duration-700 hover:rotate-0 hover:scale-105">
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
