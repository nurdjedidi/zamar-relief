import type { Route } from "./+types/home";
import { LandingPage } from "../components/landing/landing-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zamar Relief | Humanitarian initiative and open-source field tools" },
    {
      name: "description",
      content:
        "Zamar Relief is a humanitarian initiative in progress building calm, practical tools for field data collection, including the open-source Zamar Field project.",
    },
    {
      property: "og:title",
      content: "Zamar Relief",
    },
    {
      property: "og:description",
      content:
        "A humanitarian initiative in progress with an open-source field data collection project designed for real terrain work.",
    },
  ];
}

export default function Home() {
  return <LandingPage />;
}
