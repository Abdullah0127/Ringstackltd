import { useEffect } from 'react';
import { getArticleBySlug } from '../../data/articles';
import ArticleLayout from './ArticleLayout';
import ArticleSEO from './ArticleSEO';
import './styles/article.css';


export default function Article() {
  const location = window.location.pathname;
  const segments = location.split('/').filter(Boolean);
  const slug = segments.length ? decodeURIComponent(segments[segments.length - 1]) : null;

  const article = slug ? getArticleBySlug(slug) : null;

  useEffect(() => {
    document.title = article ? article.metaTitle : 'Article | EDM Lead Network';
  }, [article]);

  return (
    <ArticleLayout slug={slug || ''}>
      <ArticleSEO
        slug={article?.slug || slug || ''}
        title={article?.metaTitle || 'Article'}
        description={article?.metaDescription || ''}
      />
    </ArticleLayout>
  );
}
