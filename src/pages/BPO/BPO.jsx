import { useEffect, useState } from "react";
import Icon from "../../components/ui/Icon";
import RevealOnScroll from "../../components/shared/RevealOnScroll";
import "./BPO.css";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80";
const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80";
const TALENT_IMAGE =
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80";
const WORK_IMAGE =
  "https://images.unsplash.com/photo-1556745753-b2904692e3cc?auto=format&fit=crop&w=900&q=80";

const services = [
  {
    title: "Inbound Call Center Services",
    copy: "Handle high-intent customer inquiries with trained agents, documented workflows, and real-time quality monitoring.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    icon: "inbound",
  },
  {
    title: "Outbound Call Center Services",
    copy: "Run structured outreach, follow-up, and appointment programs with clear qualification rules and reporting.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    icon: "phoneCall",
  },
  {
    title: "Multilingual Call Center Services",
    copy: "Support customers in the languages they prefer without standing up a new in-house team for every market.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    icon: "users",
  },
  {
    title: "Technical Support Services",
    copy: "Resolve product and account issues with tiered support, knowledge bases, and escalation paths that protect CSAT.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    icon: "settings",
  },
  {
    title: "Chat and Email Support",
    copy: "Cover digital channels with consistent brand voice, SLAs, and shared context across chat, email, and phone.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
    icon: "chat",
  },
  {
    title: "Quality Assurance & Training",
    copy: "Score calls, coach agents, and keep handling guides current so quality stays consistent as volume grows.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    icon: "report",
  },
];

const processSteps = [
  ["01", "Discovery", "We map volumes, peak hours, scripts, compliance needs, and the customer journeys that matter most."],
  ["02", "Build", "Agents, tooling, QA, and reporting are configured around your brand standards and qualification rules."],
  ["03", "Launch", "Programs go live with measured ramp, live monitoring, and a dedicated operations contact."],
  ["04", "Optimize", "Call recordings, CSAT, and conversion data feed weekly improvements in handling and conversion."],
];

const reasons = [
  ["Trained, accountable teams", "Agents are hired, trained, and coached against your KPIs — not generic call-center scripts."],
  ["Quality you can inspect", "QA scoring, call sampling, and transparent reporting keep performance visible from day one."],
  ["Built for scale", "Add seats, languages, or channels without rebuilding your operations stack."],
  ["Compliance-first handling", "Consent, recording, and data-handling practices are documented before the first call is taken."],
];

const stats = [
  ["24/7", "Coverage windows"],
  ["15+", "Languages supported"],
  ["99.5%", "Uptime target"],
  ["<30s", "Average speed to answer"],
];

export default function BPO() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "BPO Services | EDM Lead Network";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.content =
        "Scale customer support with EDM Lead Network BPO services: inbound, outbound, multilingual, technical, chat, and email support.";
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <main className="bpo-page">
      {open && (
        <div className="bpo-modal-backdrop" onClick={() => setOpen(false)}>
          <div
            className="bpo-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="bpo-modal-title"
          >
            <button className="bpo-modal-close" onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
            <p className="eyebrow green" id="bpo-modal-title">
              Join the network
            </p>
            <h2>Hire talent or find work</h2>
            <div className="bpo-modal-grid">
              <div className="bpo-modal-option">
                <img src={TALENT_IMAGE} alt="Hiring professional support talent" />
                <h3>Looking For Talent?</h3>
                <p>Find professionals to help support your business and hiring needs.</p>
                <a
                  className="button"
                  href="https://edmglobalsolutions.com/recruit-talent/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hire Talent <Icon name="arrow" size={16} />
                </a>
              </div>
              <div className="bpo-modal-option">
                <img src={WORK_IMAGE} alt="Professionals looking for BPO work" />
                <h3>Looking For Work?</h3>
                <p>Create an account to explore professional and freelance opportunities.</p>
                <a className="button" href="https://edmglobalsolutions.com/#" target="_blank" rel="noreferrer">
                  Create Account <Icon name="arrow" size={16} />
                </a>
                <p className="bpo-modal-login">
                  Already have an account?{" "}
                  <a href="https://auth.edmglobalsolutions.com/auth/login" target="_blank" rel="noreferrer">
                    Log In
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="bpo-hero">
        <img className="bpo-hero-photo" src={HERO_IMAGE} alt="" />
        <div className="bpo-hero-overlay" />
        <div className="wrap bpo-hero-grid">
          <div className="bpo-hero-copy">
            <span className="eyebrow">BUSINESS PROCESS OUTSOURCING</span>
            <h1>Scale operations with reliable BPO support</h1>
            <p>
              EDM Global Solutions provides outsourced customer support and call center services
              so businesses can streamline operations, improve customer experiences, and manage
              interactions with trained, accountable teams.
            </p>
            <div className="bpo-hero-actions">
              <a className="button" href="mailto:info@edmleadnetwork.com">
                Discuss Your BPO Needs <Icon name="arrow" size={17} />
              </a>
              <a className="button button-light" href="#bpo-services">
                Explore Our Services <Icon name="arrow" size={17} />
              </a>
            </div>
          </div>
          <aside className="bpo-hero-panel" aria-label="BPO program snapshot">
            <span>LIVE OPERATIONS SNAPSHOT</span>
            <ul>
              <li>
                <strong>Inbound + outbound</strong>
                <em>Dedicated queues</em>
              </li>
              <li>
                <strong>Quality monitoring</strong>
                <em>Scored every shift</em>
              </li>
              <li>
                <strong>Multichannel</strong>
                <em>Voice, chat, email</em>
              </li>
            </ul>
            <button type="button" className="button" onClick={() => setOpen(true)}>
              Hire Talent or Join <Icon name="arrow" size={16} />
            </button>
          </aside>
        </div>
      </section>

      <section className="bpo-stats" aria-label="BPO service highlights">
        <div className="wrap bpo-stats-grid">
          {stats.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <RevealOnScroll>
        <section className="bpo-about">
          <div className="wrap bpo-about-grid">
            <div className="bpo-about-media">
              <img src={ABOUT_IMAGE} alt="Operations team collaborating in a modern support center" />
            </div>
            <div className="bpo-about-copy">
              <span className="eyebrow green">HOW WE WORK</span>
              <h2>Support that feels like an extension of your brand</h2>
              <p>
                A BPO program only works when agents sound like your team, follow your compliance
                rules, and report against the same metrics your operators already use. We build
                around those requirements — not a one-size-fits-all script.
              </p>
              <ul className="bpo-about-list">
                <li>Brand-aligned onboarding and call handling guides</li>
                <li>Named operations lead and weekly performance reviews</li>
                <li>Flexible coverage for peaks, after-hours, and overflow</li>
              </ul>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <section className="bpo-services" id="bpo-services">
        <div className="wrap">
          <div className="bpo-section-heading">
            <span className="eyebrow green">SERVICE LINES</span>
            <h2>Outsourcing services built around your business</h2>
            <p>
              Choose a single channel or a blended program. Each service includes training, QA,
              and reporting so you can see quality as clearly as volume.
            </p>
          </div>
          <div className="bpo-service-grid">
            {services.map((service) => (
              <article className="bpo-service-card" key={service.title}>
                <div className="bpo-service-media">
                  <img src={service.image} alt="" />
                  <span className="bpo-service-icon">
                    <Icon name={service.icon} size={22} />
                  </span>
                </div>
                <div className="bpo-service-body">
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RevealOnScroll>
        <section className="bpo-process">
          <div className="wrap">
            <div className="bpo-section-heading">
              <span className="eyebrow green">ENGAGEMENT MODEL</span>
              <h2>From brief to live operations</h2>
            </div>
            <div className="bpo-process-grid">
              {processSteps.map(([num, title, copy]) => (
                <article key={num}>
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <section className="bpo-why">
        <div className="wrap">
          <div className="bpo-section-heading">
            <span className="eyebrow green">WHY EDM</span>
            <h2>Operational standards that protect customer experience</h2>
          </div>
          <div className="bpo-why-grid">
            {reasons.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bpo-cta">
        <div className="wrap">
          <span className="eyebrow">LET’S BUILD YOUR PROGRAM</span>
          <h2>Ready to explore BPO solutions for your business?</h2>
          <p>
            Tell us about your operational needs and explore how outsourced customer support may
            fit your coverage, language, and quality requirements.
          </p>
          <div className="bpo-cta-actions">
            <a className="button button-light" href="tel:+18337118975">
              Contact Our Team <Icon name="arrow" size={17} />
            </a>
            <button type="button" className="button" onClick={() => setOpen(true)}>
              Hire Talent or Join <Icon name="arrow" size={17} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
