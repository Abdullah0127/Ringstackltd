import { useState } from 'react';
import { ARTICLES, CATEGORIES, getArticlesByCategory } from '../../data/articles';
import BlogGrid from './BlogGrid';
import './Resources.css';

const ARTICLE_PER_PAGE = 6;

function paginate(items, page, perPage) {
  const start = (page - 1) * perPage;
  return items.slice(start, start + perPage);
}

function getPageFromPath() {
  const trimmed = window.location.pathname.replace(/\/+$/, '');
  const pageMatch = trimmed.match(/^\/resources\/page\/(\d+)$/);
  if (!pageMatch) return 1;
  const page = Number(pageMatch[1]);
  return Number.isFinite(page) && page > 0 ? page : 1;
}

function BlogPagination({ currentPage, totalPages, onPageChange }) {
  const goTo = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
    const nextPath = page === 1 ? '/resources' : `/resources/page/${page}`;
    window.history.replaceState({}, '', nextPath);
    document.getElementById('resources-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (totalPages <= 1) return null;

  return (
    <nav className="blog-pagination" aria-label="Article pagination">
      <div className="blog-pagination-wrap">
        <button
          className="blog-pagination-button"
          onClick={() => goTo(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
          type="button"
        >
          <span aria-hidden="true">←</span> Previous
        </button>

        <span className="blog-pagination-current">
          Page <strong className="blog-pagination-current-num">{currentPage}</strong> of {totalPages}
        </span>

        <button
          className="blog-pagination-button"
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          type="button"
        >
          Next <span aria-hidden="true">→</span>
        </button>
      </div>
    </nav>
  );
}

function CategoryFilter({ categories, selected, onChange }) {
  return (
    <div className="blog-filters" role="group" aria-label="Filter articles by category">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`blog-filter ${selected === category ? 'is-active' : ''}`}
          onClick={() => onChange(category)}
          aria-pressed={selected === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default function Resources() {
  const [category, setCategory] = useState('All Articles');
  const [currentPage, setCurrentPage] = useState(getPageFromPath);

  const filtered = getArticlesByCategory(category);
  const totalPages = Math.max(1, Math.ceil(filtered.length / ARTICLE_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const pagedArticles = paginate(filtered, safePage, ARTICLE_PER_PAGE);

  const featured = ARTICLES.find((a) => a.featured) || filtered[0];

  const handleExplore = () => {
    document.getElementById('resources-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategory = (next) => {
    setCategory(next);
    setCurrentPage(1);
    window.history.replaceState({}, '', '/resources');
  };

  return (
    <main className="resources-page">
      <section className="resources-hero">
        <img
          className="resources-hero-photo"
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80"
          alt=""
        />
        <div className="resources-hero-overlay" />
        <div className="wrap">
          <span className="eyebrow">RESOURCES & INSIGHTS</span>
          <h1>Insights that drive smarter performance marketing</h1>
          <p>
            Practical strategies, industry insights, and guidance on lead generation, pay-per-call
            marketing, publisher partnerships, campaign optimization, and performance-driven growth.
          </p>
          <div className="resources-hero-actions">
            <button className="button" type="button" onClick={handleExplore}>
              Explore Latest Articles
            </button>
            <a className="button button-light" href="/publisher">
              Become a Partner
            </a>
          </div>
        </div>
      </section>

      {featured && (
        <div className="resources-featured-wrap">
          <section className="featured-article">
            <div className="featured-article-media">
              <img
                src={featured.image}
                alt={featured.imageAlt || `${featured.title} featured image`}
              />
            </div>
            <div className="featured-article-body">
              <span className="article-eyebrow">Featured · {featured.category}</span>
              <h2 className="featured-article-title">{featured.title}</h2>
              <p className="featured-article-excerpt">{featured.excerpt}</p>
              {featured.keyPoints?.length > 0 && (
                <ul className="featured-article-keypoints">
                  {featured.keyPoints.slice(0, 3).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              <a href={`/${featured.slug}/`} className="button">
                Read Full Article <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>
        </div>
      )}

      <section className="resources-filters">
        <div className="wrap">
          <div className="resources-filters-head">
            <h2>Latest articles</h2>
            <p>Filter by topic to find the guidance most relevant to your program.</p>
          </div>
          <CategoryFilter
            categories={CATEGORIES}
            selected={category}
            onChange={handleCategory}
          />
        </div>
      </section>

      <section className="resources-grid-wrap">
        <div className="wrap">
          <div className="resources-grid" id="resources-grid">
            <BlogGrid articles={pagedArticles} />
          </div>

          <BlogPagination
            currentPage={safePage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>

      <section className="resources-cta">
        <div className="wrap">
          <h2>Turn better insights into better results</h2>
          <p>
            Explore performance-focused marketing solutions designed to help publishers and
            advertisers build stronger partnerships, improve campaign outcomes, and pursue
            sustainable growth.
          </p>
          <div className="resources-cta-actions">
            <a className="button button-light" href="/advertiser">
              Explore Our Solutions
            </a>
            <a className="button" href="/contact">
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
