import { useEffect, useState } from "react";
import Icon from "../../components/ui/Icon";
import RevealOnScroll from "../../components/shared/RevealOnScroll";
import "./EDMNews.css";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80";

const TEAM_IMAGE =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80";

const OFFICE_IMAGE =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80";

const categories = [
  "All",
  "AI & Automation",
  "Lead Generation",
  "Call Center",
  "Marketing",
  "Industry Insights",
];

const articles = [
  {
    id: 1,
    category: "AI & Automation",
    date: "AI & AUTOMATION",
    title: "How AI Voice Agents Are Changing Business Communication",
    excerpt:
      "Explore how conversational AI can help businesses manage routine calls, respond faster, and deliver more consistent customer experiences.",
    image: HERO_IMAGE,
    icon: "phone",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 2,
    category: "Lead Generation",
    date: "LEAD GENERATION",
    title: "Building a Better Lead Journey from First Contact to Conversion",
    excerpt:
      "Learn how a structured lead journey helps teams improve follow-up, reduce missed opportunities, and create a more consistent customer experience.",
    image: OFFICE_IMAGE,
    icon: "target",
    readTime: "5 min read",
  },
  {
    id: 3,
    category: "Call Center",
    date: "CALL CENTER",
    title: "The Role of Automation in Modern Call Center Operations",
    excerpt:
      "Discover practical ways automation can support call routing, routine inquiries, and agent workflows without losing the human touch.",
    image: TEAM_IMAGE,
    icon: "users",
    readTime: "7 min read",
  },
  {
    id: 4,
    category: "Marketing",
    date: "DIGITAL MARKETING",
    title: "Turning Campaign Data into More Informed Marketing Decisions",
    excerpt:
      "Understand how reporting, attribution, and performance insights can help marketing teams identify opportunities and improve campaigns.",
    image: HERO_IMAGE,
    icon: "chart",
    readTime: "4 min read",
  },
  {
    id: 5,
    category: "AI & Automation",
    date: "AI & AUTOMATION",
    title: "Designing More Helpful AI-Powered Customer Conversations",
    excerpt:
      "A useful AI interaction starts with clear goals, relevant information, appropriate escalation, and a natural conversational experience.",
    image: TEAM_IMAGE,
    icon: "database",
    readTime: "6 min read",
  },
  {
    id: 6,
    category: "Industry Insights",
    date: "INDUSTRY INSIGHTS",
    title: "Why Trust and Transparency Matter in Lead Generation",
    excerpt:
      "Explore the role of responsible practices, clear communication, and consistent quality in building stronger long-term business relationships.",
    image: OFFICE_IMAGE,
    icon: "shield",
    readTime: "5 min read",
  },
];

function ArticleIcon({ name }) {
  return (
    <span className="edm-news-card-icon" aria-hidden="true">
      <Icon name={name} size={21} />
    </span>
  );
}

function ArticleCard({ article, index }) {
  return (
    <article className="edm-news-card" style={{ "--article-index": index }}>
      <a
        className="edm-news-card-image"
        href={`/contact?topic=${encodeURIComponent(article.category)}`}
        aria-label={`Discuss ${article.title} with our team`}
      >
        <img src={article.image} alt="" loading="lazy" />

        <span className="edm-news-image-category">{article.category}</span>
      </a>

      <div className="edm-news-card-body">
        <div className="edm-news-card-meta">
          <ArticleIcon name={article.icon} />
          <span>{article.readTime}</span>
        </div>

        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>

        <a
          className="edm-news-read-more"
          href={`/contact?topic=${encodeURIComponent(article.category)}`}
        >
          Discuss this topic
          <Icon name="arrow" size={16} />
        </a>
      </div>
    </article>
  );
}

function EDMNews() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    document.title = "News & Insights | EDM Lead Network";

    let description = document.querySelector('meta[name="description"]');

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content =
      "Explore insights from EDM Lead Network on AI voice agents, lead generation, call center technology, digital marketing, and customer communication.";
  }, []);

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  const featuredArticle = articles[0];

  return (
    <main className="edm-news-page">
      {/* Hero */}
      <section className="edm-news-hero">
        <div className="edm-news-hero-decoration" aria-hidden="true" />

        <div className="wrap edm-news-hero-grid">
          <div className="edm-news-hero-copy">
            <span className="eyebrow">THE EDM LEAD NETWORK JOURNAL</span>

            <h1>
              Ideas, Insights &amp; <em>Industry News.</em>
            </h1>

            <p>
              Explore the ideas and technologies shaping modern customer
              communication, AI-powered conversations, lead generation, and
              digital marketing.
            </p>

            <a className="button" href="#latest-insights">
              EXPLORE LATEST INSIGHTS
              <Icon name="arrow" size={17} />
            </a>

            <div className="edm-news-hero-points">
              <span>
                <Icon name="chart" size={17} />
                Industry insights
              </span>

              <span>
                <Icon name="phone" size={17} />
                AI &amp; technology
              </span>

              <span>
                <Icon name="target" size={17} />
                Growth strategies
              </span>
            </div>
          </div>

          <div className="edm-news-hero-visual">
            <img
              src={HERO_IMAGE}
              alt="Business analytics dashboard and digital performance reporting"
              fetchPriority="high"
            />

            <div className="edm-news-hero-image-label">
              <span className="edm-news-live-dot" />

              <div>
                <strong>Insights for what's next</strong>
                <span>Technology · Performance · Growth</span>
              </div>
            </div>

            <div className="edm-news-hero-side-label">
              <Icon name="chart" size={20} />
              <span>Smarter decisions start with insight.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Topic navigation */}
      <section className="edm-news-topics">
        <div className="wrap">
          <div className="edm-news-topics-heading">
            <span className="eyebrow green">EXPLORE BY TOPIC</span>
            <h2>What interests you?</h2>
          </div>

          <div className="edm-news-topic-list">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "edm-news-topic active"
                    : "edm-news-topic"
                }
                onClick={() => {
                  setActiveCategory(category);
                  document.getElementById("latest-insights")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                aria-pressed={activeCategory === category}
              >
                {category === "All" && <Icon name="layers" size={16} />}

                {category === "AI & Automation" && (
                  <Icon name="database" size={16} />
                )}

                {category === "Lead Generation" && (
                  <Icon name="target" size={16} />
                )}

                {category === "Call Center" && <Icon name="phone" size={16} />}

                {category === "Marketing" && <Icon name="chart" size={16} />}

                {category === "Industry Insights" && (
                  <Icon name="building" size={16} />
                )}

                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured story */}
      {activeCategory === "All" && (
        <RevealOnScroll>
          <section className="edm-news-featured-section">
            <div className="wrap">
              <div className="edm-news-section-heading">
                <div>
                  <span className="eyebrow green">EDITOR'S SPOTLIGHT</span>

                  <h2>Featured Insight</h2>
                </div>

                <span className="edm-news-section-number">01 / FEATURED</span>
              </div>

              <article className="edm-news-featured">
                <div className="edm-news-featured-image">
                  <img
                    src={featuredArticle.image}
                    alt="Analytics dashboard representing AI and business technology"
                    loading="lazy"
                  />

                  <span className="edm-news-featured-image-tag">FEATURED</span>
                </div>

                <div className="edm-news-featured-content">
                  <div className="edm-news-featured-meta">
                    <ArticleIcon name={featuredArticle.icon} />
                    <span>{featuredArticle.category}</span>
                    <span className="edm-news-meta-divider" />
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  <h3>{featuredArticle.title}</h3>

                  <p>{featuredArticle.excerpt}</p>

                  <div className="edm-news-featured-note">
                    <Icon name="check" size={18} />
                    <span>
                      Practical perspectives on technology and customer
                      communication.
                    </span>
                  </div>

                  <a className="button" href="/contact">
                    TALK TO OUR TEAM
                    <Icon name="arrow" size={17} />
                  </a>
                </div>
              </article>
            </div>
          </section>
        </RevealOnScroll>
      )}

      {/* Article grid */}
      <section className="edm-news-articles-section" id="latest-insights">
        <div className="wrap">
          <div className="edm-news-section-heading">
            <div>
              <span className="eyebrow green">
                KNOWLEDGE THAT MOVES BUSINESS FORWARD
              </span>

              <h2>
                {activeCategory === "All" ? "Latest Insights" : activeCategory}
              </h2>

              <p>
                Thoughtful perspectives on the tools, strategies, and trends
                shaping today's business landscape.
              </p>
            </div>

            <span className="edm-news-result-count">
              {filteredArticles.length}{" "}
              {filteredArticles.length === 1 ? "ARTICLE" : "ARTICLES"}
            </span>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="edm-news-grid">
              {filteredArticles
                .filter(
                  (article) => activeCategory !== "All" || !article.featured,
                )
                .map((article, index) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    index={index}
                  />
                ))}
            </div>
          ) : (
            <div className="edm-news-empty">
              <Icon name="database" size={30} />
              <h3>No articles found</h3>
              <p>Choose another topic to explore more insights.</p>

              <button
                type="button"
                className="button"
                onClick={() => setActiveCategory("All")}
              >
                VIEW ALL TOPICS
              </button>
            </div>
          )}
        </div>
      </section>

      {/* About our perspective */}
      <RevealOnScroll>
        <section className="edm-news-perspective">
          <div className="wrap edm-news-perspective-grid">
            <div className="edm-news-perspective-image">
              <img
                src={TEAM_IMAGE}
                alt="Professionals collaborating on business strategy"
                loading="lazy"
              />

              <div className="edm-news-perspective-image-label">
                <Icon name="users" size={21} />
                <span>People, ideas, and technology.</span>
              </div>
            </div>

            <div className="edm-news-perspective-copy">
              <span className="eyebrow green">OUR PERSPECTIVE</span>

              <h2>Technology matters most when it solves real problems.</h2>

              <p>
                New tools are only part of the story. Successful businesses also
                need thoughtful strategy, clear communication, reliable
                processes, and a genuine understanding of their customers.
              </p>

              <p>
                Our editorial focus explores how businesses can evaluate
                emerging technologies, improve customer interactions, and make
                more informed decisions as the industry evolves.
              </p>

              <a className="edm-news-text-link" href="/about-us">
                GET TO KNOW EDM LEAD NETWORK
                <Icon name="arrow" size={17} />
              </a>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Topics we cover */}
      <section className="edm-news-pillars">
        <div className="wrap">
          <div className="edm-news-section-heading centered">
            <div>
              <span className="eyebrow green">WHAT WE COVER</span>

              <h2>Insights for a Changing Industry</h2>

              <p>
                Explore the ideas that connect customer experience, marketing
                performance, and business growth.
              </p>
            </div>
          </div>

          <div className="edm-news-pillars-grid">
            <article>
              <span>
                <Icon name="phone" size={25} />
              </span>
              <h3>Conversational Technology</h3>
              <p>
                Explore voice technology, customer conversations, automation,
                and practical AI applications.
              </p>
            </article>

            <article>
              <span>
                <Icon name="target" size={25} />
              </span>
              <h3>Lead Generation</h3>
              <p>
                Learn about lead journeys, engagement, qualification, and
                conversion-focused strategies.
              </p>
            </article>

            <article>
              <span>
                <Icon name="chart" size={25} />
              </span>
              <h3>Performance Marketing</h3>
              <p>
                Understand campaign measurement, reporting, attribution, and
                informed optimization.
              </p>
            </article>

            <article>
              <span>
                <Icon name="shield" size={25} />
              </span>
              <h3>Trust &amp; Quality</h3>
              <p>
                Consider responsible communication, transparency, and dependable
                customer experiences.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="edm-news-cta">
        <div className="edm-news-cta-decoration" aria-hidden="true" />

        <div className="wrap edm-news-cta-content">
          <span className="eyebrow">LET'S START A CONVERSATION</span>

          <h2>Looking for smarter ways to connect with customers?</h2>

          <p>
            Talk with EDM Lead Network about your goals, your communication
            challenges, and the solutions that may fit your business.
          </p>

          <div className="edm-news-cta-actions">
            <a className="button button-light" href="/contact">
              CONTACT OUR TEAM
              <Icon name="arrow" size={17} />
            </a>

            <a className="edm-news-cta-secondary" href="/about-us">
              LEARN ABOUT EDM
              <Icon name="arrow" size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EDMNews;
