import Icon from "../../../components/ui/Icon";

const features = [
  ["Dedicated Publisher Support", "Get guidance from the business development and campaign management teams as you navigate onboarding, campaign selection, and optimization.", "users"],
  ["Custom Campaign Opportunities", "Explore offers across different industries and traffic types. Work with the team to identify campaigns aligned with your audience, traffic sources, and operating model.", "layers"],
  ["Training and Guidance", "Build a better understanding of campaign requirements, traffic quality, and performance optimization through communication and guidance from the team.", "chat"],
];

const industries = [
  ["Insurance", "shield"],
  ["Financial Services", "wallet"],
  ["Home Services", "house"],
  ["Legal", "scale"],
  ["Travel", "plane"],
  ["Real Estate", "building"],
];

const PUBLISHER_URL = "https://edmleadnetwork.com/index.php/publishers-sign-in-sign-up/";

export default function PublisherPartnership() {
  return (
    <>
      <section className="publisher-grow">
        <div className="wrap">
          <div className="publisher-section-title">
            <span className="eyebrow green">GROW</span>
            <h2>Grow Your Business with the Right Network</h2>
            <p>
              As a publisher with EDM Network, you can explore campaign opportunities backed by an
              established advertiser network, hands-on account support, and tools that help you
              monitor performance. Our focus is on building productive publisher relationships and
              helping partners identify opportunities suited to their business.
            </p>
          </div>
          <div className="publisher-feature-grid">
            {features.map(([title, description, icon]) => (
              <article className="publisher-feature-card" key={title}>
                <span className="publisher-feature-icon">
                  <Icon name={icon} size={28} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="publisher-partners">
        <div className="wrap">
          <div className="publisher-section-title">
            <span className="eyebrow green">PARTNERS</span>
            <h2>Partner with Leading Businesses in Our Pay Per Call Network</h2>
            <p>
              EDM Network works with advertisers across multiple industries and offers publishers
              access to campaign opportunities based on their business model and traffic
              capabilities. Our team can help identify suitable offers, explain campaign
              requirements, and support you as you develop your publisher operations.
            </p>
          </div>
          <div className="advertiser-industry-grid">
            {industries.map(([name, icon]) => (
              <article className="publisher-industry-card" key={name}>
                <span>
                  <Icon name={icon} size={26} />
                </span>
                <h3>{name}</h3>
              </article>
            ))}
          </div>
          <div className="publisher-partners-cta">
            <a className="button" href={PUBLISHER_URL} target="_blank" rel="noreferrer">
              Explore Publisher Opportunities <Icon name="arrow" size={17} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
