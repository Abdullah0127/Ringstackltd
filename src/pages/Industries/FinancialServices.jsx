import React from "react";
import "./Industries.css";

const images = {
  financial:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
  conversion:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
  leads:
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
  targets:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
  extra:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
};

// Inline SVG icons: no Font Awesome or external icon library required.
function Icon({ name, size = 30 }) {
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

  const paths = {
    phone: (
      <>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 8.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
      </>
    ),
    form: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M8 13h8M8 17h5M8 9h1" />
      </>
    ),
    chart: (
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
    debt: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18M7 15h3M15 15h2" />
        <path d="M12 2v3M10 3l2 2 2-2" />
      </>
    ),
    credit: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 9h20M6 15h4M15 15h3" />
      </>
    ),
    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v12h14V9M9 21v-7h6v7" />
      </>
    ),
    loan: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M16 8.5c-.8-.8-1.8-1.2-3.2-1.2-1.8 0-3 .9-3 2.2 0 3.4 6.4 1.5 6.4 5 0 1.4-1.3 2.4-3.2 2.4-1.4 0-2.6-.5-3.6-1.4M12 5v14" />
      </>
    ),
    business: (
      <>
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    arrow: <path d="M5 12h14m-7-7 7 7-7 7" />,
    phoneSmall: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 8.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
    ),
  };

  return <svg {...common}>{paths[name] || paths.chart}</svg>;
}

const products = [
  { title: "Inbound Calls", icon: "phone", number: "01" },
  { title: "Form Fills", icon: "form", number: "02" },
  { title: "Traffic", icon: "chart", number: "03" },
  { title: "Live Transfers", icon: "transfer", number: "04" },
];

const services = [
  { title: "Debt Settlement", icon: "debt", number: "01" },
  { title: "Credit Repair", icon: "credit", number: "02" },
  { title: "Mortgage", icon: "home", number: "03" },
  { title: "Personal Loan", icon: "loan", number: "04" },
  { title: "Business Loan", icon: "business", number: "05" },
];

function FinancialServices() {
  return (
    <main className="financial-page">
      {/* TOP SERVICE CARDS */}
      <section className="financial-products">
        <div className="financial-container">
          <div className="financial-product-grid">
            {products.map((product) => (
              <article className="financial-product-card" key={product.title}>
                <span className="financial-product-number">
                  {product.number}
                </span>
                <div className="financial-product-icon">
                  <Icon name={product.icon} size={29} />
                </div>
                <h3>{product.title}</h3>
                <span className="financial-product-arrow">
                  <Icon name="arrow" size={19} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="financial-hero">
        <div className="financial-container financial-hero-grid">
          <div className="financial-hero-content">
            <span className="financial-eyebrow">PERFORMANCE MARKETING</span>

            <h1>
              Financial
              <span>
                Services<span className="financial-title-dot">.</span>
              </span>
            </h1>

            <p>
              Connecting financial businesses with qualified prospects and
              opportunities that drive meaningful growth.
            </p>

            <a href="/contact" className="financial-btn">
              Let's Talk <Icon name="arrow" size={18} />
            </a>

            <div className="financial-hero-note">
              <span className="financial-note-line"></span>
              <span>Smarter connections. Better conversions.</span>
            </div>
          </div>

          <div className="financial-hero-image-wrap">
            <div className="financial-hero-image">
              <img
                src={images.financial}
                alt="Financial services professionals"
              />
            </div>
            <div className="financial-image-caption">
              <span className="financial-caption-icon">
                <Icon name="chart" size={23} />
              </span>
              <div>
                <strong>Growth focused</strong>
                <span>Performance-driven solutions</span>
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
              src={images.conversion}
              alt="Professional working on financial services"
              loading="lazy"
            />
            <span className="financial-image-label">01 / OUR APPROACH</span>
          </div>

          <div className="financial-copy">
            <span className="financial-eyebrow">WHAT WE DO</span>
            <h2>
              How it <span>Works?</span>
            </h2>

            <p>
              As the global economy is growing, the role of financial
              institutions has become more important than ever. Financial
              enterprises have to revive themselves on the fly while getting new
              prospects and customers.
            </p>

            <p>
              EDM Network is a leading performance marketing platform that can
              help you adapt and succeed in this new environment. From
              investment management to capital markets, we discover, reach and
              convert new financial services leads.
            </p>

            <p>
              EDM Network deploys innovative Pay Per Call and Digital Marketing
              campaigns to generate hot financial service leads that translate
              into a real business. We understand the customer trends in the
              financial industry which enables us to reach relevant prospects
              and turn them into buying customers.
            </p>

            <div className="financial-copy-footer">
              <span className="financial-copy-check">
                <Icon name="shield" size={19} />
              </span>
              <span>Focused on quality, relevance, and results.</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCIAL VERTICALS */}
      <section className="financial-verticals financial-section">
        <div className="financial-container">
          <div className="financial-section-heading">
            <div>
              <span className="financial-eyebrow">OUR SPECIALTIES</span>
              <h2>
                Financial service
                <span>verticals.</span>
              </h2>
            </div>
            <p>
              We offer our services in the following Financial Service
              Verticals:
            </p>
          </div>

          <div className="financial-vertical-grid">
            {services.map((service) => (
              <article className="financial-vertical-card" key={service.title}>
                <div className="financial-vertical-top">
                  <span>{service.number}</span>
                  <Icon name={service.icon} size={31} />
                </div>
                <h3>{service.title}</h3>
                <span className="financial-vertical-bottom">
                  <span>Explore service</span>
                  <Icon name="arrow" size={18} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DRIVE FINANCIAL LEADS */}
      <section className="financial-growth financial-section">
        <div className="financial-container financial-two-column">
          <div className="financial-copy financial-growth-copy">
            <span className="financial-eyebrow">BETTER CONVERSIONS</span>
            <h2>
              Drive your financial leads closer to <span>conversion.</span>
            </h2>

            <p>
              Nurture your financial services prospects by creating personalized
              communications that occur across different channels. Our Pay Per
              Call campaigns generate thousands of effective calls per day
              across multiple verticals.
            </p>

            <p>
              EDM Network is committed to exploring the best opportunities to
              find potential customers for your business. We connect financial
              services advertisers with expert publishers to bring in targeted
              conversions.
            </p>

            <div className="financial-feature-line">
              <span>
                <Icon name="chart" size={20} />
              </span>
              <strong>Targeted leads. Meaningful connections.</strong>
            </div>
          </div>

          <div className="financial-growth-image financial-image-frame">
            <img
              src={images.leads}
              alt="Financial leads closer to conversion"
              loading="lazy"
            />
            <span className="financial-image-label">
              02 / DRIVE CONVERSIONS
            </span>
          </div>
        </div>
      </section>

      {/* SALES TARGETS */}
      <section className="financial-results financial-section">
        <div className="financial-container financial-two-column">
          <div className="financial-results-image financial-image-frame">
            <img
              src={images.targets}
              alt="Financial business and sales growth"
              loading="lazy"
            />
            <span className="financial-image-label">
              03 / GROW YOUR BUSINESS
            </span>
          </div>

          <div className="financial-copy">
            <span className="financial-eyebrow">BUILT FOR PERFORMANCE</span>
            <h2>
              Exceed your sales targets while generating high-quality
              <span> Financial leads.</span>
            </h2>

            <p>
              Through our extensive affiliate network, digital marketing team,
              and owned properties, we filter through sources to find the best
              opportunities that meet your business needs. Our Pay Per Call and
              Digital Marketing campaigns are designed to improve and support
              operations for leading financial services institutions.
            </p>

            <a href="/contact" className="financial-btn">
              Get Started <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="financial-trust-section financial-section">
        <div className="financial-container financial-trust-grid">
          <div className="financial-trust-copy">
            <span className="financial-eyebrow">A PARTNER YOU CAN TRUST</span>
            <h2>
              Built on trust.
              <span>Driven by results.</span>
            </h2>

            <p>
              Financial enterprises across the world trust us to bring them
              qualified leads, reach their perfect customers, and improve
              conversion rates. We work 24/7 to ensure we are increasing your
              ROI while ensuring all communication and messaging maintain the
              highest level of brand identity.
            </p>

            <div className="financial-trust-points">
              <div>
                <Icon name="shield" size={21} />
                <span>Quality-focused approach</span>
              </div>
              <div>
                <Icon name="chart" size={21} />
                <span>Performance-driven campaigns</span>
              </div>
            </div>
          </div>

          <div className="financial-trust-image">
            <img
              src={images.extra}
              alt="Business team working together"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="financial-cta">
        <div className="financial-container financial-cta-content">
          <div className="financial-cta-copy">
            <span className="financial-eyebrow">LET'S CONNECT</span>
            <h2>Have a goal? Let's make it happen.</h2>
            <p>Let's Talk</p>
          </div>

          <a href="tel:+18337118975" className="financial-phone">
            <span className="financial-phone-icon">
              <Icon name="phoneSmall" size={23} />
            </span>
            <span>
              <small>CALL US AT</small>
              <strong>(833) 711-8975</strong>
            </span>
            <Icon name="arrow" size={22} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default FinancialServices;
