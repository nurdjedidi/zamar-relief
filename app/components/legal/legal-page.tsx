import { Link } from "react-router";

export function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative overflow-hidden py-10 sm:py-16">
      <div className="section-shell">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8 lg:p-12">
          <div className="mb-10 flex flex-col gap-5 border-b border-[var(--color-border)] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-3">
              <Link
                to="/"
                className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-strong)]"
              >
                <span aria-hidden="true">←</span>
                Back to home
              </Link>
              <p className="section-kicker">Zamar Relief</p>
              <h1 className="section-title">{title}</h1>
              <p className="section-copy">
                A calm legal baseline for an initiative in progress and its
                open-source field project.
              </p>
            </div>
            <p className="text-sm text-[var(--color-muted)]">
              Last updated: {updatedAt}
            </p>
          </div>

          <article className="legal-prose max-w-3xl space-y-4">{children}</article>
        </div>
      </div>
    </main>
  );
}
