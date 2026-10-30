import React from "react";
import "./Industries.css";

const images = {
  hero: "https://edmleadnetwork.com/wp-content/uploads/2023/12/Group-88.png",
  process:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1100&q=85",
  partner:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85",
};

function LegalIcon({ name, size = 30 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const icons = {
    phone: (
      <>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 8.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
      </>
    ),
    form: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M8 13h8M8 17h5" />
      </>
    ),
    traffic: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 14 4-4 4 3 6-7" />
        <path d="M17 6h4v4" />
      </>
    ),
    transfer: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="m16 11 2 2 4-4M18 13V7" />
      </>
    ),
    car: (
      <>
        <path d="m5 11 1.5-5h11L19 11" />
        <path d="M3 11h18v7H3z" />
        <path d="M6 18v2m12-2v2M6 14h.01M18 14h.01" />
      </>
    ),
    scales: (
      <>
        <path d="M12 3v18M5 6h14M7 6l-4 8h8L7 6Zm10 0-4 8h8l-4-8ZM8 21h8" />
      </>
    ),
    medicine: (
      <>
        <path d="M10 3h4M10 3v5l-5 9a3 3 0 0 0 3 4h8a3 3 0 0 0 3-4l-5-9V3" />
        <path d="M8 14h8m-4-3v6" />
      </>
    ),
    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v12h14V9M9 21v-7h6v7" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    document: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M8 13h8M8 17h8" />
      </>
    ),
    arrow: <path d="M5 12h14m-7-7 7 7-7 7" />,
  };

  return <svg {...common}>{icons[name] || icons.document}</svg>;
}

const products = [
  { title: "Inbound Calls", icon: "phone" },
  { title: "Form Fills", icon: "form" },
  { title: "Traffic", icon: "traffic" },
  { title: "Live Transfers", icon: "transfer" },
];

const legalVerticals = [
  { title: "MVA", icon: "car" },
  { title: "Personal Injury", icon: "scales" },
  { title: "Talcum Powder", icon: "medicine" },
  { title: "Round Up", icon: "shield" },
  { title: "Zantac", icon: "medicine" },
  { title: "Paraquat", icon: "shield" },
  { title: "Infant Formula", icon: "users" },
  { title: "Bard Catheter", icon: "medicine" },
  { title: "Timeshare Cancellation", icon: "home" },
  { title: "Bad Faith Claims", icon: "document" },
  { title: "Nursing Home Abuse", icon: "users" },
];

const steps = [
  { number: "01", title: "Targeted Lead Generation" },
  { number: "02", title: "Targeted Lead Generation" },
  { number: "03", title: "Targeted Lead Generation" },
];

const stepDescription =
  "We begin by identifying and targeting individuals actively seeking legal assistance in areas such as Mass Torts, MVA, PI, and Insurance Liability cases. Our extensive network and cutting-edge marketing strategies enable us to reach the right audience for your legal services.";

function Legal() {
  return (
    <main className="financial-page legal-page">
      {/* TOP SERVICE CARDS */}
      <section className="financial-products">
        <div className="financial-container">
          <div className="financial-product-grid">
            {products.map((product, index) => (
              <article className="financial-product-card" key={product.title}>
                <span className="financial-product-number">0{index + 1}</span>
                <div className="financial-product-icon">
                  <LegalIcon name={product.icon} size={29} />
                </div>
                <h3>{product.title}</h3>
                <span className="financial-product-arrow">
                  <LegalIcon name="arrow" size={19} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="financial-hero legal-hero">
        <div className="financial-container financial-hero-grid">
          <div className="financial-hero-content">
            <span className="financial-eyebrow">LEGAL INDUSTRY</span>
            <h1>
              Legal
              <span>
                Industry<span className="financial-title-dot">.</span>
              </span>
            </h1>

            <p>
              High-quality legal leads that help law firms connect with
              individuals seeking the legal support they need.
            </p>

            <a href="/contact" className="financial-btn">
              Partner with Us <LegalIcon name="arrow" size={18} />
            </a>

            <div className="financial-hero-note">
              <span className="financial-note-line"></span>
              <span>Helping legal professionals grow their practice.</span>
            </div>
          </div>

          <div className="financial-hero-image-wrap">
            <div className="financial-hero-image">
              <img src={images.hero} alt="Legal industry and justice scales" />
            </div>

            <div className="financial-image-caption">
              <span className="financial-caption-icon">
                <LegalIcon name="scales" size={23} />
              </span>
              <div>
                <strong>Legal lead generation</strong>
                <span>Connecting clients with legal services</span>
              </div>
            </div>

            <span className="financial-hero-decoration"></span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="financial-how financial-section">
        <div className="financial-container financial-two-column">
          <div className="financial-how-image financial-image-frame">
            <img
              src={images.process}
              alt="Legal documents and professional desk"
              loading="lazy"
            />
            <span className="financial-image-label">
              01 / LEGAL LEAD GENERATION
            </span>
          </div>

          <div className="financial-copy">
            <span className="financial-eyebrow">OUR APPROACH</span>
            <h2>
              How it <span>Works?</span>
            </h2>

            <p>
              At EDM Lead Network, we understand the intricate and dynamic
              nature of the legal industry. We are here to simplify the process
              of acquiring high-quality leads for Mass Torts, Motor Vehicle
              Accidents (MVA), Personal Injury (PI) legal cases, and Insurance
              Liability cases. Our innovative approach ensures that you can
              focus on what you do best – practicing law.
            </p>
          </div>
        </div>
      </section>

      {/* LEGAL VERTICALS */}
      <section className="financial-verticals financial-section legal-verticals">
        <div className="financial-container">
          <div className="financial-section-heading">
            <div>
              <span className="financial-eyebrow">OUR SPECIALTIES</span>
              <h2>
                Legal service
                <span>verticals.</span>
              </h2>
            </div>
            <p>We offer our services in the following Legal Verticals:</p>
          </div>

          <div className="financial-vertical-grid legal-vertical-grid">
            {legalVerticals.map((item, index) => (
              <article className="financial-vertical-card" key={item.title}>
                <div className="financial-vertical-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <LegalIcon name={item.icon} size={30} />
                </div>
                <h3>{item.title}</h3>
                <span className="financial-vertical-bottom">
                  <span>Legal vertical</span>
                  <LegalIcon name="arrow" size={17} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THREE STEPS */}
      <section className="legal-process financial-section">
        <div className="financial-container">
          <div className="legal-process-heading">
            <span className="financial-eyebrow">OUR PROCESS</span>
            <h2>
              A smarter approach to
              <span> legal lead generation.</span>
            </h2>
            <p>
              Our approach helps connect legal professionals with people
              actively looking for legal assistance.
            </p>
          </div>

          <div className="legal-step-grid">
            {steps.map((step) => (
              <article className="legal-step-card" key={step.number}>
                <div className="legal-step-top">
                  <span>{step.number}</span>
                  <div className="legal-step-icon">
                    <LegalIcon name="document" size={27} />
                  </div>
                </div>
                <h3>{step.title}</h3>
                <p>{stepDescription}</p>
                <span className="legal-step-line"></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER WITH US */}
      <section className="financial-trust-section financial-section legal-partner">
        <div className="financial-container financial-trust-grid">
          <div className="financial-trust-copy">
            <span className="financial-eyebrow">GROW WITH EDM</span>
            <h2>
              Partner
              <span>with Us.</span>
            </h2>

            <p>
              EDM Lead Network is dedicated to helping legal professionals like
              you grow their practice and expand their client base.
            </p>

            <p>
              With our proven lead generation solutions, you can focus on
              winning cases and achieving successful outcomes. Join us in
              revolutionizing the way you acquire legal leads.
            </p>

            <a href="/contact" className="financial-btn">
              Partner with Us <LegalIcon name="arrow" size={18} />
            </a>
          </div>

          <div className="financial-trust-image">
            <img
              src={images.partner}
              alt="Legal professionals working together"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="financial-cta legal-cta">
        <div className="financial-container legal-cta-content">
          <div className="financial-cta-copy">
            <span className="financial-eyebrow">LET'S TALK</span>
            <h2>Let's build a brighter future for your practice.</h2>
            <p>CALL US Today</p>
          </div>

          <a href="tel:+18337118975" className="financial-phone">
            <span className="financial-phone-icon">
              <LegalIcon name="phone" size={23} />
            </span>
            <span>
              <small>LET'S TALK</small>
              <strong>(833) 711-8975</strong>
            </span>
            <LegalIcon name="arrow" size={22} />
          </a>
        </div>
      </section>

      {/* FINAL MESSAGE */}
      <section className="legal-final-message">
        <div className="financial-container">
          <p>
            to learn more about how EDM Lead Network can be your trusted partner
            in the legal industry.
          </p>
          <h2>Together, we can build a brighter future for your practice.</h2>
        </div>
      </section>
    </main>
  );
}

export default Legal;
