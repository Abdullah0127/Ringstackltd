export default function ArticleTableOfContents({ article }) {
  const headings = [];
  function walk(children) {
    if (Array.isArray(children)) {
      children.forEach(walk);
      return;
    }
    if (children && typeof children === 'object' && children.type === 'heading') {
      headings.push(children);
    }
  }
  walk(article?.content);

  if (headings.length === 0) return null;

  return (
    <div className="article-toc">
      <div className="article-toc-header">
        <span className="eyebrow green">ON THIS PAGE</span>
        <h3>In This Article</h3>
      </div>
      <nav className="article-toc-nav" aria-label="Table of contents">
        <ul>
          {headings.map((heading) => (
            <li key={heading.id}>
              <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
