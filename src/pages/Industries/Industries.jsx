import { useEffect } from "react";
import "./Industries.css";

const industries = [
  {
    key: "insurance",
    name: "Insurance",
    tagline: "Compliant, high-intent calls for insurance carriers and brokers.",
    description:
      "Connect insurance providers with consumers actively seeking auto, home, health, life, and Medicare coverage. Every call is screened for consent and intent before it reaches your team.",
    image:
      "https://images.unsplash.com/photo-1562329226-c89724b5c50b?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Insurance professionals reviewing policy documents",
    stats: ["24/7", "Consent-verified leads", "TCPA-compliant", "Real-time delivery"],
    cta: "Get Insurance Leads",
  },
  {
    key: "financial-services",
    name: "Financial Services",
    tagline: "Qualified calls for lending, debt relief, and financial planning.",
    description:
      "Connect financial service providers with consumers seeking loans, credit repair, debt settlement, and investment guidance. Built for compliance-sensitive financial campaigns.",
    image:
      "https://images.unsplash.com/photo-1556740757-974d696341e1?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Financial advisor reviewing documents with a client",
    stats: ["24/7", "Consent-verified leads", "Regulation-ready", "Real-time delivery"],
    cta: "Get Financial Leads",
  },
  {
    key: "home-services",
    name: "Home Services",
    tagline: "High-intent calls for home repair, HVAC, plumbing, and remodeling.",
    description:
      "Connect home service businesses with homeowners actively searching for HVAC, plumbing, electrical, roofing, and remodeling services. Pay only for qualified conversations.",
    image:
      "https://images.unsplash.com/photo-1581539226147-6f0093d93d3e?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Home service technician working on HVAC equipment",
    stats: ["24/7", "Consent-verified leads", "Job-type filtered", "Real-time delivery"],
    cta: "Get Home Service Leads",
  },
  {
    key: "legal",
    name: "Legal",
    tagline: "Compliant intake calls for personal injury and legal practices.",
    description:
      "Connect law firms and legal intake teams with consumers seeking representation for personal injury, family law, employment, and civil matters. Every lead is screened for case viability.",
    image:
      "https://images.unsplash.com/photo-1589829085413-56d6cb18f3bf?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Attorney reviewing legal documents at a desk",
    stats: ["24/7", "Consent-verified leads", "Case-type filtered", "Real-time delivery"],
    cta: "Get Legal Leads",
  },
  {
    key: "travel",
    name: "Travel",
    tagline: "Qualified calls for travel agencies, tours, and vacation packages.",
    description:
      "Connect travel brands with consumers actively booking vacations, cruises, tours, and group travel. Built for seasonal travel campaigns and high-intent destination inquiries.",
    image:
      "https://images.unsplash.com/photo-1469854424782-7af47809b7f0?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Travel agent consulting with a client on vacation planning",
    stats: ["24/7", "Consent-verified leads", "Destination filtered", "Real-time delivery"],
    cta: "Get Travel Leads",
  },
];

export default function Industries() {
  useEffect(() => {
    document.title = "Industries | EDM Lead Network";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.content =
        "EDM Lead Network serves insurance, financial services, home services, legal, and travel industries with compliant, high-intent pay-per-call marketing.";
    }
  }, []);

  return (
    <main className="industries-page">
      <section className="industries-hero">
        <div className="wrap industries-hero-grid">
          <div className="industries-hero-copy">
            <span className="eyebrow">INDUSTRY VERTICALS</span>
            <h1>Performance marketing built for your industry</h1>
            <p>
              EDM Lead Network delivers consent-verified, high-intent calls to businesses
              across insurance, financial services, home services, legal, and travel.
              Every campaign is compliance-ready and optimized for your vertical.
            </p>
            <div className="industries-hero-actions">
              <a className="button" href="/advertiser">
                Explore Solutions <span aria-hidden="true">→</span>
              </a>
              <a className="button button-light" href="/publisher">
                Join as Publisher <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <aside className="industries-hero-panel">
            <span className="industries-panel-label">INDUSTRIES WE SERVE</span>
            <ul className="industries-panel-list">
              {industries.map((industry) => (
                <li key={industry.key}>
                  <span className="industries-panel-industry">{industry.name}</span>
                  <span className="industries-panel-arrow">→</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="industries-grid">
        <div className="wrap">
          <div className="industries-section-heading">
            <span className="eyebrow green">CHOOSE YOUR VERTICAL</span>
            <h2>Select an industry to see campaign details</h2>
          </div>
          <div className="industries-card-grid">
            {industries.map((industry) => (
              <article
                key={industry.key}
                className="industries-card"
                onClick={() => {
                  window.location.href = `/industries/${industry.key}`;
                }}
              >
                <div className="industries-card-media">
                  <img src={industry.image} alt={industry.imageAlt} loading="lazy" />
                  <span className="industries-card-tag">{industry.name}</span>
                </div>
                <div className="industries-card-body">
                  <h3>{industry.name}</h3>
                  <p>{industry.tagline}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-cta">
        <div className="wrap industries-cta-grid">
          <div>
            <span className="eyebrow">READY TO START?</span>
            <h2>Get compliant, high-intent calls for your industry</h2>
            <p>
              Tell us about your campaign goals and we’ll match you with the right
              lead sources and delivery options for your vertical.
            </p>
          </div>
          <div className="industries-cta-actions">
            <a className="button button-light" href="tel:+18337118975">
              Call Our Team <span aria-hidden="true">→</span>
            </a>
            <a className="button" href="mailto:info@edmleadnetwork.com">
              Email Our Team <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
