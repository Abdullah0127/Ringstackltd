import React from "react";
import "./Industries.css";

// Keep the insurance images used in your project.
// Change paths only if your actual image filenames differ.

const images = {
  hero: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",

  process:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",

  growth:
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",

  results:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
};

const products = [
  {
    number: "01",
    title: "Inbound Calls",
    description:
      "Connect with potential insurance customers through inbound calls.",
    icon: "↗",
  },
  {
    number: "02",
    title: "Form Fills",
    description: "Generate customer inquiries through targeted lead forms.",
    icon: "▤",
  },
  {
    number: "03",
    title: "Traffic",
    description:
      "Reach relevant audiences through digital marketing campaigns.",
    icon: "◎",
  },
  {
    number: "04",
    title: "Live Transfers",
    description:
      "Connect prospects directly with insurance sales professionals.",
    icon: "⇄",
  },
];

const insuranceTypes = [
  {
    number: "01",
    title: "Auto Insurance",
    description: "Connect with customers looking for auto insurance coverage.",
  },
  {
    number: "02",
    title: "Life Insurance",
    description: "Reach individuals exploring life insurance solutions.",
  },
  {
    number: "03",
    title: "Health Insurance",
    description:
      "Connect with people researching health coverage and insurance options.",
  },
  {
    number: "04",
    title: "Medicare Insurance",
    description: "Reach individuals interested in Medicare plans and coverage.",
  },
  {
    number: "05",
    title: "Final Expense Insurance",
    description: "Connect with prospects interested in final expense coverage.",
  },
  {
    number: "06",
    title: "Home Insurance",
    description:
      "Reach homeowners looking for property protection and home insurance.",
  },
];

const benefits = [
  "Global distribution with local precision",
  "100% quality leads",
  "Statistics in real-time",
  "Technology designed to increase results",
  "Secure, fast, and trusted payouts",
  "Targeted leads that convert",
];

function Insurance() {
  return (
    <main className="insurance-page">
      {/* HERO SECTION */}
      <section className="ins-hero">
        <div className="ins-container ins-hero-grid">
          <div className="ins-hero-content">
            <span className="ins-eyebrow">INSURANCE PERFORMANCE MARKETING</span>

            <h1>
              Insurance Marketing.
              <span> Real Connections. Real Results.</span>
            </h1>

            <p>
              Connect with potential insurance customers through
              performance-driven marketing campaigns designed to generate
              targeted conversions.
            </p>

            <div className="ins-hero-services">
              {products.map((product) => (
                <span key={product.title}>{product.title}</span>
              ))}
            </div>

            <div className="ins-hero-actions">
              <a href="tel:+18337118975" className="ins-btn ins-btn-primary">
                Let's Talk <span>→</span>
              </a>

              <a href="#ins-how" className="ins-btn ins-btn-outline">
                How It Works
              </a>
            </div>
          </div>

          <div className="ins-hero-image">
            <img src={images.hero} alt="Insurance marketing professionals" />

            <div className="ins-image-label">
              <span>INSURANCE</span>
              <strong>Connecting Businesses With Customers</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="ins-products">
        <div className="ins-container">
          <div className="ins-section-heading">
            <span className="ins-eyebrow">OUR SOLUTIONS</span>
            <h2>Multiple Ways to Generate Insurance Leads</h2>
          </div>

          <div className="ins-product-grid">
            {products.map((product) => (
              <article className="ins-product-card" key={product.title}>
                <div className="ins-product-top">
                  <span className="ins-product-icon">{product.icon}</span>
                  <span className="ins-product-number">{product.number}</span>
                </div>

                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className="ins-card-arrow">↗</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="ins-how" id="ins-how">
        <div className="ins-container ins-two-column">
          <div className="ins-how-image">
            <img
              src={images.process}
              alt="Insurance provider and marketing campaign planning"
            />

            <div className="ins-image-caption">
              <span>HOW IT WORKS</span>
              <strong>Marketing That Delivers Results</strong>
            </div>
          </div>

          <div className="ins-section-copy">
            <span className="ins-eyebrow">HOW IT WORKS?</span>

            <h2>Insurance Provider or Sales Professional</h2>

            <p>
              As an insurance provider or sales professional, you want to see
              tangible results from your campaign marketing efforts. We're here
              to deliver them.
            </p>

            <p>
              EDM Network is a leading performance marketing platform that
              connects high-paying advertisers with skilled publishers to bring
              in targeted conversions. We help you define and manage unique and
              effective Pay Per Call and Digital Marketing campaigns built to
              bring in potential customers to your insurance business.
            </p>

            <p>
              Our streamlined lead enhancements and workflow rules make sure
              that you get only the leads that are most ready to convert,
              reducing your cost-per-policy while increasing conversion rates.
            </p>

            <a href="/advertiser" className="ins-text-link">
              Explore Advertising Opportunities <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* INSURANCE VERTICALS */}
      <section className="ins-verticals">
        <div className="ins-container">
          <div className="ins-section-heading">
            <span className="ins-eyebrow">INSURANCE VERTICALS</span>
            <h2>Insurance Categories We Support</h2>
            <p>We offer our services in the following Insurance Verticals:</p>
          </div>

          <div className="ins-vertical-grid">
            {insuranceTypes.map((item) => (
              <article className="ins-vertical-card" key={item.number}>
                <div className="ins-vertical-top">
                  <span className="ins-vertical-number">{item.number}</span>
                  <span className="ins-vertical-arrow">↗</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <a href="/advertiser" aria-label={`Explore ${item.title}`}>
                  Learn More <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ROI SECTION */}
      <section className="ins-growth">
        <div className="ins-container ins-two-column">
          <div className="ins-section-copy">
            <span className="ins-eyebrow">GROW YOUR BUSINESS</span>

            <h2>Increase Your Cost-Per-Policy ROI</h2>

            <p>
              At EDM Network, we understand that your business needs to attract
              new customers. We take the goals and interests of our publishers
              and advertisers and create pleasing relationships to take their
              businesses to new heights.
            </p>

            <p>
              With our advanced Pay Per Call and Digital Marketing campaigns,
              EDM Network provides a scalable, efficient, and safe platform to
              engage with prospects who are really interested in your services
              and products.
            </p>

            <div className="ins-roi-highlight">
              <span>FOCUS ON WHAT MATTERS</span>
              <strong>Cost-Per-Policy ROI</strong>
            </div>
          </div>

          <div className="ins-growth-image">
            <img
              src={images.growth}
              alt="Insurance business growth and marketing"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="ins-benefits">
        <div className="ins-container">
          <div className="ins-benefits-grid">
            <div className="ins-benefits-intro">
              <span className="ins-eyebrow">WHY EDM NETWORK?</span>

              <h2>Secure, Fast, and Trusted Payouts</h2>

              <p>
                We aim to deliver unmatched service to our clients by creating
                results-driven, strategic campaigns for their marketing needs.
                No matter your business objectives, our performance marketing
                services and strategies are customized to your needs.
              </p>
            </div>

            <div className="ins-benefit-list">
              {benefits.map((benefit, index) => (
                <div className="ins-benefit-item" key={benefit}>
                  <span className="ins-benefit-number">0{index + 1}</span>

                  <span className="ins-benefit-check">✓</span>

                  <strong>{benefit}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS IMAGE */}
      <section className="ins-results">
        <div className="ins-container ins-two-column">
          <div className="ins-results-image">
            <img
              src={images.results}
              alt="Insurance marketing campaign performance"
            />
          </div>

          <div className="ins-section-copy">
            <span className="ins-eyebrow">PERFORMANCE MARKETING</span>

            <h2>Targeted Leads That Convert</h2>

            <p>
              Our performance marketing platform brings advertisers and
              publishers together to create meaningful connections with
              potential customers.
            </p>

            <p>
              From targeted campaigns to real-time statistics and technology
              designed to increase results, we help you reach customers who are
              interested in your services.
            </p>

            <a href="/contact" className="ins-text-link">
              Talk to Our Team <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ins-cta">
        <div className="ins-container ins-cta-content">
          <span className="ins-eyebrow">CALL US AT</span>

          <h2>Let's Talk</h2>

          <p>
            To see how we can help you find ready-to-buy, qualified customers
            with our Pay Per Call and Digital Marketing Network.
          </p>

          <a href="tel:+18337118975" className="ins-cta-phone">
            (833) 711-8975 <span>↗</span>
          </a>

          <a href="/contact" className="ins-btn ins-btn-light">
            Get In Touch <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Insurance;
