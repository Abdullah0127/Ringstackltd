export default function Breadcrumb({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={item.label || index} aria-current={index === items.length - 1 ? 'page' : undefined}>
            {item.href ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && <span className="breadcrumb-separator" aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
