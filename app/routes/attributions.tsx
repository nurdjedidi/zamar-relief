import { LegalPage } from "../components/legal/legal-page";
import type { Route } from "./+types/attributions";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Attributions | Zamar Relief" },
    { name: "description", content: "Open source and data attributions for Zamar Relief." },
  ];
}

export default function Attributions() {
  return (
    <LegalPage title="Data & Open Source Attributions" updatedAt="May 2026">
      <div className="space-y-8 text-[var(--color-muted)] leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-[var(--color-ink)] mb-4">
            Map Data
          </h2>
          <p>
            The maps used in the Zamar Field application and on this website are based on data provided by{" "}
            <strong>OpenStreetMap</strong>.
          </p>
          <p className="mt-2">
            ©{" "}
            <a
              href="https://www.openstreetmap.org/copyright"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent-strong)] hover:underline"
            >
              OpenStreetMap contributors
            </a>
            . OpenStreetMap data is available under the Open Database License.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-ink)] mb-4">
            Administrative Boundaries
          </h2>
          <p>
            The administrative boundaries (country, region, and district shapes) used in our analytics and maps are sourced from{" "}
            <strong>geoBoundaries</strong>.
          </p>
          <p className="mt-2">
            Data provided by{" "}
            <a
              href="https://www.geoboundaries.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent-strong)] hover:underline"
            >
              geoBoundaries
            </a>
            , an open-source database of political administrative boundaries. 
            Terms of use and specific licenses vary by dataset but are primarily released under open licenses (such as CC-BY 4.0 or CC0).
          </p>
        </section>
      </div>
    </LegalPage>
  );
}
