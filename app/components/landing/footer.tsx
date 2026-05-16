import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="section-shell pb-10 pt-6">
      <div className="flex flex-col gap-5 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--color-ink)]">
            Zamar Relief
          </p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Independent humanitarian initiative in progress.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-[var(--color-muted)]">
          <Link to="/privacy" className="focus-ring hover:text-[var(--color-ink)]">
            Privacy
          </Link>
          <Link to="/terms" className="focus-ring hover:text-[var(--color-ink)]">
            Terms
          </Link>
          <a href="#zamar-field" className="focus-ring hover:text-[var(--color-ink)]">
            Zamar Field
          </a>
        </div>
      </div>
    </footer>
  );
}
