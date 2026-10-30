import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";

export default function IndustriesSection({ eyebrow = "INDUSTRIES", title, description, industries = [] }) {
  return (
    <section className="industries-section">
      <div className="wrap">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="industry-grid">
          {industries.map(({ name, icon }) => (
            <article className="industry-card" key={name}>
              <span className="industry-icon">
                <Icon name={icon} size={26} />
              </span>
              <h3>{name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
