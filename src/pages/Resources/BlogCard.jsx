export default function BlogCard({ article }) {
  return (
    <article className="blog-card">
      <div className="blog-card-image">
        <img
          src={article.image}
          alt={article.imageAlt || `${article.title} featured image`}
          loading="lazy"
        />
        <span className="blog-card-category">{article.category}</span>
      </div>
      <div className="blog-card-body">
        <h3 className="blog-card-title">
          <a href={`/${article.slug}/`}>{article.title}</a>
        </h3>
        <p className="blog-card-excerpt">{article.excerpt}</p>
        <div className="blog-card-meta">
          {article.publishedAt && (
            <time className="blog-card-date" dateTime={article.publishedAt}>
              {new Date(`${article.publishedAt}T00:00:00`).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          )}
          {article.readingTime && (
            <span className="blog-card-reading">{article.readingTime}</span>
          )}
        </div>
        <a href={`/${article.slug}/`} className="blog-card-link">
          Read Article <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
