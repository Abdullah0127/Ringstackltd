export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      {eyebrow && <span className="eyebrow green">{eyebrow}</span>}
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </div>
  );
}
