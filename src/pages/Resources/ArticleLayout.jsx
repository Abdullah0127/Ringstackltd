import { getArticleBySlug, getRelatedArticles } from '../../data/articles';
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';
import ArticleTableOfContents from './ArticleTableOfContents';
import RelatedArticles from './RelatedArticles';
import KeyTakeaways from './KeyTakeaways';
import ArticleFAQ from './ArticleFAQ';

export default function ArticleLayout({ slug, children }) {
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <main className="article-page">
        <div className="article-not-found wrap">
          <span className="eyebrow green">NOT FOUND</span>
          <h1>Article Not Found</h1>
          <p>The article you are looking for does not exist or has not been published yet.</p>
          <a className="button" href="/resources">Back to Resources</a>
        </div>
      </main>
    );
  }

  const related = getRelatedArticles(article.slug);

  return (
    <div className="article-page">
      <ArticleHeader article={article} />

      <div className="wrap article-layout">
        <main className="article-main">
          <KeyTakeaways points={article.keyPoints} />
          <ArticleBody article={article} />
          <ArticleFAQ faqs={article.faqs} />
        </main>
        <aside className="article-sidebar">
          <ArticleTableOfContents article={article} />
        </aside>
      </div>

      <RelatedArticles articles={related} />
      {children}
    </div>
  );
}
