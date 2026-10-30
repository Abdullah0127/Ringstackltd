import Breadcrumb from './Breadcrumb';

function formatDate(value) {
  if (!value) return null;
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function ArticleHeader({ article }) {
  if (!article) return null;

  const published = formatDate(article.publishedAt);

  return (
    <header className="article-header">
      <div className="wrap">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Resources', href: '/resources/' },
            { label: article.title },
          ]}
        />
        <span className="article-eyebrow">{article.category}</span>
        <h1 className="article-title">{article.title}</h1>
        <p className="article-lede">{article.excerpt}</p>
        <div className="article-meta">
          {published && (
            <time className="article-meta-item" dateTime={article.publishedAt}>
              {published}
            </time>
          )}
          {article.readingTime && (
            <span className="article-meta-item">{article.readingTime}</span>
          )}
        </div>
      </div>
      {article.image && (
        <div className="article-cover wrap">
          <img
            src={article.image}
            alt={article.imageAlt || `${article.title} featured image`}
          />
        </div>
      )}
    </header>
  );
}
