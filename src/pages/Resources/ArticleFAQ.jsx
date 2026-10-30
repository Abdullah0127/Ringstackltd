export default function ArticleFAQ({ faqs }) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <section className="article-faq">
      <h2 className="article-faq-title">Frequently Asked Questions</h2>
      <dl className="article-faq-list">
        {faqs.map(({ question, answer }, index) => (
          <div key={index} className="article-faq-item">
            <dt className="article-faq-question">{question}</dt>
            <dd className="article-faq-answer">{answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
