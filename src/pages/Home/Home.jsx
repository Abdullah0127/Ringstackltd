
import { useEffect, useRef, useState } from "react";
import Icon from "../../components/ui/Icon";
import RevealOnScroll from "../../components/shared/RevealOnScroll";
import AnimatedCounter from "../../components/shared/AnimatedCounter";
import {
  stats,
  publications,
  audienceCards,
  features,
} from "./content";

const HOME_IMAGES = {
  hero: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
  publications:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  advertisers:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=80",
  publishers:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=80",
  bpo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
};

/* =========================
   HERO SECTION
========================= */

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy hero-enter">
          <p className="eyebrow">#1 MEDIA SOLUTION</p>

          <h1>
            Empower Your Business.
            <br />
            <em>Scale Your Reach.</em>
          </h1>

          <p>
            At EDM Lead Network, we don't just deliver prospects; we deliver
            predictable, measurable growth. Whether you're a brand, broker, or
            agency, our advanced platform is built to scale your campaigns with
            precision, performance, and full compliance at every step.
          </p>

          <p>
            We specialize in high-intent inbound calls, conversion-driven
            traffic, and qualified form submissions across key verticals
            including insurance, financial services, home services, legal,
            travel, real estate, and more. Every interaction is optimized to
            maximize value, because every click and every call matters.
          </p>

          <a className="button" href="/contact">
            GET STARTED <Icon name="arrow" size={17} />
          </a>
        </div>

        <div className="hero-side hero-enter-delay">
          <div className="hero-art">
            <img
              src={HOME_IMAGES.hero}
              alt="Business professionals collaborating on a marketing campaign"
            />

            <div className="hero-image-overlay">
              <span>PERFORMANCE MARKETING</span>
              <h3>Better Connections. Measurable Growth.</h3>
            </div>
          </div>

          <div className="conversion-card">
            <span className="card-kicker">LET'S WORK TOGETHER</span>

            <h2>
              Are you selling or
              <br />
              buying calls/leads?
            </h2>

            <div className="buy-sell">
              <a href="/buy-calls">
                Buy <Icon name="arrow" size={16} />
              </a>

              <a href="/sell-calls">
                Sell <Icon name="arrow" size={16} />
              </a>
            </div>

            <small>Connect with the right team for your goals.</small>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   STATISTICS SECTION
========================= */

function Statistics() {
  const ref = useRef(null);

  const [started, setStarted] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const node = ref.current;

    if (!node || started) return;

    if (typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [started]);

  return (
    <section className="stats" ref={ref}>
      <div className="wrap stats-grid">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-icon">
              <Icon name={s.icon} size={23} />
            </div>

            <div>
              <strong>
                <AnimatedCounter value={s.value} active={started} />
              </strong>

              <span>{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================
   PUBLICATIONS SECTION
   3 cards desktop
   2 cards tablet
   1 card mobile
========================= */

function Publications() {
  const [idx, setIdx] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 760) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 1050) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const items = Array.isArray(publications) ? publications : [];

  const maxIndex = Math.max(0, items.length - visibleCount);
  const activeIndex = Math.min(idx, maxIndex);

  useEffect(() => {
    if (idx !== activeIndex) {
      setIdx(activeIndex);
    }
  }, [idx, activeIndex]);

  if (items.length === 0) return null;

  const goPrevious = () => {
    setIdx((current) => (current <= 0 ? maxIndex : current - 1));
  };

  const goNext = () => {
    setIdx((current) => (current >= maxIndex ? 0 : current + 1));
  };

  return (
    <section className="publications">
      <div className="wrap">
        <div className="section-heading">
          <span className="eyebrow green">IN THE SPOTLIGHT</span>
          <h2>PUBLICATIONS</h2>
          <i />
        </div>

        <div className="pub-slider">
          <div className="pub-slider-window">
            <div
              className="pub-slider-track"
              style={{
                width: `${(items.length * 100) / visibleCount}%`,
                transform: `translateX(-${
                  (activeIndex * 100) / items.length
                }%)`,
              }}
            >
              {items.map((p, i) => (
                <article
                  className="pub-card"
                  key={`${p.name}-${p.title}-${i}`}
                  style={{
                    flex: `0 0 ${100 / items.length}%`,
                  }}
                >
                  <a
                    className="pub-card-inner"
                    href={p.url || "#"}
                    target={p.url ? "_blank" : undefined}
                    rel={p.url ? "noreferrer" : undefined}
                    onClick={!p.url ? (event) => event.preventDefault() : undefined}
                  >
                    <div className="pub-art">
                      <img
                        src={HOME_IMAGES.publications}
                        alt="Marketing analytics and campaign performance"
                        loading="lazy"
                      />

                      <div className="pub-art-label">
                        <span>{p.mark}</span>
                        <small>EDM LEAD NETWORK</small>
                      </div>
                    </div>

                    <div className="pub-detail">
                      <span className="pub-source">{p.name}</span>

                      <h3>{p.title}</h3>

                      <p>{p.description}</p>

                      {p.url && (
                        <span className="read-link">
                          VISIT PUBLICATION
                          <Icon name="arrow" size={15} />
                        </span>
                      )}
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>

          {items.length > visibleCount && (
            <div className="pub-slider-controls">
              <div className="pub-slider-arrows">
                <button
                  className="carousel-arrow"
                  type="button"
                  aria-label="Previous publications"
                  onClick={goPrevious}
                >
                  <Icon name="arrow-left" size={18} />
                </button>

                <button
                  className="carousel-arrow"
                  type="button"
                  aria-label="Next publications"
                  onClick={goNext}
                >
                  <Icon name="arrow-right" size={18} />
                </button>
              </div>

              <div className="dots" aria-label="Publication slides">
                {Array.from({ length: maxIndex + 1 }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show publication slide ${i + 1}`}
                    aria-current={activeIndex === i ? "true" : undefined}
                    className={activeIndex === i ? "active" : ""}
                    onClick={() => setIdx(i)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* =========================
   AUDIENCE SECTION
========================= */

function Audience() {
  const [expanded, setExpanded] = useState({});

  const toggle = (title) => {
    setExpanded((current) => ({
      ...current,
      [title]: !current[title],
    }));
  };

  const getAudienceImage = (title) => {
    const normalizedTitle = title.toLowerCase();

    if (
      normalizedTitle.includes("advertiser") ||
      normalizedTitle.includes("buyer")
    ) {
      return HOME_IMAGES.advertisers;
    }

    if (
      normalizedTitle.includes("publisher") ||
      normalizedTitle.includes("seller")
    ) {
      return HOME_IMAGES.publishers;
    }

    return HOME_IMAGES.bpo;
  };

  return (
    <section className="audience" aria-label="Choose your audience">
      <div className="wrap audience-grid">
        {audienceCards.map(({ icon, title, url, description, cta }) => (
          <article
            className={`audience-card ${
              expanded[title] ? "is-expanded" : ""
            }`}
            key={title}
            style={{
              "--audience-image": `url("${getAudienceImage(title)}")`,
            }}
          >
            <div className="audience-inner">
              <div className="audience-face audience-front">
                <button
                  className="audience-front-control"
                  type="button"
                  aria-expanded={!!expanded[title]}
                  aria-label={`Show details for ${title}`}
                  onClick={() => toggle(title)}
                >
                  <span className="audience-icon">
                    <Icon name={icon} size={76} />
                  </span>

                  <span className="audience-title">{title}</span>

                  <span className="audience-hint">
                    Discover more <Icon name="arrow" size={15} />
                  </span>
                </button>
              </div>

              <div className="audience-face audience-back">
                <header className="audience-back-header">
                  <span className="audience-icon">
                    <Icon name={icon} size={32} />
                  </span>

                  <h3>{title}</h3>
                </header>

                <div className="audience-description">
                  {description.map((paragraph, index) => (
                    <p key={`${title}-description-${index}`}>{paragraph}</p>
                  ))}
                </div>

                <a href={url}>
                  {cta}
                  <Icon name="arrow" size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================
   WHY EDM SECTION
   Text and feature cards side by side.
   No image in this section.
========================= */

function Why() {
  return (
    <section className="why wrap">
      <div className="why-intro">
        <span className="eyebrow green">BUILT AROUND YOUR GROWTH</span>

        <h2>
          WHY EDM
          <br />
          <em>NETWORK?</em>
        </h2>

        <p>
          At EDM Network we specialize in providing top-notch lead-generation
          services that can help take your business to the next level! Our team
          of industry experts uses the latest pay-per-call marketing
          technologies and strategies to efficiently identify and target
          potential leads, delivering unrivaled performance in the industry.
        </p>

        <p>
          We're dedicated to helping your company grow faster and more
          efficiently through our effective lead-generation solutions. So, if
          you're looking for a reliable partner to help you drive new business,
          look no further than EDM Network!
        </p>

        <div className="why-note">
          <span>EDM</span>

          <p>
            Performance starts with
            <br />
            <b>the right partnership.</b>
          </p>
        </div>

        <aside className="promo">
          <div>
            <span className="eyebrow">READY TO GROW?</span>

            <h3>
              Expand your
              <br />
              business
            </h3>
          </div>

          <a className="button button-light" href="/contact">
            LET'S TALK <Icon name="arrow" size={17} />
          </a>
        </aside>
      </div>

      <div className="feature-grid">
        {features.map(([title, text], i) => (
          <article className="feature" key={title}>
            <span className="feature-number">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================
   INTEGRATIONS SECTION
========================= */

function Integrations() {
  const brands = [
    {
      name: "Meta Ads",
      image: "https://cdn.simpleicons.org/meta/0866FF",
    },
    {
      name: "Google Ads",
      image: "https://cdn.simpleicons.org/googleads/4285F4",
    },
    {
      name: "TikTok",
      image: "https://cdn.simpleicons.org/tiktok/000000",
    },
    { name: "Everflow", icon: "chart" },
    { name: "Clickflare", icon: "chart" },
    { name: "RedTrack", icon: "chart" },
  ];

  return (
    <section className="integrations">
      <div className="wrap">
        <div className="section-heading">
          <span className="eyebrow green">CONNECTED FOR PERFORMANCE</span>
          <h2>INTEGRATES WITH YOUR FAVORITE TOOLS</h2>
        </div>
      </div>

      <div className="integration-marquee">
        <div className="integration-track">
          {[0, 1].map((copy) => (
            <div
              className="integration-list"
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
            >
              {brands.map((brand) => (
                <div className="integration" key={brand.name}>
                  {brand.image ? (
                    <img src={brand.image} alt="" loading="lazy" />
                  ) : (
                    <span className="integration-symbol">
                      <Icon name={brand.icon} size={22} />
                    </span>
                  )}

                  <span className="integration-wordmark">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   HOME PAGE
========================= */

export default function Home() {
  return (
    <main>
      <Hero />

      <RevealOnScroll>
        <Statistics />
      </RevealOnScroll>

      <RevealOnScroll>
        <Publications />
      </RevealOnScroll>

      <RevealOnScroll>
        <Audience />
      </RevealOnScroll>

      <RevealOnScroll>
        <Why />
      </RevealOnScroll>

      <RevealOnScroll>
        <Integrations />
      </RevealOnScroll>
    </main>
  );
}
