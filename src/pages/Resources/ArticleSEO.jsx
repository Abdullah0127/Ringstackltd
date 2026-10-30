export default function ArticleSEO({ slug, title, description }) {
  return (
    <>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={`/${slug}/`} />
    </>
  );
}
