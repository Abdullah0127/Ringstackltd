import { useEffect } from "react";
import "./Industries.css";

const INDUSTRY = {
  key: "real-estate",
  name: "Real Estate",
  tagline: "Qualified calls for real estate agents, brokers, and property managers.",
  description:
    "Connect real estate professionals with home buyers, sellers, and investors actively seeking property services. Built for high-intent real estate campaigns with compliant, consent-verified lead delivery.",
  image:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Real estate agent showing a property to a client",
  stats: [
    ["24/7", "Coverage windows"],
    ["Property-type", "Filtered leads"],
    ["Real-time", "Lead delivery"],
    ["Consent-verified", "Every call"],
  ],
  services: [
    {
      title: "Residential Sales",
      copy: "Calls from home buyers and sellers seeking residential real estate agents.",
    },
    {
      title: "Commercial Real Estate",
      copy: "Commercial property inquiries from investors and business owners.",
    },
    {
      title: "Property Management",
      copy: "Rental and property management calls from landlords and tenants.",
    },
    {
      title: "Mortgage Refinance",
      copy: "Home refinance inquiries from homeowners seeking better rates.",
    },
    {
      title: "Relocation Services",
      copy: "Relocation calls from individuals and families moving to new cities.",
    },
  ],
  process: [
    ["01", "Campaign setup", "We align on property types, locations, and lead criteria."],
    ["02", "Lead generation", "Calls are generated from consent-verified real estate prospects."],
    ["03", "Delivery", "Qualified real estate calls route to your team in real time."],
  ],
};

export default function RealEstate() {
  useEffect(() => {
    document.title = "Real Estate Leads | EDM Lead Network";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.content =
        "Real estate pay-per-call leads: compliant, consent-verified calls for agents, brokers, and property managers.";
    }
  }, []);

  return (
    <main className="industry-page real-estate-page">
      <section className="industry-hero">
        <div className="wrap industry-hero-grid">
          <div className="industry-hero-copy">
            <span className="eyebrow green">{INDUSTRY.name} LEADS</span>
            <h1>{INDUSTRY.name} pay-per-call marketing</h1>
            <p>{INDUSTRY.tagline}</p>
            <div className="industry-hero-actions">
              <a className="button" href="/advertiser">
                Start Campaign <span aria-hidden="true">→</span>
              </a>
              <a className="button button-light" href="/industries">
                All Industries <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <aside className="industry-hero-panel">
            <span className="industry-panel-label">{INDUSTRY.name.toUpperCase()} SNAPSHOT</span>
            <ul className="industry-stats-list">
              {INDUSTRY.stats.map(([value, label]) => (
                <li key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="industry-description">
        <div className="wrap industry-description-grid">
          <div className="industry-description-media">
            <img src={INDUSTRY.image} alt={INDUSTRY.imageAlt} loading="lazy" />
          </div>
          <div className="industry-description-copy">
            <h2>How {INDUSTRY.name} lead generation works</h2>
            <p>{INDUSTRY.description}</p>
            <ul className="industry-description-list">
              <li>Consent-verified inbound calls only</li>
              <li>Property-type and location filtering</li>
              <li>Real-time delivery to your sales team</li>
              <li>Seasonal campaign scheduling</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="industry-services">
        <div className="wrap">
          <div className="industry-section-heading">
            <span className="eyebrow green">PROPERTY TYPES</span>
            <h2>{INDUSTRY.name} campaigns we support</h2>
          </div>
          <div className="industry-service-grid">
            {INDUSTRY.services.map((service) => (
              <article key={service.title} className="industry-service-card">
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-process">
        <div className="wrap">
          <div className="industry-section-heading">
            <span className="eyebrow green">ENGAGEMENT MODEL</span>
            <h2>From setup to live calls</h2>
          </div>
          <div className="industry-process-grid">
            {INDUSTRY.process.map(([num, title, copy]) => (
              <article key={num}>
                <span className="industry-process-number">{num}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-cta">
        <div className="wrap industry-cta-inner">
          <div>
            <span className="eyebrow">READY FOR {INDUSTRY.name.toUpperCase()} LEADS?</span>
            <h2>Start your {INDUSTRY.name.toLowerCase()} campaign today</h2>
            <p>
              Speak with our team about property types, locations, and volume for your
              {INDUSTRY.name.toLowerCase()} program.
            </p>
          </div>
          <div className="industry-cta-actions">
            <a className="button button-light" href="tel:+18337118975">
              Call (833) 711-8975 <span aria-hidden="true">→</span>
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
