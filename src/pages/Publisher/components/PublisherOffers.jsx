import IconBox from "../../../components/ui/IconBox";
import Card from "../../../components/ui/Card";
import SectionHeading from "../../../components/ui/SectionHeading";

const offers = [
  {
    icon: "phoneCall",
    title: "Inbound Calls",
    description:
      "Connect consumer interest with businesses through inbound call campaigns. Explore available offers and campaign requirements to identify opportunities suited to your traffic.",
  },
  {
    icon: "chat",
    title: "Live Transfers",
    description:
      "Route qualified prospects into live conversations with advertisers when campaign criteria are met. Explore available transfer campaigns and their individual qualification requirements.",
  },
  {
    icon: "form",
    title: "Form Fills and Traffic",
    description:
      "Explore lead submission and website traffic opportunities across supported verticals. Choose offers that align with your audience, traffic sources, and campaign requirements.",
  },
];

export default function PublisherOffers() {
  return (
    <section className="publisher-offers" id="publisher-offers">
      <div className="wrap">
        <SectionHeading eyebrow="PREMIUM OFFERS" title="Unlock Premium Pay Per Call Offers" description="Discover campaign opportunities designed to help publishers monetize calls, leads, and relevant website traffic. EDM Network connects publishers with advertisers across multiple industries, helping you find opportunities aligned with your audience, traffic sources, and business model." />
        <div className="publisher-offer-grid">
          {offers.map(({ icon, title, description }) => (
            <Card key={title}>
              <IconBox name={icon} size={30} />
              <h3>{title}</h3>
              <p>{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
