import Icon from "../../../components/ui/Icon";

const PUBLISHER_URL = "https://edmleadnetwork.com/index.php/publishers-sign-in-sign-up/";

export default function PublisherHero() {
  return (
    <section className="publisher-hero">
      <div className="wrap publisher-hero-grid">
        <div className="publisher-hero-copy">
          <span className="eyebrow green">PUBLISHER PARTNERSHIPS</span>
          <h1>Maximize Revenue Opportunities with Big Budgets and Thousands of Businesses!</h1>
          <p>
            Looking to unlock more value from your traffic? EDM Network connects publishers with a
            broad network of businesses seeking high-quality calls and leads. Access relevant
            campaign opportunities, work with experienced campaign managers, and build a publisher
            strategy focused on quality, compliance, and sustainable growth.
          </p>
          <div className="publisher-hero-actions">
            <a className="button" href={PUBLISHER_URL} target="_blank" rel="noreferrer">
              Become a Publisher <Icon name="arrow" size={17} />
            </a>
            <a className="button button-light" href="#publisher-benefits">
              Explore Publisher Benefits <Icon name="arrow" size={17} />
            </a>
          </div>
        </div>
        <div className="publisher-hero-visual" aria-hidden="true">
          <div className="publisher-dashboard">
            <span>CAMPAIGN PERFORMANCE</span>
            <div className="publisher-dashboard-bars">
              <i style={{ height: "42%" }} />
              <i style={{ height: "68%" }} />
              <i style={{ height: "55%" }} />
              <i style={{ height: "82%" }} />
              <i style={{ height: "74%" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
