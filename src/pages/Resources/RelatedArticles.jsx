export default function RelatedArticles({ articles }) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="related-articles">
      <div className="wrap">
        <div className="related-articles-head">
          <span className="eyebrow green">KEEP READING</span>
          <h2>Related Articles</h2>
        </div>
        <div className="related-grid">
          {articles.map((article) => (
            <article className="related-card" key={article.slug}>
              {article.image && (
                <a className="related-card-media" href={`/${article.slug}/`}>
                  <img
                    src={article.image}
                    alt={article.imageAlt || article.title}
                    loading="lazy"
                  />
                </a>
              )}
              <div className="related-card-body">
                <span className="resource-category">{article.category}</span>
                <h3>
                  <a href={`/${article.slug}/`}>{article.title}</a>
                </h3>
                <p>{article.excerpt}</p>
                <a href={`/${article.slug}/`} className="blog-card-link">
                  Read Article <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
