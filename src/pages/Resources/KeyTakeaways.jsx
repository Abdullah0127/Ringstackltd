export default function KeyTakeaways({ points }) {
  if (!points || points.length === 0) return null;
  return (
    <section className="key-takeaways">
      <h2 className="key-takeaways-title">Key Takeaways</h2>
      <ul className="key-takeaways-list">
        {points.map((point, index) => (
          <li key={index} className="key-takeaway-item">
            <span className="key-takeaway-marker" aria-hidden="true">{index + 1}</span>
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
