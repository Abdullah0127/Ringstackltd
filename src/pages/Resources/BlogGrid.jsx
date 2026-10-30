import BlogCard from './BlogCard';

export default function BlogGrid({ articles, emptyMessage = 'No articles match this category.' }) {
  if (!articles || articles.length === 0) {
    return <p className="blog-grid-empty">{emptyMessage}</p>;
  }

  return (
    <div className="blog-grid">
      {articles.map((article, index) => (
        <BlogCard key={article.slug} article={article} index={index} />
      ))}
    </div>
  );
}
