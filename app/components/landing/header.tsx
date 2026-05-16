import { Link } from "react-router";
import { navigation } from "./content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 sm:px-6">
        <Link to="/" className="focus-ring flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-sm font-bold text-[var(--color-accent-strong)]">
            ZR
          </span>
          <div>
            <p className="text-sm font-semibold text-[var(--color-ink)]">
              Zamar Relief
            </p>
            <p className="text-xs text-[var(--color-muted)]">
              Humanitarian initiative in progress
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/privacy"
            className="focus-ring hidden text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)] sm:inline-flex"
          >
            Privacy
          </Link>
          <a
            href="#contact"
            className="focus-ring inline-flex items-center rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[#0d2738]"
          >
            Stay close
          </a>
        </div>
      </div>
    </header>
  );
}
