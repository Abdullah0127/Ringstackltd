import { useEffect } from "react";
import RevealOnScroll from "../../components/shared/RevealOnScroll";
import PublisherHero from "./components/PublisherHero";
import PublisherOffers from "./components/PublisherOffers";
import PublisherPartnership from "./components/PublisherPartnership";
import PublisherBenefits from "./components/PublisherBenefits";
import PublisherCTA from "./components/PublisherCTA";
import "./Publisher.css";
import "../Advertiser/Advertiser.css";

export default function Publisher() {
  useEffect(() => {
    document.title = "Publisher | EDM Lead Network";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.content =
        "Explore publisher partnerships with EDM Lead Network and discover pay per call campaign opportunities.";
  }, []);
  return (
    <main className="publisher-page">
      <PublisherHero />
      <RevealOnScroll>
        <PublisherOffers />
      </RevealOnScroll>
      <RevealOnScroll>
        <PublisherPartnership />
      </RevealOnScroll>
      <PublisherBenefits />
      <PublisherCTA />
    </main>
  );
}
