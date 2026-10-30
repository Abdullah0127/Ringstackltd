import { useEffect } from "react";
import "./Industries.css";

const INDUSTRY = {
  key: "home-services",
  name: "Home Services",
  tagline: "High-intent calls for home repair, HVAC, plumbing, and remodeling.",
  description:
    "Connect home service businesses with homeowners actively searching for HVAC, plumbing, electrical, roofing, and remodeling services. Pay only for qualified conversations with homeowners ready to book.",
  image:
    "https://images.unsplash.com/photo-1581539226147-6f0093d93d3e?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Home service technician working on HVAC equipment",
  stats: [
    ["24/7", "Coverage windows"],
    ["Job-type", "Filtered leads"],
    ["Real-time", "Lead delivery"],
    ["Consent-verified", "Every call"],
  ],
  services: [
    {
      title: "HVAC",
      copy: "Heating, ventilation, and air conditioning service calls from homeowners needing repair or installation.",
    },
    {
      title: "Plumbing",
      copy: "Emergency and routine plumbing calls from homeowners and property managers.",
    },
    {
      title: "Electrical",
      copy: "Electrical repair, panel upgrade, and wiring calls from residential customers.",
    },
    {
      title: "Roofing",
      copy: "Roof inspection, repair, and replacement calls from homeowners after storms or wear.",
    },
    {
      title: "Remodeling",
      copy: "Kitchen, bathroom, and whole-home remodeling inquiries from homeowners planning upgrades.",
    },
  ],
  process: [
    ["01", "Campaign setup", "We align on service types, service areas, and job-size requirements."],
    ["02", "Lead generation", "Calls are generated from homeowners actively searching for your services."],
    ["03", "Delivery", "Qualified home service calls route to your team in real time."],
  ],
};

export default function HomeServices() {
  useEffect(() => {
    document.title = "Home Services Leads | EDM Lead Network";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.content =
        "Home services pay-per-call leads: consent-verified calls for HVAC, plumbing, electrical, roofing, and remodeling contractors.";
    }
  }, []);

  return (
    <main className="industry-page home-services-page">
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
              <li>Service-type and job-size filtering</li>
              <li>Real-time delivery to your team</li>
              <li>Service-area coverage control</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="industry-services">
        <div className="wrap">
          <div className="industry-section-heading">
            <span className="eyebrow green">SERVICE TYPES</span>
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
              Speak with our team about service areas, job types, and volume for your
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
