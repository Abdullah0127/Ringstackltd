import { useEffect, useRef, useState } from "react";
import Icon from "../../components/ui/Icon";
import RevealOnScroll from "../../components/shared/RevealOnScroll";
import AnimatedCounter from "../../components/shared/AnimatedCounter";
import advertiserDashboard from "../../assets/advertiser-dashboard.svg";
import worldMap from "../../assets/world-map.svg";
import {
  advertiserApplicationUrl,
  advertiserHero,
  teamSizes,
  advertiserStats,
  advertiserProducts,
  advertiserIndustries,
  softwareFeatures,
} from "./content";
import "./Advertiser.css";
function SalesTeamSelector() {
  const [teamSize, setTeamSize] = useState(
    () => window.sessionStorage.getItem("advertiserTeamSize") || "",
  );
  const rememberSelection = () => {
    if (teamSize) window.sessionStorage.setItem("advertiserTeamSize", teamSize);
  };
  return (
    <div className="advertiser-selector">
      <h2 id="team-size-title">How big is your sales team?</h2>
      <fieldset aria-labelledby="team-size-title">
        <legend className="sr-only">Select your sales team size</legend>
        {teamSizes.map((size) => (
          <label
            className={`team-size-option ${teamSize === size ? "selected" : ""}`}
            key={size}
          >
            <input
              type="radio"
              name="team-size"
              value={size}
              checked={teamSize === size}
              onChange={() => setTeamSize(size)}
            />
            <span>{size}</span>
          </label>
        ))}
      </fieldset>
      <a
        className={`button team-size-continue ${teamSize ? "ready" : ""}`}
        href={advertiserApplicationUrl}
        target="_blank"
        rel="noreferrer"
        onClick={rememberSelection}
        aria-label={
          teamSize
            ? `Continue to advertiser registration; selected sales team size ${teamSize}`
            : "Continue to advertiser registration"
        }
      >
        GET STARTED <Icon name="arrow" size={16} />
      </a>
      <p>Continue to the advertiser registration portal.</p>
    </div>
  );
}
function AdvertiserStats() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <RevealOnScroll>
      <section className="advertiser-stats" ref={ref}>
        <div className="wrap advertiser-stats-panel">
          <div className="advertiser-stats-heading">
            <h2>EDM Network is the leader</h2>
            <p>in lead generation and marketing</p>
          </div>
          <div className="advertiser-stats-grid">
            {advertiserStats.map(({ value, label }) => (
              <div className="advertiser-stat" key={label}>
                <strong>
                  <AnimatedCounter value={value} active={active} />
                </strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}
function AdvertiserPage() {
  useEffect(() => {
    document.title = "Advertiser | EDM Lead Network";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.content =
        "Reach more customers with EDM Lead Network performance marketing, live transfers, inbound calls, and lead generation.";
  }, []);
  return (
    <main className="advertiser-page">
      <section className="advertiser-hero">
        <img className="advertiser-world-map" src={worldMap} alt="" />
        <div className="wrap advertiser-hero-grid">
          <div className="advertiser-hero-copy">
            <span className="eyebrow">EDM LEAD NETWORK</span>
            <h1>
              {advertiserHero.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p>{advertiserHero.description}</p>
          </div>
          <SalesTeamSelector />
        </div>
        <div className="advertiser-dashboard wrap">
          <div className="dashboard-caption">
            <span>CAMPAIGN MARKETPLACE</span>
            <span>Illustrative software interface</span>
          </div>
          <img
            src={advertiserDashboard}
            alt="Original illustration of a lead marketplace dashboard with campaign metrics and performance reporting; not a screenshot of EDM software."
          />
        </div>
      </section>
      <AdvertiserStats />
      <RevealOnScroll>
        <section className="advertiser-products">
          <div className="wrap">
            <div className="advertiser-section-title">
              <span className="eyebrow green">PERFORMANCE THAT CONNECTS</span>
              <h2>Our products</h2>
            </div>
            <div className="advertiser-product-grid">
              {advertiserProducts.map(({ icon, title, description }, index) => (
                <article className="advertiser-product" key={title}>
                  <span className="advertiser-product-icon">
                    <Icon name={icon} size={30} />
                  </span>
                  <span className="advertiser-product-number">
                    0{index + 1}
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>
      <RevealOnScroll>
        <section className="advertiser-industries">
          <div className="wrap">
            <div className="advertiser-section-title">
              <span className="eyebrow green">EXPERTISE ACROSS VERTICALS</span>
              <h2>Industries We Serve</h2>
              <p>
                Each industry faces unique challenges and opportunities in
                digital advertising, and our services are customized to address
                these specifics, ensuring relevance and impact.
              </p>
            </div>
            <div className="advertiser-industry-grid">
              {advertiserIndustries.map(([name, icon]) => (
                <article key={name}>
                  <span>
                    <Icon name={icon} size={26} />
                  </span>
                  <h3>{name}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>
      <RevealOnScroll>
        <section className="advertiser-software">
          <div className="wrap">
            <div className="advertiser-section-title">
              <span className="eyebrow green">TOOLS TO HELP YOU GROW</span>
              <h2>EDM Network Software</h2>
              <p>
                Unlock the potential of your advertising campaigns with our
                proprietary EDM Network Software. This powerful tool allows you
                to:
              </p>
            </div>
            <div className="advertiser-software-grid">
              {softwareFeatures.map(([title, description, icon]) => (
                <article key={title}>
                  <span>
                    <Icon name={icon} size={28} />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>
      <section className="advertiser-final-cta">
        <div className="wrap">
          <h2>
            Unlock the potential of your advertising campaigns with our
            proprietary EDM Network Software.
          </h2>
          <a
            className="button button-light"
            href={advertiserApplicationUrl}
            target="_blank"
            rel="noreferrer"
          >
            GET STARTED <Icon name="arrow" size={17} />
          </a>
        </div>
      </section>
      <div className="advertiser-copyright">
        Copyright 2024 EDM Lead Network. All Rights Reserved.
      </div>
    </main>
  );
}

export default AdvertiserPage;
