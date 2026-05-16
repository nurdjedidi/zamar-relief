import { Link } from "react-router";

export function CtaContactSection() {
  return (
    <section id="contact" className="section-shell py-12 sm:py-18">
      <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,rgba(18,50,74,0.98),rgba(14,90,131,0.92))] p-6 text-white shadow-[0_28px_80px_rgba(18,50,74,0.24)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/80">
              Contact and next steps
            </p>
            <h2 className="mt-4 max-w-3xl font-[var(--font-display)] text-4xl leading-tight sm:text-5xl">
              A grounded public presence for an initiative that is still taking shape.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-cyan-50/84 sm:text-lg">
              Zamar Relief is building carefully. If you want to follow the
              project, understand the direction of Zamar Field, or reconnect when
              public channels are ready, this site is the first anchor point.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
            <p className="text-sm font-semibold text-white">Current status</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-cyan-50/82">
              <p>Public contact channel and repository links can be added in the next phase.</p>
              <p>This v1 focuses on clarity, trust, and a stable narrative baseline.</p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/privacy"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--color-ink)] hover:-translate-y-0.5"
              >
                Read privacy
              </Link>
              <Link
                to="/terms"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/18 px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-white/8"
              >
                Read terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
