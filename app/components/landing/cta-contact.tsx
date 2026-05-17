import { Mail, MessageCircle, SquareUserRound } from "lucide-react";
import { Link } from "react-router";
import { contactChannels } from "./content";

function ChannelIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <SquareUserRound
        aria-hidden="true"
        className="h-5 w-5"
        strokeWidth={1.8}
      />
    );
  }

  if (label === "Mail") {
    return <Mail aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />;
  }

  return <MessageCircle aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />;
}

export function CtaContactSection() {
  return (
    <section id="contact" className="section-shell py-12 sm:py-18">
      <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,rgba(18,50,74,0.98),rgba(14,90,131,0.92))] p-6 text-white shadow-[0_28px_80px_rgba(18,50,74,0.24)] sm:p-8 lg:p-10">
        <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/80">
              Contact and next steps
            </p>
            <h2 className="mt-4 max-w-3xl font-[var(--font-display)] text-4xl leading-tight sm:text-5xl">
              A grounded public presence that stays easy to reach.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-cyan-50/84 sm:text-lg">
              Follow the initiative, ask about Zamar Field, or reconnect when
              public channels are published.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {contactChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  rel={channel.rel}
                  target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                  className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/10 px-4 py-3 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/14"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-cyan-100">
                    <ChannelIcon label={channel.label} />
                  </div>
                  <span className="text-sm font-medium text-white">
                    {channel.label}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
    </section>
  );
}
