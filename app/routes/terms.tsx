import type { Route } from "./+types/terms";
import { LegalPage } from "../components/legal/legal-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms | Zamar Relief" },
    {
      name: "description",
      content:
        "Terms for using the Zamar Relief website and understanding the status of the open-source Zamar Field project.",
    },
  ];
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of use" updatedAt="16 May 2026">
      <p>
        The Zamar Relief website is provided as an informational site for an
        independent humanitarian initiative in progress. Zamar Field is presented
        here as an open-source software project intended to support field data
        collection in real-world environments.
      </p>
      <h2>Status and representation</h2>
      <p>
        Unless expressly stated otherwise, nothing on this website should be
        interpreted as a claim that Zamar Relief is already a formally registered
        NGO in every jurisdiction. The project is described carefully to reflect
        its current stage.
      </p>
      <h2>Use of website content</h2>
      <p>
        You may read, share, and reference the public information on this site
        for non-deceptive purposes. Please do not present draft materials,
        product concepts, or future plans as finalized commitments.
      </p>
      <h2>Zamar Field open-source scope</h2>
      <p>
        References to Zamar Field describe the project vision and current
        direction. Source code publication, contribution guidelines, releases,
        and support expectations may evolve over time.
      </p>
      <ul>
        <li>No guarantee is made that every described feature is production-ready.</li>
        <li>Field teams remain responsible for validating the tool in their context.</li>
        <li>Operational use should be assessed against security and safeguarding needs.</li>
      </ul>
      <h2>No professional or legal advice</h2>
      <p>
        Materials on this site are shared for general informational purposes.
        They do not replace legal, compliance, security, medical, or safeguarding
        advice required for humanitarian operations.
      </p>
      <h2>Availability and changes</h2>
      <p>
        We may update, remove, or reorganize any part of the website or project
        description at any time as the initiative matures.
      </p>
      <h2>External links and future community spaces</h2>
      <p>
        Future references to repositories, issue trackers, or community channels
        will be provided for convenience only. Separate licenses, contribution
        rules, or platform policies may apply when those spaces are published.
      </p>
      <h2>Contact</h2>
      <p>
        If you need clarification about the public information presented here,
        use the contact path published on the website once it is available.
      </p>
    </LegalPage>
  );
}
