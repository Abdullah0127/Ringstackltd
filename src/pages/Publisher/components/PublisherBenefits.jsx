import Icon from "../../../components/ui/Icon";

const benefits = [
  ["Access to Advertiser Demand", "Explore a network of advertisers looking for calls and leads that meet their campaign requirements.", "users"],
  ["Campaign Opportunities Across Industries", "Discover available campaigns across supported verticals and traffic types.", "layers"],
  ["Global Campaign Reach", "Explore campaigns with geographic coverage and requirements defined by individual offers.", "plane"],
  ["Real-Time Tracking and Reporting", "Monitor campaign activity and use available reporting to understand performance and identify opportunities for improvement.", "report"],
  ["Compliance-Focused Processes", "Work within campaign requirements and applicable compliance procedures, including relevant consent and do-not-call requirements.", "shield"],
  ["Transparent Performance Metrics", "Review the reporting and campaign metrics available to understand how your traffic performs.", "chart"],
  ["Payment Options", "Review the payment methods and terms available for approved campaigns and publisher accounts.", "wallet"],
  ["Consistent Payment Processes", "Access the payment schedule and account information associated with your approved campaigns.", "payment"],
  ["Compensation for Qualified Activity", "Generate revenue from calls and leads that satisfy the applicable campaign qualification and payout rules.", "coins"],
  ["Publisher Technology", "Use available platform tools to track activity, review campaign information, and understand your performance.", "settings"],
  ["Publisher Account Support", "Contact the assigned team for guidance with onboarding, campaign access, and account questions.", "chat"],
  ["Performance Optimization", "Use campaign reports and account guidance to identify potential improvements in traffic quality and campaign outcomes.", "pulse"],
];

export default function PublisherBenefits() {
  return (
    <section className="publisher-benefits" id="publisher-benefits">
      <div className="wrap">
        <div className="publisher-section-title">
          <span className="eyebrow green">BENEFITS</span>
          <h2>Benefits of Working with EDM Network</h2>
          <p>
            Build your publisher business with access to campaign opportunities, performance
            visibility, and support designed around the needs of lead generation partners.
          </p>
        </div>
        <div className="publisher-benefit-grid">
          {benefits.map(([title, description, icon]) => (
            <article className="publisher-benefit-card" key={title}>
              <span className="publisher-benefit-icon">
                <Icon name={icon} size={24} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="publisher-note">
          Payment terms, eligibility, and campaign requirements depend on the applicable offer and
          publisher agreement.
        </p>
      </div>
    </section>
  );
}
