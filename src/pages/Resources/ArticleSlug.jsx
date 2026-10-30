export default function ArticleSlug({ slug }) {
  if (!slug) return null;
  return (
    <span className="article-slug" aria-hidden="true">{slug}</span>
  );
}
