
import { useEffect } from "react";
import Icon from "../../components/ui/Icon";
import RevealOnScroll from "../../components/shared/RevealOnScroll";
import {
  technologyHero,
  advertiserFeatures,
  publisherFeatures,
  whiteLabelFeatures,
  whyChoose,
  industries,
} from "./content";
import "./Technology.css";

const TECHNOLOGY_HERO_IMAGE =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80";

const WHITE_LABEL_IMAGE =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80";

function TechnologyVisual() {
  return (
    <div className="tech-visual">
      <img
        src={TECHNOLOGY_HERO_IMAGE}
        alt="Business analytics dashboard showing campaign performance and reporting metrics"
        fetchPriority="high"
      />
      <div className="tech-visual-caption">
        <span className="tech-visual-status" />
        Campaign analytics and performance insights
      </div>
    </div>
  );
}

function TechFeatureSection({
  kicker,
  title,
  intro,
  items,
  variant = "",
}) {
  const icons =
    variant === "advertiser-tech"
      ? [
          "database",
          "target",
          "palette",
          "phone",
          "report",
          "wallet",
          "target",
        ]
      : variant === "publisher-tech"
        ? [
            "layout",
            "building",
            "ping",
            "pricing",
            "layers",
            "database",
            "report",
            "attribution",
            "payment",
          ]
        : [
            "brand",
            "users",
            "user",
            "report",
            "pricing",
            "wallet",
            "users",
            "users",
            "shield",
          ];

  return (
    <RevealOnScroll>
      <section className={`tech-feature-section ${variant}`}>
        <div className="wrap">
          <div className="tech-section-heading">
            <span className="eyebrow green">{kicker}</span>
            <h2>{title}</h2>
            {intro && <p>{intro}</p>}
            <i />
          </div>

          <div className="tech-feature-grid">
            {items.map(([heading, description], index) => (
              <article className="tech-feature-card" key={heading}>
                <span className="tech-feature-icon">
                  <Icon name={icons[index] || "check"} size={23} />
                </span>

                <span className="tech-feature-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{heading}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}

function TechnologyPage() {
  useEffect(() => {
    document.title = "Technology | EDM Lead Network";

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content =
      "Explore EDM Lead Network technology for advertisers, publishers, and white-label marketing agencies.";
  }, []);

  const industryIcons = [
    "shield",
    "chart",
    "house",
    "scale",
    "plane",
    "building",
  ];

  return (
    <main className="technology-page">
      {/* Hero */}
      <section className="technology-hero">
        <div className="wrap technology-hero-grid">
          <div className="technology-hero-copy">
            <span className="eyebrow">
              TECHNOLOGY THAT MOVES PERFORMANCE FORWARD
            </span>

            <h1>{technologyHero.title}</h1>

            {technologyHero.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}

            <a className="button" href="/contact">
              EXPLORE OUR PLATFORM
              <Icon name="arrow" size={17} />
            </a>
          </div>

          <TechnologyVisual />
        </div>
      </section>

      {/* Advertiser technology */}
      <TechFeatureSection
        kicker="BUILT FOR CAMPAIGN PERFORMANCE"
        title="FOR ADVERTISERS"
        items={advertiserFeatures}
        variant="advertiser-tech"
      />

      {/* Publisher technology */}
      <TechFeatureSection
        kicker="TOOLS TO GROW YOUR REVENUE"
        title="FOR PUBLISHERS"
        items={publisherFeatures}
        variant="publisher-tech"
      />

      {/* White-label introduction */}
      <section className="white-label-intro">
        <div className="wrap white-label-grid">
          <div className="white-label-copy">
            <span className="eyebrow green">
              YOUR PLATFORM. YOUR BRAND.
            </span>

            <h2>
              White-Label Solutions{" "}
              <em>for Marketing Agencies and Companies</em>
            </h2>

            <h3>
              Empower your brand and offer EDM Lead Network’s powerful
              exchange under your own name.
            </h3>

            <p>
              Our white-label software is ideal for marketing agencies
              and companies looking to deliver high-quality leads and
              calls to clients with a fully customizable, branded
              interface. Expand your service offering and build brand
              loyalty with EDM Lead Network’s high-performance
              technology, tailored to your agency’s needs.
            </p>
          </div>

          <div className="white-label-art">
            <img
              src={WHITE_LABEL_IMAGE}
              alt="Business professionals collaborating on strategy and campaign planning"
              loading="lazy"
            />

            <div className="white-label-image-caption">
              Technology and collaboration for growing businesses
            </div>
          </div>
        </div>
      </section>

      {/* White-label features */}
      <TechFeatureSection
        kicker="A PLATFORM UNDER YOUR BRAND"
        title="WHITE-LABEL PLATFORM FEATURES"
        items={whiteLabelFeatures}
        variant="whitelabel-tech"
      />

      {/* Pricing */}
      <section className="tech-pricing">
        <div className="wrap">
          <div className="tech-section-heading">
            <span className="eyebrow green">
              SIMPLE, TRANSPARENT PRICING
            </span>

            <h2>WHITE-LABEL PRICING</h2>
            <p>Clear pricing for your branded exchange.</p>
          </div>

          <div className="pricing-panel">
            <div>
              <span>WHITE-LABEL LICENSE FEE</span>
              <strong>
                $250<small>/month</small>
              </strong>
            </div>

            <i />

            <div>
              <span>USAGE RATE</span>
              <strong>
                $0.05
                <small>per minute of user call time</small>
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose EDM */}
      <section className="why-technology">
        <div className="wrap">
          <div className="tech-section-heading">
            <span className="eyebrow">
              GROW WITH CONFIDENCE
            </span>

            <h2>Why Choose EDM Lead Network?</h2>
          </div>

          <div className="why-tech-grid">
            {whyChoose.map(([title, description], index) => (
              <article key={title}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{title}:</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="industries-tech">
        <div className="wrap">
          <div className="tech-section-heading">
            <span className="eyebrow green">
              SOLUTIONS ACROSS KEY VERTICALS
            </span>

            <h2>Industries we serve</h2>

            <p>
              Each industry faces unique challenges and opportunities
              in digital advertising, and our services are customized
              to address these specifics, ensuring relevance and impact.
            </p>
          </div>

          <div className="industry-grid">
            {industries.map((name, index) => (
              <article key={name}>
                <span>
                  <Icon
                    name={industryIcons[index] || "building"}
                    size={27}
                  />
                </span>

                <h3>{name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="technology-cta">
        <div className="wrap">
          <span className="eyebrow">
            LET’S BUILD WHAT’S NEXT
          </span>

          <h2>Ready to Get Started?</h2>

          <p>
            With EDM Lead Network’s software and white-label solutions,
            you can unlock new revenue streams, offer unmatched value
            to clients, and establish your brand as a leader in lead
            generation and campaign management.
          </p>

          <a className="button button-light" href="/contact">
            GET STARTED NOW
            <Icon name="arrow" size={17} />
          </a>

          <div className="cta-support">
            <h3>
              Transform Your Business with EDM Lead Network.
            </h3>

            <p>
              Contact us to learn more about our solutions for
              advertisers, publishers, and marketing agencies, and
              take the next step in achieving your business goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TechnologyPage;
